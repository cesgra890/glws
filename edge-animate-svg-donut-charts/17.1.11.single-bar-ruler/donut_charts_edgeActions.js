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
    {instance:'box1', numbers:[100, 50], numberColor:'#222', numberText:"%", donutColors:["#3081b9","#49dbe8"], icon:'a', iconColor:'#3081b9', text:'Coffee', textColor:'#222' },
    {instance:'box2', numbers:[100, 75], numberColor:'#222', numberText:"%", donutColors:["#0ea800","#61df1b"], icon:'b', iconColor:'#0ea800', text:'Food', textColor:'#222' },
    {instance:'box3', numbers:[100, 60], numberColor:'#222', numberText:"%", donutColors:["#5b1ba1","#b478da"], icon:'c', iconColor:'#5b1ba1', text:'Assistance', textColor:'#222' },
    // {instance:'box4', numbers:[100, 60], numberColor:'#222', numberText:"%", donutColors:["#5b1ba1","#b478da"], icon:'c', iconColor:'#5b1ba1', text:'Assistance', textColor:'#222' },
];

var chartDiameter = 80;
var chartRotate = 0; /* degrees: -360 to 360. */

var donutStrokeLinecap = "butt"; /* butt | round */
var donutStroke = 20;
var fullDonutStroke = 20;
var fullDonutColor = "#f1f1f1";


var circlePortion = 80; /* percents: 0 to 100. */


var numberTextSize = 70; /* percents: 0 to 100. */
var numberTextOpacity = 1; /* 0 to 1. */

var animationDirection = "CW"; /* CW:clockwise | CCW:counterclockwise */
var animationDuration = "1s";
var animationEasing = "cubic-bezier(0.785, 0.135, 0.15, 0.86)"; /* linear | ease | cubic-bezier(0.785, 0.135, 0.15, 0.86) */

var ruler = true; /* true | false*/
var rulerSegments = 24;
var rulerThickness = 10;
var rulerColor = "#222";
var rulerDashThickness = 1;
var rulerLineCap = "butt"; /* butt | round */
var rulerDashOffset = 0; /* reposition for fine-tuning */
var rulerScaleFactor = 1;
var rulerHideFirstLast = true; /* true | false */
var rulerOpacity = 0.15; /* 0 to 1. */

// VARIABLES SETUP (END) ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// detect IE
var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');
var trident = ua.indexOf('Trident/');
var nav_user_agent_ie;
if ((msie > 0) || (trident > 0)) { nav_user_agent_ie = true;}

if (animationDirection == "CCW") {chartRotate = chartRotate + 360*(circlePortion/100);}
         
var embdStyle = "";

anDir = (animationDirection == "CCW" ? "1,0" : "1,1"); /* CW:1,1 | CCW:1,0 */
balanceDegrees = -180*(circlePortion/100)+90+chartRotate;


boxWidth = parseInt(sym.getSymbol(elements[0].instance).$("svg_container").css("width"));
boxWidthHalf = boxWidth/2;
donutRadius = (chartDiameter*2*boxWidthHalf)/boxWidth;         
donutPath = "M "+boxWidthHalf+", "+boxWidthHalf+" m -"+donutRadius+", 0 a "+donutRadius+","+donutRadius+" 0 "+anDir+" "+donutRadius*2+",0 a "+donutRadius+","+donutRadius+" 0 "+anDir+" -"+donutRadius*2+",0 Z";

/* center-align group of boxes in "Group" */
groupWidth = sym.$("Group").css("width");
sym.$("Group").css({"left":"50%","margin-left":"-"+parseInt(groupWidth)/2+"px"});

var rulers_transforms_ie = "";

if (nav_user_agent_ie) {
    rulers_transforms_ie = " transform='matrix("+rulerScaleFactor+", 0, 0, "+rulerScaleFactor+", "+(boxWidthHalf-rulerScaleFactor*boxWidthHalf)+", "+(boxWidthHalf-rulerScaleFactor*boxWidthHalf)+")' ";
}

