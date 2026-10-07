#!/bin/bash

# ============================================================
#                    GIT COMMANDS
#              Quick Revision with Examples
# ============================================================


# ------------------------------------------------------------
# 1. INITIALIZE A GIT REPOSITORY
# ------------------------------------------------------------

# Initialize Git in the current directory
git init


# ------------------------------------------------------------
# 2. CHECK REPOSITORY STATUS
# ------------------------------------------------------------

# Show modified, staged and untracked files
git status


# ------------------------------------------------------------
# 3. CONFIGURE GIT USERNAME
# ------------------------------------------------------------

# Set username globally
git config --global user.name "Your Name"

# Example:
git config --global user.name "Santosh Kumar"


# ------------------------------------------------------------
# 4. CONFIGURE GIT EMAIL
# ------------------------------------------------------------

# Set email globally
git config --global user.email "you@example.com"

# Example:
git config --global user.email "santosh@example.com"


# ------------------------------------------------------------
# 5. ADD A SINGLE FILE
# ------------------------------------------------------------

# Add one file to the staging area
git add index.html


# ------------------------------------------------------------
# 6. ADD ALL FILES
# ------------------------------------------------------------

# Add all changes in the current directory
git add .


# ------------------------------------------------------------
# 7. ADD MULTIPLE FILES
# ------------------------------------------------------------

# Add multiple specific files
git add index.html style.css script.js


# ------------------------------------------------------------
# 8. COMMIT CHANGES
# ------------------------------------------------------------

# Create a commit with a message
git commit -m "Initial commit"

# Example:
git commit -m "Added homepage"


# ------------------------------------------------------------
# 9. VIEW COMMIT HISTORY
# ------------------------------------------------------------

# Show complete commit history
git log


# ------------------------------------------------------------
# 10. VIEW SHORT COMMIT HISTORY
# ------------------------------------------------------------

# Show commits in one-line format
git log --oneline


# ------------------------------------------------------------
# 11. UNSTAGE A FILE
# ------------------------------------------------------------

# Remove a file from staging
# The file itself will NOT be deleted
git restore --staged index.html


# ============================================================
#                         .gitignore
# ============================================================

# Create a file named: .gitignore
# Create a file named: password.txt

# Ignore a specific file:
password.txt # write in .gitignore file in a new line

# Ignore all files with a specific extension :
*.txt # write in .gitignore to ignore all .txt files

# Ignore a directory:
images/ # write in .gitignore file in a new line

# Ignore a specific file inside a directory:
images/logo.png # write in .gitignore file in a new line


# ============================================================
#                         BRANCHING
# ============================================================


# ------------------------------------------------------------
# 12. CREATE A BRANCH
# ------------------------------------------------------------

# Create a new branch
git branch feature


# ------------------------------------------------------------
# 13. LIST BRANCHES
# ------------------------------------------------------------

# Show all local branches
git branch


# ------------------------------------------------------------
# 14. SWITCH TO A BRANCH
# ------------------------------------------------------------

# Switch to an existing branch
git switch feature


# ------------------------------------------------------------
# 15. CREATE AND SWITCH TO A BRANCH
# ------------------------------------------------------------

# Create a new branch and switch to it
git switch -c feature


# ------------------------------------------------------------
# 16. MERGE A BRANCH
# ------------------------------------------------------------

# First switch to the branch where you want
# to merge the changes
git switch main

# Merge the feature branch into main
git merge feature


# ============================================================
#                       .gitkeep
# ============================================================

# Git does not track empty directories.
# .gitkeep is a common convention to keep an empty directory.
# Create a ".gitkeep" file in an empty directories

# Example:
#
# project/
# └── images/
#     └── .gitkeep 


# ============================================================
#                    VIM EDITOR COMMANDS
# ============================================================

# When Git opens Vim for a commit/merge message:

# Save and exit:
# Press Esc
# Type :wq
# Press Enter

