#About
**blurheader.js** lets you create a *header* above a given container *into* the content of the container will scroll and be displayed in a blured way - just check out the demos ;)

#Demo
Tested in Chrome

[Fancy Demo](http://htmlpreview.github.io/?https://github.com/moritzmhmk/blurheader.js/blob/master/demo.html)

[Simple Demo](http://htmlpreview.github.io/?https://github.com/moritzmhmk/blurheader.js/blob/master/simpledemo.html)

#Usage

	$container.addBlurHeader(header_height, blur_radius, is_static)

`header_height` - the height of the header to create (default: 100)

`blur_radius` - the blur radius to be used for the css filter (default: 3)

`is_static` - if the layout of `$container` does NOT change on resize (default: false)