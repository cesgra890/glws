
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'globe_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.play(0);});
//Edge binding end
})("continents");
//Edge symbol end:'continents'

//=========================================================

//Edge symbol: 'globe'
(function(symbolName){})("globe");
//Edge symbol end:'globe'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'Down-level'
(function(symbolName){})("Down-level");
//Edge symbol end:'Down-level'
})(jQuery,AdobeEdge,"EDGE-10260560");