# Exit without saving:
# Press Esc
# Type :q!
# Press Enter


# ============================================================
#                    BASIC GIT WORKFLOW
# ============================================================

# 1. Initialize repository
git init

# 2. Check status
git status

# 3. Add files
git add .

# 4. Commit changes
git commit -m "Initial commit"

# 5. View commit history
git log --oneline

# 6. Create and switch to a feature branch
git switch -c feature

# 7. Add changes
git add .

# 8. Commit changes
git commit -m "Added feature"

# 9. Switch back to main
git switch main

# 10. Merge feature branch
git merge feature

# 11. Check final status
git status


# ============================================================
#                         BRANCHING
# ============================================================

# Create a branch
git branch <branchname>

# List branches
git branch

# Switch to a branch
git switch <branchname>

# Create and switch to a new branch
git switch -c <branchname>

# Merge another branch into the current branch
git merge <branchname>

# If merge conflicts happen:
# Press Esc
# Type :wq
# Press Enter

# Commit after resolving a merge
git commit


# ============================================================
#                         STASH
# ============================================================

# Save uncommitted changes and clean the working tree temporarily
git stash

# View stash list
git stash list

# Remove the latest stash and apply it back
git stash pop

# Keep the stash and also apply the changes to the working tree
git stash apply


# ============================================================
#                 BRANCHING BEST PRACTICES
# ============================================================

# One feature = One branch
# Never develop directly on main
# Delete merged branches
# Use meaningful branch names
# Merge branches as soon as possible to reduce risk and conflict


# ============================================================
#                          GIT TAGS
# ============================================================

# Annotated tag (recommended)
git tag -a v1.0.0 -m "Release version 1.0.0"

# Lightweight tag
git tag v1.0.0

# View all tags
git tag

# Example of an annotated tag after a commit
git tag -a v1.0 -m "my release"

# Example of a lightweight tag
git tag v1.0

# Best for temporary or private use
git tag v1.0


# ============================================================
#                          REBASE
# ============================================================

# Rebase current branch onto another branch
git rebase main

# If rebase conflicts happen:
# 1. Fix conflicts
# 2. git add <resolved-files>
# 3. git rebase --continue
# 4. If needed, use: git rebase --abort


# ============================================================
#                     QUICK REFERENCE
# ============================================================

# Create branch: 
git branch <branchname>

# List branches: 
git branch

# Switch branch: 
git switch <branchname>

# Merge branch: 
git merge <branchname>

# Stash changes: 
git stash

# List stash: 
git stash list

# Restore stash: 
git stash pop

# View tags: 
git tag

# Annotated tag: 

git tag -a v1.0.0 -m "Release version 1.0.0"

# Lightweight tag: 
git tag v1.0.0


# ============================================================
#                 GITHUB / REMOTE REPOSITORY
# ============================================================

# Clone a repository from GitHub
git clone <repository-url>

# Example:
git clone https://github.com/username/project.git

# Check remote repositories
git remote -v

# Add a remote repository
git remote add origin <repository-url>

# Example:
git remote add origin https://github.com/username/project.git

# Change remote URL
git remote set-url origin <new-repository-url>

# Rename a remote
git remote rename origin upstream

# Remove a remote
git remote remove origin

# Push local branch to GitHub
git push -u origin main

# Push current branch to remote
git push

# Push a specific branch
git push origin <branchname>

# Pull latest changes from remote branch
git pull origin main

# Fetch changes without merging
git fetch origin

# Check current branch tracking info
git branch -vv

# Create a new branch and push it to GitHub
git checkout -b feature
git push -u origin feature

# If repository is already initialized and remote is connected:
# 1. git add .
# 2. git commit -m "Your message"
# 3. git push origin main


# ============================================================
#              GITHUB WORKFLOW EXAMPLE
# ============================================================

# Create repo on GitHub
# Copy the URL
# In local project:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/project.git
git push -u origin main