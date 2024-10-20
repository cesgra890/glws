/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['amaranth, sans-serif']='<script src=\"http://use.edgefonts.net/amaranth:n7,i4,i7,n4:all.js\"></script>';
    fonts['chunk, serif']='<script src=\"http://use.edgefonts.net/chunk:n4:all.js\"></script>';

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
                id: 'badge1',
                type: 'rect',
                rect: ['160px', '100px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'badge2',
                type: 'rect',
                rect: ['380px', '100px','auto','auto','auto', 'auto']
            },
            {
                id: 'badge3',
                type: 'rect',
                rect: ['600px', '100px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'badge2',
                symbolName: 'badge',
                autoPlay: {

                }
            },
            {
                id: 'badge3',
                symbolName: 'badge',
                autoPlay: {

                }
            },
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
            "${_badge3}": [
                ["style", "left", '600px'],
                ["style", "top", '100px']
            ],
            "${_badge2}": [
                ["style", "left", '380px'],
                ["style", "top", '100px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(236,237,233,1.00)'],
                ["style", "width", '960px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_badge1}": [
                ["style", "top", '100px'],
                ["style", "cursor", 'auto'],
                ["style", "left", '160px']
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
                    opacity: 1,
                    id: 'txt-container',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
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
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
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
                ["style", "width", '200px'],
                ["style", "overflow", 'hidden']
            ],
            "${_txt-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '200px'],
                ["transform", "scaleX", '1'],
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
                    font: ['chunk, serif', 108, 'rgba(51,51,51,1.00)', '400', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: '5',
                    align: 'center',
                    rect: ['46px', '54px', '100px', '84px', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 40, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text2',
                    text: '$',
                    type: 'text',
                    rect: ['39px', '47px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 16, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text3',
                    text: 'per<br>month',
                    type: 'text',
                    rect: ['135px', '92px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '92px'],
                ["style", "line-height", '16px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '135px'],
                ["style", "font-size", '16px']
            ],
            "${_Text}": [
                ["style", "line-height", '108px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '46px'],
                ["style", "font-size", '108px'],
                ["style", "top", '54px'],
                ["style", "text-align", 'center'],
                ["style", "height", '84px'],
                ["style", "font-family", 'chunk, serif'],
                ["style", "width", '100px']
            ],
            "${_Text2}": [
                ["style", "top", '47px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '39px'],
                ["style", "font-size", '40px']
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
},
"txt_2": {
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
                    font: ['chunk, serif', 108, 'rgba(51,51,51,1.00)', '400', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: '7',
                    align: 'center',
                    rect: ['46px', '54px', '100px', '84px', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 40, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text2',
                    text: '$',
                    type: 'text',
                    rect: ['39px', '47px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 16, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text3',
                    text: 'per<br>month',
                    type: 'text',
                    rect: ['135px', '92px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '92px'],
                ["style", "line-height", '16px'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '135px'],
                ["style", "font-size", '16px']
            ],
            "${_Text}": [
                ["style", "line-height", '108px'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '46px'],
                ["style", "font-size", '108px'],
                ["style", "top", '54px'],
                ["style", "text-align", 'center'],
                ["style", "height", '84px'],
                ["style", "font-family", 'chunk, serif'],
                ["style", "width", '100px']
            ],
            "${_Text2}": [
                ["style", "top", '47px'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '39px'],
                ["style", "font-size", '40px']
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
},
"txt_3": {
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
                    font: ['chunk, serif', 108, 'rgba(51,51,51,1.00)', '400', 'none', ''],
                    type: 'text',
                    id: 'TextCopy',
                    text: '9',
                    align: 'center',
                    rect: ['46px', '54px', '100px', '84px', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 40, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text2Copy',
                    text: '$',
                    type: 'text',
                    rect: ['39px', '47px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 16, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text3Copy',
                    text: 'per<br>month',
                    type: 'text',
                    rect: ['135px', '92px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy}": [
                ["style", "line-height", '108px'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '46px'],
                ["style", "font-size", '108px'],
                ["style", "top", '54px'],
                ["style", "text-align", 'center'],
                ["style", "height", '84px'],
                ["style", "font-family", 'chunk, serif'],
                ["style", "width", '100px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '92px'],
                ["style", "line-height", '16px'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '135px'],
                ["style", "font-size", '16px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '47px'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '39px'],
                ["style", "font-size", '40px']
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
