---
title: Why I'm Learning to Use Vim 
description: The simplest solution is usually the best one
date: 2022-12-27
tags: tech
draft: false
---

The world is becoming a very complicated place. 

The rush to make everything bigger and better is creating unnecessarily complicated products. Product managers build feature after feature into products (<a href="https://en.wikipedia.org/wiki/Feature_creep">feature creep</a>) until something that started simple and did something limited extremely well, morphs into a bloated monstrosity that aims to please everybody (or an entirely new user base) leaving the core user base frustrated and yearning for the simplicity of the original product.

Take the following pictures of the dashboard of the Ford Bronco, the first one of the 1975 model, and the second one of 2022.
 
<figure>
<img src="/img/bronco75.png" alt="picture of 1975 bronco" class="gallery" />
<figcaption class="small">Dashboard of 1975 Ford Bronco</figcaption>
</figure>
<br />
<figure>
<img src="/img/bronco22.png" alt="picture of 2022 bronco" class="gallery" />
<figcaption class="small">Dashboard of 2022 Ford Bronco</figcaption>
</figure>

The only thing these two vehicles have in common is the name, and perhaps some subtle exterior design cues. 

I think I wouldn't be lying if I said that drivers back in 1975 found more enjoyment in their Bronco than drivers of the 2022 model, which, if the demographics of drivers of similar vehicles is any indication, will mostly be relegated to hauling groceries and picking up the kids from school. 

Ford is now designing with a different user base in mind, and those who appreciated the basic qualities and ruggedness of the early Bronco will have to settle for something different.

But I'm not here to talk about cars but about **text editors**. 

## My Use Case for a Text Editor

I use a text editor for coding and writing on my website. These two applications don't require any fancy formatting: code can't be written in anything other than a plain text editor, and I write my articles and blog posts in [Markdown](https://en.wikipedia.org/wiki/Markdown) (which is a variation of plain text that can easily be converted into fully formatted HTML for publication on the web).

I had been using **Microsoft Visual Studio Code** (or simply MS VS Code), which is a great text editor, but as any software made by a large corporation it can be bloated and slow. Also, as I hinted in my [first post](/posts/reboot/), I am trying to wean myself away from technology developed by large corporations, and opting instead for open source alternatives. The time was right to give **Vim** a try.

## Vim vs. VS Code

<a href="https://www.vim.org/">Vim</a> is an old but powerful text editor that comes with your Linux installation. You can access it directly from the command line and toggle back and forth from Vim to the command line and viceversa.

Since Vim was developed before the mouse was invented, and before you could have several windows open on your screen at the same time, you have to use different key bindings to navigate and edit your document. In fact, what makes Vim so popular among experienced programmers is that your hands never have to leave the keyboard. 

The drawback is that you have to learn the key bindings and alternate between three different <a href="https://linuxhandbook.com/vim-modes/">modes</a> (Normal, Visual and Insert). I won't be talking about the specifics of Vim here, since it is outside the scope of this article, but I will link to a few good resources at the bottom of this post.

**VS Code**, on the other hand, is a modern **IDE** (Integrated Development Environment). Your screen is usually divided in three parts: folders, document and terminal. Since it works as a **GUI** (Graphical User Interfase) you can use your mouse and a bunch of menu commands to make your life easier. 

<figure>
<img src="/img/vim.png" alt="screenshot of Vim text editor" width="640px" class="gallery" />
<figcaption class="small">Vim Text Editor</figcaption>
</figure>
<br />
<figure>
<img src="/img/vscode.png" alt="screenshot of VS Code text editor" width="640px" class="gallery" />
<figcaption class="small">VS Code Text Editor</figcaption>
</figure>

The main difference, though, is the amount of **RAM** they use. If you want to edit a code file, or write an article in plain text, just having VS Code open will consume **343.5MB** of RAM. On the other hand, Vim will only use **3.8MB** (both tested in my own computer). This means that VS Code uses **90 times** (!) more memory than Vim to work on a plain text file.  

## What About Microsoft Word?

You can't use **Microsoft Word** for coding, since it is not a plain text editor. However, it is worth comparing **MS Word vs. Vim** for my second use case: writing articles and blog posts in plain text. 

The amount of RAM you need to keep a copy of MS Word open is a [hotly contested topic](https://bit.ly/3FYIeHx). It seems that it depends on what hardware you are using and what version of MS Word you are running, In any case, I've seen figures that fluctuate between **250MB** and **several Gigabytes** (!), totally insane for working with a simple text file. 

If you use MS Word because you need to format your text, remember that you can always write in Markdown on a simple plain text editor, and then easily transform your files to HTML to publish your articles on the web.

## In Summary

I am still learning Vim and forcing myself to write my posts with it instead of VS Code. Even if the learning curve is steep, I find that by learning two or three new commands every day I am getting much better. I am finally beginning to understand why those experienced coders rave so much about Vim.

## Resources

[Vim 101: A Beginners Guide To Vim](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-vim-101-a-beginners-guide-to-vim): By the Linux Foundation

[Write Plain Text Files](https://sive.rs/plaintext): By Derek Sivers


