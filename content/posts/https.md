---
title: "How To Enable HTTPS For Your Website"
description: Serving your site through Secure HTTP
date: 2019-04-21
draft: true
tags: tech
---

I recently configured my web server to serve this site over <abbr title="Hypertext Tranfer Protocol Secure">HTTPS</abbr>. In fact, if you look at the URL in the address bar of your browser, you should see a *lock* icon to the left of the URL:

<img src="/img/httpsms.jpg" />

Wikipedia explains HTTPS as follows:

<blockquote>
Hypertext Transfer Protocol Secure (HTTPS) is an extension of the Hypertext Transfer Protocol (HTTP). It is used for secure communication over a computer network, and is widely used on the Internet. In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS), or, formerly, its predecessor, Secure Sockets Layer (SSL). The protocol is therefore also often referred to as HTTP over TLS, or HTTP over SSL. 
</blockquote>

HTTP is inherently not secure. This means that communication between a client (your browser) and a server (the website you want to visit) is not encrypted, which creates three kinds of problems:

1. **Lack of privacy**: anybody can intercept the information you are sending or receiving to or from the server.
2. **Lack of information integrity**: a malicious third party can inject code into the HTML of the pages you are receiving (for example unwanted ads or harmful code snippets).
3. **Lack of authentication**: you have no way of being 100% sure that the website you're receiving in fact comes from who you think it comes.

HTTPS solves all three of those problems.

To understand how HTTPS works in detail, this is an excellent article that explains it much better than I can:

[How HTTPS Works](https://web.archive.org/web/20190209054553/https://strongarm.io/blog/how-https-works/)

Since HTTPS relies heavily on the concept of Public-Private Key Cryptography, you may want to start by reading this post:

[Public Key Cryptography for Non-Geeks](https://blog.vrypan.net/2013/08/28/public-key-cryptography-for-non-geeks/)

To implement HTTPS for your site, most web hosts nowadays offer the option to set it up with a simple click of a button. Others, like Digital Ocean, a popular cloud infrastructure provider for developers, require slightly more work.

To enable HTTPS on Digital Ocean you need to install [Certbot](https://certbot.eff.org/about/), an automatic tool that fetches and deploys a [SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) certificate on your webserver. Running Certbot will automatically configure your web server to start serving over HTTPS immediately.
  
Certbot uses a [certificate](https://en.wikipedia.org/wiki/HTTPS#Server_setup) issued by [Let's Encrypt](https://letsencrypt.org/), a free, automated, and open [certificate authority (CA)](https://en.wikipedia.org/wiki/Certificate_authority), run for the public’s benefit. 
  
For a step by step implementation of HTTPS in Digital Ocean you can follow this tutorial: 

[How to Set Up Let's Encrypt With Nginx Server Blocks on Ubuntu 16-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-with-nginx-server-blocks-on-ubuntu-16-04). 

It will work for a Nginx server on an Ubuntu VPS, but you can search D.O. for instructions in different configurations.

**Note:** If you decide to host your site in [Github Pages](https://pages.github.com) or [Firebase](https://firebase.google.com) you don't have to do anything: you get SSL by default.
  
### Related ###

[Why you should use HTTPS instead of plain HTTP](https://www.eff.org/encrypt-the-web)
