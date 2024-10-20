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
         //stage_clr = sym.$("Stage").css("background-color"); 
         //clr = "#ffffff"; 
         //clr_over = stage_clr; 
         
         var elements = [
             {instance:'box1', symbol:'icon', character:'1', url:'http://www.example.com?link1'},
             {instance:'box2', symbol:'icon', character:'2', url:'http://www.example.com?link2'},
             {instance:'box3', symbol:'icon', character:'3', url:'http://www.example.com?link3'},
             {instance:'box4', symbol:'icon', character:'4', url:'http://www.example.com?link4'},
             {instance:'box5', symbol:'icon', character:'5', url:'http://www.example.com?link5'},
             // {instance:'box6', symbol:'icon', character:'6', url:'http://www.example.com?link6'},
         ];
         
         /* center all the boxes in "Group" */
         groupWidth = sym.$("Group").css("width");
         sym.$("Group").css({"left":"50%","margin-left":"-"+(parseInt(groupWidth)/2-130)+"px"});
         
         for (var i = 0; i < elements.length; i++) {
         
         	box = sym.getSymbol(elements[i].instance);
         	content = box.$("container");
         
         	/* attach "content..." symbols inside "box..." symbol's div named "container" */
         	var cs = sym.createChildSymbol(elements[i].symbol,content);
         	cs.element.find("div").css({'color': icon_clr});
         
         	/* set the icons */
         	cs.$("txt").html("<div data-icon='"+elements[i].character+"' class='icon'></div>");
         
         	/* opacity animation after Stage loads */
         	box.element.css({"opacity":"1"});
         	box.element.css({'transition': "opacity "+(i*0.1+0.15)+"s "+(0.25+i/8)+"s ease-in"});
         
         	box.setVariable("url", elements[i].url);
         
         };
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'circle_box'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseover", function(sym, e) {
      sym.play("start");
      
      // change color
      
      this.$("container").find("div").css({
        	'color': icon_clr_over,//'#'+$('#color').val(),
        	'transition-property': "color",
        	'transition-duration': "0.2s",
        	'transition-timing-function': "ease-out"});
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseout", function(sym, e) {
         sym.playReverse();
      
         // change color
      
         this.$("container").find("div").css({
         	'color': icon_clr,
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

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /* initially hide the element */
         this.element.css({"opacity":"0"});

      });
      //Edge binding end

   })("box");
   //Edge symbol end:'box'

   //=========================================================
   
   //Edge symbol: 'content_1'
   (function(symbolName) {   
   
   })("content_1");
   //Edge symbol end:'content_1'

})(jQuery, AdobeEdge, "EDGE-10963708");