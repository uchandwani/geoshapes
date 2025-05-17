#!/bin/bash

echo "📦 Syncing geoshapes-dev → geoshapes-prod/dev ..."

# Paths
SRC=~/Projects/geoshapes-dev/
DEST=~/Projects/geoshapes-prod/dev/

# Rsync with exclusion rules
rsync -av --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='*.deb' \
  --exclude='.DS_Store' \
  "$SRC" "$DEST"

echo "✅ Sync complete."

# Move to repo root
cd ~/Projects/geoshapes-prod || exit

# Git status
echo "🔍 Checking git status..."
git status

# Prompt for commit message
echo
read -p "📝 Enter commit message: " msg

# Commit and push
git add dev/
git commit -m "$msg"
git push origin main

echo "🚀 Pushed to GitHub successfully!"
