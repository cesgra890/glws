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
         // stage_clr = sym.$("Stage").css("background-color"); 
         // clr = "#ffffff"; 
         // clr_over = stage_clr; 
         
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
         	c = box.getSymbol("tween_container");
         	content_init = c.$("initial");
         	content_hover = c.$("hover");
         
         	c.element.css({"-webkit-border-radius":"50%","-moz-border-radius":"50%","border-radius":"50%"});
         
         	/* attach "content..." symbols inside "box..." symbol's div named "container" */
         	var cs = sym.createChildSymbol(elements[i].symbol,content_init);
         	var cs2 = sym.createChildSymbol(elements[i].symbol,content_hover);
         	cs.element.find("div").css({'color': icon_clr});
          // cs2.element.find("div").css({'color': '#'+$('#color').val()});
         	cs2.element.find("div").css({'color': icon_clr_over});
         
         	/* set the icons */
         	cs.$("txt").html("<div data-icon='"+elements[i].character+"' class='icon'></div>");
         	cs2.$("txt").html("<div data-icon='"+elements[i].character+"' class='icon'></div>");
         
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
      sym.getSymbol("tween_container").play("start");
      sym.getSymbol("ellipse_ani").play("start");
      
      // change color
      
      /*this.$("container").find("div").css({
        	'opacity': '0',
        	'left': '32px',
        	'transition': "left 0.2s, opacity 0.2s"
          	});
      */
      

      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseout", function(sym, e) {
         sym.playReverse("out");
         sym.getSymbol("tween_container").playReverse();
         sym.getSymbol("ellipse_ani").playReverse();
         
         // change color
         
         /*this.$("container").find("div").css({
         	'color': clr,
         	'transition-property': "color",
         	'transition-duration': "0.35s",
         	'transition-timing-function': "ease-out"});
         */
         

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

   //=========================================================
   
   //Edge symbol: 'cx'
   (function(symbolName) {   
   
   })("tween_container");
   //Edge symbol end:'tween_container'

   //=========================================================
   
   //Edge symbol: 'ellipse_ani'
   (function(symbolName) {   
   
   })("ellipse_ani");
   //Edge symbol end:'ellipse_ani'

})(jQuery, AdobeEdge, "EDGE-10963708");