package HRC.Config

import android.content.Context
import android.content.SharedPreferences
import com.acmerobotics.dashboard.config.Config
import com.google.gson.Gson
import com.google.gson.JsonObject

/**
 * Manages saving/loading config from Dashboard.
 * Receives config via WebSocket and saves to SharedPreferences.
 */
@Config
object ConfigManager {
    private const val PREFS_NAME = "hrc_dashboard_config"
    private const val KEY_FLYWHEEL = "flywheel_config"
    private const val KEY_DRIVETRAIN = "drivetrain_config"
    
    private var context: Context? = null
    private val gson = Gson()
    
    /**
     * Initialize with Android context
     */
    fun init(context: Context) {
        this.context = context
        loadAllConfigs()
    }
    
    /**
     * Get SharedPreferences
     */
    private fun getPrefs(): SharedPreferences? {
        return context?.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    }
    
    /**
     * Save config to SharedPreferences
     */
    fun saveConfig(category: String, config: Map<String, Any>) {
        val prefs = getPrefs() ?: return
        val json = gson.toJson(config)
        prefs.edit().putString(category, json).apply()
        
        // Apply config to runtime objects
        applyConfig(category, config)
    }
    
    /**
     * Load config from SharedPreferences
     */
    fun loadConfig(category: String): Map<String, Any>? {
        val prefs = getPrefs() ?: return null
        val json = prefs.getString(category, null) ?: return null
        return gson.fromJson(json, Map::class.java) as? Map<String, Any>
    }
    
    /**
     * Load all configs on startup
     */
    fun loadAllConfigs() {
        loadConfig(KEY_FLYWHEEL)?.let { applyConfig(KEY_FLYWHEEL, it) }
        loadConfig(KEY_DRIVETRAIN)?.let { applyConfig(KEY_DRIVETRAIN, it) }
    }
    
    /**
     * Apply config to runtime config objects
     */
    private fun applyConfig(category: String, config: Map<String, Any>) {
        when (category) {
            KEY_FLYWHEEL -> applyFlywheelConfig(config)
            KEY_DRIVETRAIN -> applyDrivetrainConfig(config)
        }
    }
    
    /**
     * Apply flywheel config
     */
    private fun applyFlywheelConfig(config: Map<String, Any>) {
        // Apply to FlywheelConfig if it exists
        // Example: config["DEFAULT_RPM"]?.let { FlywheelConfig.DEFAULT_RPM = toDouble(it) }
    }
    
    /**
     * Apply drivetrain config
     */
    private fun applyDrivetrainConfig(config: Map<String, Any>) {
        // Apply to DrivetrainConfig if it exists
    }
    
    /**
     * Handle WebSocket message from Dashboard
     */
    fun handleDashboardMessage(message: String) {
        try {
            val json = gson.fromJson(message, JsonObject::class.java)
            val category = json.get("category")?.asString ?: return
            val data = json.get("data")?.asJsonObject ?: return
            
            val configMap = mutableMapOf<String, Any>()
            data.entrySet().forEach { (key, value) ->
                when {
                    value.isJsonPrimitive -> {
                        val prim = value.asJsonPrimitive
                        when {
                            prim.isNumber -> configMap[key] = prim.asDouble
                            prim.isBoolean -> configMap[key] = prim.asBoolean
                            else -> configMap[key] = prim.asString
                        }
                    }
                }
            }
            
            saveConfig(category, configMap)
            
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
    
    /**
     * Export all configs as JSON
     */
    fun exportAllConfigs(): String {
        val allConfigs = mapOf(
            "flywheel" to loadConfig(KEY_FLYWHEEL),
            "drivetrain" to loadConfig(KEY_DRIVETRAIN)
        )
        return gson.toJson(allConfigs)
    }
    
    /**
     * Import config from JSON
     */
    fun importConfigs(json: String) {
        try {
            val configs = gson.fromJson(json, Map::class.java) as? Map<String, Any> ?: return
            configs.forEach { (category, config) ->
                @Suppress("UNCHECKED_CAST")
                saveConfig(category, config as? Map<String, Any> ?: return@forEach)
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
    
    private fun toDouble(value: Any): Double = when (value) {
        is Number -> value.toDouble()
        is String -> value.toDoubleOrNull() ?: 0.0
        is Boolean -> if (value) 1.0 else 0.0
        else -> 0.0
    }
    
    private fun toBoolean(value: Any): Boolean = when (value) {
        is Boolean -> value
        is Number -> value.toDouble() != 0.0
        is String -> value.equals("true", ignoreCase = true)
        else -> false
    }
}