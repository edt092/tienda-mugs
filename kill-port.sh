#!/bin/bash

# Script to kill process on port 3000
# Usage: ./kill-port.sh

PORT=3000

echo "Finding process on port $PORT..."

# Find PID
PID=$(netstat -ano | grep ":$PORT" | awk '{print $5}' | head -n 1)

if [ -z "$PID" ]; then
  echo "No process found on port $PORT"
  exit 0
fi

echo "Found process with PID: $PID"
echo "Killing process..."

# Kill using PowerShell (works in Git Bash on Windows)
powershell.exe -Command "Stop-Process -Id $PID -Force"

if [ $? -eq 0 ]; then
  echo "✓ Process killed successfully"
  echo "You can now run: npm run dev"
else
  echo "✗ Failed to kill process"
  echo "Try manually: Task Manager → Find PID $PID → End Task"
fi
