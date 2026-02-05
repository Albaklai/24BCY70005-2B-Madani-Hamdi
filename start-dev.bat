@echo off
REM Add Node.js to PATH
set PATH=C:\Program Files\nodejs;%APPDATA%\npm;%PATH%

REM Start the development server with auto-open
echo 🚀 Starting development server...
pnpm dev --open

pause
