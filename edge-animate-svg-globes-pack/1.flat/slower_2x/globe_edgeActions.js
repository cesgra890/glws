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
      
      
      
      
      
      
      
      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'globe'
   (function(symbolName) {   
   
      

      

   })("globe");
   //Edge symbol end:'globe'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'flatmap_two'
   (function(symbolName) {   
   
   })("flatmap-two");
   //Edge symbol end:'flatmap-two'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("continents-animation");
   //Edge symbol end:'continents-animation'

})(jQuery, AdobeEdge, "EDGE-10260560");