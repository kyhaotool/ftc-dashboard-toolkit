package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.util.ElapsedTime;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@TeleOp(name = "Data Logger", group = "TeleOp")
public class DataLogger extends LinearOpMode {

    private DcMotor frontLeft;
    private DcMotor frontRight;
    private DcMotor backLeft;
    private DcMotor backRight;

    private ElapsedTime timer = new ElapsedTime();
    private PrintWriter csvWriter;

    @Override
    public void runOpMode() {
        // Init motors
        frontLeft = hardwareMap.get(DcMotor.class, "frontLeft");
        frontRight = hardwareMap.get(DcMotor.class, "frontRight");
        backLeft = hardwareMap.get(DcMotor.class, "backLeft");
        backRight = hardwareMap.get(DcMotor.class, "backRight");

        // Create CSV file
        setupCSV();

        telemetry.addData("Status", "Ready - Data will log to CSV");
        telemetry.update();

        waitForStart();
        timer.reset();

        while (opModeIsActive()) {
            // Get inputs
            double y = -gamepad1.left_stick_y;
            double x = gamepad1.left_stick_x;
            double rotation = gamepad1.right_stick_x;

            // X-Drive mixing
            double max = Math.max(
                    Math.abs(y) + Math.abs(x) + Math.abs(rotation), 1.0);

            double fl = (y + x + rotation) / max;
            double fr = (y - x - rotation) / max;
            double bl = (y - x + rotation) / max;
            double br = (y + x - rotation) / max;

            // Set power
            frontLeft.setPower(fl);
            frontRight.setPower(fr);
            backLeft.setPower(bl);
            backRight.setPower(br);

            // Log to CSV
            writeToCSV(
                timer.seconds(),
                y, x, rotation,
                fl, fr, bl, br,
                frontLeft.getCurrentPosition(),
                frontRight.getCurrentPosition(),
                backLeft.getCurrentPosition(),
                backRight.getCurrentPosition()
            );

            telemetry.addData("Time", "%.2f", timer.seconds());
            telemetry.addData("Logging...", "CSV");
            telemetry.update();
        }

        closeCSV();
    }

    private void setupCSV() {
        try {
            File dir = new File("/sdcard/FIRST/FTC_DATALOG");
            if (!dir.exists()) {
                dir.mkdirs();
            }

            String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss",
                    Locale.getDefault()).format(new Date());
            File file = new File(dir, "DriveLog_" + timestamp + ".csv");

            csvWriter = new PrintWriter(new FileWriter(file, true));
            csvWriter.println("Time,Y_Input,X_Input,Rotation_Input," +
                    "FL_Power,FR_Power,BL_Power,BR_Power," +
                    "FL_Pos,FR_Pos,BL_Pos,BR_Pos");
            csvWriter.flush();

            telemetry.addData("File", file.getAbsolutePath());
        } catch (IOException e) {
            telemetry.addData("ERROR", e.getMessage());
        }
    }

    private void writeToCSV(double time, double y, double x, double rot,
                             double fl, double fr, double bl, double br,
                             int flPos, int frPos, int blPos, int brPos) {
        if (csvWriter != null) {
            csvWriter.printf(Locale.US,
                    "%.3f,%.3f,%.3f,%.3f,%.3f,%.3f,%.3f,%.3f,%d,%d,%d,%d\n",
                    time, y, x, rot, fl, fr, bl, br,
                    flPos, frPos, blPos, brPos);
            csvWriter.flush();
        }
    }

    private void closeCSV() {
        if (csvWriter != null) {
            csvWriter.close();
            csvWriter = null;
        }
    }
}
