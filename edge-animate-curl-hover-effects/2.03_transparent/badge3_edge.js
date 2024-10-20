/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['amaranth, sans-serif']='<script src=\"http://use.edgefonts.net/amaranth:n7,i4,i7,n4:all.js\"></script>';
    fonts['viga, sans-serif']='<script src=\"http://use.edgefonts.net/viga:n4:all.js\"></script>';
    fonts['droid-sans, sans-serif']='<script src=\"http://use.edgefonts.net/droid-sans:n4,n7:all.js\"></script>';
    fonts['lekton, monospace']='<script src=\"http://use.edgefonts.net/lekton:n7,i4,n4:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'unsplash-shoes',
                type: 'image',
                rect: ['0px', '0px','960px','400px','auto', 'auto'],
                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                fill: ["rgba(0,0,0,0)",im+"unsplash-shoes.jpg",'0px','0px']
            },
            {
                id: 'badge1',
                type: 'rect',
                rect: ['110px', '100px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            }],
            symbolInstances: [
            {
                id: 'badge1',
                symbolName: 'badge',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '960px']
            ],
            "${_unsplash-shoes}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_badge1}": [
                ["style", "top", '100px'],
                ["style", "cursor", 'auto'],
                ["style", "left", '110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"badge": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'badge',
                    type: 'image',
                    rect: ['0px', '0px', '2000px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/badge.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'txt-container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'badge-flip',
                    type: 'image',
                    rect: ['0px', '0px', '2000px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/badge.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'hotspot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_badge}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '2000px']
            ],
            "${_hotspot}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '200px']
            ],
            "${_txt-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '200px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${_badge-flip}": [
                ["style", "top", '-200px'],
                ["style", "left", '0px'],
                ["style", "width", '2000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            labels: {
                "off": 0,
                "start": 33
            },
            timeline: [
                { id: "eid30", tween: [ "style", "${_badge}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "style", "${_badge}", "left", '-200px', { fromValue: '0px'}], position: 33, duration: 0, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_badge}", "left", '-400px', { fromValue: '-200px'}], position: 67, duration: 0, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "style", "${_badge}", "left", '-600px', { fromValue: '-400px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_badge}", "left", '-800px', { fromValue: '-600px'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid35", tween: [ "style", "${_badge}", "left", '-1000px', { fromValue: '-800px'}], position: 167, duration: 0, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_badge}", "left", '-1200px', { fromValue: '-1000px'}], position: 200, duration: 0, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_badge}", "left", '-1400px', { fromValue: '-1200px'}], position: 234, duration: 0, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_badge}", "left", '-1600px', { fromValue: '-1400px'}], position: 267, duration: 0, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_badge}", "left", '-1800px', { fromValue: '-1600px'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid75", tween: [ "style", "${_badge-flip}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid76", tween: [ "style", "${_badge-flip}", "left", '-200px', { fromValue: '0px'}], position: 33, duration: 0, easing: "easeOutQuad" },
                { id: "eid77", tween: [ "style", "${_badge-flip}", "left", '-400px', { fromValue: '-200px'}], position: 67, duration: 0, easing: "easeOutQuad" },
                { id: "eid78", tween: [ "style", "${_badge-flip}", "left", '-600px', { fromValue: '-400px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid79", tween: [ "style", "${_badge-flip}", "left", '-800px', { fromValue: '-600px'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_badge-flip}", "left", '-1000px', { fromValue: '-800px'}], position: 167, duration: 0, easing: "easeOutQuad" },
                { id: "eid81", tween: [ "style", "${_badge-flip}", "left", '-1200px', { fromValue: '-1000px'}], position: 200, duration: 0, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_badge-flip}", "left", '-1400px', { fromValue: '-1200px'}], position: 234, duration: 0, easing: "easeOutQuad" },
                { id: "eid83", tween: [ "style", "${_badge-flip}", "left", '-1600px', { fromValue: '-1400px'}], position: 267, duration: 0, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_badge-flip}", "left", '-1800px', { fromValue: '-1600px'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid85", tween: [ "style", "${_badge-flip}", "top", '-200px', { fromValue: '-200px'}], position: 0, duration: 0 }            ]
        }
    }
},
"txt_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['0px', '72px', '200px', 'auto', 'auto', 'auto'],
                    id: 'TextCopy3',
                    text: 'Autumn sale',
                    align: 'center',
                    font: ['droid-sans, sans-serif', 30, 'rgba(51,51,51,1.00)', '900', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['0px', '109px', '200px', 'auto', 'auto', 'auto'],
                    id: 'TextCopy4',
                    text: '30 % discounts',
                    align: 'center',
                    font: ['droid-sans, sans-serif', 18, 'rgba(51,51,51,1.00)', '400', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["style", "top", '109px'],
                ["style", "width", '200px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'droid-sans, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '72px'],
                ["style", "width", '200px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'droid-sans, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-5080209");
