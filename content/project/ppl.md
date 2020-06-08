---
title: "Donate Button with Paypal Integration"
description: A Donate button with Paypal REST SDK integration through a NodeJS/Express server
date: 2020-05-30
images:
  - 
---

**Made with**: <i class="fab fa-node"></i> Node and Express

[Source Files](https://github.com/mariobox/donate-paypal) | [Live Demo](https://mariosanchezcarrion.com/donate)

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

## 2. Get a virtual private server at Digital Ocean

The virtual private server is where our application will be deployed. You will need to:

* Sign up to Digital Ocean
* Create a Droplet (Digital Ocean's name for their virtual private servers)
* Make a note of your assigned I.P. address (you will need it later)

It may be useful at this point to learn how to log into a droplet via SSH (so you don't need to use a password), and to create a new user with **sudo** privileges so that you don't have to log in as **root**. [Follow this tutorial](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04).

## 3. Get a domain name and point it to your Digital Ocean virtual private server

You need to either register a domain name or use one that you may already have. Then, you need to configure it to point to your server. For this last part you can [follow this tutorial](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars).

## 4. Deploy our basic Express app in our virtual private server

You can either copy the files one by one, or push the app to a Github repository and then clone it in your VPS. You may also want to install a process manager like [PM2](https://pm2.keymetrics.io/) so that your application runs all the time, even when you log out of your server.

## 5. Create a NGINX web server and configure it

The idea is to make our Express app visible not just through a port (e.g. *domain.com:3000*) but through a plain domain: *domain.com*. For that, we need to create a NGINX web server, and configure it so that our Node/Express app maps to the NGINX server. This process is known as setting up the NGINX server as a reverse proxy.

## 6. Create a Paypal developer account 

You need to sign up at [developer.paypal.com](https://developer.paypal.com). Paypal automatically generates a dummy business account and a dummy personal account that you can use for testing in their Sanbox environment.

## 7. Add routes and functionality to our Express app

This allows our Donate button to become fully functional.

Steps **1** to **5** are covered in [this video](https://www.youtube.com/watch?v=oykl1Ih9pMg&t=370s) and its [companion notes](https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896).

Steps **6** and **7** are covered in [this video](https://www.youtube.com/watch?v=7k03jobKGXM&t=1299s).

<hr class="art" />

My demo is now finished and fully functional, although it could still use some styling! :) 

If you want to try it out, click on the Donate button below and use these dummy credentials to go through the motions in Paypal's sandbox environment:

``` html
Email: sb-akf271945802@personal.example.com

Password: BmWWp#S4
```

<iframe src="https://mariosanchezcarrion.com/donate" width="100%" height="500px"></iframe>

<p class="small"><em><strong>DON'T WORRY</strong>: You won't get charged. This is a dummy environment!</em></p>





