// loop ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
for (var i = 0; i < elements.length; i++) {

svg = "<svg version='1.1' id='chart"+i+"' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='"+boxWidth+"' height='"+boxWidth+"px' viewBox='0 0 "+boxWidth+" "+boxWidth+"' enable-background='new 0 0 "+boxWidth+" "+boxWidth+"' xml:space='preserve'>";

svg += "<defs>";
svg += "<linearGradient id='lg"+i+"'";
svg += "              x1='0%' y1='0%'";
svg += "              x2='100%' y2='100%'";
svg += "              spreadMethod='pad'>";
svg += "    <stop offset='0%'   stop-color='"+elements[i].donutColors[0]+"' stop-opacity='1'/>";
svg += "    <stop offset='100%' stop-color='"+elements[i].donutColors[1]+"' stop-opacity='1'/>";
svg += "</linearGradient>";
svg += "</defs>";

svg_g_ie = "";

if (nav_user_agent_ie) {
    svg_g_ie = " transform='rotate("+balanceDegrees+" "+boxWidthHalf+" "+boxWidthHalf+")' ";
}

svg += "<g class='svg_g' "+svg_g_ie+" >";
svg += "   <path class='full_donut' d='"+donutPath+"' stroke-linecap='"+donutStrokeLinecap+"' stroke-width='"+fullDonutStroke+"px' fill='none' stroke='"+fullDonutColor+"' />";
if (ruler) {svg += "   <path class='rulers' "+rulers_transforms_ie+" d='"+donutPath+"' fill='none' />";}
svg += "   <path class='ani_donut'  d='"+donutPath+"' stroke-linecap='"+donutStrokeLinecap+"' stroke-width='"+donutStroke+"px' fill='none' stroke='url(#lg"+i+")' />";


svg += "</g>";
svg += "</svg>";
         
  box = sym.getSymbol(elements[i].instance);

  box.$("svg_container").html(svg);
  box.$("number").html("<span class='number'><strong>"+elements[i].numbers[1]+"</strong><span>"+elements[i].numberText+"</span></span>");
  box.$("icon").html(elements[i].icon);
  box.$("text").html(""+elements[i].text+"");

  box.$("number").css({"color":elements[i].numberColor});
  box.$("icon").css({"color":elements[i].iconColor});
  box.$("text").css({"color":elements[i].textColor});

  if (i==0) {
    var path = document.querySelector('#chart'+i+' path.ani_donut');
    pathLength = path.getTotalLength();
  }

pathLengthTo = pathLength-pathLength*(elements[i].numbers[1]*circlePortion/elements[i].numbers[0])/100;

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
    embdStyle +="    -webkit-transform:rotate("+balanceDegrees+"deg); -webkit-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
    embdStyle +="       -moz-transform:rotate("+balanceDegrees+"deg);    -moz-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
    embdStyle +="         -o-transform:rotate("+balanceDegrees+"deg);      -o-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
    embdStyle +="            transform:rotate("+balanceDegrees+"deg);         transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
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
        embdStyle +="    -webkit-transform:scale("+rulerScaleFactor+") rotate("+chartRotate+"deg); -webkit-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
        embdStyle +="       -moz-transform:scale("+rulerScaleFactor+") rotate("+chartRotate+"deg);    -moz-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
        embdStyle +="         -o-transform:scale("+rulerScaleFactor+") rotate("+chartRotate+"deg);      -o-transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
        embdStyle +="            transform:scale("+rulerScaleFactor+") rotate("+chartRotate+"deg);         transform-origin:"+boxWidthHalf+"px "+boxWidthHalf+"px;";
    }
    embdStyle +="    opacity:"+rulerOpacity+";";
    embdStyle +="}";

} // ruler check END

embdStyle +=".number {";
embdStyle +="    margin-left:0;";
embdStyle +="}";
embdStyle +=".number span {";
embdStyle +="    font-size:"+numberTextSize+"%;";
embdStyle +="    opacity:"+numberTextOpacity+";";
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