---
title: "Covid-19 Dashboard"
description: Table of countries showing confirmed cases and deaths
date: 2020-12-17
---

<img src="/img/covid.png">

**Made with**: <i class="fab fa-python"></i> Python

[Source Files](https://github.com/mariobox/covid-dashboard) | [Live Demo](http://mariosanchezcarrion.com:1313) <hr class="art">

This is a practice project in Python using the Covid package, which lets us retrieve information about Covid-19 from John Hopkins API.

The `application.py` file contains our program logic. 

We start by importing the package that will provide us with the data:

`from covid import Covid`

The data comes in the form of a list of dictionaries (or if you're more used to JS parlance, an array of objects). You can learn more about this package [here](https://pypi.org/project/covid/).

Then we need to import Flask, since we want our dashboard to be viewed on a webpage, not the console. Flask is a lightweight web framework that works with Python.

`from flask import Flask, redirect, render_template, request`

Next, we assign our Flask application to a variable:

`app = Flask(__name__)`

We then make a call to the covid package and sort our list of dictionaries so that the countries with the higher number of deaths are listed first (the data originally comes sorted by descending number of confirmed cases):

``` py
d = covid.get_data()
d.sort(key=lambda x: x.get('deaths'), reverse=True)
```

We then format the numeric fields we're interested in so that they display with a "," delimiting thousands and millions, to make the data more readable:

``` py
for country in d:
    country['confirmed'] = format(country['confirmed'], ",")
    country['deaths'] = format(country['deaths'], ",")
```

We're now ready to define our route for the home page of our web app. This route will render the `index.html` template (the only page of our web app). When we configure our route, we pass to the template a parameter `data=d` which contains our data. The `index.html` template will then use this data to build the web page that will be visible to the user:

``` py
@app.route("/")
def index():
  return render_template("index.html", data=d)
```

The `index.html` page is a Jinja template enhanced with Bootstrap styling to make our table look nice.

To run this code on your computer you need to access the FLASK_APP enviroment variable by typing:

`export FLASK_APP=application.py`

from the command line, followed by:

`flask run`

We could do other things with our app, like allowing users to sort by different criteria, display only a limited amount of data, or grab more information from other sources. For now, though, the app is done and it accomplishes what I set out to do.
