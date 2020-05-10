---
title: "Learning Basic Linux Terminal Commands"
slug: terminal
date: 2019-04-18
---

In a previous post I explained [how to install Ubuntu Linux](/ubuntu/) on an empty hard drive. Now that you have Linux in your machine, the next logical step is to learn how to operate the terminal.

To find your terminal click on the *Show Applications* icon and type the word &ldquo;terminal" in the search box. Then, click on the terminal icon, similar to the one below:

<img src="/img/term.png" />

**Tip:** you may want to right-click on the terminal icon and choose &ldquo;Add To Favorites", to pin it to the task bar, since you're going to be using it often.

Unlike a <abbr title="Graphical User Interface">GUI</abbr> like Windows or Ubuntu's Gnome shell, which let you open files by double-clicking on icons or execute commands by choosing from a menu of options, the terminal lets you interact with your computer by typing commands. When we refer to the  terminal we're really talking about a [terminal emulator](https://en.wikipedia.org/wiki/Terminal_emulator). A terminal emulator is a graphical representation of a terminal. This means that you will be able to harness all the power of an actual terminal, with the added benefit of several useful features like Cut and Paste, Find, and the ability to customize colors and fonts. The terminal emulator that comes with Ubuntu is the [GNOME terminal](https://en.wikipedia.org/wiki/GNOME_Terminal). 

Besides a text editor, the terminal is where you, as a web developer, will spend most of your time, so in this post I am going to show you some basic Linux commands. There are thousands or Linux commands, but the ones that I will mention below are what I find myself using more than 90% of the time. 

**Note**: You don't need to type the $ before the command (that's the default command line prompt):

**List folders and files under the current folder:**
```
$ ls 
```

**List folders and files under the current folder (long format):**
```
$ ls -l
```

**List folders and files, including hidden ones** (hidden files and folders are always preceded by a dot):
```
$ ls -a
```
**List folders and files combining the -l and the -a flags:**
```
$ ls -la
```
**Print working (current) directory:**
```
$ pwd
```

**Change directory to the documents folder** (the documents folder must be under the current folder):
```
$ cd documents
```

**Move up one directory level** (indicated by the two dots):
```
$ cd ..
```

**Output the full contents of the file to the console:**
```
$ cat hello.txt
```

**Open a file called hello.txt with the built-in Nano text editor** (to save changes type Control X and say YES):
```
$ nano hello.txt
```
**Rename hello.txt as hi.txt:**
```
$ mv hello.txt hi.txt
```
**Move hi.txt to the /documents folder:**
```
$ mv hi.thx /documents
```
**Move hi.txt back to its original folder:** 
```
$ mv /documents/hi.txt .
```
**Move hi.txt to the /documents folder and rename it hello.txt:**
```
$ mv hi.txt /documents/hello.txt
```

**Rename the documents folder as docs:**
```
$ mv documents docs
```
**Copy hello.txt as hi.txt leaving hello.txt in place:**
```
$ cp hello.txt hi.txt
```
**Copy a folder (with all its contents) into another folder. We need to use the -r (recursive) flag:**
```
$ cp -r documents docs
```
**Delete hello.txt:**
```
$ rm hello.txt
```
**Remove the docs folder and all its contents. We need to use the -r (recursive) flag:**
```
$ rm -r docs
```
**Create a folder called pictures:**
```
$ mkdir pictures
```
**Create nested folders. You need to use the -p flag:**
```
$ mkdir -p documents/pictures/2017
```
**Output the username of the user currently logged in:**
```
$ whoami
```
**See if a program is installed. It will give you the path to the program, if it is installed** (for example, typing *which node* will probably give you: *usr/bin/node*):
```
$ which [NAME OF A PROGRAM]
```
**Look for server information of a website:** (replace with a real domain name)
```
$ nslookup [DOMAIN NAME]
```
**Fetch the HTTP header of a website:** (replace with a real URL)
```
$ curl -I [URL]
```
**Get registration information of a domain name:** (replace with a real domain name)
```
$ whois [DOMAIN NAME]
```

If you want to dig deeper, just do a Google search for [useful linux terminal commands](https://www.google.com/search?ei=dRa5XIf_E6-O5wL_lprIDg&q=useful+linux+terminal+commands&oq=useful+linux+terminal+commands&gs_l=psy-ab.3..0.4052.7452..8574...5.0..0.128.1055.0j9......0....1..gws-wiz.......0i71j35i304i39j0i7i30j0i13j0i8i7i30j0i7i5i30j0i13i5i30j0i8i13i30.gmH5nuLkc9E) and you will find how powerful and versatile the terminal can be.


