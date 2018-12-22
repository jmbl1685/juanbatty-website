@echo off
npm run build && echo F| xcopy now.json .\build\now.json && cd build && now && now alias
pause