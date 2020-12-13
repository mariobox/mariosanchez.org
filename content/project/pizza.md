---
title: "Pizza Selector"
description: Script that lets you select only pizzas with the ingredients you want
date: 2020-12-05
images:
  - 
---

**Made with**: <i class="fab fa-js"></i> JavaScript

[Source Files](https://github.com/mariobox/pizza-selector) | [Live Demo](https://mariobox.github.io/pizza-selector)

<hr class="art" />

<img src="/img/pizzas.png">

JavaScript program to choose only the pizzas with the ingredientes you want.

Select the ingredients you don't want from a list of options and hit the submit button. The program will only show you pizzas with ingredients you want.

The script uses a plain vanilla <code>XMLHttpRequest</code> to bring the pizza information from a JSON file. They iterates over all pizzas and all ingredients in a pizza setting the property "wanted" to false if the pizza contains any ingrediente selected in the not-wanted list.

Finally, the script displays only the pizzas containing ingredients you want.