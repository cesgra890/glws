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
         /* TO ADD MORE ITEMS:
         
         1. From Library Panel drag the "box" symbol on the Stage. Increase the number in name (ie. "box9")
         
         2. Edit array "elements" below. Remove "//" in the commented line
         
         3. In Library Panel duplicate the symbol "txt_8" and increase the number in name (so it becomes "txt_9").
         You can edit the content of the new symbol by double clicking on the symbol (in Library panel).
         
         TO REMOVE ITEMS: 
         1. Delete symbol from the Stage (ie. "box8")
         2. Remove or comment the array line that contains "box8"
         
         NOTE: 
         
         The amount of "box..." symbol instances on Stage and "txt..." symbols in Library must be the same. 
         As defined in array "elements" below.
         
         	- "box..." symbol instances on Stage: box1, box2, box3, etc.
         	- "txt..." symbols in Library: txt_1, txt_2, txt_3, etc.
         
         "txt_1" is attached to "box1" and so on.
         */
         
         var elements = [
             ['box1','txt_1','images/i1.jpg','http://www.example.com?link1'],
             ['box2','txt_2','images/i2.jpg','http://www.example.com?link2'],
             ['box3','txt_3','images/i3.jpg','http://www.example.com?link3'],
             ['box4','txt_4','images/i4.jpg','http://www.example.com?link4'],
             ['box5','txt_5','images/i5.jpg','http://www.example.com?link5'],
             ['box6','txt_6','images/i6.jpg','http://www.example.com?link6'],
             ['box7','txt_7','images/i7.jpg','http://www.example.com?link7'],
             ['box8','txt_8','images/i8.jpg','http://www.example.com?link8'],
         //    ['box9','txt_9','images/i8.jpg','http://www.example.com?link9'],
         ];
         
         clr = "#ffffff"; /* text color */
         clr_over = "#ffffff"; /* text color on hover */
         
         /* set "hider" color the same as Stage background */
         hider_color = sym.$("Stage").css("background-color");
         
         for (var i = 0; i < elements.length; i++) {
         
         	bdg = sym.getSymbol(elements[i][0]);
         	txt = bdg.$("txt-container");
         
         	/* attach "txt..." symbols inside "box..." symbol's div named "txt-container" */
         	var cs = sym.createChildSymbol(elements[i][1],txt);
         	cs.element.find("div").css({'opacity': '0', 'color': clr}); // make caption invisible initially
         
         	/* make "hider" color the same as Stage background */
         	var flip = bdg.getSymbol("curl_ani").$("hider");
         	flip.css({"background-color":hider_color});
         
         	img = bdg.$("img-container");
         	img.css({
         			"background-size":"100%",
         			"background-image":"url("+elements[i][2]+")"
         			});
         
         	bdg.setVariable("url", elements[i][3]);
         };
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'badge'
   (function(symbolName) {   
         Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseover", function(sym, e) {
            //this.play("start");
            sym.getSymbol("curl_ani").play("start");
            sym.getSymbol("shine").play("start");
            
            // change color
            
            this.$("txt-container").find("div").css({
              	'opacity': '1',
            	'color': clr_over,
              	'transition-property': "opacity",
              	'transition-duration': "0.35s",
              	'transition-timing-function': "ease-out"
            });

         });
         //Edge binding end
         
         Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseout", function(sym, e) {
            //this.playReverse();
            sym.getSymbol("curl_ani").playReverse();
            sym.getSymbol("shine").playReverse();
            
            // change color
            
            this.$("txt-container").find("div").css({
            	'opacity': '0',
            	'color': clr,
            	'transition-property': "opacity",
            	'transition-duration': "0.35s",
            	'transition-timing-function': "ease-out"
            });

         });
         //Edge binding end
         
         Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "click", function(sym, e) {
            var url = sym.getVariable("url");
            window.open(url, "_self");
         
         });
         //Edge binding end
         

   })("box");
   //Edge symbol end:'box'

   //=========================================================
   
   //Edge symbol: 'txt_1'
   (function(symbolName) {   
   
      })("txt_1");
   //Edge symbol end:'txt_1'

   //=========================================================
   
   //Edge symbol: 'shine'
   (function(symbolName) {   
   
   })("shine");
   //Edge symbol end:'shine'

   //=========================================================
   
   //Edge symbol: 'flip'
   (function(symbolName) {   
   
      

   })("curl_ani");
   //Edge symbol end:'curl_ani'

   //=========================================================
   
   //Edge symbol: 'txt_2'
   (function(symbolName) {   
   
         })("txt_2");
   //Edge symbol end:'txt_2'

   //=========================================================
   
   //Edge symbol: 'txt_3'
   (function(symbolName) {   
   
         })("txt_3");
   //Edge symbol end:'txt_3'

   //=========================================================
   
   //Edge symbol: 'txt_4'
   (function(symbolName) {   
   
         })("txt_4");
   //Edge symbol end:'txt_4'

   //=========================================================
   
   //Edge symbol: 'txt_5'
   (function(symbolName) {   
   
         })("txt_5");
   //Edge symbol end:'txt_5'

   //=========================================================
   
   //Edge symbol: 'txt_6'
   (function(symbolName) {   
   
         })("txt_6");
   //Edge symbol end:'txt_6'

   //=========================================================
   
   //Edge symbol: 'txt_7'
   (function(symbolName) {   
   
         })("txt_7");
   //Edge symbol end:'txt_7'

   //=========================================================
   
   //Edge symbol: 'txt_8'
   (function(symbolName) {   
   
         })("txt_8");
   //Edge symbol end:'txt_8'

})(jQuery, AdobeEdge, "EDGE-5080209");