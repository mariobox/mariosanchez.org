---
title: About This Site
description: Why I developed this site, what tools I use, and the process I follow
date: 2020-05-29
---

### Goals
The main aim of this site is to serve as a **web development playground** where I can **practice and document** what I learn. This site also advocates for open-source web development and supports the open-source community.

### Intentions

#### 1. Minimalism: 
The site will have a simple design made from scratch.

#### 2. Privacy: 
The site will be **non-transactional**, **non-commercial**, and will have **no ulterior motive** beyond documenting my development journey.

#### 3. Open Source: 
The site will be developed with **open-source** tools and technologies. It will honor the original intent of the creators of the <abbr title="Worldwide Web">WWW</abbr>: to bring people and ideas together through a free, decentralized and open system. 

#### 4. Work-In-Progress:
As I learn new things every day, this site will be **under construction**. 

### Implementation Details

#### 1. Static vs. Dynamic: 
I decided to make the site [static](https://techterms.com/definition/staticwebsite) instead of using a database-driven tool like Wordpress. This is the simplest, fastest and most secure set up. Static sites are **ideal for blogs and small-to-medium sites** where content doesn't change based on user input. 

To create the site I use a **static site generator**, which is a program that combs through one or more folders containing content files usually written in [Markdown](https://daringfireball.net/projects/markdown/), converts them to HTML, and places them in a special folder that you can then deploy to the open web using any web hosting service. 

#### 2. Platform: 
I decided to use [Hugo](https://gohugo.io), a static site generator written in **Go** that prides itself of being the **world's fastest framework** for building websites. **Hugo** enjoys active community support, so the likelihood of having to deal with stale dependencies in the future is very small. Of all the platforms I've used so far, **Hugo** has been the fastest and most reliable.

#### 3. Look and Feel: 
I chose not to use third-party themes because most of them are bloated with useless features-which would run against our minimalist approach. I use a hand-coded [CSS style sheet](/css/minimal.css) optimized for speed, that provides a look and feel similar to a text editor from the early days of computing.

#### 4. No Analytics: 
This site **doesn't run Google Analytics** or any other tracking software. There are also **no affiliate links**. Links to the books I review point to the author's page or to [Indiebound](https://www.indiebound.org/), not to Amazon. This site is continuously monitored by the <abbr title="Electronic Frontier Foundation">EFF</abbr> [Privacy Badger](https://privacybadger.org/) browser extension to verify no tracking tools are present.

<img src="/img/privacy.jpg" class="gallery large" />

#### 5. Secure HTTPS: 
The site is served over [HTTPS](/post/https/) (secure HTML) to ensure all traffic is **encrypted**. You may notice the **lock** icon next to the URL in the address bar:

<img src="/img/httpsms.jpg" />

#### 6. Hosting
The site is hosted in [Github Pages](https://pages.github.com): it's easy, reliable and free, and **comes with HTTPS and custom domain support**. Github Pages is a great solution for static sites and personal webites. As you may know, Microsoft acquired Github in 2018. While I try to stay away from Big Tech solutions, I am making this exception because Microsoft is showing support for the open-source community. If this changes I will move my site to a **virtual private server** at [Digital Ocean](https://digitalocean.com), as I've done in the [past](/post/vps).

### My Hugo Site Setup Process

After installing **Go** and **Hugo** I created the skeleton for a new site by going to my command line and typing:

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

To control the layout I created three `_default` templates inside the `layouts` folder:

1. `single.html` to display single pages (same template for blog posts, projects and notes)
2. `list.html` to display any collection of posts, projects, notes, etc. I chose to display just titles and dates.
3. `li.html` to display the title and date of each individual post or project.

Also in the `layouts` folder I created an `index.html` file, which contains the code for the home page of the site.

Finally, I created two `partials` templates: `header.html` and `footer.html` that can be called from the other templates. These two templates contain information common to all pages of the site.

That's basically it. 

When I'm adding content to the site, I run `hugo server` to open a development server in `localhost:1313` where I can see all my changes in real time. Once I'm finished editing I simply run the command `hugo`, and  the static files are created and placed in a `public` folder that I can then deploy to **Github Pages** using [Git](/post/gcs).

### Changelog

As of May 10, 2020, I am documenting all significant changes to this site in a [changelog](/post/changelog/).

### Closing Comments

The site's [source files](https://github.com/mariobox) are open-source. In the spirit of sharing, you may fork the [repository](https://github.com/mariobox) and use the code for your site. Just add your own content and pictures.

