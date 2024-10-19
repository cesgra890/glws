/* jquery.js */
/* velocity.js */
/* B: single animation */

$(document).ready(function(){

	/* VARIABLES SETUP */

	/*  Time to wait before intro animation after Globe is visible (ms)  */
	var globe_intro_delay = 500;
    /*  Globe intro animation duration (ms)  */
    var globe_intro_duration = 500;
    /*  Globe intro animation easing  */
    var globe_intro_easing = "swing";
    
    /*  Time to wait before Globe continents' animation (ms)  */
    var continents_delay = globe_intro_duration;
    /*  Globe continents' animation duration (ms)  */
    var continents_duration = 1200;
    /*  Globe continents' animation easing  */
    var continents_easing = "ease";

    /*  Marker position on x axis. Same as translate X value from SVG file 'worldmap-x4.svg'. Line <g id="marker" transform="translate(427,0)" > Values from 0 to 473.   */
    var svg_marker_cx = 427;
    /*  Globe rotation length (positive/negative values). If set to '0', there will be no rotation. If value is negative, rotation will be to opposite side  */
    var rotation_length = 153;

	/* VARIABLES SETUP: END */


	var map_step = 473;
    var $globe_fr = $(".globe__worldmap__front"),
		$globe_bk = $(".globe__worldmap__back"),
		$globe = $(".globe");

    var start_pos_edit = 100 - svg_marker_cx - (rotation_length - map_step);
    var start_pos_fr = -1*map_step + start_pos_edit;
    var start_pos_bk = -2*map_step - start_pos_edit;
    var globe_played = false;


	/*  Set the Globe  */
	function set_globe() {
        $.Velocity.hook($globe, "visibility", "hidden");
	    $.Velocity.hook($globe_fr, "translateX", start_pos_fr + "px");
	    $.Velocity.hook($globe_bk, "translateX", start_pos_bk + "px");
	}

    /*  Run Globe intro animation  */
    function globe_intro() {

        $globe.velocity({scale: [1, 0], opacity: 1 }, {visibility: "visible", duration: globe_intro_duration, easing: globe_intro_easing});

        $globe_fr.velocity({translateX: [ start_pos_fr + rotation_length, start_pos_fr ]}, {easing: continents_easing, duration: continents_duration, delay: continents_delay});
        $globe_bk.velocity({translateX: [ start_pos_bk - rotation_length, start_pos_bk ]}, {easing: continents_easing, duration: continents_duration, delay: continents_delay});

    }


	/* Toggle animation */
	$('#toggle_animation').click(function(){

		if ( $globe_fr.hasClass("velocity-animating") ) {
			$globe.velocity("stop", true);
			$globe_fr.velocity("stop", true);
			$globe_bk.velocity("stop", true);
		} else {
	        set_globe();
			globe_intro();
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
			setTimeout(globe_intro,globe_intro_delay);
            globe_played = true;
            $(window).unbind('scroll');
        }
    }

	$(window).load(set_globe);
    $(window).load(isScrolled);
    $(window).scroll(isScrolled);

});
