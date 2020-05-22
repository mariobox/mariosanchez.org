---
title: "How This Site Is Made"
description: "The tools I use and the process I follow to develop and deploy my personal site"
date: 2020-05-21
---

## The Beginning

This site has gone through several iterations. First, I hand-coded it **page by page** using plain vanilla **<abbr title="Hypertext Markup Language">HTML</abbr>** and **<abbr title="Cascading Style Sheets">CSS</abbr>**, but that became a problem very quickly. The main issue with hand-coding each page is that when you need to make changes to common areas like the footer or the navigation menu you have to update every single page (not very efficient or fun).

## Static Site Generators

As I got more into coding I discovered **static site generators**, which are basically programs that create [static sites](https://techterms.com/definition/staticwebsite) in a more efficient way: they comb through one or more folders containing content files usually written in [Markdown](https://daringfireball.net/projects/markdown/) (for example blog posts), convert them to HTML, and place them in a special folder that you can then deploy to the open web using any web hosting service. 

Static site generators are **ideal for blogs or for small-to-medium sites** where content doesn't change based on user input. A static site generator can be written in any programming language. Some of the most popular ones are JavaScript, Python, Ruby or Go. 

## Enter Hugo

I am currently using a static site generator written in [Go](https://golang.org) called [Hugo](https:gohugo.io). Go is an **open-source programming language** started by Google, that makes it easy to build simple, reliable, and efficient software. Hugo is blazing fast and the setup process is pretty straightforward. It also appears to have a strong following and it's updated frequently. 

Chosing a platform supported by a vibrant, active community is crucial if you don't want to deal with dependencies that become stale or conflict with one another. That's what happened to my previous setup, a JavaScript-based blog engine called [Metalsmith](https://metalsmith.io). It worked great when I started with it about four years ago, but by being dependent on packages and modules created by many different people it had recently started to crash, and some dependencies stopped working. 

Rather than venturing deep into [dependency-hell](https://en.wikipedia.org/wiki/Dependency_hell) to find out what was wrong, I decided to start from scratch with [Hugo](https:gohugo.io). I couldn't be happier I did.

## This Site's Aims

The main aim for this site is to **be as minimalistic as possible**, with focus on clarity and speed. That's why I'm using a [custom style sheet](https://www.mariosanchez.org/css/minimal.css) that I hand-coded myself, instead of a bloated third-party template. Whenever an image is used, it is only because it adds value to the content. 

Another aim is to **respect the visitor's privacy**: this site doesn't run Google Analytics nor any other site stats tool. Also, it is served through secure [HTTPS](/post/https/) (notice the *lock* icon next to the URL in the address bar):

<img src="/img/httpsms.jpg" /> 

Finally, the HTML code has been [validated](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmariosanchez.org%2F) by [w3.org](https://w3.org) for the best browser experience and load speed.

## Where Is It Hosted?

I am currently hosting my site in [Github Pages](https://pages.github.com): it's easy, reliable and free, and it **comes with HTTPS and custom domain support**. Github Pages is a great solution for static sites and personal webites. In my previous setup, I was deploying my site on a **virtual private server** at [Digital Ocean](https://digitalocean.com). I did it mainly to learn how to operate a VPS, but after a while it became clear that it was overkill for what I needed (just a place to host a basic static site) so I went the Github route.

## My Hugo Site Setup Process

After installing **Go** and **Hugo** I created a new site scaffolding by going to my command line and typing:

``` bash
hugo new site mysite
```
This command creates a folder in your computer called `mysite` and populates it with several other folders, the most important of which are:

* `content` which holds your **content files**
* `layouts` which holds your different **page templates**, and 
* `static` which holds **static assets** such as images, style sheets and JavaScript files.

Under the `content` folder, I created two subfolders for the two types of content I wanted to display on my site:

* `post`: Things I write (blog posts, book reviews, etc.)
* `project`: A portfolio of my coding projects

All content files are written in **Markdown**.

For templates, I just created three `_default` ones:

1. `single.html` to display single pages (same template for blog posts, projects and notes)
2. `list.html` to display any collection of posts, projects, notes, etc. I chose to display just titles and dates.
3. `li.html` to display the title and date of each individual post or project.

I also created an `index.html` file in the `layouts` folder, which contains the home page of the site.

Finally, I created two `partials` templates: `header.html` and `footer.html` that are called from the other templates. These two templates contain information that is common to all pages of the site.

That's basically it. To create the static site to be deployed, I just run the `hugo` command and the static files are placed in a `public` folder that I then deploy to Github Pages using [Git](/post/gcs).

## Closing Comments

If you want to give Hugo a try and need more detailed instructions check out their site: [gohugo.io](https://gohugo.io). In the spirit of sharing, if you want to use the source code of this site feel free to fork the [Github repository](https://github.com/mariobox). Just add your own content and pictures.

