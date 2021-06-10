---
title: "Donate Button with Paypal Integration"
description: A Donate button with Paypal REST SDK integration through a NodeJS/Express server
date: 2020-05-30
images:
  - 
---

**Made with**: <i class="fab fa-node"></i> Node and Express

[Source Files](https://github.com/mariobox/donate-paypal) 

<hr class="art" />

I got the inspiration for this project from [this post](https://willem.com/blog/2020-03-25_designing-and-implementing-a-micro-payment-system/) in Willem Middelkoop's blog, and from the site [buymeacoffee.com](https://buymeacoffee.com). Simply put, I wanted to create a Donate button that upon clicking set in motion the process of paying through Paypal and redirecting back to my site. Before any styling, it would look something like this:

<p class="centered"><img src="/img/donate.png" class="gallery medium center" /></p>

While Willem's post went through the basic process, it didn't provide detaied instructions on how to make this work on an actual server, or how to interact with the payment platform's API. That's when I went online and searched for tutorials and videos that might help me. 

Fortunately, I run across [this video](https://www.youtube.com/watch?v=7k03jobKGXM&t=1299s) by Brad Traversy that does a wonderful job of explaining how to tie a basic **Node/Express** server with **Paypal**. However, I wanted to go a step further and not only make the application to work in my own computer but also on a virtual private server accessible from the Internet. It just happens that Brad had already created [this other video](https://www.youtube.com/watch?v=oykl1Ih9pMg&t=370s) explaining how to deploy a basic Node/Express app in a VPS, together with domain name mapping and HTTPS certification. The video comes with [detailed written instructions](https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896).

Rather than explain every single detail, I'm going to lay out the basic steps I took and link to the appropriate resources:

## 1. Build a basic Node/Express app

``` js
const express = require('express')
const app = express()
const port = 3000

// Set our template engine of choice
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/donate', (req, res) => res.send('donate'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```

`'/donate'` is a route that points to a template in the `views` folder that will make our /donate page look like this in the browser:

**Note**: if you're not familiar with how Express works you may want to head to [Expressjs.com](https://expressjs.com) to familiarize yourself with that first.

## 2. Create a Paypal developer account 

You need to sign up at [developer.paypal.com](https://developer.paypal.com). Paypal automatically generates a dummy business account and a dummy personal account that you can use for testing in their Sanbox environment.

## 3. Add routes and functionality to our Express app

This allows our Donate button to become fully functional. You can take a look at the routes in the [source code of app.js](https://github.com/mariobox/donate-paypal/blob/master/app.js).

By running `nodejs app.js` in the command line, we can test this app in our own computer.

The next challenge is to deploy the application in a virtual private server, but that's outside the scope of this post.






















