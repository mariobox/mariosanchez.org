---
title: "How To Install Ubuntu Linux on an Empty Hard Drive"
slug: ubuntu
date: 2019-04-13
---

<img src="/img/ubuntu.jpg" class="gallery medium">

When the hard drive of my old Toshiba Satellite died suddenly I thought of getting rid of it, but when I learned that you could buy a refurbished hard drive on ebay for very little money (around $35) I ordered one and installed it.

The clean, empty hard drive gave me the perfect excuse to install a **Linux operating system**, and to configure the old laptop to become the ideal web development environment. I decided to go with the [Ubuntu](http://www.ubuntu.com) flavor of Linux, as it is the easiest to install and the most user-friendly for those new to Linux.

The first thing you need to do is to use another computer to download the latest [Ubuntu ISO file](https://www.ubuntu.com/download/desktop). Make sure to choose the ISO file of the latest Ubuntu version with long term support (it will have the letters LTS next to the version). 

What is an **ISO file**? An ISO file is a disk image of an optical disc. In other words, it is an archive file that contains everything that would be written to a CD, sector by sector, including the disc file system. ISO image files bear the .ISO filename extension. 

The reason ISO files have become popular is that computers rarely come with a CD ROM drive these days. In the past, when you wanted to install a program, you would pop in a CD ROM and go from there. Now it's more common to use an ISO file.

In order to make the ISO file useful, you need to use it to create a **bootable USB stick**. There are several ways to do this, depending if you're downloading the ISO file from a Windows or a Linux computer. 

If you download it from a Windows computer, you need a simple and free USB stick writing tool called [Rufus](https://rufus.akeo.ie/). If you download it from a computer running Ubuntu Linux you use the built-in **Startup Disk Creator** tool. Ubuntu provides detailed instructions on how to create a bootable USB drive here:

[Create a bootable USB stick on Windows](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-windows#0)

[Create a bootable USB stick on Ubuntu](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-ubuntu#0)

Once you have your bootable USB stick ready, you can do a couple of things with it:

* You can **run Ubuntu from the USB drive**, without installing it on your hard drive. This is good if you just want to try out Ubuntu and get familiar with it before insalling it.

* You can **install Ubuntu in your laptop** (the one with the empty hard drive! Not the one you used to download the ISO file. Just making sure :).

The first thing you need to do is to plug the USB stick in a USB port and turn on your computer. As soon as the first screen comes up press F12 (or Escape or F2 depending on the computer you're using) and choose the option to [boot the computer from the USB drive](http://lifehacker.com/5991848/how-to-boot-from-a-cd-or-usb-drive-on-any-pc).

Once Ubuntu comes up on the screen, it will give you the option to try it out from the USB port or to install it in your hard drive. Choose **Install Ubuntu**, but first activate the wifi connection by clicking on the wifi icon located at the top right of the main window, so you can install updates during installation. 

Then, just follow the prompts chosing the default options until Ubuntu is installed. 

One of the most important steps during the installation process is to provide your user information. You will be prompted to type your name, a name for your computer, a username and a password. By default, the first user account you create when you install Ubuntu will have administrative privileges, so you'll be automatically set up as administrator.

To understand Ubuntu and how you can make the most out of it, you can read these tutorials:

[The Complete Beginner's Guide to Ubuntu Linux](https://www.lifewire.com/beginners-guide-to-ubuntu-2205722)

[Official Ubuntu Desktop Guide](https://help.ubuntu.com/stable/ubuntu-help/index.html)

My new Ubuntu installation works perfectly. It is fast and efficient, and the interface is intuitive enough that anybody can use it. 

Ubuntu comes **Firefox** already installed, and with **LibreOffice**, an open source office suite compatible with Microsoft Office. That means you can open and edit files like Word documents, Excel spreadsheets and PowerPoint presentations and share them with other users quickly and easily. 

Overall, I am very happy that my old laptop got a new lease of life, and that installing (and using) the free and open source Ubuntu on it was easy and painless.

Having an empty laptop with Ubuntu installed will provide you with a blank canvas to start configuring it for web development. You can now create **ssh keys**, install **Git**, learn to use the **terminal**, build and deploy websites, etc. But we'll talk about those things in other posts.


