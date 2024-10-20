/* jquery.js */
/* velocity.js */

$(document).ready(function(){

    /* Use Modernizr to detect SVG. If there's no support, add class "no-svg" to <html> tag */
    // if (!Modernizr.svg) {$("html").addClass("no-svg");}

	/* VARIABLES SETUP */

    /*  Globe intro animation duration (ms)  */
    var globe_intro_duration = 800;
	/*  Globe rotation loop interval (ms) */
    var globe_loop_interval = 8000;
	/*  Delay function globe_intro_animation() call after Globe is visible (ms)  */
	var delay_after_scroll_ok = 500;

	/* VARIABLES SETUP: END */



    var $globe_fr = $(".globe__worldmap__front"),
		$globe_bk = $(".globe__worldmap__back"),
		$globe = $(".globe");

	var globe_el_x = [0, -473];
    var globe_played = false;


	/*  Set the Globe  */
	function set_globe() {
        $.Velocity.hook($globe, "visibility", "hidden");
	    $.Velocity.hook($globe_fr, "translateX", globe_el_x[1] + "px");
	    $.Velocity.hook($globe_bk, "translateX", globe_el_x[0] + "px");
	}


    /*  Run Globe intro animation  */
    function globe_intro_animation() {

        $globe.velocity({opacity: 1}, {visibility: "visible", duration: globe_intro_duration, easing: "swing"});
        globe_animation();
    }


    /*  Run Globe animation  */
    function globe_animation() {
		// Note: 'for' loop needed to fix some lag in iOS browsers
    	for (var i = 0; i < 99; i++) {
			$globe_fr.velocity({translateX: [ globe_el_x[0], globe_el_x[1] ] }, {duration: globe_loop_interval, easing: "linear"});
			$globe_bk.velocity({translateX: [ globe_el_x[1], globe_el_x[0] ] }, {duration: globe_loop_interval, easing: "linear"});
    	};  
		$globe_fr.velocity({translateX: [ globe_el_x[0], globe_el_x[1] ] }, {duration: globe_loop_interval, easing: "linear"});
		$globe_bk.velocity({translateX: [ globe_el_x[1], globe_el_x[0] ] }, {duration: globe_loop_interval, easing: "linear", complete: globe_animation });  
    }


	/* Toggle animation */
	$('#toggle_animation').click(function(){

		if ( $globe_fr.hasClass("velocity-animating") ) {
			$globe.velocity("stop", true);
			$globe_fr.velocity("stop", true);
			$globe_bk.velocity("stop", true);
		} else {
	        set_globe();
			globe_intro_animation();
		}

	});


    /* Activate animation on these events: onScroll, onLoad */
    var elem = $(".globe__placeholder");

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };

    function isScrolled() {
        if (isScrolledIntoView(elem) && globe_played == false) {
			setTimeout(globe_intro_animation,delay_after_scroll_ok);
            globe_played = true;
            $(window).unbind('scroll');
        }
    }

	$(window).load(set_globe);
	$(window).load(isScrolled);
	$(window).scroll(isScrolled);

	/* TEMP: globe_intro_animation */
    $('#restart').click(function() {
		$globe.velocity("stop", true);
		$globe_fr.velocity("stop", true);
		$globe_bk.velocity("stop", true);
		set_globe();
		globe_intro_animation();
    }); 

});
