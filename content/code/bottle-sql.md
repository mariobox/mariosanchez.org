---
title: "RSVP App with Bottle and SQLite"
description: 
date: 2023-11-20
---

**Made with**: <i class="fab fa-python"></i> Python and <i class="fas fa-database"></i> SQLite

<p class="bullet"><a href="https://github.com/mariobox/bottle-sql">Source Files</a></p><hr class="art">

This is a simple web application that let's users rsvp for a party, indicating their name, number of people coming with them, and what will they bring. 

The app implements routes using the [Bottle](https://bottlepy.org) web framework, following the [MVC design pattern](https://www.geeksforgeeks.org/mvc-design-pattern/#). 

##### Routes

1. `/` (or index route): This route renders the entry point to the app, and presents the user with a web form to fill in their information. All fields are required. If any field is not completed, the app will re-route the user to the same page to try again. If all input has been entered and is valid, the user will be directed to a confirmation page where a message will indicate that their rsvp was successful.

2. `/registered`: This route uses the HTTP `POST` method (as indicated in the route decorator). It captures information from the user via Bottle's `request` object, loads that information to our database, and sends the information to the `registered.tpl` template to display a message signaling the user's successful rsvp for the event (e.g. 'Mario party of 4 will bring beer')

3. `/going` (list of people attending): This route displays a list of the people who have rsvp'ed, together with the number of people coming with them and what will they bring

4. `/<food>`: This is a dynamic route that displays an unordered list of people who have commited to bringing the particular food listed in the URL. The way Bottle works allows this part of the URL to be passed as an argument to the function and then to the templates. This route shares a template with the `/going` route.

##### Database

The app uses a SQLite database to store the information. The database is accessed from the app via connections, as needed. The two main operations are: add a user to the database (`INSERT`), and retrieve (`SELECT`) users for display in the attendees list, or list of attendees bringing a particular food. Before the database can be used it needs to be created (in this case `rsvp.db`) and initialized with a table (which we named `reserved`). To create our database and our table, we run the following command once: `python3 create_db.py` prior to running our app.

##### Templates

The app uses Bottle's default Simple Template Engine. The `header` and the `footer` are stored in their own templates, which can be called by any other template. That way, if there are any changes to the header or footer we only have to change those pages instead of every page of our site. 

The `index.tpl` displays the main page of our application, containing an HTML form to capture information from the user. The form implements three types of input: text input, drop down menu and radio buttons. We capture information and send it to the app via Bottle's `request` object.

The `registered.tpl` displays a confirmation message after users successfully rsvp for the event.

The `going.tpl` template shows an implementation of a python `for` loop and `if` statements, to generate the `<li>` elements on a list of attendees. `for` loops, as well as `while` loops and `if-else` statements, need to be preceded by `%` and closed with `% end` in order to work. **Important note**: you don't need to use curly brackets around the variables in loops and conditional statements, only in the HTML.

Note that we are using the `going.tpl` template for two different views: the attendee list, and the different food specific pages listing the people bringing that food. We implemented this using `if-else` conditions that evaluate the length of the arguments passed to the template: if length is 3, we can assume we need to display the list of attendees. If we only pass the name of the person and the food type, we can asume we need to display the contents of the food specific view. Notice also that we print a specific message when nobody is bringing a particular food (e.g. "So far, nobody is bringing salad :\").