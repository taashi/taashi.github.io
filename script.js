$(init);

function init() {
    'use strict';

    // show outdated broser warning if IE7 or below
    if (window.isLessThanIE8) {
        $("#IE7warning").css("display", "inline");
    }

    // if svg is not supported, replace all img tags with non-svg source
    if (window.isLessThanIE9) {
        $("img").each(function () {
            $(this).attr("src", $(this).attr("fallbacksrc"));
        });
    }

    // if transitions are supported, begin all links with an initial color
    // and fade out after .5 seconds
    setTimeout(function () {
        $(".initial-flash").removeClass("initial-flash");
    }, window.isLessThanIE10 ? 0 : 300);
    
    // smooth scrolling
    $(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 250);
					return false;
				}
			}
		});
	});
}