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
                id: 'to_bottom',
                display: 'block',
                type: 'rect',
                rect: ['0px', '235px','auto','auto','auto', 'auto']
            },
            {
                id: 'to_top',
                display: 'block',
                type: 'rect',
                rect: ['0px', '183px','auto','auto','auto', 'auto']
            },
            {
                id: 'logo',
                display: 'block',
                type: 'image',
                rect: ['45px', '426px','70px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.svg",'50%','50%','100%','100%']
            },
            {
                id: 'button',
                type: 'rect',
                rect: ['0px', 'auto','auto','auto','auto', '352px'],
                opacity: 1
            },
            {
                id: 'to_bottom_2',
                display: 'none',
                type: 'rect',
                rect: ['0px', '271px','auto','auto','auto', 'auto']
            },
            {
                id: 'to_top_2',
                display: 'none',
                type: 'rect',
                rect: ['0px', '156px','auto','auto','auto', 'auto']
            },
            {
                id: 'frame',
                type: 'rect',
                rect: ['0px', '0px','98.9%','99.7%','auto', 'auto'],
                cursor: ['pointer'],
                opacity: 1,
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [1,"rgba(46,204,113,1.00)","solid"]
            },
            {
                id: 'bar',
                type: 'rect',
                rect: ['0px', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 'hotspot',
                type: 'rect',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(255, 255, 255)","none"]
            }],
            symbolInstances: [
            {
                id: 'to_bottom_2',
                symbolName: 'to_bottom_2',
                autoPlay: {

                }
            },
            {
                id: 'bar',
                symbolName: 'bar',
                autoPlay: {

                }
            },
            {
                id: 'button',
                symbolName: 'button',
                autoPlay: {

                }
            },
            {
                id: 'to_bottom',
                symbolName: 'to_bottom',
                autoPlay: {

                }
            },
            {
                id: 'to_top_2',
                symbolName: 'to_top_2',
                autoPlay: {

                }
            },
            {
                id: 'to_top',
                symbolName: 'to_top',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bar}": [
                ["style", "top", '20px'],
                ["style", "left", '-109px'],
                ["transform", "rotateZ", '-45deg']
            ],
            "${_logo}": [
                ["style", "top", '426px'],
                ["style", "display", 'block'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '0'],
                ["style", "height", '100px'],
                ["style", "background-size", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '45px'],
                ["style", "width", '70px']
            ],
            "${_frame}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '98.89%'],
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "height", '99.67%'],
                ["color", "border-color", 'rgba(46,204,113,1.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "border-width", '1px']
            ],
            "${_txt}": [
                ["style", "bottom", '0px']
            ],
            "${_hotspot}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0'],
                ["style", "height", '100%'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_to_bottom}": [
                ["style", "top", '235px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_to_bottom_2}": [
                ["style", "top", '271px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_button}": [
                ["style", "top", 'auto'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "bottom", '352px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(52,73,94,1.00)'],
                ["style", "width", '160px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_to_top_2}": [
                ["style", "top", '156px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_to_top}": [
                ["style", "top", '183px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8750,
            autoPlay: true,
            labels: {
                "set-texts-loop": 500,
                "texts-off": 3100,
                "loop-check": 3500
            },
            timeline: [
                { id: "eid27", tween: [ "style", "${_to_bottom}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_to_bottom}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 0 },
                { id: "eid98", tween: [ "style", "${_to_bottom}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 0, easing: "easeInQuad" },
                { id: "eid91", tween: [ "style", "${_bar}", "left", '-109px', { fromValue: '-109px'}], position: 5100, duration: 0 },
                { id: "eid54", tween: [ "style", "${_to_top_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
                { id: "eid53", tween: [ "style", "${_to_top_2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutCubic" },
                { id: "eid34", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutCubic" },
                { id: "eid49", tween: [ "style", "${_to_bottom_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
                { id: "eid48", tween: [ "style", "${_to_bottom_2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutCubic" },
                { id: "eid11", tween: [ "style", "${_logo}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_to_bottom}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0, easing: "easeInQuad" },
                { id: "eid96", tween: [ "style", "${_to_top}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_to_top}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_to_top}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 0 },
                { id: "eid95", tween: [ "style", "${_to_top}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 0, easing: "easeInQuad" },
                { id: "eid92", tween: [ "style", "${_bar}", "top", '20px', { fromValue: '20px'}], position: 5100, duration: 0 },
                { id: "eid72", tween: [ "style", "${_logo}", "background-size", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 500, easing: "easeOutCubic" },
                { id: "eid83", tween: [ "style", "${_button}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_button}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 0 }            ]
        }
    }
},
"to_top": {
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
                    rect: ['0px', 'auto', '100%', '28px', 'auto', '1px'],
                    id: 'txt',
                    text: 'TO THE TOP',
                    align: 'center',
                    font: ['source-sans-pro, sans-serif', 28, 'rgba(255,255,255,1)', '600', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["style", "line-height", '28px'],
                ["style", "bottom", '-28px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '0px'],
                ["style", "width", '100%'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "height", '28px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '28px'],
                ["style", "opacity", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '160px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 700,
            autoPlay: false,
            labels: {
                "last": 350
            },
            timeline: [
                { id: "eid25", tween: [ "style", "${_txt}", "bottom", '2px', { fromValue: '-28px'}], position: 0, duration: 350, easing: "easeOutCubic" },
                { id: "eid74", tween: [ "style", "${_txt}", "bottom", '-28px', { fromValue: '2px'}], position: 350, duration: 350, easing: "easeInQuad" }            ]
        }
    }
},
"to_bottom": {
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
                    rect: ['0px', '0px', '100%', '28px', 'auto', 'auto'],
                    id: 'txt',
                    text: 'TO THE BOTTOM',
                    align: 'center',
                    font: ['source-sans-pro, sans-serif', 28, 'rgba(255,255,255,1.00)', '600', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["style", "line-height", '28px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '0px'],
                ["style", "width", '100%'],
                ["style", "top", '-28px'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "height", '28px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '28px'],
                ["style", "opacity", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '160px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            labels: {
                "last": 500
            },
            timeline: [
                { id: "eid24", tween: [ "style", "${_txt}", "top", '0px', { fromValue: '-28px'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid82", tween: [ "style", "${_txt}", "top", '-28px', { fromValue: '0px'}], position: 500, duration: 500, easing: "easeOutCubic" }            ]
        }
    }
},
"button": {
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
                    rect: ['20px', '0px', '180px', '32px', 'auto', 'auto'],
                    borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(242,122,69,1.00)']
                },
                {
                    type: 'text',
                    rect: ['0px', '6px', '160px', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'GET IT NOW',
                    align: 'center',
                    font: ['source-sans-pro, sans-serif', 16, 'rgba(255,255,255,1)', '600', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(242,122,69,1.00)'],
                ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "left", '40px'],
                ["style", "width", '80px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '32px'],
                ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text}": [
                ["style", "top", '6px'],
                ["style", "font-size", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '160px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '160px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            timeline: [
                { id: "eid63", tween: [ "style", "${_RoundRect}", "width", '120px', { fromValue: '80px'}], position: 0, duration: 175, easing: "easeOutCubic" },
                { id: "eid41", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400, easing: "easeOutCubic" },
                { id: "eid44", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400, easing: "easeOutCubic" },
                { id: "eid90", tween: [ "style", "${_RoundRect}", "left", '20px', { fromValue: '40px'}], position: 0, duration: 175, easing: "easeOutCubic" }            ]
        }
    }
},
"to_bottom_2": {
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
                    rect: ['0px', 'auto', '100%', '36px', 'auto', '2.5%'],
                    font: ['source-sans-pro, sans-serif', 12, 'rgba(255,255,255,1.00)', '600', 'none', ''],
                    id: 'txt',
                    text: 'Try the service.',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['0px', 'auto', '100%', '36px', 'auto', '2.5%'],
                    font: ['source-sans-pro, sans-serif', 12, 'rgba(255,255,255,1.00)', '600', 'none', ''],
                    id: 'txt2',
                    text: 'Get the discount',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["style", "line-height", '36px'],
                ["style", "bottom", '117.5%'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '0px'],
                ["style", "width", '100%'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'center'],
                ["style", "height", '36px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '12px']
            ],
            "${_txt2}": [
                ["style", "line-height", '36px'],
                ["style", "bottom", '70%'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '0px'],
                ["style", "width", '100%'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'center'],
                ["style", "height", '36px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '160px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            labels: {
                "last": 400
            },
            timeline: [
                { id: "eid99", tween: [ "style", "${_txt2}", "bottom", '-12.5%', { fromValue: '70%'}], position: 0, duration: 400, easing: "easeOutCubic" },
                { id: "eid25", tween: [ "style", "${_txt}", "bottom", '30%', { fromValue: '117.5%'}], position: 0, duration: 400, easing: "easeOutCubic" }            ]
        }
    }
},
"to_top_2": {
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
                    rect: ['0px', 'auto', '100%', '36px', 'auto', '2.5%'],
                    id: 'txt',
                    text: 'Don\'t hesitate',
                    align: 'center',
                    font: ['source-sans-pro, sans-serif', 20, 'rgba(255,255,255,1.00)', '600', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["style", "line-height", '36px'],
                ["style", "bottom", '-77.5%'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '0px'],
                ["style", "width", '100%'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'center'],
                ["style", "height", '36px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '160px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            labels: {
                "last": 400
            },
            timeline: [
                { id: "eid25", tween: [ "style", "${_txt}", "bottom", '0%', { fromValue: '-77.5%'}], position: 0, duration: 400, easing: "easeOutCubic" }            ]
        }
    }
},
"bar": {
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
                    rect: ['0px', '0px', '300px', '42px', 'auto', 'auto'],
                    id: 'long_bar',
                    stroke: [1, 'rgba(163, 163, 163, 0.498039)', 'none'],
                    type: 'rect',
                    fill: ['rgba(46,204,113,1.00)']
                },
                {
                    type: 'text',
                    rect: ['0px', '17px', '300px', 'auto', 'auto', 'auto'],
                    align: 'center',
                    id: 'txt',
                    text: 'Get it now!',
                    cursor: ['default'],
                    font: ['source-sans-pro, sans-serif', 16, 'rgba(255,255,255,1.00)', '700', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['0px', '3px', '300px', 'auto', 'auto', 'auto'],
                    align: 'center',
                    id: 'txt_black',
                    text: '25% discount',
                    cursor: ['default'],
                    font: ['source-sans-pro, sans-serif', 14, 'rgba(0,0,0,1.00)', '600', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '300px'],
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '16px'],
                ["style", "cursor", 'default']
            ],
            "${_txt_black}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '0px'],
                ["style", "width", '300px'],
                ["style", "top", '3px'],
                ["style", "text-align", 'center'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "cursor", 'default'],
                ["style", "font-size", '14px']
            ],
            "${_long_bar}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(46,204,113,1.00)'],
                ["style", "height", '42px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '300px']
            ],
            "${symbolSelector}": [
                ["style", "height", '42px'],
                ["style", "width", '300px']
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
})(jQuery, AdobeEdge, "EDGE-465557");
