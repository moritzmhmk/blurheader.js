jQuery.fn.addBlurHeader = function(header_height, blur_radius, is_static) {
	header_height = (typeof header_height === "undefined") ? 100 : header_height;
	blur_radius = (typeof blur_radius === "undefined") ? 3 : blur_radius;
	is_static = (typeof is_static === "undefined") ? false : is_static;

	$_orig = $(this[0]);
	$_clone = $_orig.clone()
	$_clone_container = $('<div></div>')
	


	$_clone.css('filter', 'blur('+blur_radius+'px)')
	$_clone.css('-webkit-filter', 'blur('+blur_radius+'px)')
	$_clone.css('-moz-filter', 'blur('+blur_radius+'px)')
	$_clone.css('-o-filter', 'blur('+blur_radius+'px)')
	$_clone.css('-ms-filter', 'blur('+blur_radius+'px)')


	$_clone_container.css('position', 'absolute')
	$_clone_container.css('z-index', $_orig.css('z-index'));


	$_clone.css("overflow", "hidden")		
	$_clone_container.css('overflow', 'hidden')

	$_clone.offset({ top: -blur_radius, left: -blur_radius})

	$_clone.height(header_height+blur_radius)
	$_clone_container.height(header_height)

	var adjustCSS = function() {
		$_clone.css("padding-left",parseInt($_orig.css("padding-left"))+blur_radius)
		$_clone.css("padding-top",parseInt($_orig.css("padding-top"))+header_height+blur_radius)
		
		_offset = $_orig.offset();
		$_clone_container.offset({ top: _offset.top-header_height, left: _offset.left })

		$_clone.width($_orig.width()+blur_radius)
		$_clone.css("padding-right",parseInt($_orig.css("padding-right"))+blur_radius)

		$_clone_container.width($_orig.outerWidth())
	}

	adjustCSS()
	
	$_clone_container.append($_clone)

	$("body").append($_clone_container)

	$_orig.scroll(function() {
		$_clone.scrollTop($_orig.scrollTop());
		$_clone.scrollLeft($_orig.scrollLeft());
	})
	if(!is_static) {
		$(window).bind("resize", function() {
			adjustCSS()
		})
	}
}