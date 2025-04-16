#!/bin/bash
echo "🔁 Syncing Parallel Lines update..."
cd ~/Projects/geoshapes-dev || exit

# Auto-stage the known files
git add dev/parallel_lines_05.html dev/css/style-parallel-lines.css

# Prompt for commit message
read -p "Enter commit message: " msg

# Commit and push
git commit -m "$msg"
git push origin main

#!/bin/bash

# Set variables
BRANCH="gh-pages"
FILES=(
  "dev/parallel_lines_05.html"
  "dev/css/style-parallel-lines.css"
  "dev/js/parallelLinesPage.js"
  "dev/js/parallelLinesEventHandlers.js"
  "dev/js/parallelLinesConfig.js"
)

echo "🔁 Syncing Parallel Lines update..."

# Switch to the gh-pages branch
git checkout $BRANCH

# Add files to staging
for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    git add "$file"
    echo "✅ Added $file"
  else
    echo "⚠️  File not found: $file"
  fi
done

# Commit with message
echo -n "Enter commit message: "
read COMMIT_MSG
git commit -m "$COMMIT_MSG"

# Push to GitHub using SSH
git push origin $BRANCH

echo "✅ Push complete!"
#!/bin/bash

echo "🔁 Syncing Parallel Lines update..."

# Add files from correct folders
git add dev/parallel_lines_05.html
git add css/style-parallel-lines.css

# Show git status for review
git status

# Prompt for commit message
echo -n "📝 Enter commit message: "
read commit_message

# Commit and push to gh-pages
git commit -m "$commit_message"
git push origin gh-pages

echo "✅ Files pushed to gh-pages branch."
