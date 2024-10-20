/* jquery.js */
/* velocity.js */

$(document).ready(function(){

    /* Use Modernizr to detect SVG. If there's no support, add class "no-svg" to <html> tag */
    // if (!Modernizr.svg) {$("html").addClass("no-svg");}

	/* VARIABLES SETUP */

    /*  Globe intro animation duration (ms)  */
    var globe_intro_duration = 500;
    /*  Globe continents' animation duration (ms)  */
    var globe_ani_duration = 1200;
    /*  Time to wait before Globe continents' animation (ms)  */
    var globe_ani_delay = globe_intro_duration;
    /*  Marker position on x axis. Same as translate X value from SVG file 'worldmap-x4.svg'. Line <g id="marker" transform="translate(427,0)" > Values from 0 to 473.   */
    var svg_marker_cx = 427;
    /*  Globe rotation length (positive/negative values). If set to '0', there will be no rotation. If value is negative, rotation will be to opposite side  */
    var rotation_length = 153;
	/*  Delay function globe_intro_animation() call after Globe is visible (ms)  */
	var delay_after_scroll_ok = 500;

	/* VARIABLES SETUP: END */


	var map_step = 473;
    var $globe_fr = $(".globe__worldmap__front"),
		$globe_bk = $(".globe__worldmap__back"),
		$globe = $(".globe");

    var start_pos_edit = 100 - svg_marker_cx - (rotation_length - map_step);
    var start_pos_fr = -2*map_step + start_pos_edit;
    var start_pos_bk = -1*map_step - start_pos_edit;
    var globe_played = false;


	/*  Set the Globe  */
	function set_globe() {
        $.Velocity.hook($globe, "visibility", "hidden");
	    $.Velocity.hook($globe_fr, "translateX", start_pos_fr + "px");
	    $.Velocity.hook($globe_bk, "translateX", start_pos_bk + "px");
	}

    /*  Run Globe intro animation  */
    function globe_intro_animation() {

        $globe.velocity({scale: [1, 0], opacity: 1 }, {visibility: "visible", duration: globe_intro_duration, easing: "swing"});

        $globe_fr.velocity({translateX: [ start_pos_fr + rotation_length, start_pos_fr ]}, {duration: globe_ani_duration, delay: globe_ani_delay});
        $globe_bk.velocity({translateX: [ start_pos_bk - rotation_length, start_pos_bk ]}, {duration: globe_ani_duration, delay: globe_ani_delay});

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
      set_globe();
      globe_intro_animation();
    }); 

});
