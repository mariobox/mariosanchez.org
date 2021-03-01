---
title: "Today's Moon Phase With JavaScript"
description: Web app that shows you today's moon phase and percentage illumination
date: 2021-02-28
images:
  - 
---

**Made with**: <i class="fab fa-js"></i> JavaScript

[Source Files](https://github.com/mariobox/moon-phases/) | [Live Demo](https://mariobox.github.io/moon-phases/)

<hr class="art" />

I wanted a simple web page to show today's date, moon phase and percentage illumination, plus a nice picture of the moon.

<img src="/img/moon.jpg" class="gallery medium">

My first step was to find an API that I could call to retrieve today's moon phase and illumination. After some research I found the [Farmsense](https://farmsense.net) moon phase API. The API accepts a date as a parameter, formatted in milliseconds ([Unix Time](https://currentmillis.com/)), but only takes the first ten digits. 

One problem with Unix time is that it's in [UTC-Coordinated Universal Time](https://www.timeanddate.com/time/aboututc.html). To change it to Eastern Standard Time I had to subtract five hours in milliseconds from the current UTC time. I then pass the first ten digits of that value to the API's end point url.

Next, I made an AJAX call using the `fetch` API and transformed the response to JSON format to be able to use it.

Then, it was just matter of pulling the info we wanted to display from the response, and asigning it to the appropriate `div` in the `index.html` file via `document.getElementById` statements.

Since I wanted to show nice pictures of the moon instead of run-off-the-mill icons, I went to [NASA's website](https://svs.gsfc.nasa.gov/Gallery/moonphase.html) and downloaded their moon pictures (which is allowed for educational purposes).

To match the moon phase pulled from the Farmsense API to the right moon phase picture I used a simple `switch` statement.

You can see the app in action here:

<iframe src="https://mariobox.github.io/moon-phases/" title="description" width=100% height="550px"></iframe>