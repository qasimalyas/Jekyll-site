---
layout: post
title: Reasons for using Jekyll
tags: [html, generator]
---

My previous incarnation of my site was based upon WordPress which is a great blogging platform. The CMS is dynamic enough that you could do anything with it. I however found it to be a bit too much for my use. I felt that I only used a minority of it&rsquo;s features and desperately wanted to find a better solution, something more lightweight, powerful and fast. This is the point where I came across [Jekyll](https://github.com/mojombo/jekyll/).

Jekyll is awesome. To quote the author of Jekyll:

> Jekyll is a simple, blog aware, static site generator. It takes a template directory (representing the raw form of a website), runs it through Textile or Markdown and Liquid converters, and spits out a complete, static website suitable for serving with Apache or your favourite web server.

Because the final generated site is in `.html` it will be super-fast because you&rsquo;re not relying on any database calls being made to the server. Everything is static and it just loads. This is a big win for performance!

Another benefit is that if I know that Jekyll can do something for me instead of using JavaScript then i&rsquo;ll let it. For example syntax highlighting which is done using Pygments. Another win for performance.

So that&rsquo;s some or partial reasons but I&rsquo;m more than happy with it. I&rsquo;ve also moved [my site](https://github.com/kas187/Jekyll-site) to Github so you can view the entire code if you want to see how it all works.