#About
**blurheader.js** is a jquery plugin that lets you create a *header* above a given container *into* which the content of the container will scroll and be displayed in a blured way - just check out the demos ;)

#Demo
Tested in Chrome

[Fancy Demo](http://htmlpreview.github.io/?https://github.com/moritzmhmk/blurheader.js/blob/master/demo.html)

[Fancy Demo (two containers)](http://htmlpreview.github.io/?https://github.com/moritzmhmk/blurheader.js/blob/master/demo2.html)

[Simple Demo](http://htmlpreview.github.io/?https://github.com/moritzmhmk/blurheader.js/blob/master/simpledemo.html)

#Usage

Adding a blur header above `$container`
	$container.addBlurHeader()

Or with options:
	$container.addBlurHeader(options)

where options looks like
	options = {
    	header_height: 100,
    	blur_radius: 3,
    	is_static: false
	}

`header_height` - the height of the header to create (default: 100)

`blur_radius` - the blur radius to be used for the css filter (default: 3)

`is_static` - if the layout of `$container` does NOT change on resize (default: false)