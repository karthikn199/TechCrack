const gitData = [
    {
      id: 1,
      question: "What is Git?",
      answer: "Git is a distributed version control system that allows developers to track changes in their code, collaborate with others, and manage their projects efficiently.",
    },
    {
      id: 2,
      question: "What is the difference between Git and GitHub?",
      answer: "Git is a version control system used to track changes in code. GitHub is a cloud-based hosting platform that allows developers to store, manage, and collaborate on Git repositories.",
    },
    {
      id: 3,
      question: "What is a Git repository?",
      answer: "A Git repository is a storage location where your project and its version history are stored. It can be local on your computer or remote on a platform like GitHub.",
    },
    {
      id: 4,
      question: "What is the purpose of `git init`?",
      answer: "`git init` initializes a new Git repository in a project directory, allowing Git to start tracking changes to files in that directory.",
    },
    {
      id: 5,
      question: "What is `git clone`?",
      answer: "`git clone` is used to copy an existing Git repository from a remote server to your local machine.",
    },
    {
      id: 6,
      question: "What is `git add`?",
      answer: "`git add` stages changes to files, preparing them to be committed to the repository in the next commit.",
    },
    {
      id: 7,
      question: "What is `git commit`?",
      answer: "`git commit` saves the staged changes to the local repository with a descriptive message explaining the changes.",
    },
    {
      id: 8,
      question: "What is `git pull`?",
      answer: "`git pull` fetches changes from a remote repository and merges them into your current branch.",
    },
    {
      id: 9,
      question: "What is `git push`?",
      answer: "`git push` uploads your local repository changes to a remote repository.",
    },
    {
      id: 10,
      question: "What is a branch in Git?",
      answer: "A branch in Git is a separate version of the codebase. Developers use branches to work on different features, fixes, or experiments independently.",
    },
    {
      id: 11,
      question: "What is `git merge`?",
      answer: "`git merge` combines the changes from one branch into another branch. It is commonly used to merge feature branches into the main branch.",
    },
    {
      id: 12,
      question: "What is a Git conflict?",
      answer: "A Git conflict occurs when changes in two branches cannot be automatically merged, requiring manual resolution.",
    },
    {
      id: 13,
      question: "What is `git stash`?",
      answer: "`git stash` temporarily saves your changes that are not ready to be committed, allowing you to switch branches or work on something else without committing those changes.",
    },
    {
      id: 14,
      question: "What is `git status`?",
      answer: "`git status` shows the current state of your working directory and staging area, indicating which changes are staged, unstaged, or untracked.",
    },
    {
      id: 15,
      question: "What is `git log`?",
      answer: "`git log` displays the commit history of the repository, including commit hashes, messages, authors, and timestamps.",
    },
    {
      id: 16,
      question: "What is `git checkout`?",
      answer: "`git checkout` is used to switch between branches or restore files to a specific commit or branch state.",
    },
    {
      id: 17,
      question: "What is the difference between `git fetch` and `git pull`?",
      answer: "`git fetch` retrieves updates from the remote repository but does not merge them into your current branch. `git pull` retrieves and merges changes into your current branch.",
    },
    {
      id: 18,
      question: "What is a remote repository in Git?",
      answer: "A remote repository is a version of your repository hosted on a server that is accessible to other users, allowing collaboration.",
    },
    {
      id: 19,
      question: "What is `.gitignore`?",
      answer: "The `.gitignore` file specifies files and directories that Git should ignore and not track in the repository.",
    },
    {
      id: 20,
      question: "What is `git rebase`?",
      answer: "`git rebase` is a command that re-applies commits from one branch on top of another branch, creating a cleaner project history.",
    },
  ];
  
  export default gitData;
  