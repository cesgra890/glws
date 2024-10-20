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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 850, function(sym, e) {
         /* set text loop */
         
         sym.$("to_top").show();
         sym.$("to_bottom").show();
         
         tt.$("txt").html(looped_texts[i].top);
         tb.$("txt").html(looped_texts[i].bottom);
         
         /* different font sizes */
         if (looped_texts[i].top_fs) {
         	tt.$("txt").css({"font-size":looped_texts[i].top_fs});
         	tt.$("txt").css({"line-height":looped_texts[i].top_fs});
         	tt.$("txt").css({"height":looped_texts[i].top_fs});
         	tt.element.css({"margin-top":looped_texts[i].margin_top});
         	} else {	
         		tt.$("txt").css({"font-size":default_font_size});
         		tt.$("txt").css({"line-height":default_font_size});
         		tt.$("txt").css({"height":default_font_size});
         		tt.element.css({"margin-top":"0"});
         	 }
         
         if (looped_texts[i].bottom_fs) {
         	tb.$("txt").css({"font-size":looped_texts[i].bottom_fs});
         	tb.$("txt").css({"line-height":looped_texts[i].bottom_fs});
         	tb.$("txt").css({"height":looped_texts[i].bottom_fs});
         	tb.element.css({"margin-top":looped_texts[i].margin_top});
         	} else {	
         		tb.$("txt").css({"font-size":default_font_size});
         		tb.$("txt").css({"line-height":default_font_size});
         		tb.$("txt").css({"height":default_font_size});
         		tb.element.css({"margin-top":"0"});
         		}
         
         tt.play(0);
         tb.play(0);
         
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3450, function(sym, e) {
         /* texts-off */
         
         //tt.playReverse("last");
         //tb.playReverse("last");
         tt.play("last");
         tb.play("last");
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         tt = sym.getSymbol("to_top");
         tb = sym.getSymbol("to_bottom");
         
         looped_texts = [
             {top:"NEW ONLINE", bottom:"SERVICE"},
             {top:"YOUR MUSIC", bottom:"IN YOUR POCKET"},
             {top:"WHENEVER", bottom:"YOU NEED IT"},
             {top:"NO ADS.", bottom:"NO COMMITMENT"},
             {top:"$ 9.99", bottom:"NO ADDITIONAL FEES", top_fs: "40px", bottom_fs: "14px", margin_top: "10px" },
         ]
         
         /* default looped texts sizes */
         default_font_size = "24px";
         
         /* colors */
         stage_color = "#34495e";
         frame_color = stage_color;
         button_color = "#ef8e5b";
         text_top = "#fff";
         text_bottom = "#fc0";
         
         /* link */
         sym.setVariable("url", "http://www.example.com?link1");
         sym.setVariable("target", "_blank");
         
         /*--------------------------------------------------------*/
         /* set colors */
         sym.$("Stage").css({"background-color":stage_color});
         sym.$("frame").css({"border-color":frame_color});
         sym.getSymbol("button").$("RoundRect").css({"background-color":button_color});
         tt.$("txt").css({"color":text_top});
         tb.$("txt").css({"color":text_bottom});
         
         i = 0;
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3850, function(sym, e) {
         /* loop-check */
         
         i = i+1;
         
         if	(i >= looped_texts.length) {
         	i = 0;
         	sym.getSymbol("button").play(0);
         	sym.getSymbol("to_top_2").play(0);
         	sym.getSymbol("to_bottom_2").play(0);
         	sym.$("to_top").hide();
         	sym.$("to_bottom").hide();
         } else {
         	sym.play("set-texts-loop");
         }

      });
      //Edge binding end
      
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9100, function(sym, e) {
         /* play it again sam */
         sym.play("set-texts-loop");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8550, function(sym, e) {
         sym.getSymbol("button").playReverse("last");
         sym.getSymbol("to_top_2").playReverse("last");
         sym.getSymbol("to_bottom_2").playReverse("last");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "click", function(sym, e) {
         /* go to the 'url' */
         var url = sym.getVariable("url");
         var target = sym.getVariable("target");
         window.open(url, target);

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bar'
   (function(symbolName) {   
   
   })("bar");
   //Edge symbol end:'bar'

   //=========================================================
   
   //Edge symbol: 'to_top'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 350, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("to_top");
   //Edge symbol end:'to_top'

   //=========================================================
   
   //Edge symbol: 'to_top_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      })("to_bottom");
   //Edge symbol end:'to_bottom'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
   })("button");
   //Edge symbol end:'button'

   //=========================================================
   
   //Edge symbol: 'to_top_1'
   (function(symbolName) {   
   
      })("to_bottom_2");
   //Edge symbol end:'to_bottom_2'

   //=========================================================
   
   //Edge symbol: 'to_top_multiline_1'
   (function(symbolName) {   
   
      })("to_top_2");
   //Edge symbol end:'to_top_2'

})(jQuery, AdobeEdge, "EDGE-465557");