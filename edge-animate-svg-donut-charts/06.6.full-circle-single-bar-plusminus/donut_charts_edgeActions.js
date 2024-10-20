/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {

// VARIABLES SETUP ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var elements = [
    {instance:'box1', numbers:[100, 14.5], numberText:"%", numbers2nd:["48,645"], text:'Total Page Views', textColor:'#596679' },
    {instance:'box2', numbers:[100, 32.2], numberText:"%", numbers2nd:["36,549"], text:'Received Likes', textColor:'#596679' },
    {instance:'box3', numbers:[100,-35.0], numberText:"%", numbers2nd:["9,445"], text:'Post Shared', textColor:'#596679' },
    // {instance:'box4', numbers:[100,-35.0], numberText:"%", numbers2nd:["9,445"], text:'Post Shared', textColor:'#596679' },
];

var numberColor = '#00a27a';
var donutColors = ["#00a27a","#00a27a"]; 

var numberColorNegative = '#f71539';
var donutColorsNegative = ["#f71539","#f71539"];

var chartDiameter = 80;
var chartRotate = 90; /* degrees: -360 to 360. */

var donutStrokeLinecap = "butt"; /* butt | round */
var donutStroke = 8;
var fullDonutStroke = 8;
var fullDonutColor = "#edf0f5";

var numberTextSize = 70; /* percents: 0 to 100. */
var numberTextOpacity = 1; /* 0 to 1. */

var animationDuration = "1s";
var animationEasing = "cubic-bezier(0.785, 0.135, 0.15, 0.86)"; /* linear | ease | cubic-bezier(0.785, 0.135, 0.15, 0.86) */

var ruler = false; /* true | false */
var rulerSegments = 24;
var rulerThickness = 20;
var rulerColor = "#fff";
var rulerDashThickness = 2;
var rulerLineCap = "butt"; /* butt | round */
var rulerDashOffset = 0; /* reposition for fine-tuning */
var rulerScaleFactor = 1;
var rulerHideFirstLast = false; /* true | false */
var rulerOpacity = 0.8; /* 0 to 1. */

// VARIABLES SETUP (END) ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Don't edit the code below unless you know what you're doing

// detect IE
var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');
var trident = ua.indexOf('Trident/');
var nav_user_agent_ie;
if ((msie > 0) || (trident > 0)) { nav_user_agent_ie = true;}

var embdStyle = "";

var animationDirection = "CW"; /* CW:clockwise only  */
var circlePortion = 100; /* percents: 100 only */

//balanceDir = (animationDirection == "CCW" ? 1 : -1);
//balanceDegrees = balanceDir*180*(circlePortion/100)+90;

boxWidth = parseInt(sym.getSymbol(elements[0].instance).$("svg_container").css("width"));
boxWidthHalf = boxWidth/2;
donutRadius = (chartDiameter*2*boxWidthHalf)/boxWidth;         

/* center-align group of boxes in "Group" */
groupWidth = sym.$("Group").css("width");
sym.$("Group").css({"left":"50%","margin-left":"-"+parseInt(groupWidth)/2+"px"});

var svg_g_ie = "";
var rulers_transforms_ie = "";

if (nav_user_agent_ie) {
    svg_g_ie = " transform='rotate("+chartRotate+" "+boxWidthHalf+" "+boxWidthHalf+")' ";
    rulers_transforms_ie = " transform='matrix("+rulerScaleFactor+", 0, 0, "+rulerScaleFactor+", "+(boxWidthHalf-rulerScaleFactor*boxWidthHalf)+", "+(boxWidthHalf-rulerScaleFactor*boxWidthHalf)+")' ";
}

