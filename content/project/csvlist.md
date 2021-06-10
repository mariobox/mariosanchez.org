---
title: "Mailing List Form with Express and CSV"
description: Mailing list sign-up form with Node, Express and CSV
date: 2020-12-13
---

**Made with**: <i class="fab fa-node"></i> Node and Express

[Source Files](https://github.com/mariobox/add-to-mailing-list) 

<hr class="art" />

This is a simple server-side application made with Node and Express. 

<img src="/img/csvlist.png">

Instead of using a more advance data base, we used a super simple CSV file to store our data, and took advantage of the `fs` Node module and the `neat-csv` package to convert string information from our CSV database into an array of objects that we can then pass along to our `success` template made with Pug. The `success` page displays all the entries of our CSV file.

To try it in your computer you can clone the [repository](https://github.com/mariobox/add-to-mailing-list) and then type `nodejs app.js` from the command line.