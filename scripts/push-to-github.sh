#!/usr/bin/env bash
set -e
git init
git add .
git commit -m "Initial CloudCost Compass MVP project setup"
git branch -M main
echo "Now run:"
echo "git remote add origin https://github.com/YOUR_USERNAME/cloudcost-compass.git"
echo "git push -u origin main"
