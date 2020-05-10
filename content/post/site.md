---
title: "How This Site Is Made"
slug: site
type: blog
label: Blog
date: 2020-05-09
blurb: 
tags: tech
---

This site has gone through several iterations. First, I hand-coded it page by page using plain vanilla HTML and CSS, but that became a problem as my site grew. The problem with using that approach is that, for example, if you want to make changes to common areas like your navigation menu, you have to update every single page of your site by hand (not easy or fun).

As I got more into coding I discovered static site generators, which are basically programs that create static sites in a more efficient way: they comb through one or more folders containing content files usually written in [Markdown](https://daringfireball.net/projects/markdown/) (e.g. blog posts), convert them to HTML, and place them in a special folder that you can then deploy to the open web using any web hosting service. 

Static site generators are ideal for blogs or for small to medium sites where content doesn't change based on user input. A static site generator can be written in any programming language. Some of the most popular ones are built with Python, JavaScript, Ruby or Go. 

I am currently using a static site generator written in [Go](https://golang.org) called [Hugo](https:gohugo.io). Go is an open source programming language started by Google, that makes it easy to build simple, reliable, and efficient software. Hugo is blazing fast and the setup process is pretty straightforward. It also appears to have a strong following and is updated frequently. 

Chosing a platform supported by a vibrant, active community is crucial if you don't want to deal with dependencies that become stale or conflicting with each other. That is what happened with my previous setup, a JavaScript-based blog engine called [Metalsmith](https://metalsmith.io). It worked great when I started with it about four years ago, but it had recently started to crash and some dependencies stopped working. Rather than fixing a broken site I decided to start from scratch with [Hugo](https:gohugo.io), and I couldn't be happier.

As far as the look and feel of the site is concerned, I'm using a custom style sheet that I hand-coded myself. 

For hosting, I use [Github Pages](https://pages.github.com): it's easy, reliable and free, and it comes with HTTPS and custom domain support. It's a great solution for static sites. With my previous setup, I was deploying my site on a Virtual Private Server at [Digital Ocean](https://digitalocean.com). I did it mainly to learn how to operate a VPS. After a while, however, it became evident that it was overkill for what I needed (just host a basic static site) so I went the Github route (saving $5 a month in the process).



