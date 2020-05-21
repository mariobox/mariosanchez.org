---
title: "Airlines"
slug: airlines	
date: 2020-01-21
---

**Made with**: <i class="fab fa-python"></i>Python

**Project Summary**: 

Submit the name of an airline and get its 2-charachter IATA symbol

[Source Files](https://github.com/mariobox/airlines) 

<hr class="art" />

With this simple app we can type the name (or part of the name) of an airline in the form, and when we hit submit we will get a list of airlines that match that input followed by its IATA symbol. For example, you can type &ldquo;american&rdquo; in the search box:

<img src="https://mariobox.github.io/airlines/iata-search.jpg">

If you then click &ldquo;Submit&rdquo; the result will be a list of all the airlines that have &ldquo;american&rdquo; in their name, followed by their IATA symbol in parentheses:

<img src="https://mariobox.github.io/airlines/iata-results.jpg">

If you're more specific and type only &ldquo;american airlines&rdquo;, you'll get just American Arilines and its symbol: AA.

The program is made in Python, with the aid of Flask and Jinja to display the results on a web page.

First, the program takes a JSON file with all airline/symbol combinations and transforms it into a list of tuples. Each tuple is in the form of (&lsquo;Symbol&rsquo;, &lsquo;Airline Name&rsquo;).

Next, we iterate over all the tuples in the list and append them to a new list of tuples where the airline name matches the pattern you input.

Finally, we display the list of results on a webpage, using Flask and a Jinja template.

To run this code on your computer you first need to install and import the following dependencies at the top of your <code>application.py</code> file:

``` html
import json
from flask import Flask, redirect, render_template, request
```

[Click here](https://github.com/mariobox/airlines) for the source code.
