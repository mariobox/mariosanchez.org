---
title: "eCommerce App with Flask and SQLite"
description: My CS50x final project-an eCommerce App built with Flask, Jinja, SQLite, jQuery and Bootstrap
date: 2018-12-25
images:
  - https://66.media.tumblr.com/186f34c7243200b24693260946874509/tumblr_pkaxbfmFxT1qz7ur9o1_1280.png
---

**Made with**: <i class="fab fa-python"></i> Python, <i class="fas fa-database"></i> SQLite and <i class="fab fa-js"></i> JavaScript

<p class="bullet"><a href="https://github.com/mariobox/flask-ecomm">Source Files</a></p> <hr class="art">


This app was my [CS50x](https://www.edx.org/course/cs50s-introduction-to-computer-science) final project.

The app loads a gallery of soccer shirts that includes: image, description, price, and a small form to add item to cart. The shirt info is stored in a SQLite database and is displayed using Bootstrap's card class.

<img src="https://66.media.tumblr.com/186f34c7243200b24693260946874509/tumblr_pkaxbfmFxT1qz7ur9o1_1280.png" style="width: 100%; margin-bottom: 3em; margin-top: 2em" />

The app includes a series of filters implemented using SQLite queries so you can see only shirts that match a certain filter: shirts by region, clubs vs. national teams, shirts on sale, etc.

<img src="https://66.media.tumblr.com/967710ad3afc4d4d42666525e7fa82b4/tumblr_pkaxbfmFxT1qz7ur9o3_1280.png" style="width: 100%; margin-bottom: 3em; margin-top: 2em" />

If a user is not logged in and tries to add something to the shopping cart she will see a warning message (implemented with jQuery) asking her to log in.

Once registered and logged in, the user can add shirts to the shopping cart. A link to the shopping cart can be found at the top right of the screen, showing the amount of items in the cart as well as the sub-total in dollars. Clicking the shopping cart link opens a Bootstrap modal window showing the shopping cart in more detail. 

<img src="https://66.media.tumblr.com/9fa9dd37719e34daf368927164e07827/tumblr_pkaxbfmFxT1qz7ur9o4_1280.png" style="width: 100%; margin-bottom: 3em; margin-top: 2em" />

If you want to make changes, like add one more shirt or remove a shirt, you can click on the Make Changes button and you will be taken to the full version of the shopping cart.

<img src="https://66.media.tumblr.com/9789a8543b36eccdf47235a676835c03/tumblr_pkaxbfmFxT1qz7ur9o5_r1_1280.png" style="width: 100%; margin-bottom: 3em; margin-top: 2em" />

Once you check out, the idea is to be sent to a payment processor. However, that part is not implemented yet.

If you want to see your purchase history, just click on the You Bought link and you will see all the shirts you have ever bought. You will also find a Buy Again link that will direct you to the product page in case you want to buy it again.

<img src="https://66.media.tumblr.com/9fd4c95ccd60cb229d97366b66098986/tumblr_pkaxbfmFxT1qz7ur9o2_1280.png" style="width: 100%; margin-bottom: 3em; margin-top: 2em " />

Once you're finished, you can just log out.

If you want to see the app in action, fork the repository to your own computer and perform the following commands from the command line in your project folder:

``` html
export FLASK_APP=application.py
flask run
```

This assumes you have Python, Flask and SQLite installed in your computer, as well as a link to Bootstrap and the following modules necessary to run `application.py` installed:

``` py
from cs50 import SQL
from flask_session import Session
from flask import Flask, render_template, redirect, request, session, jsonify
from datetime import datetime
```
