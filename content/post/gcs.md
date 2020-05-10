---
title: "Git Cheat Sheet"
slug: gcs
date: 2016-06-15
---

I use Git to keep track of the changes I make to this site. I am not an expert so I won't go into great depths here. The idea of this post is just to summarize for future reference the Git commands I use on a regular basis to keep this site up and running. 

Here we go:

Tell Git your usename and email. You only need to do this once:

<pre><code>git config --global user.name "your user name"</code></pre>

<pre><code>git config --global user.email "your email"</code></pre>

-----

Prints a list all the options you have configured Git for, including your user.name and user.email. This is for reference more than anything, not something you have to do all the time:

<pre><code>git config --list</code></pre>

-----

Creates a Git repository in the current folder:

<pre><code>git init</code></pre>

-----

Clones (makes a working copy) of an existing repository. If the repository is in a host like [Github](http://www.github.com) the path to repository will typically be a URL like: https://github.com/username/username.github.io.git:

<pre><code>git clone /PATH/TO/REPOSITORY</code></pre>

-----

Get the status of files in the current directory, in short notation. You will get one or two characters to the left of the file name: 

<pre><code>git status -s</code></pre>

* M: the file has been modified
* A: new file that has been added to the staging area
* MM: file that has been modified, staged, and modified again
* ?: new file not yet tracked

-----

Adds a file, or all files that have been created or modified, to the staging area:

<pre><code>git add file name</code></pre>

or

<pre><code>git add --all</code></pre>

-----

Commits (records) your changes to your local Git repository. Write a short message between quote marks so that others can understand what you did:

<pre><code>git commit -m "commit message"</code></pre>

-----

Pushes (uploads) your changes to your remote repository (for example, to your Github account):

<pre><code>git push origin master</code></pre>

-----

If you've made changes to your remote repository that are not reflected in your local repository, you can merge (copy) those changes to your local repository. This is very useful when you mess something up in your local and want your files to revert back to the state they were when they were last pushed to your remote:

<pre><code>git pull origin master</code></pre>

-----

Create a new branch in your local environment (your computer) to make changes without affecting your main branch, and check out (open) it at the same time.

<pre><code>git checkout -b NEWBRANCH</code></pre>

Once you are satisfied with the changes, do a <pre><code>git add --all</code></pre> and <pre><code>git commit -m "commit message"</code></pre>

-----

Merge the NEWBRANCH into the MASTER branch.

<pre><code>git checkout master</code></pre>

<pre><code>git merge NEWBRANCH</code></pre>

-----

To delete the NEWBRANCH because you don't need it any more (for example, when you have already merged it):

<pre><code>git branch -d NEWBRANCH</code></pre>
