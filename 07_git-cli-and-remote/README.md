# Git CLI & remote

How to use version control locally to create repositories and commits and synchronizing local repositories with remote repositories.

## Creating a local repository

1. Check if git is already initialized: `git status`

1. To turn any folder into a git repository:
    ```shell
    cd path/to/my/folder
    git init
    ```
1. Make the first commit
    ```shell
    git add .
    git commit -m "initial commit"
    ```

## Create an empty repository on Github

1. Login to Github
2. Click on **New Repository**
3. Give the repository a name (ideally the same name as the local repository)
4. Click on **Create Repository**

## Connect local repository to Github

1. Copy repository URL
2. Connect and push local repository
    ```shell
    git remote add origin <repository URL>
    git branch -M main
    git push -u origin main
    ```
3. Go to GitHub and hit **Refresh**

## Git commands

| Git command                              | Git task                                         |
| ---------------------------------------- | ------------------------------------------------ |
| `git status`                             | List all files that have changed and their state |
| `git add <filename>`                     | Add a file to the stage                          |
| `git add .`                              | Add all files/folders to the                     |
| `git commit -m "add foo"`                | Create a commit including all staged files       |
| `git remote add origin <repository URL>` | Connect local respository to GitHub              |
| `git push -u origin main`                | Push first commit after connect                  |
| `git log --oneline`                      | Show the commit history                          |
| `git restore .`                          | Reset all changes                                |
| `git restore <filename>`                 | Reset changes for file                           |
| `git restore --staged <filename>`        | Unstage file                                     |
| `git restore --staged .`                 | Unstage all files/folders                        |
| `git clone <url>`                        | Clone remote repository from GitHub              |
| `git push`                               | Upload content to the remote repository          |
| `git pull`                               | Download content from the remote repository      |
