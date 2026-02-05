@echo off
cd /d "c:\Users\almad\OneDrive\Desktop\24BCY70005-2B-Madani-Hamdi"
color 0A
cls
echo.
echo ============================================
echo   STORE HUB - Clothes & Electronics
echo ============================================
echo.
echo Store running at: http://localhost:3000
echo.
echo Keep this window open!
echo Press Ctrl+C to stop
echo.
echo ============================================
echo.

:start
npm run start
echo.
echo Server restarting...
timeout /t 2 /nobreak
goto start

