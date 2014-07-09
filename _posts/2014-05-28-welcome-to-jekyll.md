---
layout: post
title:  "A few notes on jQuery 2013"
date:   2013-05-20 20:54:46
categories: jquery
---

I recently had the opportunity to attend jQuery UK 2013 in Oxford – it was a really worthwhile conference, well organised with plenty of interesting things going on throughout the day including competitions, video games, plenty of friendly sponsors showing off their tech (with free t-shirts and stickers) as well as the conference’s own mini beer festival with ice-cream!

The talks were mostly all well presented with relevant and useful information, though it did seem like a common theme throughout the day was “use jQuery less!” – below I’ve typed up some of my notes taken from the talks I found most useful.

## Brendan Eich

Brendan’s talk was fast paced and chock full of information. He discussed ECMAScript 6 – new features coming to Javascript.

I’ll include a brief overview of some features here, but its probably worth reading up on it online.

*There is a decent blog post explaining [a few new things coming to javascript](http://addyosmani.com/blog/a-few-new-things-coming-to-javascript/) - some of the examples below are based on this.*

### A new way to define functions

Previously you would have:

```js
var foo = function(x) {
  return x * x;
}
```

ES6 allows short hand versions:

```js
var foo = function(x) x * x;
var foo = x => { return x * x; }
var foo = x => x * x;
```

### Modules

Modules define a unit of code which all relates to each other, it can make functions and variables publicly accessible by using export (another module can use import to get access to it).

```js
module Coffee {
  // internal
  var size = 'large';
  // external
  export var milk = true;
};
```

Another module can then import those values:

```js
import milk from Coffee;
```

### Classes

Classes allow the developer to define widgets in a more semantic way – rather than using something like objects.

```js
class Dialog extends Widget {
  constructor(attributes) {
    super(attributes);
    this.initialize();
  }
  initialize() {
    ...
  }
}
```

Also note Javascript now has the super method.

### Default Values

Developers can define default values in function parameters.

```js
var foo = function(bar="baz") { }
```

Instead of:

```js
var foo = function(bar) {
  bar = bar || "baz";
}
```

### Maps

Much like objects or arrays – maps set, get and delete data.

```js
let m = new Map();
m.set('name', 'name'.value); // "Andrew"
m.get('name'); // "Andrew"
m.has('name'); // true
m.delete('name'); // true
m.has('name'); // false
```

Brendan also showed off a couple of games rendered in Javascript. They are built using a compiler to convert C/C++ into JS. You can try out the games on the [unreal engine website](http://www.unrealengine.com/html5/).

## Remy Sharp

[view slides](https://speakerdeck.com/rem/i-know-jquery-now-what)

Remy’s talk was mostly about how to avoid using jQuery. In terms of finding elements on the page, you can use `document.querySelectorAll('div')` to return a list of all divs for example. He has also created a plugin called [min.js](https://github.com/remy/min.js) which is purely for finding elements in the DOM and setting up events. He also recommended using Javascript’s native methods to pull data such as using `element.value` rather than `$(element).val()` – Javascript has a lot of these methods already such as `.href` and `.id`.

A quote from Remy which sums up his talk:

> if it is native to the browser, let the browser get on with it’s job.

## Adam Sontag

[view slides](http://ajpiano.com/jquery-is-a-swiss-army-knife/#1)

Adam’s talk was how to use jQuery effectively, which included a lot of what we do already such as caching jQuery selectors and using the concept of DRY code. Reflecting some of what Remy said, he also recommends using native JS if it is available and simple to use.

## Doug Neiner

[view slides](http://code.dougneiner.com/presentations/machina/)

Doug’s talk was about Machina.js, a finite state machine for jQuery. It was a really interesting talk and I recommend flicking through his slides. He explained FSMs using an analogy of a car’s gearbox (input is the throttle, if state is 1st gear then output is forward motion, if state is reverse then output is backward motion, if state is neutral than output is null)

## Ilya Grigorik

[view slides](https://docs.google.com/presentation/d/1DNljLkRpe9LIDfcqcpHzdLvEOyuVH4d1y9dtAJBr1I8/preview#slide=id.p19)

Ilya’s talk was definitely the most valuable, with plenty of information to take home. He explained some features of Chrome’s dev tools that you may not be aware of, its really worth going through his slides but I’ll list some points of interest:

* There is a tutorial for [dev tools on code school](http://www.codeschool.com/courses/discover-devtools).
* Network pane shows time to download and parse files (and latency). This can be exported as a HAR file and can be integrated into CI tasks.
* Running `chrome.loadtimes()` in the console gives you more information on the page’s load time. firstPaintTime is interesting as it tells you how long before the first thing was drawn on the page.
* In the Sources pane you can save snippets of JS code you run regularly (we recently found some code to count CSS selectors on the page, having saved this in Chrome’s snippets this can now be run whenever we like).
* If you have made modifications in the browser to CSS you can often forget what changes you have made, in the Sources pane you can right click on a file and choose `local modifications` to see a Diff of the changes you have made.
* In Timeline, you can hit record and then interact with the page. If you interact with JS or CSS animations you can see the framerate etc to see what is not very performant.
* You can also show FPS meter which gives you live FPS count including the highest and lowest values.
* If you are tracking the timeline to try and find what is slow, you can insert `console.timeStamp("")` in your JS to annotate your timeline so you know what triggered when.
* You can restyle dev tools to [different themes](devthemez.com).

## John Bender

[view slides](http://johnbender.us/presentation-faster-js/#/)

A math heavy talk, but has a JS library maybe worth checking out as an alternative to jQuery DOM manipulation (due to the maths he described, this library should be a lot faster than jQuery) - [https://github.com/johnbender/wield](https://github.com/johnbender/wield)

## Other Talks

You can find the slides for all the talks on the [lanyrd website](http://lanyrd.com/2013/jquery-uk/coverage/?q=slides).
