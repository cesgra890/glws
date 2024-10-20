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
         icons = ["a","b","c","d","e","f"]; /* Icon-font icons mapped to these characters */
         loop_total = 10; /* How many time animation goes through the loop (all 'icons' array characters) */
         loop_current = 0;
         
         /* SET COLORS ------------------------------------------------------------------------ */
         
         stage_clr = "#0e83cd"; /* Stage */
         rect_clr  = "#1f2128"; /* Front-faced rectangle */
         text_clr  = "#ffffff"; /* Text or Icon */
         
         rect_appears_from_clr = "#1f2128"; /* Appearing Rectangle */
         rect_appears_from_opacity = '0.5'; /* Appearing Rectangle starts with this opacity */
         
         rect_fades_to_clr = "#000000"; /* Fading Rectangle */
         rect_fades_to_opacity = '0.9'; /* Fading Rectangle ends with this opacity */
         
         /* Don't edit below unless you know what you're doing -------------------------------- */
         
         i = 0;
         ii = i+1;
         
         box = sym.getSymbol("box");
         box.$("Text").html(icons[i]);
         box.$("TextNew").html(icons[ii]);
         
         sym.$("Stage").css({"background-color":stage_clr});
         
         box.$("Rectangle").css({"background-color":rect_clr, "opacity":"1"});
         box.$("RectangleNew").css({"background-color":rect_appears_from_clr, "opacity":rect_appears_from_opacity});
         
         box.$("Text").css({"color":text_clr});
         box.$("TextNew").css({"color":text_clr});
         
         content_clr = "#e0e0e0"; /* for preview only */
         sym.getSymbol("content").$("RoundRect").css({"border-color":content_clr});
         sym.getSymbol("content").$("content").css({"color":content_clr});
         
         /* set transform-origin */
         box.$("Rectangle").css({'transform-origin':'0% 0%'});
         box.$("Text").css({'transform-origin':'0% 0%'});
         box.$("RectangleNew").css({'transform-origin':'100% 0%'});
         box.$("TextNew").css({'transform-origin':'100% 0%'});

      });
      //Edge binding end

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'box'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         i = i+1;
         ii = ii+1;
         
         if (ii >= icons.length) {
         	ii=0;
         	loop_current = loop_current+1;
         }
         if (i >= icons.length) {
         	i=0;
         }
         
         if (loop_current < loop_total) {
         	sym.$("Text").html(icons[i]);
         	sym.$("TextNew").html(icons[ii]);
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