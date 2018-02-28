jQuery(document).ready(function() {

	var navOffset = jQuery("nav").offset().top;

	jQuery("nav").wrap('<div class="nav-placeholder"></div>');
	jQuery(".nav-placeholder").height(jQuery("nav").innerHeight());

	jQuery(window).scroll(function() {
		var scrollPos = jQuery(window).scrollTop();

		if (scrollPos >= navOffset) {
			jQuery("nav").addClass("fixed");
		} else {
			jQuery("nav").removeClass("fixed");
		}

	});



});


function resizer() {
    var w = $(window).width();
    // Move this inside resize handler

    if (w < 768) {
        console.log("resize");
        isMobile = true;
    } else {
        isMobile = false;
    }
}

$(window).resize(function() {
    resizer();
}).trigger('resize');
