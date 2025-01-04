---
title: "Micro Blog Front End with React"
description: Twitter-inspired micro blog simulator made with ReactJS 
date: 2018-01-23
images:
  - https://www.mariosanchez.org/img/micro-blog.png
---

<img src="/img/micro-blog.png" style="width: 100%; margin-bottom: 3em; margin-top: 2em">

**Made with**: <i class="fab fa-react"></i> ReactJS

<p class="bullet"><a href="https://github.com/mariobox/react-micro-blog">Source Files</a> | <a href="https://mariobox.github.io/react-micro-blog">Live Demo</a> </p><hr class="art">

This front end project is inspired in a minimal version of Twitter. We use React components and JavaScript ES6 classes, and put into practice the concept of state. It also uses JSX syntax. 

We start by running [Create React App](https://create-react-app.dev/), which provides the scaffolding for our site and performs all the lifting so that we can focus on the code. 

Our app has six components:

* <code>App.js</code>: our main component
* <code>Greeting.js</code>
* <code>Login.js</code> (if the user is not logged in)
* <code>Profile.js</code> (if the user is logged in).
* <code>AddPost.js</code> to manage the post input field, and
* <code>Post.js</code> which lists the posts in reverse chronological order.

State is concentrated in the main <code>App.js</code>, and then passed down to the other components via props. 

There are three state properties:

* `posts`: an object with a list of all posts
* `user`: the information of the user who is logged-in at any given moment
* `isLoggedIn`: a boolean indicating if somebody is logged in or not

The <code>isLoggedIn</code> boolean tells the <code>Greeting.js</code> component what to display via conditional rendering: if false, display a log-in form <code>Login.js</code>. If true, display the current user's profile <code>Profile.js</code>.

Once logged in, users can write posts and they will immediately appear as the first post of the list.

Check the app in action [here](https://mariobox.github.io/react-micro-blog).



