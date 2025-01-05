---
title: About This Site
description: Why I developed this site, what tools I use, and the process I follow
date: 2020-05-29
draft: true
tags: tech
---

### Goals
The goal of this site is to serve as a web development playground where I can practice and document what I learn. 

### Specs

1. Simple, minimalistic design made from scratch.

2. Non-transactional, non-commercial and no Google Analytics or similar.

3. Responsive: must look good on a mobile phone.

4. Work-In-Progress: the site will be under continuous improvement.

5. Static (HTML, CSS and JS).

### Implementation Details

This site is built with [Hugo](https://gohugo.io), a static site generator written in **Go** that prides itself of being the *world's fastest framework* for building websites. **Hugo** enjoys active community support. 

#### Hugo Setup Process

After installing **Go** and **Hugo** you can create a skeleton for a new site by going to your command line and typing:

``` bash
hugo new site mysite
```
This command creates a folder in your computer called `mysite` and populates it with several other folders, the most important of which are:

* `/content` which holds your content files
* `/layouts` which holds your different page templates, and 
* `/static` which holds static assets such as images, style sheets and JavaScript files.

Under the `/content` folder, you can create subfolders for the different types of content you want to create, in my case:

* `/post`: Things I write (blog posts, book reviews, etc.)
* `/project`: A portfolio of my coding projects

All content files are written in **Markdown**.

To control the layout you can create `/_default` templates inside the `/layouts` folder. I created these three:

1. `single.html` to display single pages (same template for blog posts, projects and notes)
2. `list.html` to display any collection of posts, projects, notes, etc. I chose to display just titles and dates.
3. `li.html` to display the title and date of each individual post or project.

Also in the `/layouts` folder you need to create `index.html` file, which contains the code for the home page of the site. You will need to write that file in HTML.

Finally, you can create `/partials` templates for the common areas of the site, like `header.html` and `footer.html`.

#### Hugo Development Flow

To add content to your site, run the command `hugo server` on the command line to open a development server in `localhost:1313` where you can see all your changes in real time. Once you're finished editing you can run the command `hugo`, and the static files will created and placed in a `public` folder that you can then deploy to the open web.

#### Hosting
You can host your site anywhere you want. This site is now hosted in [Github Pages](https://pages.github.com). Github Pages is reliable and free, and comes with HTTPS and custom domain support, which makes it a great solution for static sites and personal webites. I've also hosted the site in a [Digital Ocean](https://digitalocean.com) virtual private server, but I find Github Pages enough for what I need right now.

### Closing Comments

The site's [source files](https://github.com/mariobox/mariosanchez.org) are open-source. In the spirit of sharing, you may fork the [repository](https://github.com/mariobox/mariosanchez.org) and use the code for your site. Just add your own content and pictures.

