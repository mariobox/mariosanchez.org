---
title: "Airlines"
date: 2020-01-21
description: Simple app using Python, Flask and Jinja to get the name of an airline followed by its 2-charachter IATA symbol
---

**Made with**: <i class="fab fa-python"></i> Python

<p class="bullet"><a href="https://github.com/mariobox/airlines">Source Files</a></p>  

<hr class="art" />

With this simple app we can type the name (or part of the name) of an airline in a form, and upon *Submit* we get a list of airlines that match our input followed by its IATA symbol. For example, you can type &ldquo;american&rdquo; in the search box:

<img src="https://mariobox.github.io/airlines/iata-search.jpg">

If you then click *Submit*; the result will be a list of all the airlines that have &ldquo;american&rdquo; in their name, followed by their IATA symbol in parentheses:

<img src="https://mariobox.github.io/airlines/iata-results.jpg">

If you're more specific and type only &ldquo;american airlines&rdquo;, you'll get just American Arilines and its symbol: AA.

The program uses Flask, a light-weight web framework made in Python, and the templating engine Jinja. The airline information is in a JSON file.

Let's first take a look at the templates. We will create a generic `layouts.html` template:

``` html
<!DOCTYPE html>

<html>
    <head>
        <meta content="initial-scale=1, width=device-width" name="viewport"/>
        <title>Airline Symbol Lookup Tool</title>
    </head>
    <body>
        {% block body %}{% endblock %}
    </body>
</html>
```
The code in curly brackets is a place holder, where the specific code of any other template that call on the `layouts.html` template will be placed.

In this example we only have one page, called `index.html`. This is how its template looks:

``` html
{% extends "layout.html" %}

{% block body %}
<h1>Find the IATA symbol of an airline</h1>
<p>Input an airline name:</p>
<form action="/iata" method="post">
    <input name="airline" placeholder="airline" type="text"/>
    <input type="submit" value="Submit"/>
<h3>Results</h3>
<ul>
    {% for airline in results %}
    <li>{{ airline }}</li>
    {% endfor %}
</ul>
</form>
{% endblock %}
```

This is what happens in the `index.html` page:

First, it "calls" the `layout.html` template and inserts the HTML code where the place holders in the `layouts.html` are. Then it displays a form where the visitor can type the name (or part of the name) of an airline. Upon submit, a list of airlines that match the input will be displayed under the headline *Results*, followed by their symbol. 

**Let's see how this all works.**

First we need to create an `application.py` file where the business logic of our app will live. We start by importing the modules we need, and defining a variable called `app`:

``` py
import json
from flask import Flask, redirect, render_template, request

# Configure app
app = Flask(__name__)
```

Next, the program takes a JSON file with all airline/symbol combinations and transforms it into a python list of objects:

``` py
...
f = open('airlines.json')
# turn json array of objects into an python list 
data = json.load(f)  
f.close()
...
```
Next, we iterate over all the airlines on the list, convert each airline's information into a tupple, and append those tupples to a new list. Each tupple will be in the form of (*Airline Symbol*, *Airline Name*):

``` py
# create an empty list to store airline (symbol, name) tuples
symbol_airline = []

# create airline (symbol, name) tuples and append to symbol_airline
for airline in data:
  symbol_airline.append((tuple(airline.values())))
```

Finally, we're ready to process user input and display the results via routes. 

Our first route is `/` that takes us to the index page:

``` py
@app.route("/")
def index():
  return render_template("index.html")
```

This is pretty straight forward: it just takes us to the home page where our form is located.

Then, once the visitor fills and submits the form, they are taken to the `/iata` route, where our app will process the user input, store the results in a variable called `results`, and finally pass that variable to the Jinja `index.html` template so that it can plug those results in the HTML code of our results page:

``` py
@app.route("/iata", methods=["POST"])
def iata():
    results = []
    user_input = request.form.get("airline")
    user_input_lower = user_input.lower()
    for airline in symbol_airline:
      airline_lower = airline[1].lower()
      if user_input_lower in airline_lower:
        results.append(f'{airline[1]} ({airline[0]})')
    return render_template("index.html", results=results)
```
To run this code on your computer you need to access the FLASK_APP enviroment variable by typing:

`export FLASK_APP=application.py`

from the command line, followed by:

`flask run`


[Click here](https://github.com/mariobox/airlines) for the source code.
