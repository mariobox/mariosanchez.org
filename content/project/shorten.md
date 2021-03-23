---
title: "URL Shortener with Python"
description: Use Python to programmatically shorten a URL with Bitly
date: 2021-03-22
---

**Made with**: <i class="fab fa-python"></i> Python

[Source Files](https://github.com/mariobox/url-shortener) <hr class="art">

This is a practice project in Python. We will create a Python program to shorten URLs using [Bitly](https://bitly.com)'s [API](https://dev.bitly.com/).

Of course we can always shorten URLs directly from the Bitly page, but we don't want to do that. We want to be able to do it straight from our computer's command line, and to store each URL key value pair (long url, short url) in a CSV file in our computer.

The basic process to shorten a URL, whether you're using Bitly's website or the command line, involves sending a POST request to the server, with some credentials in a header object, and some parameters (one of them being the long URL you want to shorten).

If Bitly's server accepts your credentials and your post request was structured correctly, you should get back your shortened URL.

We start by importing Python `requests` module:

``` py
import requests
```


Next, we ask the user to input the long URL:

``` py
long_url = input("Input long URL: ")
```


We then create our <code>headers</code> object where we will pass our Authorization Token (to get your Authorization Token you need to get a Bitly account and go to your profile settings). Make sure you replace {TOKEN} with your own Bitly authorization token:

``` py
headers = {
    "Authorization": 'Bearer {TOKEN}',
    'Content-Type': 'application/json'
    }
```


Next, we create a GET request passing our headers object to the server in order to get our Group ID (`guid` in the code snippet below) which we will need for our POST request:

``` py
groups_res = requests.get("https://api-ssl.bitly.com/v4/groups", headers=headers)
if groups_res.status_code == 200:
    # if response is OK, get the GUID
    groups_data = groups_res.json()['groups'][0]
    guid = groups_data['guid']
else:
    print("[!] Cannot get GUID, exiting...")
    exit()
```


Finally, we create our POST request, passing along our headers and our data parameters, which includes the long URL we want to shorten:

``` py
data = { "long_url": long_url, "domain": "bit.ly", "group_guid": guid }

response = requests.post('https://api-ssl.bitly.com/v4/shorten', headers=headers, json=data)
```


If everything went well, we will get a response object from which we can extract our short URL:
``` py
short_url = response.json().get('link')
```


We can then either instruct the program to print the short URL to the console:

``` py
print(f"Your short link is: {response.json().get('link')}")
```


Or we can send the (long URL, short URL) key value pair to a CSV file if we want to store all our short URLs in one place:

``` py
f = open('urls.csv', 'a')
f.write(f"{long_url},{short_url}\n")
f.close
```


Check the [source code here](https://github.com/mariobox/url-shortener). 

(In the source code you will see a small variation of this program, since I decided to store my Authorization Token in the `.bashrc` file as an environment variable. 

To get an environment variable in Python you need to import the `os` module and call the variable like this: `variable = os.environ['YOUR_VARIABLE_NAME']`. 

This comes in handy when you have sensitive information like passwords and API keys that you don't want others to see in case your source code is public.)