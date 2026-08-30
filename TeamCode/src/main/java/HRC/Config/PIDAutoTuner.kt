package HRC.Config

import com.acmerobotics.dashboard.config.Config
import com.qualcomm.robotcore.util.ElapsedTime
import com.qualcomm.robotcore.util.Range
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.sign

/**
 * PID Auto-Tuner for Flywheel
 * 
 * Uses Ziegler-Nichols relay method and step response analysis
 * to automatically tune PIDF parameters.
 * 
 * Features:
 * - Relay-based ultimate gain finding
 * - Step response analysis
 * - Feedforward (kV) identification
 * - Automatic safety limits
 */
@Config
object PIDAutoTuner {
    
    // Tuning state
    enum class TuningState {
        IDLE,
        RELAY_TEST,
        STEP_RESPONSE,
        FF_TEST,
        COMPLETE,
        ERROR
    }
    
    @JvmField var state = TuningState.IDLE
    @JvmField var statusMessage = "Ready to tune"
    
    // Test parameters
    @JvmField var TEST_TARGET_RPM = 1500.0
    @JvmField var RELAY_AMPLITUDE = 0.3
    @JvmField var RELAY_CYCLES = 5
    @JvmField var SETTLE_TIME_MS = 500L
    @JvmField var STEP_TARGETS = doubleArrayOf(500.0, 1000.0, 1500.0, 2000.0)
    
    // Results
    @JvmField var result_kP = 0.0
    @JvmField var result_kI = 0.0
    @JvmField var result_kD = 0.0
    @JvmField var result_kS = 0.0
    @JvmField var result_kV = 0.0
    @JvmField var result_kA = 0.0
    
    // Analysis data
    @JvmField var ultimateGain = 0.0
    @JvmField var ultimatePeriod = 0.0
    @JvmField var stepResponseData = mutableListOf<DoubleArray>()
    @JvmField var currentStepIndex = 0
    
    // Timing
    private val timer = ElapsedTime()
    private var testStartTime = 0.0
    
    // Data collection
    @JvmField var collectedData = mutableListOf<DoubleArray>()
    
    // Safety limits
    @JvmField var MAX_OUTPUT = 1.0
    @JvmField var MIN_RPM = 100.0
    @JvmField var MAX_RPM = 3000.0
    
    /**
     * Start the auto-tuning process
     */
    fun startTuning(targetRpm: Double = TEST_TARGET_RPM) {
        state = TuningState.RELAY_TEST
        statusMessage = "Starting relay test..."
        TEST_TARGET_RPM = Range.clip(targetRpm, MIN_RPM, MAX_RPM)
        collectedData.clear()
        stepResponseData.clear()
        currentStepIndex = 0
        testStartTime = System.currentTimeMillis()
        timer.reset()
    }
    
    /**
     * Main update loop - call from OpMode
     * @param currentVelocity Current motor velocity (ticks/sec or RPM)
     * @return Output power to apply to motor
     */
    fun update(currentVelocity: Double): Double {
        return when (state) {
            TuningState.RELAY_TEST -> runRelayTest(currentVelocity)
            TuningState.STEP_RESPONSE -> runStepResponse(currentVelocity)
            TuningState.FF_TEST -> runFFTest(currentVelocity)
            else -> 0.0
        }
    }
    
    /**
     * Relay test to find ultimate gain (Ku) and period (Tu)
     * Uses relay method: oscillate around setpoint with fixed amplitude
     */
    private fun runRelayTest(currentVelocity: Double): Double {
        val elapsed = timer.seconds()
        val error = TEST_TARGET_RPM - currentVelocity
        
        // Relay controller - simple on/off with hysteresis
        val output = if (error > 0) RELAY_AMPLITUDE else -RELAY_AMPLITUDE
        
        // Collect data for analysis
        collectedData.add(doubleArrayOf(elapsed, currentVelocity, TEST_TARGET_RPM, output))
        
        // Detect oscillation peaks
        if (collectedData.size > 10) {
            val recentData = collectedData.takeLast(20)
            val velocities = recentData.map { it[1] }
            
            // Check for consistent oscillation
            val maxVel = velocities.maxOrNull() ?: 0.0
            val minVel = velocities.minOrNull() ?: 0.0
            val amplitude = (maxVel - minVel) / 2.0
            
            // Count zero crossings
            var crossings = 0
            for (i in 1 until velocities.size) {
                val prevError = TEST_TARGET_RPM - velocities[i-1]
                val currError = TEST_TARGET_RPM - velocities[i]
                if (prevError * currError < 0) crossings++
            }
            
            // If we have enough oscillations
            if (crossings >= RELAY_CYCLES * 2) {
                // Calculate ultimate gain: Ku = 4 * d / (π * a)
                // d = relay amplitude, a = oscillation amplitude
                ultimateGain = 4.0 * RELAY_AMPLITUDE / (Math.PI * amplitude)
                
                // Calculate ultimate period from peak-to-peak time
                var peakTimes = mutableListOf<Double>()
                for (i in 2 until velocities.size) {
                    if (velocities[i] > velocities[i-1] && velocities[i] > velocities[i+1]) {
                        peakTimes.add(collectedData[collectedData.size - velocities.size + i][0])
                    }
                }
                
                if (peakTimes.size >= 2) {
                    ultimatePeriod = (peakTimes.last() - peakTimes.first()) / (peakTimes.size - 1) * 2.0
                } else {
                    ultimatePeriod = 0.5 // Default if can't detect
                }
                
                // Apply Ziegler-Nichols tuning rules
                calculatePIDFromZieglerNichols()
                
                state = TuningState.STEP_RESPONSE
                currentStepIndex = 0
                collectedData.clear()
                statusMessage = "Relay test complete. Starting step response..."
                timer.reset()
            }
        }
        
        // Timeout check
        if (elapsed > 30.0) {
            // Use default tuning if relay test fails
            calculateDefaultPID()
            state = TuningState.STEP_RESPONSE
            currentStepIndex = 0
            collectedData.clear()
            statusMessage = "Relay test timeout. Using defaults..."
            timer.reset()
        }
        
        return Range.clip(output, -MAX_OUTPUT, MAX_OUTPUT)
    }
    
