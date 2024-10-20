/* SVG shapes */
var shapes = {
	rect_rotated: 			"M196.9,92.6L107.4,3.1c-2-2-4.7-3.1-7.4-3.1v200c2.7,0,5.3-1,7.4-3.1l89.6-89.6 C201,103.3,201,96.7,196.9,92.6z",
	heart_unsymmetric: 		"M176.2,24.7C154.8,4.5,122.1,3.9,100,22.2v166.7l78.4-82.8C200.2,83,199.2,46.6,176.2,24.7z",
	rect_shrinked: 			"M189.8,91.9c-30-15.8-65.9-51.6-81.6-81.6C104.5,3.4,102.3,0,100,0v200h0c2.3,0,4.5-3.4,8.1-10.3 c15.8-30,51.6-65.9,81.6-81.6C203.4,100.9,203.4,99.1,189.8,91.9z",
	five_dots: 				"M150,75c13.8,0,25-11.2,25-25s-11.2-25-25-25s-25,11.2-25,25S136.2,75,150,75z M150,125 c-13.8,0-25,11.2-25,25s11.2,25,25,25s25-11.2,25-25S163.8,125,150,125z M100,75v50c13.8,0,25-11.2,25-25C125,86.2,113.8,75,100,75z",
	bars_unsymmetric: 		"M170.6,130H100v50h70.6c16.3,0,29.4-11.2,29.4-25S186.8,130,170.6,130z M200,45c0-13.8-13.2-25-29.4-25H100v50h70.6C186.8,70,200,58.8,200,45z M170.6,75H100v50h70.6c16.3,0,29.4-11.2,29.4-25C200,86.2,186.8,75,170.6,75z",
	cross: 					"M160,60h-20V40c0-22.1-17.9-40-40-40v200c22.1,0,40-17.9,40-40v-20h20c22.1,0,40-17.9,40-40 S182.1,60,160,60z",
	fat_cross: 				"M190,50c0,0-40,0-40,0V10c0-5.5-4.5-10-10-10h-40v200h40c5.5,0,10-4.5,10-10v-40h40 c5.5,0,10-4.5,10-10V60C200,54.5,195.5,50,190,50z",
	octagon_rounded: 		"M189.4,89.4l-8.1-8.1c-5.9-5.9-10.6-17.3-10.6-25.6V44.3c0-8.3-6.7-15-15-15h-11.4 c-8.3,0-19.7-4.7-25.6-10.6l-8.1-8.1c-2.9-2.9-6.8-4.4-10.6-4.4v187.6c3.8,0,7.7-1.5,10.6-4.4l8.1-8.1c5.9-5.9,17.3-10.6,25.6-10.6 h11.4c8.3,0,15-6.7,15-15v-11.4c0-8.3,4.7-19.7,10.6-25.6l8.1-8.1C195.3,104.7,195.3,95.3,189.4,89.4z",
	circle: 				"m 100,0 0,200 c 55,0 100,-45 100,-100 0,-55 -45,-100 -100,-100 z",
	clover: 				"M100,100v100C133.3,200,166.7,166.7,100,100z M100,0v100C166.7,33.3,133.3,0,100,0zM100,100C233.3,233.3,233.3-33.3,100,100L100,100z",
	clover_2nd: 			"M187.8,70.6c-15-15-38.5-16.1-54.8-3.6c12.6-16.3,11.4-39.8-3.6-54.8C121.3,4.1,110.7,0,100,0v200 c10.7,0,21.3-4.1,29.4-12.2c15-15,16.1-38.5,3.6-54.8c16.3,12.6,39.8,11.4,54.8-3.6C204.1,113.2,204.1,86.8,187.8,70.6z",
	cross_rotated: 			"M168.6,100l17.2-17.2c19-19,19-49.7,0-68.6c-19-19-49.7-19-68.6,0L100,31.4v137.3l17.2,17.2 c19,19,49.7,19,68.6,0c19-19,19-49.7,0-68.6L168.6,100z",
	hexagon_unsymmetric: 	"M158.7,176.5l35.7-69.1c2.1-4.1,2.1-10.8,0-14.9l-35.7-69.1c-2.1-4.1-7.6-7.5-12.3-7.5H100v168h46.4 C151.1,184,156.6,180.7,158.7,176.5z",
}; 


/* SETUP ------------------------------------------------------------------------------------------------------- */

// Select the shape from array 'shapes' above
var use_shape = shapes.cross_rotated;

// Define colors of the shapes
var colors = ["#35c955","#0499da","#8e44ad","#ff3c44","#ffcc00","#a7acaa"];

// Amount of darkening the color when animated
var darken_amount = 0.3;

// Durations of animation fragments
var duration_1st_half = 300;
var duration_2nd_half = 300;
var pause = 150;

// Animation easing methods
var easing_1st_half = "<";
var easing_2nd_half = ">";

// Rotation sequence
var angles = [ 180 ];


/* END OF SETUP ------------------------------------------------------------------------------------------------ */




var paper = Raphael("loader-animation",200,200);
paper.setViewBox(0, 0, 200, 200, false);

var centerXY = "100,100";
var flipX = "s-1,1," + centerXY;

var new_l = paper.path(use_shape);
var old_l = paper.path(use_shape);
var old_r = paper.path(use_shape);
var new_r = paper.path(use_shape);

var old_color, new_color;

var st = paper.set();
st.push(new_l, new_r, old_r, old_l);
st.attr({"stroke-width":0});
st.hide();

var i = 0;
var ii;
var r = 0;
	
function loop() {
	if (colors.length == i) { i = 0; }
	ii = i + 1;
	if (colors.length == ii) { ii = 0; }
	if (angles.length == r) { r = 0; }

	old_color = colors[i];
	new_color = colors[ii];

	/* change colors */
	new_l.attr({ "fill": new_color });
	old_l.attr({ "fill": old_color });
	old_r.attr({ "fill": old_color });
	new_r.attr({ "fill": darken(new_color) });

	/* show all show all except "new_r" */
	st.show();
	new_r.hide();

   	old_l.transform(flipX);
   	new_l.transform(flipX);

	rr = angles[r];

   	old_r.transform("");
   	old_r.transform("...r" + rr + "," + centerXY +" s1,1," + centerXY);
   	new_l.transform("...r-" + rr + "," + centerXY);
   	old_l.transform("...r-" + rr + "," + centerXY);
	old_l.animate({transform: "...s0.01,1," + centerXY, fill: darken(old_color)}, duration_1st_half, easing_1st_half, secondHalfAnimation); 
}


function secondHalfAnimation() {
	old_l.hide();
	new_r.show();

   	new_r.transform("");
   	new_r.transform("...r" + rr + "," + centerXY +" s0.001,1," + centerXY);
	new_r.animate({transform: "...s1000,1," + centerXY, fill: new_color}, duration_2nd_half, easing_2nd_half, onAnimationFinished);
}

function onAnimationFinished() {
	old_r.hide();
	i++;
	r++;
	setTimeout(loop, pause);
};

function darken(color) {
    var rgb = Raphael.getRGB(color),
        hsv = Raphael.rgb2hsb(rgb.r, rgb.g, rgb.b),
        s = 'hsb(' + hsv.h + ', ' + hsv.s + ', ' + (hsv.b - darken_amount) + ')',
        newrgb = Raphael.getRGB(s);
    return newrgb.hex;
}

window.onload = loop;

