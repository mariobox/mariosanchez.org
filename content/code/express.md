---
title: "Demo Site with Node and Express"
description: A simple site made with Node and Express, using dynamic routes
date: 2020-05-18
images:
  - 
---

**Made with**: <i class="fab fa-node"></i> Node and Express

<p class="bullet"><a href="https://github.com/mariobox/express-demo">Source Files</a>  <a href="https://mjq48.sse.codesandbox.io/">Live Demo</a> <hr class="art"></p>

[Source Files](https://github.com/mariobox/express-demo) | [Live Demo](https://mjq48.sse.codesandbox.io/)

<hr class="art" />

Before we go to our example site, let's talk about Express:

[Express](https://expressjs.com/) is a web framework usually paired with Node. It is a light weight tool that makes it easy to build dynamic web applications.

Since Express is made with JavaScript, you can install it directly from <abbr title="Node Package Manager">[NPM](https://www.npmjs.com)</abbr>. Once you [install it](https://expressjs.com/en/starter/installing.html), you can build your first Express aplication: a simple **Hello World!** message displayed when you access the <code>/</code> route, or the root of your website (usually that will be your home page):

Open your text editor and create a file called `app.js` (make sure that during your installation you set the **entry point** in your `package.json` as `app.js` instead of `index.js`).

Then type the following:

``` js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => 
  console.log(`Example app listening at http://localhost:${port}`)
) 

```

The first two lines indicate that you want to import Express and that you will assign it to a variable called `app`.

The port is where you will see your application at work: [http://localhost:3000](http://localhost:3000)

Then, you will tell the program that when you go to the home page via your root `/` route, you want it to **send** the phrase **Hello World!** to the browser.

Finally, you instruct the app to listen for changes in port 3000.

Once all that is set up, save the file, go to your command line, and type:
``` bash
node app.js 
```
Then, navigate to [http://localhost:3000](http://localhost:3000), and you should see this in the browser:

<p>Hello World!</p>

Now, let's say that instead of sending just text you want to send an HTML snippet, for example:

``` js
app.get('/', (req, res) => 
  res.send(
    '<h1>Hello World!</h1><p>This is my new website.</p>'
  )
)
```


Save your work, run `node app.js` again and refresh your browser. You should see someting like this:


<h1>Hello World!</h1>
<p>This is my new website.</p>

Sending a bunch of loose HTML is not very common, though. Most of the time you would like to send a proper HTML document. You just have to place the previous code in an `index.html` file, save the file in the `views` folder (Express will find it) and use the `render` method instead of `send`:

``` js
app.get('/', (req, res) => res.render('index'))
```
The result will be the same as before:

<h1>Hello World!</h1>
<p>This is my new website.</p>

But you can go a step further, and ask Express to insert variables to your websites! Here is where the dynamic nature of Express starts to shine. You can use any templating engine, for example [Pug](https://pugjs.org/api/getting-started.html), and create an `index.pug` file that looks like this:

``` bash 
block content
    h1 Hello World!
    p My name is ${name}!
```

Then, just pass an object with the variable **name** with your render method, like this:

``` js
app.get('/', (req, res) => res.render('index', { name, 'Joe'}))
```

And your website will display:

<h1>Hello World!</h1>
<p>My name is Joe!</p>

There are many other things that you can do with Express, like grabbing parameters from the URL and passing them to your templates. We will see that in action in our demo site below.

<hr />

## Demo

This is a basic dynamic site made with ExpressJS.

It has an <code>/index</code>, <code>/contact</code> and <code>/about</code> pages, each of them rendered by a basic Express route, and three car-specific pages rendered with Express dynamic routes using parameters taken from the URL. 

The aim is not to make a pretty site but just show the basic functionality that Express gives you to build a back-end dynamic site.

The site's home page will present you with a choice of links for three car brands. When you click on those links you are taken to a special page of the individual car brand that you selected and will see a bulleted list with three popular models from that brand.

Even though the pages look very simple, this is not a static site. The pages are generated <strong>on the fly</strong> by Express the moment you click on a link.

If you want to clone this example go here: </p><a href="https://github.com/mariobox/express-demo">https://github.com/mariobox/express-demo.</a>

If you want to play around with the site, you can use the embedded page below:

<iframe src="https://mjq48.sse.codesandbox.io/" title="Express Demo" width="100%" height="850px" frameborder="1px"></iframe>

Demo hosted in [Codesandbox](https://codesandbox.com)




