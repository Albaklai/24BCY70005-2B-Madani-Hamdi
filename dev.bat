@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

REM Add Node.js to PATH
set "PATH=%PATH%;C:\Program Files\nodejs;%APPDATA%\npm"

echo.
echo Starting Store with Hot Reloading...
echo.
npm run dev
pause
