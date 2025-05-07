#!/bin/bash

# ✅ Usage: ./prodpush.sh <filename1> <filename2> ...
# ✅ This script commits and pushes specified files to the prod branch

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <filename1> <filename2> ..."
  exit 1
fi

# Ensure you are in the correct branch
BRANCH=$(git branch --show-current)
if [ "$BRANCH" != "gh-pages" ]; then
  echo "❌ You are not on gh-pages branch. Currently on: $BRANCH"
  exit 1
fi

# Stage all files passed as arguments
for file in "$@"; do
  git add "$file"
done

# Commit with standard message
git commit -m "🧹 Prod Push: Stable update to $*"

# Push to origin
git push origin gh-pages

echo "✅ Prod push completed for: $*"
