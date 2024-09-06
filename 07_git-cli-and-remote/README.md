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
2. Connect repository
    ```shell
    git remote add origin <repository URL>
    ```
3. Push **main** branch to Github
    ```shell
    git push -u origin main
    ```

## Commands

| Git command               | Git task                                         |
| ------------------------- | ------------------------------------------------ |
| `git status`              | List all files that have changed and their state |
| `git add <filename>`      | Add a file to the stage                          |
| `git commit -m "add foo"` | Create a commit including all staged files       |
| `git log --oneline`       | Show the commit history                          |
