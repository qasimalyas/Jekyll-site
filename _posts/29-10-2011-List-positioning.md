---
layout: post
title: List type positioning and it's quirks
summary: Simple tip on how to use list positioning and it's workarounds for browser quirks
category: [css]
published: false
---

#{{ page.title }}

List <code>ul</code> or <code>ol</code> are very common on web sites. These are used in different ways to show list of content but also for main navigation too. Quite often you can have a block of list (default) but styling these consistently can be painful. In some browsers the bullet point might be a little outside your grid or when compared with the an ordered list, it never aligns. So whats the deal here?

Lets begin with some basic HTML

{% highlight html %}
<ul>
	<li>ul list 1</li>
	<li>ul list 2</li>
	<li>ul list 3</li>
	<li>ul list 4</li>
	<li>ul list 5</li>
</ul>
<ol>
	<li>ol list 1</li>
	<li>ol list 2</li>
	<li>ol list 3</li>
	<li>ol list 4</li>
	<li>ol list 5</li>
</ol>
{% endhighlight %}

The best way is to reset you browser default styles then set your own styles. I'm not going to preach what method you should use but for now I'm going to use the below because it's short and simple for demonstration purposes:

{% highlight css %}
ul, ol {
	margin: 0;
	padding: 0;
	list-style: none;
}
{% endhighlight %}

We can now begin to set our styles so lets start with the basic:

