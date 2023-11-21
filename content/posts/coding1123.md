---
title: November of Code 
description: A pause from courses to focus on practice
date: 2023-11-16
tags: tech
draft: false
---

For the last two weeks I have been focusing on practice projects. I had been spending most of my time in online coding courses, but I noticed that I was forgetting what I learned because I didn't practice.

I have recently completed four practice projects, encompassing Python, JavaScript and SQL. I am summarizing the projects below, and including a link to their [Github repositories](https://github.com/mariobox?tab=repositories):

## Quiz App

Console app that prompts the user for answers to different questions. It tallies the total correct answers vs. total answers submitted, and displays the final score once the quiz is over. It is implemented with Python object oriented programming.
**[Github Repository](https://github.com/mariobox/python-oop-quiz)**

## Probability Calculator

Object oriented programming project implemented in Python. It assumes a container with a variable number of different color balls. The program calculates the probability that a set of balls, for example `red: 2, blue:5` will be extracted from the total pool of balls after a random number of draws.
**[Github Repository](https://github.com/mariobox/random-balls)**

## RGB to Hex Converter

Web app that displays the hex value for a provided RGB value. For example, a RGB value of `RGB(234,58,100)` will give you a hex value of `#EA3A64`.
The app is developed in JavaScript, using different DOM manipulation and event listening functions.
**[Github Repository](https://github.com/mariobox/rgb-to-hex)**

## Web Scraping for Database Analysis

Console app that uses Python's web scraping package [BeautifulSoup](https://beautiful-soup-4.readthedocs.io/en/latest/) to extract information from a soccer database site, and then cleans and formats the data so that in can be imported into a `SQLite` database where we can perform analysis by running different queries. It uses Python regular expressions and string manipulation functions to clean up the data.
**[Github Repository](https://github.com/mariobox/bs4-and-sql)**

## Web App with Bottle and SQLite

Web app that combines Python-based web framework [Bottle](https://bottlepy.org) with SQLite. The app lets users register for a party, submitting their name, how many people will come with them, and what they will bring. The HTML form includes a text field, a drop-down menu and radio buttons. The app connects to SQLite so that we can update and retrieve information from the database.
**[Github Repository](https://github.com/mariobox/bottle-sql)** | **[Live Demo](https://mysterious-temple-24688-9fdd99ca6559.herokuapp.com/)**

## What's Next

In the next few days I'll begin exploring some web programming in Python with frameworks like [Bottle](https://bottlepy.org/docs/dev/) and [Flask](https://flask.palletsprojects.com/en/3.0.x/).
