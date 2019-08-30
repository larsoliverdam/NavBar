---
description: Created by Ali.
---

# GitHub research practices

## A Quick Introduction to Version Control with Git and GitHub

[by John D. Blischak, Emily R. Davenport and Greg Wilson](https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1004668&type=printable)

### Introduction to Version Control

Many scientists write code as part of their research. Just as experiments are logged in laboratory notebooks, it is important to document the code you use for analysis. However, a few key prob-lems can arise when iteratively developing code that make it difficult to document and track which code version was used to create each result. First, you often need to experiment with new ideas, such as adding new features to a script or increasing the speed of a slow step, but you do not want to risk breaking the currently working code. One often-utilized solution is to make a copy of the script before making new edits. However, this can quickly become a problem because it clutters your file system with uninformative filenames, e.g., analysis.sh, analysis\_02.sh, analysis\_03.sh, etc. It is difficult to remember the differences between the versions of the files and, more importantly, which version you used to produce specific results, especially if you return to the code months later. Second, you will likely share your code with multiple lab mates or collaborators, and they may have suggestions on how to improve it. If you email the code to multiple people, you will have to manually incorporate all the changes each of them sends.

Fortunately, software engineers have already developed software to manage these issues: version control. A version control system \(VCS\) allows you to track the iterative changes you make to your code. Thus, you can experiment with new ideas but always have the option to revert to a specific past version of the code you used to generate particular results. Furthermore, you can record messages as you save each successive version so that you \(or anyone else\) reviewing the development history of the code is able to understand the rationale for the given edits. It also facilitates collaboration. Using a VCS, your collaborators can make and save changes to the code, and you can automatically incorporate these changes to the main code base. The collaborative aspect is enhanced with the emergence of websites that host version-controlled code.

development with a VCS and hosting it online, you are performing science that is more trans-parent, reproducible, and open to collaboration. There is no reason this framework needs to be limited only to code; a VCS is well-suited for tracking any plain-text files: manuscripts, electronic lab notebooks, protocols, etc.

### Version Your Code

The first step is to learn how to version your own code. In this tutorial, we will run Git from the command line of the Unix shell. Thus, we expect readers are already comfortable with navigating a filesystem and running basic commands in such an environment. You can find directions for installing Git for the operating system running on your computer by following one of the links provided in Table 1. There are many graphical user interfaces \(GUIs\) available for running Git \(Table 1\), which we encourage you to explore, but learning to use Git on the command line is necessary for performing more advanced operations and using Git on a remote machine.

To follow along, first create a folder in your home directory named thesis. Next, down-load the three files provided in Supporting Information and place them in the thesis directory. Imagine that, as part of your thesis, you are studying the transcription factor CTCF, and you want to identify high-confidence binding sites in kidney epithelial cells. To do this, you will utilize publicly available ChIP-seq data produced by the ENCODE consortium. ChIP-seq is a method for finding the sites in the genome where a transcription factor is bound, and these sites are referred to as peaks. process.sh downloads the ENCODE CTCF ChIP-seq data from multiple types of kidney samples and calls peaks \(S1 Data\); clean.py filters peaks with a fold change cutoff and merges peaks from the different kidney samples \(S2 Data\); and analyze.R creates diagnostic plots on the length of the peaks and their distribution across the genome \(S3 Data\).

If you have just installed Git, the first thing you need to do is provide some information about yourself, since it records who makes each change to the file\(s\). Set your name and email by running the following lines, but replacing “First Last” and “user@domain” with your full name and email address, respectively.

$ git config --global user.name "First Last"

$ git config --global user.email "user@domain"

To start versioning your code with Git, navigate to your newly created directory, ~/thesis.

Run the command git init to initialize the current folder as a Git repository \(Figs 1 and 2A\). A

#### Table 1. Resources.

