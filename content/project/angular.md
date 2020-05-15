---
title: "Building a Single Page Application with AngularJS"
description: Create a barebones brochure site SPA using Angular
date: 2016-08-02
images:
  - https://www.mariosanchez.org/img/angularjs.png
---

<img src="/img/angularjs.png" class="gallery medium" />

**Made with**: <i class="fab fa-angular"></i>Angular

**Project Summary**: 

Create a barebones brochure site CPA using Angular

[Source Files](https://github.com/mariobox/angulartestsite) | [Demo](https://mariobox.github.io/angulartestsite)

<hr class="art" />

A few weeks ago I came across the concept of <abbr title="Single Page Application">SPA</abbr>, or [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application), and learned that they can be created with [Angular.js](https://angularjs.org/), a JavaScript library supported by Google.

Most definitions of SPA you can find online are very technical and full of jargon, so perhaps the best way a newbie web developer like me can understand it is with an example:

Suppose you have an <code>index.html</code> web page with three different sections: 

* The header (where the navigation menu is)
* The content area, and 
* The footer.

The header and the footer remain the same all over the website, so the only thing that really changes when you go from the <code>index.html</code> page to, say, the <code>about.html</code> page is the actual page content. 

What a SPA does is to allow the header and the footer to stay right where they are, while it calls only the actual content of the <code>about.html</code> page and sticks it right between the header and the footer. No new page is loaded (that's where the "Single Page" part of Single Page Application comes from).

The switch between the content of your <code>index.html</code> and your <code>about.html</code> page is done on the fly by the browser of the person viewing your site, by following the **Angular.js** directives embedded in the page code.

I wanted to test building a SPA by creating a barebones, basic brochure site, using **Angular.js** to generate four page views: Home, About, Contact and Resume.

I found an [excellent tutorial](https://www.airpair.com/angularjs/building-angularjs-app-tutorial) online. After reading it carefully several times I started by creating the index template, which contains the Angular directives to make the site work, and which acts as a template for the whole site. 

I then created bare-bones html files for the other three pages of the site: About, Contact and Resume (nothing fancy, just a couple of `<h1>` tags and a paragraph).

Finally, I tweaked the **main.js** file to refer to my four pages: <code>/home</code>, <code>/contact</code>, <code>/about</code>, and <code>/resume</code>, instead of all the different pages listed in the tutorial (which uses a bloated website template that I decided not to follow, for simplicity's sake. I also didn't use the Bootstrap style sheets suggested by the author, opting instead for a much simpler style sheet based on [Skeleton](http://getskeleton.com)). 

The **main.js** file is where the real magic happens: it contains the Routes, which are basically the instructions that **Angular.js** gives the browser: "if user clicks on <code>/about</code> do this; if user clicks on <code>/contact</code> do that".

If you want to try it yourself I recommend that you read and follow the [tutorial](https://www.airpair.com/angularjs/building-angularjs-app-tutorial). The author is obviously a very capable programmer and can explain things much better than I can.

You can also clone the site I created. Here is the Github repo: [http://github.com/mariobox/angulartestsite](http://github.com/mariobox/angulartestsite/).

I have also created a [Live Demo](http://mariobox.github.io/angulartestsite) so you can try it out on your browser.
