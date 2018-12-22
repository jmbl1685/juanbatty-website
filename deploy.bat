@echo off
set /p description="Description [commit]: "
git add -A
git commit -m "%description%"
git push
npm run build &&  echo F| xcopy now.json .\build\now.json && cd build && now && now alias
cd ..
pause