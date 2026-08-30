@echo off
echo ========================================
echo   FTC Dashboard Toolkit - Open Dashboard
echo ========================================
echo.

:: Check if adb is available
where adb >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] ADB not found. Please install Android SDK Platform Tools.
    echo     Download: https://developer.android.com/studio/releases/platform-tools
    echo.
    pause
    exit /b 1
)

:: Check for connected devices
echo [*] Checking for connected devices...
for /f "tokens=1" %%a in ('adb devices ^| findstr /r "device$"') do (
    set DEVICE=%%a
)

if not defined DEVICE (
    echo [!] No device connected.
    echo.
    echo Please connect your Control Hub via USB or WiFi.
    echo For WiFi connection:
    echo   1. Connect to FTC-xxxxxx WiFi
    echo   2. Run: adb connect 192.168.43.1:5555
    echo.
    set /p IP="Enter robot IP (or press Enter for 192.168.43.1): "
    if "!IP!"=="" set IP=192.168.43.1
    echo.
    echo [*] Connecting to !IP!:5555...
    adb connect !IP!:5555
    if %errorlevel% neq 0 (
        echo [!] Failed to connect. Please check:
        echo     - Robot is powered on
        echo     - WiFi is connected
        echo     - IP address is correct
        pause
        exit /b 1
    )
)

echo [+] Device connected!
echo.

:: Set robot IP
set ROBOT_IP=192.168.43.1
if defined DEVICE set ROBOT_IP=%DEVICE:~0,-6%

echo ========================================
echo   Dashboard URLs:
echo ========================================
echo.
echo   Main Dashboard:
echo   http://%ROBOT_IP%:8080/dash
echo.
echo   Flywheel Calculator:
echo   http://%ROBOT_IP%:8080/dash/flywheel.html
echo.
echo   Data Logger:
echo   http://%ROBOT_IP%:8080/dash/datalog.html
echo.
echo   PID Auto-Tuner:
echo   http://%ROBOT_IP%:8080/dash/autotune.html
echo.
echo ========================================
echo.

:: Ask to open in browser
set /p OPEN="Open Dashboard in browser? (Y/n): "
if /i "!OPEN!"=="n" goto :end

:: Open in default browser
echo [*] Opening Dashboard...
start http://%ROBOT_IP%:8080/dash

:end
echo.
echo Done!
pause