@echo off
set /p description="Description [commit]: "
git add -A
git commit -m "%description%"
git push
pause