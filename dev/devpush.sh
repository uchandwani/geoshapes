#!/bin/bash

# Usage: ./devpush.sh filename "Commit message"

if [ $# -lt 2 ]; then
  echo "Usage: $0 filename \"Commit message\""
  exit 1
fi

FILENAME=$1
COMMIT_MSG=$2

SOURCE_PATH=~/Projects/dev/$FILENAME
DEST_PATH=~/geoshapes/dev/$FILENAME
REPO_PATH=~/geoshapes

# Step 1: Copy file
if [ ! -f "$SOURCE_PATH" ]; then
  echo "Error: Source file not found: $SOURCE_PATH"
  exit 2
fi

cp "$SOURCE_PATH" "$DEST_PATH"
echo "✔ Copied $FILENAME to geoshapes/dev/"

# Step 2: Git add, commit, push
cd "$REPO_PATH" || exit 3

git add dev/$FILENAME
git commit -m "$COMMIT_MSG"
git push origin gh-pages

echo "✔ Git push complete."
