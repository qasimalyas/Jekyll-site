---
layout: post
title: display inline-block, my new friend
category: code
tags: [html, css]
---

One of the css properties that I&rsquo;ve been using recently is <code>display: inline-block</code> for elements that are going to be sitting next to one another i.e. thumbnail images or anything similiar.  Traditionally floats would achieve the same effect however, it wouldn&rsquo;t be suitable to use it on elements which may have variable heights. So taking the example of thumbnails images which were 60×60 and one thumbnail which was in the middle and is 60×200, then any smaller images following the large image would start to stack up on one another. This is actually the expected behaviour of floats and is described in the <a href="http://www.w3.org/TR/CSS2/visuren.html#floats">w3c spec</a>.

> Any floated box becomes a block box that is shifted to the left or right until its outer edge touches the containing block edge or the outer edge of another float. The top of the floated box is aligned with the top of the current line box (or bottom of the preceding block box if no line box exists). If there isn&rsquo;t enough horizontal room on the current line for the float, it is shifted downward, line by line, until a line has room for it.

By using <code>display: inline-block</code> you prevent the above behaviour from occurring entirely and force the next element not to position itself where room is available. There&rsquo;s an article on <a href="http://www.sitepoint.com/blogs/2008/05/23/two-hidden-features-new-in-firefox-3/">sitepoint</a> which describes this in much greater depth and illustrates the behaviour visually.

<h2>Usage</h2>

To use this property lets say we have the following markup:
{% highlight html %}
<ul>
    <li><img src="small.gif" alt="small" /></li>
    <li><img src="large.gif" alt="small" /></li>
    <li><img src="small.gif" alt="small" /></li>
    <li><img src="small.gif" alt="small" /></li>
    <li><img src="small.gif" alt="small" /></li>
    <li><img src="small.gif" alt="small" /></li>
    <li><img src="small.gif" alt="small" /></li>
    <li><img src="small.gif" alt="small" /></li>
    <li><img src="small.gif" alt="small" /></li>
    <li><img src="small.gif" alt="small" /></li>
    <li><img src="small.gif" alt="small" /></li>
</ul>
{% endhighlight %}

with the following css

{% highlight css %}
* {
	margin: 0;
	padding: 0;
}
ul {
	width: 500px;
}
	ul li {
		list-style: none;
		display: inline-block;
		vertical-align: top;
	}
{% endhighlight %}

Here&rsquo;s a <a href="http://jsfiddle.net/hw38v/embedded/result/">demo</a>, resize the window.