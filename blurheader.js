(function ( $ ) {
	var AddBlurHeader = function(element, options) {
		
		this.opts = $.extend( {}, $.fn.addBlurHeader.defaults, options );

		this.orig = $(element)
		this.clone = this.orig.clone()
		this.clone_container = $('<div></div>')
		
		//Firefox Blur Support
		if(!$("filter#blur"+this.opts.blur_radius).length)
		$(	'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="0" width="0">'+
  			'	<defs>'+
     		'		<filter id="blur'+this.opts.blur_radius+'" x="0" y="0">'+
       		'			<feGaussianBlur stdDeviation="'+this.opts.blur_radius+'" />'+
     		'		</filter>'+
  			'	</defs>'+
			'</svg>').appendTo('body') 

		//this.clone.css('filter', 'blur('+this.opts.blur_radius+'px)')
		this.clone.css('-webkit-filter', 'blur('+this.opts.blur_radius+'px)')
		this.clone.css('-moz-filter', 'blur('+this.opts.blur_radius+'px)')
		this.clone.css('-o-filter', 'blur('+this.opts.blur_radius+'px)')
		this.clone.css('-ms-filter', 'blur('+this.opts.blur_radius+'px)')
		this.clone.css('filter', 'url(#blur'+this.opts.blur_radius+')')


		this.clone_container.css('position', 'absolute')
		this.clone_container.css('z-index', this.orig.css('z-index'));


		this.clone.css("overflow", "hidden")		
		this.clone_container.css('overflow', 'hidden')

		this.clone.css({ "top": -this.opts.blur_radius, "left": -this.opts.blur_radius})

		this.clone.height(this.opts.header_height+this.opts.blur_radius)
		this.clone_container.height(this.opts.header_height)

		this.adjustCSS = function() {
			var _orig_overflow = this.orig.css("overflow")
			
			var _parent = $('<div style="width:50px;height:50px;overflow:hidden"><div style="height:99px"/></div>').appendTo('body');
    		var _scrollbar_width=_parent.children().innerWidth()-_parent.css("overflow",_orig_overflow).children().innerWidth();
    		_parent.remove();

			var _orig_width = this.orig.width()
			var _orig_outerWidth = this.orig.innerWidth()


			this.clone.css("padding-left",parseInt(this.orig.css("padding-left"))+this.opts.blur_radius)
			this.clone.css("padding-top",parseInt(this.orig.css("padding-top"))+this.opts.header_height+this.opts.blur_radius)
			
			_offset = this.orig.offset();
			this.clone_container.offset({ top: _offset.top-this.opts.header_height, left: _offset.left })

			this.clone.width(_orig_width-_scrollbar_width)
			this.clone.css("padding-right",parseInt(this.orig.css("padding-right"))+this.opts.blur_radius)

			this.clone_container.width(_orig_outerWidth)


		}

		this.adjustCSS()
		
		this.clone_container.append(this.clone)

		$("body").append(this.clone_container)

		this.orig.bind("scroll", function(e) {
			var that = $(this).data("addBlurHeader")
			that.clone.scrollTop(that.orig.scrollTop());
			that.clone.scrollLeft(that.orig.scrollLeft());
		})

		var that = this
		if(!this.opts.is_static) {
			$(window).bind("resize", function() {
				that.adjustCSS()
			})
		}
		return this
	}

	$.fn.addBlurHeader = function(options) {
		return this.each(function() {
			var element = $(this)

			if (element.data('addBlurHeader')) return;

        	var addBlurHeader = new AddBlurHeader(this, options);

        	element.data('addBlurHeader', addBlurHeader);

    	});

	}

	$.fn.addBlurHeader.defaults = {
    	header_height: 100,
    	blur_radius: 3,
    	is_static: false
	};
}( jQuery))