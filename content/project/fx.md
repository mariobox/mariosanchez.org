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

We will create a mobile web app that will display the current exchange of a basket of currencies versus the US dollar. Besides the current rate we also want to display the **YTD % devaluation** (or revaluation) for each of the currencies. 

I decided to implement this project because I work in international marketing, and devaluation is always an important variable to follow when analyzing business results. I wanted a simple, fast way to browse through the most important currencies for my business, and I wanted it to look good on my phone. 

This is how the app looks on my phone:

<img src="/img/fx.PNG" class="gallery medium" />

The **HTML** is fairly straightforward. Since we wanted a nice styling that worked well in mobile we decided to use of [Bootstrap](https://getbootstrap.com), by including it in the `<head>` of our home page:

``` html
...
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
...
```

The JavaScript is a little bit more challenging. We used the `fetch()` method to get info from an external [API](https://worldtradingdata.com) that provides the exchange rate information. We need two different API calls: one for today's exchange rate, and another one for the rate on December 31 of the previous year. We need *both* rates in order to calculate the <abbr title="Year to Date">YTD</abbr> devaluation percentage:

``` js
const url1 = 
    `https://api.worldtradingdata.com/api/v1/forex?base=USD&api_token=onH6cZpUDVXChT9cbQ6jHuCkgoWPjCmBNRz0Sy5hs4icLbqds5ta1VF0pDpl`;

const url2 =
    `https://api.worldtradingdata.com/api/v1/forex_single_day?base=USD&date=${formattedLastYear}&api_token=onH6cZpUDVXChT9cbQ6jHuCkgoWPjCmBNRz0Sy5hs4icLbqds5ta1VF0pDpl`;

const fetchExchange = async () => {
    const res = await fetch(url1);
    const rates = await res.json();
    
    const resly = await fetch(url2);
    const ratesly = await resly.json();

// some other code follows...
}
```
Notice we're using `async` to indicate an asynchronous function, and `await` to tell the program to wait until it receives *all* the information from the API before carrying on with the program.

We also created two arrays, one containing the **currency abbreviations** we want and another one containing **country flags** that we use in our HTML to make it look nice. Note that the currency symbols have to match exactly the way the API refers to them, or no information will be sent back from their server. We also created two empty array to place the exchange rate values at the current date, and at the last day of the previous year:
``` js
let currencies = ["ARS", "AUD", "BRL", "CAD", "CLP", "CNY", "COP", "EUR", "GBP", "INR", "JPY", "MXN", "PEN", "RUB"];
let flags =["img/arg.png", "img/aus.png", "img/bra.png", "img/can.png", "img/chi.png", "img/chn.png", "img/col.png", "img/eur.png", "img/gbr.png", "img/ind.png", "img/jap.png", "img/mex.png", "img/per.png", "img/rus.png"];
let exchanges = [];
let exchangesly = [];
```

Once we receive the information from the API we have to **parse it to a float**-since the info coming back from an API is always a string. Then, we use the `push()` method to add the currency values to their respective arrays:

``` js
// Update our arrays with exchange rate data return from fetch calls
for(let i = 0; i < currencies.length; i++) {
    exchanges.push(parseFloat(rates.data[currencies[i]]))
}

for(let i = 0; i < currencies.length; i++) {
    exchangesly.push(parseFloat(ratesly.data[currencies[i]]))
    } 
```

Once we have that information, a `for` loop iterates over our **flags**, **currencies** and **exchange** rate arrays and builds the HTML container that we will then pass to the `<div>` with the ID of `root` in our `index.html` file:

``` js
for (let i = 0; i < l; i++) {
    exchanges[i] - exchangesly[i] < 0 ? bkchangely = "#00CC00": bkchangely = "#FF0000";
    
    html += `
            <tr>
            <th scope="row"><img src="${flags[i]}" width="25px"</th>
            <td><strong>${currencies[i]}</strong></td>
            <td><strong>${exchanges[i].toFixed(2)}</strong></td>
            <td><p class="change" style="background-color:${bkchangely}"><strong>${(((exchanges[i] - exchangesly[i])/exchanges[i])*100*(-1)).toFixed(2)}%</strong></p></td>
            </tr>`
} 

// Build our table
html = `<table class="table table-dark"><tbody>${html}</tbody></table>`;

// Display our table
document.getElementById("root").innerHTML = html;
```
Finally, we call our `fetchExchange()` function to set the program in motion and deliver our table to the browser.

All this will make more sense when you review the full [source files](https://github.com/mariobox/fx-watcher) available in Github.
