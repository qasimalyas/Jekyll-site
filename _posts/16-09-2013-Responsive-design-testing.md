---
layout: post
title: Responsive design testing
category: responsive
tags: [css, responsive]
published: false
---

Responsive design is great whenn implemented correctly but to get the best results out of a responsive project the developer has to test in various devices and make sure that everything works as expected. 

There are solutions available such as [Adobe Edge Inspect](http://html.adobe.com/edge/inspect/) and [Ghostlab](http://vanamco.com/ghostlab/). These apps are great for working with static HTML but sometimes it can be difficult to test sites / apps which have a development language behind them such as PHP, .NET. This post aims to provide a solution to that.

**Behold the proxy!**

Prerequisites:

* You need to be on the same wireless network.

You can use a proxy settings on your testing device to point to the local machine you're working on and load the local URL as you normally would in a browser. You can even have a site running in a virtual machine and be able to test that in various devices. Here is the example scenario:

I have a local URL setup (testsite.dev.com) on my development machine. For simplcity sake lets assume this is your host machine. We'll tackle virtual machines later.

You need to know the IP address of your machine - normally it starts of with something like 192.168.xxx.xxx.

Next you need to select one of your testing devices. Lets start with an iOS device.

## iOS

Start by going to ```settings > networks``` tap the blue arrow on your network. This should bring a screen similar to this.

[[insert screenshot]]

Scroll down to the **HTTP Proxy** and tap Manual. This should open up a few fields below. Add the IP address you found earlier in to the the ```Server``` field. ```Port``` needs to be set to 80. You should now have a set-up like so. [[Insert screenshot]]

You should now be able to visit your site on your iOS device. Next up Android.

## Android 4+

1. Make sure that you are connected to your wireless network.
2. Find your wireless network, click and hold to ```Modify network```.
3. Scroll down and check ```Show advanced options```. This should open up the proxy settings.
4. Tap ```Proxy settings``` and tap ```Manual```
5. Scroll down and type in the ip address in to the ```Proxy hostname``` and 80 in to ```Proxy port```
6. Save settings and now you should be able to view your local URL.