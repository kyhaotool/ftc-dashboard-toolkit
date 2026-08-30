# FTC Data Pull Script
# Tải dữ liệu từ Control Hub về máy tính

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  FTC Data Pull Tool" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Kết nối Control Hub
Write-Host "Connecting to Control Hub..." -ForegroundColor Yellow
$connectResult = & "C:\Users\kyhao\AppData\Local\Android\Sdk\platform-tools\adb.exe" connect 192.168.43.1:5555 2>&1
Write-Host $connectResult

# Tạo thư mục lưu
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$saveDir = "C:\Users\kyhao\Downloads\FTC_Logs\$timestamp"
New-Item -ItemType Directory -Path $saveDir -Force | Out-Null

Write-Host "`nSaving to: $saveDir" -ForegroundColor Green

# Tải robot controller log
Write-Host "`nDownloading robotControllerLog.txt..." -ForegroundColor Yellow
& "C:\Users\kyhao\AppData\Local\Android\Sdk\platform-tools\adb.exe" pull /sdcard/FIRST/robotControllerLog.txt "$saveDir\" 2>&1

# Tải tất cả CSV logs
Write-Host "Downloading CSV logs..." -ForegroundColor Yellow
& "C:\Users\kyhao\AppData\Local\Android\Sdk\platform-tools\adb.exe" pull /sdcard/FIRST/FTC_DATALOG/ "$saveDir\CSV_Logs\" 2>&1

Write-Host "`nDone! Files saved to:" -ForegroundColor Green
Write-Host $saveDir

# Mở thư mục
explorer.exe $saveDir
