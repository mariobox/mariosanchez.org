---
title: "Creating Aliases in Linux Terminal"
slug: alias
date: 2016-11-13
---

If you use a Linux-style terminal you may find yourself typing the same commands over and over again. If this is the case, you may wish to use some shorthand that the terminal can understand. You can do that with Aliases.

You start by going to your user directory and opening your <code>.bashrc</code> file. A <code>.bashrc</code> is a shell script that Bash runs whenever it is started interactively. You can put any command in that file that you could type at the command prompt. 

In my case, I wanted to avoid having to type "git push origin master" every time I wanted to commit changes to my remote repository, so I appended the following line of code to my <code>.bashrc</code> file:

``` bash
alias gpom='git push origin master'
```

and saved the file.

Now, whenever I have something to commit I just type: &lsquo;gpom' and press enter.

**Note**: In order for the new alias to work you have to reboot your computer.

