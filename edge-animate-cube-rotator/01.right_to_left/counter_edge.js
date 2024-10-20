/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';

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
                id: 'Group',
                type: 'group',
                rect: ['0', '146','550','120','auto', 'auto'],
                c: [
                {
                    id: 'box',
                    type: 'rect',
                    rect: ['240px', '29px','auto','auto','auto', 'auto']
                },
                {
                    id: 'content',
                    type: 'rect',
                    rect: ['-10px', '0px','auto','auto','auto', 'auto']
                }]
            }],
            symbolInstances: [
            {
                id: 'content',
                symbolName: 'content',
                autoPlay: {

                }
            },
            {
                id: 'box',
                symbolName: 'box',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(14,131,205,1.00)'],
                ["style", "width", '100%'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_content}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-10px']
            ],
            "${_box}": [
                ["style", "top", '29px'],
                ["style", "opacity", '1'],
                ["style", "left", '240px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: false,
            labels: {
                "show_content": 250
            },
            timeline: [
                { id: "eid237", tween: [ "style", "${_box}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid241", tween: [ "style", "${_box}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 500, easing: "easeOutQuad" },
                { id: "eid244", tween: [ "style", "${_content}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 1000, easing: "easeInQuad" }            ]
        }
    }
},
"box": {
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
                    rect: ['0px', '0px', '80px', '50px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    opacity: 1,
                    id: 'RectangleNew',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '100%', '50px', 'auto', 'auto'],
                    font: ['source-sans-pro, sans-serif', 30, 'rgba(255,255,255,1.00)', '400', 'none', ''],
                    align: 'center',
                    id: 'TextNew',
                    text: '8',
                    cursor: ['default'],
                    type: 'text'
                },
                {
                    rect: ['0px', '0px', '80px', '50px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '100%', '50px', 'auto', 'auto'],
                    font: ['source-sans-pro, sans-serif', 30, 'rgba(255,255,255,1.00)', '400', 'none', ''],
                    align: 'center',
                    id: 'Text',
                    text: '8',
                    cursor: ['default'],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextNew}": [
                ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "font-weight", '400'],
                ["style", "width", '100%'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'default'],
                ["style", "height", '50px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "line-height", '50px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_Text}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "font-weight", '400'],
                ["style", "line-height", '50px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '100%'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '50px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '30px'],
                ["style", "cursor", 'default']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ],
            "${_RectangleNew}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '50px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '50px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid175", tween: [ "transform", "${_Rectangle}", "scaleX", '0.7', { fromValue: '1'}], position: 500, duration: 375, easing: "easeInQuad" },
                { id: "eid176", tween: [ "transform", "${_Rectangle}", "scaleX", '0', { fromValue: '0.7'}], position: 875, duration: 375, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "style", "${_TextNew}", "left", '10px', { fromValue: '0px'}], position: 500, duration: 375, easing: "easeInQuad" },
                { id: "eid145", tween: [ "style", "${_TextNew}", "left", '0px', { fromValue: '10px'}], position: 875, duration: 375, easing: "easeOutQuad" },
                { id: "eid140", tween: [ "style", "${_TextNew}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 375 },
                { id: "eid129", tween: [ "transform", "${_TextNew}", "scaleX", '0.7', { fromValue: '0'}], position: 500, duration: 375, easing: "easeInQuad" },
                { id: "eid130", tween: [ "transform", "${_TextNew}", "scaleX", '1', { fromValue: '0.7'}], position: 875, duration: 375, easing: "easeOutQuad" },
                { id: "eid124", tween: [ "style", "${_Text}", "left", '-10px', { fromValue: '0px'}], position: 500, duration: 375, easing: "easeInQuad" },
                { id: "eid125", tween: [ "style", "${_Text}", "left", '0px', { fromValue: '-10px'}], position: 875, duration: 375, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "transform", "${_Text}", "scaleX", '0.7', { fromValue: '1'}], position: 500, duration: 375, easing: "easeInQuad" },
                { id: "eid123", tween: [ "transform", "${_Text}", "scaleX", '0', { fromValue: '0.7'}], position: 875, duration: 375, easing: "easeOutQuad" },
                { id: "eid170", tween: [ "transform", "${_RectangleNew}", "scaleX", '0.7', { fromValue: '0'}], position: 500, duration: 375, easing: "easeInQuad" },
                { id: "eid171", tween: [ "transform", "${_RectangleNew}", "scaleX", '1', { fromValue: '0.7'}], position: 875, duration: 375, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${_RectangleNew}", "left", '10px', { fromValue: '0px'}], position: 500, duration: 375, easing: "easeInQuad" },
                { id: "eid66", tween: [ "style", "${_RectangleNew}", "left", '0px', { fromValue: '10px'}], position: 875, duration: 375, easing: "easeOutQuad" },
                { id: "eid128", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 700, duration: 550 },
                { id: "eid10", tween: [ "style", "${_Rectangle}", "left", '-10px', { fromValue: '0px'}], position: 500, duration: 375, easing: "easeInQuad" },
                { id: "eid48", tween: [ "style", "${_Rectangle}", "left", '0px', { fromValue: '-10px'}], position: 875, duration: 375, easing: "easeOutQuad" }            ]
        }
    }
},
"content": {
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
                    rect: ['10%', '44px', '80%', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '700', 'none', ''],
                    opacity: 1,
                    id: 'content',
                    text: 'ANY CONTENT HERE',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10%', '0px', '78.6%', '114px', 'auto', 'auto'],
                    borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                    id: 'RoundRect',
                    stroke: [3, 'rgba(255,255,255,1.00)', 'dashed'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'dashed'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '78.64%'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '10%'],
                ["style", "border-width", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '550px']
            ],
            "${_content}": [
                ["style", "top", '44px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '10%'],
                ["style", "width", '80%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
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
})(jQuery, AdobeEdge, "EDGE-11218185");
