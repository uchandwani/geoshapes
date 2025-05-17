#!/bin/bash

# Set source and destination paths
SRC="$HOME/Projects/geoshapes-dev/"
DEST="$HOME/Projects/geoshapes-prod/dev/"

# Step 1: Sync updated files to dev folder inside geoshapes-prod
echo "🔁 Syncing from $SRC to $DEST..."
rsync -av --delete "$SRC" "$DEST"

# Step 2: Navigate to geoshapes-prod
cd "$HOME/Projects/geoshapes-prod" || exit 1

# Step 3: Stage and commit only dev folder
echo "📦 Staging changes..."
git add dev/

# Step 4: Commit with timestamp
COMMIT_MSG="Dev push on $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

# Step 5: Push to GitHub Pages (gh-pages branch)
echo "🚀 Pushing to GitHub..."
git push origin gh-pages

echo "✅ Done: Pushed dev folder to GitHub Pages"

