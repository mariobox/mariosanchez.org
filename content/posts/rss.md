---
title: "RSS: Everything Old is New Again"  
description: RSS is making a comeback
date: 2023-01-05
tags: tech
draft: false
---

I recently wrote about [Vim](/posts/vim/), a powerful old-school text editor. 
Today, I want to talk about another old but extremely useful technology: <abbr title="Really Simple Syndication">RSS</abbr>, and why it's making a comeback.

RSS stands for **Really Simple Syndication**, and many websites still use it to publish updates to their content. 
RSS feeds allow users to subscribe to a website's updates and receive notifications when new content is published. 
RSS feeds can be accessed using an RSS reader or aggegator, which lets users view and manage all their subscriptions in one place.

The popularity of RSS feeds peaked about 15 years ago, and has declined in recent years due to the rise of social media.
Social media feeds work pretty much like RSS feed readers in the sense that users can follow the sites they want, and read all their updates in one place. 
An important difference, though, is that social media introduced two features not present in RSS readers:

1. The ability to post comments
2. A proprietary algorithm that heavily influences what you see on your feed

These two features are partially responsible not only for the rise of social media, but also for the stress fractures that we begin to see today: 
since algorithms optimize for the profitability of the platform, and profitability is tied to "engagement", they are designed to make you stick around as much as possible (some would say that they are designed to make you addicted to the platform). 
They do so by making you angry or by feeding you content that reinforces your biases. 
Social media platforms also censor information, sometimes in [collusion](https://www.thefp.com/p/how-twitter-rigged-the-covid-debate) with the state.

When you ponder the state of social media today, it comes as no surprise that more people are deciding to give RSS a try. 
RSS offers a much quieter reading experience, allowing you to enjoy content on your own terms.


## How does RSS work?

An RSS feed is basically a text file written in a format called XML (very similar to HTML).
The content management systems that power websites generate this file automatically, and update it every time new content is added. 

Users grab the feed's URL and add it to an RSS reader, a program that regularly crawls the site and displays any new content in an easy-to-read interface similar to a web page (although there are a few text-only RSS readers as well). 

In the past, media sites would prominently display an [RSS icon](https://duckduckgo.com/?q=rss+icon&t=h_&ia=web) that linked to their feed's URL. 
These days, however, it is much more common to find their social media icons instead. 
That doesn't mean that their RSS feed doesn't exist, though. 
You just have to look harder. 
Usually, you can find it by typing an URL such as these in your browser:

* somesite.com/feed
* somesite.com/feed.xml
* somesite.com/index.xml

If you find it, it probably looks like this:

<img src="/img/xml.jpg" alt="image of an XML page" />

Just for fun, follow this link: https://mariosanchez.org/posts/index.xml. 
That's the RSS feed for this site.
In fact, try grabbing a few feeds from different sites and you'll be ready for your next step: adding those feeds to an RSS reader.


## RSS Readers

As far as RSS readers go you have many options. 
Three popular ones are [Feedly](), [Inoreader]() and [Newsblur](), but there are [many others](https://indieweb.org/feed_reader). 
Most of them offer a free tier that you can sign up for if you want to give RSS a try. Just add all the feeds you want to follow, 
and the RSS reader will display their updated content in a neatly organized dashboard that you can customize to your liking.

<img src="/img/inoreader.png" alt="inoreader screen shot" />
<span class="small date">Inoreader Screen Shot</span>


## Resources

[What is an RSS Feed](https://www.businessinsider.com/guides/tech/what-is-rss-feed): A good primer on RSS. ~Business Insider

[RSS Reader List](https://indieweb.org/feed_reader): Comprehensive list of different RSS Readers. ~Indieweb

[The Rise and Demise of RSS](https://www.vice.com/en/article/a3mm4z/the-rise-and-demise-of-rss) A detailed account of the history of RSS. ~Vice