// loop ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
for (var i = 0; i < elements.length; i++) {

if (animationDirection == "CCW") {
  anDir = (elements[i].numbers[1] < 0 ? "1,1" : "1,0");
} else {
  anDir = (elements[i].numbers[1] < 0 ? "1,0" : "1,1");
}

donutPath = "M "+boxWidthHalf+", "+boxWidthHalf+" m -"+donutRadius+", 0 a "+donutRadius+","+donutRadius+" 0 "+anDir+" "+donutRadius*2+",0 a "+donutRadius+","+donutRadius+" 0 "+anDir+" -"+donutRadius*2+",0 Z";

svg = "<svg version='1.1' id='chart"+i+"' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='"+boxWidth+"' height='"+boxWidth+"px' viewBox='0 0 "+boxWidth+" "+boxWidth+"' enable-background='new 0 0 "+boxWidth+" "+boxWidth+"' xml:space='preserve'>";

svg += "<defs>";
svg += "<linearGradient id='lg"+i+"'";
svg += "              x1='0%' y1='0%'";
svg += "              x2='100%' y2='100%'";
svg += "              spreadMethod='pad'>";
svg += "    <stop offset='0%'   stop-color='"+(elements[i].numbers[1] < 0 ? donutColorsNegative[1] : donutColors[1])+"' stop-opacity='1'/>";
svg += "    <stop offset='100%' stop-color='"+(elements[i].numbers[1] < 0 ? donutColorsNegative[1] : donutColors[1])+"' stop-opacity='1'/>";
svg += "</linearGradient>";
svg += "</defs>";

svg += "<g class='svg_g' "+svg_g_ie+" >";    
svg += "   <path class='full_donut' d='"+donutPath+"' stroke-linecap='"+donutStrokeLinecap+"' stroke-width='"+fullDonutStroke+"px' fill='none' stroke='"+fullDonutColor+"' />";
svg += "   <path class='ani_donut'  d='"+donutPath+"' stroke-linecap='"+donutStrokeLinecap+"' stroke-width='"+donutStroke+"px' fill='none' stroke='url(#lg"+i+")' />";

if (ruler) {svg += "   <path class='rulers' "+rulers_transforms_ie+" d='"+donutPath+"' fill='none' />";}

svg += "</g>";
svg += "</svg>";
         
  box = sym.getSymbol(elements[i].instance);
  
    if (elements[i].numbers[1] != 0) {
      plusminus = (elements[i].numbers[1] < 0 ? "-" : "+");
    } else {plusminus="";}

  box.$("svg_container").html(svg);
  box.$("number").html("<span class='number'><strong>"+plusminus+""+Math.abs(elements[i].numbers[1])+"</strong><span>"+elements[i].numberText+"</span></span>");
  box.$("number2nd").html("<span class='number2nd'>"+elements[i].numbers2nd+"</span>");
  box.$("text").html("<span>"+elements[i].text+"</span>");

  numberColorGet = (elements[i].numbers[1] < 0 ? numberColorNegative : numberColor);
  box.$("number").css({"color":numberColorGet});
  box.$("number2nd").css({"color":numberColorGet});
  box.$("text").css({"color":elements[i].textColor});

  if (i==0) {
    var path = document.querySelector('#chart'+i+' path.ani_donut');
    pathLength = path.getTotalLength();
  }

pathLengthTo = pathLength-pathLength*(Math.abs(elements[i].numbers[1])*circlePortion/elements[i].numbers[0])/100;

embdStyle +="#chart"+i+" .ani_donut {";
embdStyle +="    stroke-dasharray: "+pathLength+" 9999; stroke-dashoffset: "+ (nav_user_agent_ie == true ? pathLengthTo : pathLength) +";";
embdStyle +="}";

if (nav_user_agent_ie != true) {
    embdStyle +=".run_animation"+i+" {";
    embdStyle +="    -webkit-animation: ani"+i+" "+animationDuration+" "+animationEasing+" forwards 0.5s;";
    embdStyle +="       -moz-animation: ani"+i+" "+animationDuration+" "+animationEasing+" forwards 0.5s;";
    embdStyle +="         -o-animation: ani"+i+" "+animationDuration+" "+animationEasing+" forwards 0.5s;";
    embdStyle +="            animation: ani"+i+" "+animationDuration+" "+animationEasing+" forwards 0.5s;";
    embdStyle +="}";

    embdStyle +="@-webkit-keyframes ani"+i+" {";
    embdStyle +="    from { stroke-dashoffset: "+pathLength+";}";
    embdStyle +="      to { stroke-dashoffset: "+pathLengthTo+";}";
    embdStyle +="}";
    embdStyle +="@-moz-keyframes ani"+i+" {";
    embdStyle +="    from { stroke-dashoffset: "+pathLength+";}";
    embdStyle +="      to { stroke-dashoffset: "+pathLengthTo+";}";
    embdStyle +="}";
    embdStyle +="@-o-keyframes ani"+i+" {";
    embdStyle +="    from { stroke-dashoffset: "+pathLength+";}";
    embdStyle +="      to { stroke-dashoffset: "+pathLengthTo+";}";
    embdStyle +="}";
    embdStyle +="@keyframes ani"+i+" {";
    embdStyle +="    from { stroke-dashoffset: "+pathLength+";}";
    embdStyle +="      to { stroke-dashoffset: "+pathLengthTo+";}";
    embdStyle +="}";

    embdStyle +="#Stage_box"+(i+1)+"_svg_container {";
    embdStyle +="    -webkit-transform:rotate("+chartRotate+"deg); -webkit-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
    embdStyle +="       -moz-transform:rotate("+chartRotate+"deg);    -moz-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
    embdStyle +="         -o-transform:rotate("+chartRotate+"deg);      -o-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
    embdStyle +="            transform:rotate("+chartRotate+"deg);         transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
    embdStyle +="}";
}

};
// loop END ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

