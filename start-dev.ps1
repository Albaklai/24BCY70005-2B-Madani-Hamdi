# Start the development server and open Firefox
$env:Path += ";C:\Program Files\nodejs;$env:APPDATA\npm"

# Start the dev server in the background
Write-Host "🚀 Starting development server..."
$devProcess = Start-Process -FilePath "pnpm" -ArgumentList "dev" -PassThru -WindowStyle Minimized

# Wait a bit for the server to start
Start-Sleep -Seconds 3

# Open Firefox
Write-Host "🌐 Opening Firefox..."
$firefoxPath = "C:\Program Files\Mozilla Firefox\firefox.exe"
if (Test-Path $firefoxPath) {
    Start-Process $firefoxPath "http://localhost:3000"
} else {
    # Fallback if Firefox path is different
    Start-Process "firefox" "http://localhost:3000"
}

Write-Host "✅ Development server is running on http://localhost:3000"
Write-Host "🔴 Press Ctrl+C to stop the server"

# Keep the script running
$devProcess | Wait-Process
