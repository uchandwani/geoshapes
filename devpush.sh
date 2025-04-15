
#!/bin/bash

# Ask for a commit message
echo "Enter commit message:"
read msg

# Add and commit
git add .
git commit -m "$msg"

# Push silently to GitHub via SSH
git push origin main
