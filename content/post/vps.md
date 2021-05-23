---
title: "Moving My Site to a Digital Ocean VPS"
description: Summary of the process to set up a virtual private server at Digital Ocean, and deploy a website
date: 2017-06-18
---

**Update:** As of May 9, 2020 I am hosting my site in Github Pages.

I just moved my site to a [Digital Ocean virtual private server (VPS)](https://digitalocean.com). I had been wanting to do it for a long time but it seemed complicated, and using Github Pages to host my site was both easy and convenient. In the end, my desire to learn how to operate a <abbr title="Virtual Private Server">VPS</abbr> won over the convenience of Github, and I decided to take the plunge.

First, I created a simple *Hello World!* HTML page and, after some trial and error, was able to deploy it to a VPS using a domain name that I had lying around. Since that worked, the next logical step was to try to move my site. Moving my site was slightly more complicated because I'm using a static site generator, which adds a few more steps and nuances to the process. 

In the end, it took some concentration, three or four hours of uninterrupted time, and heavy use of Google and Stack Overflow, but the move was successful and my site now resides in its own Digital Ocean virtual private server (or "droplet", as DO likes to call their VPS's).

Below are the series of steps I took:

### Setting Up the VPS

1. [Create a new Digital Ocean VPS](https://www.digitalocean.com/community/tutorials/how-to-create-your-first-digitalocean-droplet-virtual-server).
2. SSH into the VPS and create a new user. 
3. Give the new user superuser privileges, and set up SSH keys for the new user so that I won't have to log in as root. 
4. Disable root login (for extra security). [This article](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04) shows how to do 2, 3, and 4.
5. [Configure my domain name](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean). I did it slightly differently than the article explains: I didn't point the domain name servers to Digital Ocean since I wanted to keep using Godaddy's email forwarding feature (which would have been disabled if I had moved my DNS to DO). Instead, I just created an A record pointing *@* to the I.P. of my VPS, and a CNAME pointing *www* to *@*. I then went to Godaddy and did exactly the same thing.
6. [Install a NGINX web server](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-14-04-lts). Pretty straight forward.
7. [Create server blocks and configure one for my site](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-14-04-lts). Server blocks let you host multiple sites on the same server. I also did this part slightly differently than explained in the article: I left the default server location intact, so that when I type the I.P. of my VPS in the browser's address bar it still shows the standard NGINX welcome message. Basically, this means that I set up my site like the *test.com* example site in the article. 

### Updating my site

1. Open my site's folder in my local computer and make some changes.
2. Type `npm start` in the command line, open the browser and navigate to `localhost:8082` to see the site.
3. If everything looks good, it's time to git commit the changes and push them to the site's remote repository in Github. This is easy: `git add .` to add the files to the staging area, `git commit -m "short message"` to commit the changes, and `git push origin master` to upload the changes to the remote repository.

### Uploading my site to the VPS

1. If I haven't done it already, run `npm start` to generate the static site, which will load to folder `./public`
2. Move the files in `./public` to the VPS's `/var/www/mariosanchez.org/html`, which is the folder within the VPS where the website files will be hosted. 
For this, I created a bash file, located in the root directory of my project, that I named `deploy.sh`. This bash file syncs the contents of the `./public` folder with the contents of the `/var/www/mariosanchez.org/html` folder (thanks to [Parimal Satyal](https://www.neustadt.fr/parimal-satyal) for this tip!):

``` bash
#!/bin/sh
rsync -av -e ssh public/* myusername@my.ip.address:/var/www/mariosanchez.org/html
```

<br />Obviously, *myusername* and *my.ip.address* need to be replaced by my actual VPS information. 
To run the bash script I just type `./deploy.sh`, which is the name of the bash script.
3. Go to `mariosanchez.org` and see the changes live!




