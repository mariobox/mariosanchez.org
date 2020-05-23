---
title: "Foreign Exchange Mobile Web App"
slug: fx	
date: 2020-02-20
---

**Made with**: <i class="fab fa-js"></i> JavaScript

**Project Summary**: 

Mobile-friendly FX watcher.

[Source Files](https://github.com/mariobox/fx-watcher) | [Demo](https://mariobox.github.io/fx-watcher)

<hr class="art" />

We will create a mobile web app that will display the current exchange of a basket of currencies versus the US dollar. Besides the current rate we also want to display the YTD % devaluation (or revaluation) for each of the currencies. 

I decided to implement this project because I work in international marketing, and devaluation is always an important variable to follow when analyzing business results. I wanted a simple, fast way to browse through the most important currencies for my business, and I wanted it to look good on my phone. 

This is how the app will look when it's implemented:

<img src="/img/fx.PNG" class="gallery medium" />

The HTML is fairly straightforward. Since we wanted a nice styling that worked well in mobile we decided to use of [Bootstrap](https://getbootstrap.com).

The JavaScript is a little bit more challenging. We made use of the `fetch()` method to make two different AJAX calls to the [API](https://worldtradingdata.com) that provides the exchange rate information. We have to make two different calls because one of them is for today's exchange rate, and the other one for the rate on December 31 of the previous year, since they are in two different end points. We need both rates in order to calculate the <abbr title="Year to Date">YTD</abbr> devaluation percentage.

We also created two arrays, one containing the currencies we want and another one containing country flags that we use in our HTML to make it look nicer. Note that the currency symbols have to match exactly the way the API refers to each currency, or no information will be sent back from their server.

Once we receive the information from the API we have to parse it to a float (since the info coming back from an API is always a string), and arrange the values in arrays so that we can iterate over them.

Once we have the information, a `for` loop iterates over our flags, currencies and rate arrays and builds the HTML container that we will then pass to the div with the ID of `root` in our `index.html` file.

All this will make more sense when you review the [source files](https://github.com/mariobox/fx-watcher).
