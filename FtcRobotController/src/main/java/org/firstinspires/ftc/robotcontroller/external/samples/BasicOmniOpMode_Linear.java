package org.firstinspires.ftc.robotcontroller.external.samples;

import com.qualcomm.robotcore.eventloop.opmode.Disabled;
import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;

@TeleOp(name = "Mecanum Drive (Sample)", group = "Sample")
@Disabled
public class BasicOmniOpMode_Linear extends LinearOpMode {

    private DcMotor frontLeftDrive  = null;
    private DcMotor frontRightDrive = null;
    private DcMotor backLeftDrive   = null;
    private DcMotor backRightDrive  = null;

    @Override
    public void runOpMode() {
        frontLeftDrive  = hardwareMap.get(DcMotor.class, "front_left_drive");
        frontRightDrive = hardwareMap.get(DcMotor.class, "front_right_drive");
        backLeftDrive   = hardwareMap.get(DcMotor.class, "back_left_drive");
        backRightDrive  = hardwareMap.get(DcMotor.class, "back_right_drive");

        frontLeftDrive.setDirection(DcMotor.Direction.REVERSE);
        backLeftDrive.setDirection(DcMotor.Direction.REVERSE);

        telemetry.addData("Status", "Initialized");
        telemetry.update();

        waitForStart();

        while (opModeIsActive()) {
            double y = -gamepad1.left_stick_y;
            double x = gamepad1.left_stick_x;
            double rotation = gamepad1.right_stick_x;

            double max = Math.max(
                    Math.abs(y) + Math.abs(x) + Math.abs(rotation), 1.0);

            frontLeftDrive.setPower((y + x + rotation) / max);
            frontRightDrive.setPower((y - x - rotation) / max);
            backLeftDrive.setPower((y - x + rotation) / max);
            backRightDrive.setPower((y + x - rotation) / max);

            telemetry.addData("Front Left", "%.2f", frontLeftDrive.getPower());
            telemetry.addData("Front Right", "%.2f", frontRightDrive.getPower());
            telemetry.addData("Back Left", "%.2f", backLeftDrive.getPower());
            telemetry.addData("Back Right", "%.2f", backRightDrive.getPower());
            telemetry.update();
        }
    }
}
