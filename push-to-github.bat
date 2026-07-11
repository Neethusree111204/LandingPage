@echo off
echo ==============================================
echo   Pushing Aurelia site to GitHub
echo ==============================================
echo.

REM Step 1: Make sure this folder is a git repo
if not exist ".git" (
    echo Initializing git repo...
    git init
)

REM Step 2: Set the remote to the correct repo (removes old one first, ignore errors if none exists)
git remote remove origin 2>nul
git remote add origin https://github.com/Neethusree111204/LandingPage.git

REM Step 3: Stage all files
echo.
echo Staging files...
git add .

REM Step 4: Commit
echo.
echo Committing...
git commit -m "Update site"

REM Step 5: Make sure branch is named main
git branch -M main

REM Step 6: Push (force, so it overwrites whatever is currently on GitHub with what's on this disk)
echo.
echo Pushing to GitHub (this may open a browser window asking you to sign in - approve it)...
git push -u origin main --force

echo.
echo ==============================================
echo   Done. Check https://github.com/Neethusree111204/LandingPage
echo ==============================================
pause
