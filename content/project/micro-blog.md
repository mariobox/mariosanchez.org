---
title: "Micro Blog Front End with React"
slug: micro-blog
date: 2018-01-23
---

<img src="/img/micro-blog.png" class="profile">

**Made with**: <i class="fab fa-react"></i> ReactJS

**Project Summary**: 

Micro-blog simulator made with ReactJS. Makes use of components and state. Includes a log-in form, an entry form for blog posts, and a list of posts in reverse chronological order. 

[Source Files](https://github.com/mariobox/react-micro-blog) | [Live Demo](http://mariobox.github.io/react-micro-blog)<hr />

This front end project is inspired in a minimal version of Twitter. We use React components and JavaScript ES6 classes, and put into practice the concept of state. It also uses JSX syntax. We use the <code>create-react-app</code> application for all the scaffolding and heavy lifting so that we can focus on the code. 

Our app has six components:
* Our main <code>App.js</code>
* A <code>Greeting.js</code> component, that displays a <code>Login.js</code> component if the user is not logged in, or the <code>Profile.js</code> component if our user is logged in.
* An <code>AddPost.js</code> component to manage the post input field, and
* A <code>Post.js</code> component which lists the posts in reverse chronological order.

State is concentrated in the main <code>App.js</code>, and then passed down to the other components via props. 

There are three state properties:
* posts: an object with a list of all posts
* user: the information of the user who is logged-in at any given moment
* isLoggedIn: a boolean indicating if somebody is logged in or not

The <code>isLoggedIn</code> boolean instruct the <code>Greeting.js</code> component what to display via a conditional rendering: if false, display a log in form (Login.js). If true, display the current user's profile (Profile.js).

Once logged in, users can write posts and they will immediately appear as the first post of the list.

Finally, there is a second log in button called &#8220;Auto Login". Once pressed, the app gets the profile info of a default user that is hard coded in a <code>users.js</code> file so that you won't have to type anything. This is useful when you plan to come back to the app often and want to load your info quickly (sort of an express log in). 