| Resource | Options |
| :--- | :--- |
|  |  |
| Distributed VCS | Git \([https://git-scm.com](https://git-scm.com/)\) |
|  | Mercurial \([https://mercurial.selenic.com](https://mercurial.selenic.com/)\) |
|  | Bazaar \([http://bazaar.canonical.com](http://bazaar.canonical.com/)\) |
| Online hosting site | GitHub \([https://github.com](https://github.com/)\) |
|  | Bitbucket \([https://bitbucket.org](https://bitbucket.org/)\) |
|  | GitLab \([https://about.gitlab.com](https://about.gitlab.com/)\) |
|  | Source Forge \([http://sourceforge.net](http://sourceforge.net/)\) |
| Git installation | [https://git-scm.com/downloads](https://git-scm.com/downloads) |
| Git tutorials | Software Carpentry \([https://swcarpentry.github.io/git-novice](https://swcarpentry.github.io/git-novice)\) |
|  | Pro Git \([https://git-scm.com/book](https://git-scm.com/book)\) |
|  | A Visual Git Reference \([https://marklodato.github.io/visual-git-guide](https://marklodato.github.io/visual-git-guide)\) |
|  | tryGit \([https://try.github.io](https://try.github.io/)\) |
| Graphical User Interface for Git | [https://git-scm.com/downloads/guis](https://git-scm.com/downloads/guis) |

![](.gitbook/assets/screen-shot-2019-08-27-at-12.29.11-pm.png)

repository \(or repo, for short\) refers to the current version of the tracked files as well as all the previously saved versions. Only files that are located within this directory \(and any sub-directories\) have the potential to be version controlled, i.e., Git ignores all files outside of the initialized directory. For this reason, projects under version control tend to be stored within a single directory to correspond with a single Git repository. For strategies on how to best organize your own projects, see Noble, 2009.

$ cd ~/thesis

$ ls

analyze.R clean.py process.sh

$ git init

Initialized empty Git repository in ~/thesis/.git/

Now you are ready to start versioning your code \(Fig 1\). Conceptually, Git saves snapshots of the changes you make to your files whenever you instruct it to. For instance, after you edit a script in your text editor, you save the updated script to your thesis folder. If you tell Git to save a snapshot of the updated document, then you will have a permanent record of the file in that exact version even if you make subsequent edits to the file. In the Git framework, any changes you have made to a script but have not yet recorded as a snapshot with Git reside in the work-ing directory only \(Fig 1\). To follow what Git is doing as you record the initial version of your files, use the informative command git status.

![](.gitbook/assets/screen-shot-2019-08-27-at-12.31.27-pm.png)

$ git status

On branch master

Initial commit

Untracked files:

\(use "git add &lt;file&gt;. . ." to include in what will be committed\)

analyze.R

clean.py

process.sh

nothing added to commit but untracked files present \(use "git add" to track\)

### Definitions

* Version Control System \(VCS\): \(noun\) a program that tracks changes to specified files over time and maintains a library of all past versions of those files
* Git: \(noun\) a version control system
* repository \(repo\): \(noun\) folder containing all tracked files as well as the version control history
* commit: \(noun\) a snapshot of changes made to the staged file\(s\); \(verb\) to save a snap-shot of changes made to the staged file\(s\)
* stage: \(noun\) the staging area holds the files to be included in the next commit; \(verb\) to mark a file to be included in the next commit
* track: \(noun\) a tracked file is one that is recognized by the Git repository
* branch: \(noun\) a parallel version of the files in a repository 
* local: \(noun\) the version of your repository that is stored on your personal computer
* remote: \(noun\) the version of your repository that is stored on a remote server; for instance, on GitHub
* clone: \(verb\) to create a local copy of a remote repository on your personal computer
* fork: \(noun\) a copy of another user’s repository on GitHub; \(verb\) to copy a repository; for instance, from one user’s GitHub account to your own
* merge: \(verb\) to update files by incorporating the changes introduced in new commits
* pull: \(verb\) to retrieve commits from a remote repository and merge them into a local repository
* push: \(verb\) to send commits from a local repository to a remote repository
* pull request: \(noun\) a message sent by one GitHub user to merge the commits in their remote repository into another user’s remote repository

There are a few key things to notice from this output. First, the three scripts are recognized as untracked files because you have not told Git to start tracking anything yet. Second, the word “commit” is Git terminology for a snapshot. As a noun, it means “a version of the code,” e.g., “the figure was generated using the commit from yesterday”. This word can also be used as a verb, meaning “to save,” e.g., “to commit a change.” Lastly, the output explains how you can track your files using git add. Start tracking the file process.sh.

$ git add process.sh

#### And check its new status.

$ git status

#### On branch master

Initial commit

#### Changes to be committed:

\(use "git rm --cached &lt;file&gt;. . ." to un-stage\)

new file: process.sh

#### Untracked files:

\(use "git add &lt;file&gt;. . ." to include in what will be committed\)

analyze.R

clean.py

Since this is the first time that you have told Git about the file process.sh, two key things have happened. First, this file is now being tracked, which means Git recognizes it as a file you wish to be version controlled. Second, the changes made to the file \(in this case the entire file, because it is the first commit\) have been added to the staging area \(Fig 1\). Adding a file to the staging area will result in the changes to that file being included in the next commit, or snapshot, of the code. As an analogy, adding files to the staging area is like putting things in a box to mail off, and committing is like putting the box in the mail.

Since this will be the first commit, or first version, of the code, use git add to begin tracking the other two files and add their changes to the staging area as well. Then create the first commit using the command git commit.

$ git add clean.py analyze.R

$ git commit -m "Add initial version of thesis code."

\[master \(root-commit\) 660213b\] Add initial version of thesis code.

3 files changed, 154 insertions\(+\)

create mode 100644 analyze.R

create mode 100644 clean.py

create mode 100644 process.sh

Notice the flag -m was used to pass a message for the commit. This message describes the changes that have been made to the code and is required. If you do not pass a message at the command line, the default text editor for your system will open so you can enter the message. You have just performed the typical development cycle with Git: make some changes, add updated files to the staging area, and commit the changes as a snapshot once you are satisfied with them \(Fig 2\).

Since Git records all of the commits, you can always look through the complete history of a project. To view the record of your commits, use the command git log. For each commit, it lists the unique identifier for that revision, author, date, and commit message.

$ git log

commit 660213b91af167d992885e45ab19f585f02d4661

Author: First Last &lt;user@domain&gt;

Date: Fri Aug 21 14:52:05 2015–0500

#### Add initial version of thesis code.

The commit identifier can be used to compare two different versions of a file, restore a file to a previous version from a past commit, and even retrieve tracked files if you accidentally delete them.

Now you are free to make changes to the files knowing that you can always revert them to the state of this commit by referencing its identifier. As an example, edit clean.py so that the fold change cutoff for filtering peaks is more stringent. Here is the current bottom of the file.

$ tail clean.py

**\#Filter based on fold-change over control sample** 

fc\_cutoff = 10

epithelial = epithelial.filter\(filter\_fold\_change, fc = fc\_cutoff\).saveas\(\)

proximal\_tube = proximal\_tube.filter\(filter\_fold\_change, fc = fc\_cutoff\).saveas\(\)

kidney = kidney.filter\(filter\_fold\_change, fc = fc\_cutoff\).saveas\(\)

**\#Identify only those sites that are peaks in all three tissue types** 

combined = pybedtools.BedTool\(\).multi\_intersect\(

i= \[epithelial.fn, proximal\_tube.fn, kidney.fn\]\)

union = combined.filter\(lambda x: int\(x\[3\]\) = = 3\).saveas\(\)

union.cut\(range\(3\)\).saveas\(data + "/sites-union.bed"\)

**Using a text editor, increase the fold change cutoff from 10 to 20.**

$ tail clean.py

**\#Filter based on fold-change over control sample** 

fc\_cutoff = 20

epithelial = epithelial.filter\(filter\_fold\_change, fc = fc\_cutoff\).saveas\(\)

proximal\_tube = proximal\_tube.filter\(filter\_fold\_change, fc = fc\_cutoff\).saveas\(\)

kidney = kidney.filter\(filter\_fold\_change, fc = fc\_cutoff\).saveas\(\)

**\#Identify only those sites that are peaks in all three tissue types** 

combined = pybedtools.BedTool\(\).multi\_intersect\(

i = \[epithelial.fn, proximal\_tube.fn, kidney.fn\]\)

union = combined.filter\(lambda x: int\(x\[3\]\) = = 3\).saveas\(\)

union.cut\(range\(3\)\).saveas\(data + "/sites-union.bed"\)

**Because Git is tracking clean.py, it recognizes that the file has been changed since the last commit.**

$ git status

* On branch master
* Changes not staged for commit:
* \(use "git add &lt;file&gt;. . ." to update what will be committed\)
* \(use "git checkout --&lt;file&gt;. . ." to discard changes in working directory\)

\# modified: clean.py

no changes added to commit \(use "git add" and/or "git commit -a"\)

The report from git status indicates that the changes to clean.py are not staged, i.e., they are in the working directory \(Fig 1\). To view the un-staged changes, run the command

$ git diff.

$ git diff

diff --git a/clean.py b/clean.py

index 7b8c058.76d84ce 100644

-– a/clean.py

+++ b/clean.py

@@ -28,7 +28,7 @@ def filter\_fold\_change\(feature, fc = 1\): return False

**\#Filter based on fold-change over control sample**

-fc\_cutoff = 10

+fc\_cutoff = 20

epithelial = epithelial.filter\(filter\_fold\_change, fc = fc\_cutoff\).saveas\(\)

proximal\_tube = proximal\_tube.filter\(filter\_fold\_change, fc = fc\_cutoff\).saveas\(\)

kidney = kidney.filter\(filter\_fold\_change, fc = fc\_cutoff\).saveas\(\)

Any lines of text that have been added to the script are indicated with a +, and any lines ****that have been removed with a -. Here, we altered the line of code that sets the value of fc\_cutoff. git diff displays this change as the previous line being removed and a new line being added with our update incorporated. You can ignore the first five lines of output, because they are directions for other software programs that can merge changes to files. If you wanted to keep this edit, you could add clean.py to the staging area using git add and then commit the change using git commit, as you did above. Instead, this time undo the edit by following the directions from the output of git status to “discard changes in the work-ing directory” using the command git checkout.

$ git checkout -- clean.py

$ git diff

Now git diff returns no output, because git checkout undid the unstaged edit you had made to clean.py. This ability to undo past edits to a file is not limited to unstaged changes in the working directory. If you had committed multiple changes to the file clean.py and then decided you wanted the original version from the initial commit, you could replace the argument -- with the commit identifier of the first commit you made above \(your commit identifier will be different; use git log to find it\). The -- used above was simply a placeholder for the first argument because, by default, git checkout restores the most recent version of the file from the staging area \(if you haven’t staged any changes to this file, as is the case here, the version of the file in the staging area is identical to the version in the last commit\). Instead of using the entire commit identifier, use only the first seven characters, which is simply a convention, since this is usually long enough for it to be unique.

$ git checkout 660213b clean.py

At this point, you have learned the commands needed to version your code with Git. Thus, you already have the benefits of being able to make edits to files without copying them first, to create a record of your changes with accompanying messages, and to revert to previous versions

of the files if needed. Now you will always be able to recreate past results that were generated with previous versions of the code \(see the command git tag for a method to facilitate finding spe-cific past versions\) and see the exact changes you have made over the course of a project.

### Share Your Code

Once you have your files saved in a Git repository, you can share it with your collaborators and the wider scientific community by putting your code online \(Fig 3\). This also has the added bene-fit of creating a backup of your scripts and provides a mechanism for transferring your files across multiple computers. Sharing a repository is made easier if you use one of the many online services that host Git repositories \(Table 1\), e.g., GitHub. Note, however, that any files that have

![](.gitbook/assets/screen-shot-2019-08-27-at-12.52.44-pm%20%281%29.png)

###  What Not to Version Control

You can version control any file that you put in a Git repository, whether it is text-based, an image, or a giant data file. However, just because you can version control something, does not mean you should. Git works best for plain, text-based documents such as your scripts or your manuscript if written in LaTeX or Markdown. This is because for text files, Git saves the entire file only the first time you commit it and then saves just your changes with each commit. This takes up very little space, and Git has the capability to compare between versions \(using git diff\). You can commit a non-text file, but a full copy of the file will be saved in each commit that modifies it. Over time, you may find the size of your repository growing very quickly. A good rule of thumb is to version control anything text-based: your scripts or manuscripts if they are written in plain text. Things not to version control are large data files that never change, binary files \(including Word and Excel documents\), and the output of your code.

In addition to the type of file, you need to consider the content of the file. If you plan on sharing your commits publicly using GitHub, ensure you are not committing any files that contain sensitive information, such as human subject data or passwords.

To prevent accidentally committing files you do not wish to track, and to remove them from the output of git status, you can create a file called .gitignore. In this file, you can list subdirectories and/or file patterns that Git should ignore. For example, if your code produced log files with the file extension .log, you could instruct Git to ignore these files by adding .log to .gitignore. In order for these settings to be applied to all instances of the repository, e.g., if you clone it onto another computer, you need to add and commit this file.

not been tracked with at least one commit are not included in the Git repository, even if they are located within the same directory on your local computer.

 We  will focus on the technical aspects of sharing your code. However, there are also other issues to consider when deciding if and how you are going to make your code available to others. 

To begin using GitHub, you will first need to sign up for an account. For the code examples in this tutorial, you will need to replace username with the username of your account. Next, choose the option to “Create a new repository” \([Fig 3B](), see [https://help.github.com/articles/](https://help.github.com/articles/create-a-repo/) [create-a-repo/](https://help.github.com/articles/create-a-repo/)\). Call it “thesis,” because that is the directory name containing the files on your computer, but note that you can give it a different name on GitHub if you wish. Also, now that the code will exist in multiple places, you need to learn some more terminology . A local repository refers to code that is stored on the machine you are using, e.g., your laptop; whereas a remote repository refers to the code that is hosted online. Thus, you have just created a remote repository.

Now you need to send the code on your computer to GitHub. The key to this is the URL that GitHub assigns your newly created remote repository. It will have the form [https://github.](https://github.com/username/thesis.git) [com/username/thesis.git](https://github.com/username/thesis.git) \(see [https://help.github.com/articles/cloning-a-repository/](https://help.github.com/articles/cloning-a-repository/)\). Notice that this URL is using the HTTPS protocol, which is the quickest to begin using. However, it requires you to enter your username and password when communicating with GitHub, so you’ll want to consider switching to the SSH protocol once you are regularly using Git and

#### Managing Large Files

Many biological applications require handling large data files. While Git is best suited for collaboratively writing small text files, nonetheless, collaboratively working on projects in the biological sciences necessitates managing this data.

The example analysis pipeline in this tutorial starts by downloading data files in BAM format that contain the alignments of short reads from a ChIP-seq experiment to the human genome. Since these large, binary files are not going to change, there is no reason to version them with Git. Thus, hosting them on a remote http \(as ENCODE has done in this case\) or ftp site allows each collaborator to download it to her machine as needed, e.g., using wget, curl, or rsync. If the data files for your project are smaller, you could also share them via services like Dropbox \([www.dropbox.com](Undefined%20namespace%20prefix)\) or Google Drive \([https://www.google.com/drive/](https://git-scm.com/)\).

However, some intermediate data files may change over time, and the practical necessity to ensure all collaborators are using the same data set may override the advice to not put code output under version control. Again, returning to the ChIP-seq example, the first step calling the peaks is the most difficult computationally because it requires access to a Unix-like environment and sufficient computational resources. Thus, for collaborators that want to experiment with clean.py and analyze.R without having to run process.sh, you could version the data files containing the ChIP-seq peaks \(which are in BED format\). But since these files are larger than those typically used with Git, you can instead use one of the solutions for versioning large files within a Git repository without actually saving the file with Git, e.g., git-annex \([https://git-annex.branchable.com/](https://github.com/)\) or git-fat \([https://github.com/jedbrown/git-fat/](Undefined%20namespace%20prefix)\). Recently, GitHub has created their own solution for managing large files called Git Large File Storage \(LFS\) \([https://git-lfs.github.com/](Undefined%20namespace%20prefix)\). Instead of committing the entire large file to Git, which quickly becomes unmanageable, it commits a text pointer. This text pointer refers to a specific file saved on a remote GitHub server. Thus, when you clone a repository, it only downloads the latest version of the large file. If you check out an older ver-sion of the repository, it automatically downloads the old version of the large file from the remote server. After installing Git LFS, you can manage all the BED files with one command: git lfs track " .bed". Then you can commit the BED files just like your scripts, and they will automatically be handled with Git LFS. Now, if you were to change the parameters of the peak calling algorithm and re-run process.sh, you could commit the updated BED files, and your collaborators could pull the new versions of the files directly to their local Git repositories.

GitHub \(see [https://help.github.com/articles/generating-ssh-keys/](https://help.github.com/articles/generating-ssh-keys/) for directions\). In order to link the local thesis repository on your computer to the remote repository you just created, in your local repository, you need to tell Git the URL of the remote repository using the command git remote add \(Fig 3C\).

$ git remote add origin [https://github.com/username/thesis.git](https://github.com/username/thesis.git)

The name “origin” is a bookmark for the remote repository so that you do not have to type out the full URL every time you transfer your changes \(this is the default name for a remote repository, but you could use another name if you like\).

Send your code to GitHub using the command git push \(Fig 3D\).

$ git push origin master

###  Choosing a License

Putting software and other material in a public place is not the same as making it publicly usable. In order to do that, the authors must also add a license, since copyright laws in some jurisdictions require people to treat anything that isn’t explicitly open as being proprietary.

While dozens of open licenses have been created, the two most widely used are the GNU Public License \(GPL\) and the MIT/BSD family of licenses. Of these, the MIT/BSD-style licenses put the fewest requirements on re-use, and thereby make it easier for people to integrate your software into their projects.

For an excellent short discussion of these issues, and links to more information, see Jake Vanderplas’s blog post from March 2014 at [http://www.astrobetter.com/blog/2014/](Undefined%20namespace%20prefix) [03/10/the-whys-and-hows-of-licensing-scientific-code/](Undefined%20namespace%20prefix). For a more in-depth discussion of the legal implications of different licenses, see Morin et al., 2012.

You first specify the remote repository, “origin.” Second, you tell Git to push to the “master” copy of the repository—we will not go into other options in this tutorial.

Pushing to GitHub also has the added benefit of backing up your code in case anything were to happen to your computer. Also, it can be used to manually transfer your code across multiple machines, similar to a service like Dropbox \([www.dropbox.com](http://www.dropbox.com/)\) but with the added capabilities and control of Git. For example, what if you wanted to work on your code on your computer at home? You can download the Git repository using the command git clone.

$ git clone [https://github.com/username/thesis.git](https://github.com/username/thesis.git)

By default, this will download the Git repository into a local directory named “thesis.” Fur-thermore, the remote “origin” will automatically be added so that you can easily push your changes back to GitHub. You now have copies of your repository on your work computer, your GitHub account online, and your home computer. You can make changes, commit them on your home computer, and send those commits to the remote repository with git push, just as you did on your work computer.

Then the next day back at your work computer, you could update the code with the changes you made the previous evening using the command git pull.

$ git pull origin master

This pulls in all the commits that you had previously pushed to the GitHub remote reposi-tory from your home computer. In this workflow, you are essentially collaborating with

### Being Scooped

One concern scientists frequently have about putting work in progress online is that they will be scooped, e.g., that someone will analyze their data and publish a result that they themselves would have, but hadn’t yet. In practice, though, this happens rarely, if at all: in fact, the authors are not aware of a single case in which this has actually happened, and would welcome pointers to specific instances. In practice, it seems more likely that making work public early in something like a version control repository, which automatically adds timestamps to content, will help researchers establish their priority.

We expect that all researchers submitting to PLOS submissions in which software is the central part of the manuscript will make all relevant software available without restrictions upon publication of the work. Authors must ensure that software remains usable over time regardless of versions or upgrades. . .

### Branching

Do you ever make changes to your code, but are not sure you will want to keep those changes for your final analysis? Or do you need to implement new features while still providing a stable version of the code for others to use? Using Git, you can maintain parallel versions of your code that you can easily bounce between while you are working on your changes. You can think of it like making a copy of the folder you keep your scripts in, so that you have your original scripts intact but also have the new folder where you make changes. Using Git, this is called branching, and it is better than separate folders because \(1\) it uses a fraction of the space on your computer, \(2\) it keeps a record of when you made the parallel copy \(branch\) and what you have done on the branch, and \(3\) there is a way to incorporate those changes back into your main code if you decide to keep your changes \(and a way to deal with conflicts\). By default, your repository will start with one branch, usually called “master.” To create a new branch in your repository, type git branch new\_branch\_name. You can see what branches a current repository has by typing git branch, with the branch you are currently in being marked by a star. To move between branches, type git checkout branch\_to\_move\_to. You can edit files and commit them on each branch separately. If you want to combine the changes in your new branch with the master branch, you can merge the branches by typing git merge new\_branch\_name while in the master branch.

![](.gitbook/assets/screen-shot-2019-08-27-at-2.34.58-pm.png)

With the addition of a GitHub account and a few commands for sending and receiving code, you can now share your code with others, transfer your code across multiple machines, and set up simple collaborative workflows.

### Contribute to Other Projects

Lots of scientific software is hosted online in Git repositories. Now that you know the basics of Git, you can directly contribute to developing the scientific software you use for your research \(Fig 4\). From a small contribution like fixing a typo in the documentation to a larger change such as fixing a bug, it is empowering to be able to improve the software used by yourself and many other scientists.When contributing to a larger project with many contributors, you will not be able to push your changes with git push directly to the project’s remote repository. Instead, you will first need to create your own remote copy of the repository, which on GitHub is called a fork. You can fork any repository on GitHub by clicking the button “Fork” on the top right of the page \(see [https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/)\).

Once you have a fork of a project’s repository, you can clone it to your computer and make changes just like a repository you created yourself. As an exercise, you will add a file to the repository that we used to write this paper. First, go to [https://github.com/jdblischak/git-for-](https://github.com/jdblischak/git-for-science)[science](https://github.com/jdblischak/git-for-science) and choose the “Fork” option to create a git-for-science repository under your GitHub account \(Fig 4B\). In order to make changes, download it to your computer with the command git clone from the directory you wish the repo to appear in \(Fig 4C\).

$ git clone [https://github.com/username/git-for-science.git](https://github.com/username/git-for-science.git)

Now that you have a local version, navigate to the subdirectory readers and create a text file named as your GitHub username \(Fig 4D\).

$ cd git-for-science/readers

$ touch username.txt

Add and commit this new file \(Fig 4D\), and then push the changes back to your remote repository on GitHub \(Fig 4E\).

$ git add username.txt

$ git commit -m "Add username to directory of readers."

$ git push origin master

Currently, the new file you created, readers/username.txt, only exists in your fork of git-for-science. To merge this file into the main repository, send a pull request using the GitHub interface \(Pull request -&gt; New pull request -&gt; Create pull request; Fig 4F; see https:// help.github.com/articles/using-pull-requests/\). After the pull request is created, we can review your change and then merge it into the main repository. Although this process of forking a project’s repository and issuing a pull request seems like a lot of work to contribute changes, this workflow gives the owner of a project control over what changes get incorporated into the code. You can have others contribute to your projects using the same workflow.

The ability to use Git to contribute changes is very powerful because it allows you to improve the software that is used by many other scientists and also potentially shape the future direction of its development.

### Conclusion

Git, albeit complicated at first, is a powerful tool that can improve code development and documentation. Ultimately, the complexity of a VCS not only gives users a well-documented “undo” button for their analyses, but it also allows for collaboration and sharing of code on a massive scale. Furthermore, it does not need to be learned in its entirety to be useful. Instead, you can derive tangible benefits from adopting version control in stages. With a few commands \(git init, git add, git commit\), you can start tracking your code development and avoid a file system full of copied files \(Fig 2\). Adding a few additional commands \(git push, git clone, git pull\) and a GitHub account, you can share your code online, transfer your changes across machines, and collaborate in small groups \(Fig 3\). Lastly, by forking public repositories and sending pull requests, you can directly improve scientific software \(Fig 4\).