embdStyle +=".full_donut {";
embdStyle +="    stroke-dasharray: "+pathLength*circlePortion/100+" 9999; stroke-dashoffset: 0;";
embdStyle +="}";

// ruler check
if (ruler) {

    rulerLength = pathLength*circlePortion/100;
    rulerSpace = rulerLength/rulerSegments-rulerDashThickness;
    strk_da = "";

    if (rulerHideFirstLast) {
      strk_da += "0 ";
      strk_da += (rulerSpace+rulerDashThickness/2) + " ";

      for (var d = 0; d < rulerSegments-2; d++) {
        strk_da += rulerDashThickness + " ";
        strk_da += rulerSpace + " ";
      };

    } else {

      for (var d = 0; d < rulerSegments; d++) {
        strk_da += rulerDashThickness + " ";
        strk_da += rulerSpace + " ";
      };
    }

    strk_da += rulerDashThickness + " 9999";

    embdStyle +=".rulers {";
    embdStyle +="    stroke-dasharray: "+strk_da+";";
    embdStyle +="    stroke-dashoffset: "+rulerDashOffset+";";
    embdStyle +="    stroke: "+rulerColor+";";
    embdStyle +="    stroke-linecap: "+rulerLineCap+";";
    embdStyle +="    stroke-width: "+rulerThickness+"px;";
    if (nav_user_agent_ie != true) {
        embdStyle +="    -webkit-transform:scale("+rulerScaleFactor+"); -webkit-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
        embdStyle +="       -moz-transform:scale("+rulerScaleFactor+");    -moz-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
        embdStyle +="         -o-transform:scale("+rulerScaleFactor+");      -o-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
        embdStyle +="            transform:scale("+rulerScaleFactor+");         transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
    }
    embdStyle +="    opacity:"+rulerOpacity+";";
    embdStyle +="}";

} // ruler check END

embdStyle +=".number span {";
embdStyle +="    font-size:"+numberTextSize+"%;";
embdStyle +="    opacity:"+numberTextOpacity+";";
embdStyle +="}";
embdStyle +=".number {";
embdStyle +="    margin-left:0;";
embdStyle +="}";
embdStyle +=".number2nd {";
embdStyle +="    font-size:75%;";
embdStyle +="}";

$("<style>"+embdStyle+"</style>").appendTo("head"); 

// run animation for non IE browsers
if (nav_user_agent_ie != true) {
    for (var i = 0; i < elements.length; i++) {
      element = document.querySelector('#chart'+i+' .ani_donut');
      element.classList.add("run_animation"+i);
    }
}
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'r'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /* initially hide the element */
         // this.element.css({"opacity":"0"});
         

      });
      //Edge binding end

   })("box");
   //Edge symbol end:'box'

})(jQuery, AdobeEdge, "EDGE-1404005");