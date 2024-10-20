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
         /* SET ORDER ------------------------------------------------------------------------- */
         /* the numbers will go (increasing): '1', '2', '3' etc. until '99' */
         i = 1;
         last_i = 99;
         step = 1;
         
         ii = i+step; /* increasing order. If you change to increasing, also edit "box" symbol actions @ 1500ms */

         /* SET COLORS ------------------------------------------------------------------------ */
         
         stage_clr = "#0e83cd"; /* Stage */
         rect_clr  = "#1f2128"; /* Front-faced rectangle */
         text_clr  = "#ffffff"; /* Text or Icon */
         
         rect_appears_from_clr = "#1f2128"; /* Appearing Rectangle */
         rect_appears_from_opacity = '0.5'; /* Appearing Rectangle starts with this opacity */
         
         rect_fades_to_clr = "#000000"; /* Fading Rectangle */
         rect_fades_to_opacity = '0.9'; /* Fading Rectangle ends with this opacity */
         
         /* Don't edit below unless you know what you're doing -------------------------------- */

         box = sym.getSymbol("box");
         box.$("Text").html(i);
         box.$("TextNew").html(ii);

         sym.$("Stage").css({"background-color":stage_clr});
         
         box.$("Rectangle").css({"background-color":rect_clr, "opacity":"1"});
         box.$("RectangleNew").css({"background-color":rect_appears_from_clr, "opacity":rect_appears_from_opacity});
         
         box.$("Text").css({"color":text_clr});
         box.$("TextNew").css({"color":text_clr});
         
         content_clr = "#e0e0e0"; /* for preview only */
         sym.getSymbol("content").$("RoundRect").css({"border-color":content_clr});
         sym.getSymbol("content").$("content").css({"color":content_clr});
         
         /* set transform-origin */
         box.$("Rectangle").css({'transform-origin':'100% 100%'});
         box.$("Text").css({'transform-origin':'100% 100%'});
         box.$("RectangleNew").css({'transform-origin':'0% 0%'});
         box.$("TextNew").css({'transform-origin':'0% 0%'});

      });
      //Edge binding end

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'box'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // increasing
         i = i+step;
         ii = ii+step;
         
         if (i<last_i) {
         	sym.$("Text").html(i);
         	sym.$("TextNew").html(ii);
         	sym.$("Rectangle").css({"background-color":rect_clr,"opacity":"1","transition":"none"});
         	sym.$("RectangleNew").css({"background-color":rect_appears_from_clr,"opacity":rect_appears_from_opacity,"transition":"none"});
         	sym.play(0);
         } else {
         	sym.getComposition().getStage().play("show_content"); 
         }

      });
      //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // appearing
         
         sym.$("RectangleNew").css({
                       	'opacity': '1',
                       	'background-color': rect_clr,
                       	'transition-property': "background-color, opacity",
                       	'transition-duration': "0.375s",
                       	'transition-timing-function': "linear"
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         // fading
         
         sym.$("Rectangle").css({
                       	'opacity': rect_fades_to_opacity,
                       	'background-color': rect_fades_to_clr,
                       	'transition-property': "background-color, opacity",
                       	'transition-duration': "0.550s",
                       	'transition-timing-function': "linear"
         });

      });
      //Edge binding end

   })("box");
   //Edge symbol end:'box'

   //=========================================================
   
   //Edge symbol: 'content'
   (function(symbolName) {   
   
   })("content");
   //Edge symbol end:'content'

})(jQuery, AdobeEdge, "EDGE-11218185");