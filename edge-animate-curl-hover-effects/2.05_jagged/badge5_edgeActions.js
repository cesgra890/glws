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
         
         1. From Library Panel drag the "badge" symbol on the Stage. Increase the number in name (ie. "badge4")
         
         2. Edit array "elements" below. Remove "//" in the commented lines
         
         3. In Library Panel duplicate the symbol "txt_3" and increase the number in name (so it becomes "txt_4").
         You can edit the content of the new symbol by double clicking on the symbol (in Library panel).
         
         TO REMOVE ITEMS: 
         1. Delete symbol from the Stage (ie. "badge3")
         2. Remove or comment the array line that contains "badge3"

         NOTE: 
         
         The amount of "badge..." symbol instances on Stage and "txt..." symbols in Library must be the same. 
         As defined in array "elements" below.
         
         	- "badge..." symbol instances on Stage: badge1, badge2, badge3, etc.
         	- "txt..." symbols in Library: txt_1, txt_2, txt_3, etc.

         "txt_1" is attached to "badge1" and so on.

         IF YOU CHANGE STAGE BACKGROUND COLOR, don't forget to change badge stroke color in SVG file (badge.svg):
         #badge {stroke: #ecede9;}

         */
         
         var elements = [
             ['badge1','txt_1','http://www.example.com?link1'],
             ['badge2','txt_2','http://www.example.com?link2'],
             ['badge3','txt_3','http://www.example.com?link3'],
         //  ['badge4','txt_4','http://www.example.com?link4'],
         ];
         
         clr = "#ffffff"; /* text color */
         clr_over = "#333333"; /* text color on hover */
         
         for (var i = 0; i < elements.length; i++) {

         	bdg = sym.getSymbol(elements[i][0]);
         	txt = bdg.$("txt-container");
         	
         	/* attach "txt..." symbols inside "badge..." symbol's div named "txt-container" */
          var cs = sym.createChildSymbol(elements[i][1],txt);
         	cs.element.find("div").css({'color': clr});

          bdg.setVariable("url", elements[i][2]);
         };

      });
      //Edge binding end
      
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'badge'
   (function(symbolName) {   
      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseover", function(sym, e) {
         this.play("start");
         
         // change color
         
         this.$("txt-container").find("div").css({
           	'color': clr_over,
           	'transition-property': "color",
           	'transition-duration': "0s",
           	'transition-timing-function': "ease-out"});

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseout", function(sym, e) {
         this.playReverse();
         
         // change color
         
         this.$("txt-container").find("div").css({
         	'color': clr,
         	'transition-property': "color",
         	'transition-duration': "0.35s",
         	'transition-timing-function': "ease-out"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "click", function(sym, e) {
         var url = sym.getVariable("url");
         window.open(url, "_self");

      });
      //Edge binding end

   })("badge");
   //Edge symbol end:'badge'

   //=========================================================
   
   //Edge symbol: 'txt1'
   (function(symbolName) {   
   
   })("txt_1");
   //Edge symbol end:'txt_1'

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

})(jQuery, AdobeEdge, "EDGE-5080209");