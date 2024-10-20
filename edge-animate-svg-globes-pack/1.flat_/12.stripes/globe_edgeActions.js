
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'globe'
(function(symbolName){})("globe");
//Edge symbol end:'globe'

//=========================================================

//Edge symbol: 'Down-level'
(function(symbolName){})("Down-level");
//Edge symbol end:'Down-level'

//=========================================================

//Edge symbol: 'flatmap_two'
(function(symbolName){})("flatmap-two");
//Edge symbol end:'flatmap-two'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
})("continents-animation");
//Edge symbol end:'continents-animation'
})(jQuery,AdobeEdge,"EDGE-10260560");