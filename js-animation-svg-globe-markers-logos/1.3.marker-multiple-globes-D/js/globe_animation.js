/* jquery.js */
/* velocity.js */

$(document).ready(function(){

    /* Use Modernizr to detect SVG. If there's no support, add class "no-svg" to <html> tag */
    // if (!Modernizr.svg) {$("html").addClass("no-svg");}

	/* VARIABLES SETUP */

    /*  Globe intro animation duration (ms)  */
    var globe_intro_duration = 500;
    /*  Globe intro delay multiplier  */
    var globe_intro_delay_multiplier = 0.15;
    /*  Globe continents' animation duration (ms)  */
    var globe_ani_duration = 750;
    /*  Time to wait before Globe continents' animation (ms)  */
    var globe_ani_delay = 50;
    /*  Marker position on x axis. Same as translate X value from SVG file 'worldmap-x4.svg'. Line <g id="marker" transform="translate(427,0)" > Values from 0 to 473.   */
    var svg_marker_cx = [ 427, 270, 129 ];
    /*  Globe rotation length (positive/negative values). If set to '0', there will be no rotation. If value is negative, rotation will be to opposite side  */
    var rotation_length = [ 50, 100, 150 ];
	/*  Delay function globe_intro_animation() call after Globe is visible (ms)  */
	var delay_after_scroll_ok = 500;

	/* VARIABLES SETUP: END */



	var map_step = 473;
    var $globe_fr = $(".globe__worldmap__front"),
		$globe_bk = $(".globe__worldmap__back"),
		$globe = $(".globe");

	var start_pos_edit = [],
        start_pos_fr = [],
        start_pos_bk = [];

	$globe.each(function(i) {

		spe = 100 - svg_marker_cx[i] - (rotation_length[i] - map_step);
        start_pos_edit.push(spe);

        spfr = -2*map_step + start_pos_edit[i];
        start_pos_fr.push(spfr);

        spbk = -1*map_step - start_pos_edit[i];
        start_pos_bk.push(spbk);

	});

    var globe_played = false;


	/*  Set the Globe  */
	function set_globe() {
		$globe.each(function(i) {
            $.Velocity.hook($(this), "visibility", "hidden");
    	    $.Velocity.hook($(this).find(".globe__worldmap__front"), "translateX", start_pos_fr[i] + "px");
    	    $.Velocity.hook($(this).find(".globe__worldmap__back"), "translateX", start_pos_bk[i] + "px");
		});
	}


    /*  Run Globe intro animation  */
    function globe_intro_animation() {

        var ga_del_i, ga_dur_i, ga_deldur_i, fr_to, fr_from, bk_to, bk_from;

        $globe.each(function(i) {
            ga_del_i = globe_ani_delay * i;
            ga_dur_i = globe_ani_duration * i;
            ga_deldur_i = (globe_ani_delay + globe_ani_duration) * i * globe_intro_delay_multiplier;

            fr_to = start_pos_fr[i] + rotation_length[i];
            fr_from = start_pos_fr[i];
            bk_to = start_pos_bk[i] - rotation_length[i];
            bk_from = start_pos_bk[i];

            $(this).velocity({opacity: 1 }, {visibility: "visible", duration: globe_intro_duration, easing: "swing", delay: ga_deldur_i });
            $(this).find(".globe__worldmap__front").velocity({translateX: [ fr_to, fr_from ] }, {easing: "ease", duration: globe_ani_duration + ( i * 400), delay: ga_deldur_i});
            $(this).find(".globe__worldmap__back").velocity( {translateX: [ bk_to, bk_from ] }, {easing: "ease", duration: globe_ani_duration + ( i * 400), delay: ga_deldur_i});
        });

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