    /**
     * Step response test to refine PID and identify feedforward
     */
    private fun runStepResponse(currentVelocity: Double): Double {
        val elapsed = timer.seconds()
        val target = STEP_TARGETS[currentStepIndex]
        
        // Simple P controller for step response
        val error = target - currentVelocity
        val kp = 0.002 // Conservative P for step test
        val output = Range.clip(kp * error, 0.0, MAX_OUTPUT)
        
        // Collect data
        collectedData.add(doubleArrayOf(elapsed, currentVelocity, target, output))
        
        // Check if settled
        val settled = abs(error) < target * 0.05 && elapsed > 2.0
        
        if (settled || elapsed > 5.0) {
            // Calculate steady-state FF: kV = output / velocity
            if (currentVelocity > 100) {
                result_kV = output / currentVelocity
            }
            
            stepResponseData.add(doubleArrayOf(target, currentVelocity, output))
            
            currentStepIndex++
            collectedData.clear()
            timer.reset()
            
            if (currentStepIndex >= STEP_TARGETS.size) {
                // All steps complete - calculate final FF
                if (stepResponseData.isNotEmpty()) {
                    // Linear regression for kV
                    val avgKv = stepResponseData.map { 
                        if (it[1] > 100) it[2] / it[1] else 0.0 
                    }.filter { it > 0 }.average()
                    
                    if (avgKv > 0) result_kV = avgKv
                    
                    // kS = output at very low velocity
                    result_kS = stepResponseData.first().let {
                        if (it[1] < 200) it[2] else 0.05
                    }
                }
                
                state = TuningState.COMPLETE
                statusMessage = "Tuning complete! Apply results?"
            }
        }
        
        return output
    }
    
    /**
     * Feedforward test at different velocities
     */
    private fun runFFTest(currentVelocity: Double): Double {
        // Placeholder for advanced FF characterization
        state = TuningState.COMPLETE
        return 0.0
    }
    
    /**
     * Calculate PID using Ziegler-Nichols tuning rules
     */
    private fun calculatePIDFromZieglerNichols() {
        if (ultimateGain <= 0 || ultimatePeriod <= 0) {
            calculateDefaultPID()
            return
        }
        
        val Ku = ultimateGain
        val Tu = ultimatePeriod
        
        // Ziegler-Nichols PID rules
        result_kP = 0.6 * Ku
        result_kI = 2.0 * result_kP / Tu
        result_kD = result_kP * Tu / 8.0
        
        // Safety limits
        result_kP = Range.clip(result_kP, 0.0001, 0.1)
        result_kI = Range.clip(result_kI, 0.0, 0.05)
        result_kD = Range.clip(result_kD, 0.0, 0.001)
        
        statusMessage = String.format(
            "Z-N: Ku=%.4f Tu=%.3f | P=%.5f I=%.5f D=%.6f",
            Ku, Tu, result_kP, result_kI, result_kD
        )
    }
    
    /**
     * Default PID values if tuning fails
     */
    private fun calculateDefaultPID() {
        result_kP = 0.001
        result_kI = 0.0
        result_kD = 0.00001
        result_kV = 0.000425
        result_kS = 0.05
        result_kA = 0.0
    }
    
    /**
     * Get current tuning results as a map
     */
    fun getResults(): Map<String, Any> {
        return mapOf(
            "PIDF_P" to result_kP,
            "PIDF_I" to result_kI,
            "PIDF_D" to result_kD,
            "FF_KS" to result_kS,
            "FF_KV" to result_kV,
            "FF_KA" to result_kA,
            "ultimateGain" to ultimateGain,
            "ultimatePeriod" to ultimatePeriod,
            "state" to state.name,
            "status" to statusMessage
        )
    }
    
    /**
     * Get collected data for charting
     */
    fun getDataForChart(): List<DoubleArray> {
        return collectedData.toList()
    }
    
    /**
     * Reset tuner
     */
    fun reset() {
        state = TuningState.IDLE
        statusMessage = "Ready to tune"
        collectedData.clear()
        stepResponseData.clear()
        currentStepIndex = 0
        timer.reset()
    }
    
    /**
     * Apply results to ConfigManager
     */
    fun applyResults() {
        val config = mapOf(
            "PIDF_P" to result_kP,
            "PIDF_I" to result_kI,
            "PIDF_D" to result_kD,
            "FF_KS" to result_kS,
            "FF_KV" to result_kV,
            "FF_KA" to result_kA
        )
        ConfigManager.saveConfig("flywheel", config)
        statusMessage = "Results applied and saved!"
    }
}