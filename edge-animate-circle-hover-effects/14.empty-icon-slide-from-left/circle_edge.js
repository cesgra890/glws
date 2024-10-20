/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['icon-font, Arial, sans-serif']='<link rel=\"stylesheet\" href=\"icons/styles.css\">';

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
                rect: ['130', '150','700','100','auto', 'auto'],
                c: [
                {
                    id: 'box1',
                    type: 'rect',
                    rect: ['0px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'box2',
                    type: 'rect',
                    rect: ['150px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'box3',
                    type: 'rect',
                    rect: ['300px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'box4',
                    type: 'rect',
                    rect: ['450px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'box5',
                    type: 'rect',
                    rect: ['600px', '0px','auto','auto','auto', 'auto']
                }]
            }],
            symbolInstances: [
            {
                id: 'box4',
                symbolName: 'box',
                autoPlay: {

                }
            },
            {
                id: 'box3',
                symbolName: 'box',
                autoPlay: {

                }
            },
            {
                id: 'box5',
                symbolName: 'box',
                autoPlay: {

                }
            },
            {
                id: 'box2',
                symbolName: 'box',
                autoPlay: {

                }
            },
            {
                id: 'box1',
                symbolName: 'box',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_box1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_box2}": [
                ["style", "left", '150px'],
                ["style", "top", '0px']
            ],
            "${_box3}": [
                ["style", "left", '300px'],
                ["style", "top", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", '#ef8e5b'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '100%']
            ],
            "${_box4}": [
                ["style", "left", '450px'],
                ["style", "top", '0px']
            ],
            "${_box5}": [
                ["style", "left", '600px'],
                ["style", "top", '0px']
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
                    rect: ['-5px', '-5px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 1,
                    id: 'stroke',
                    stroke: [5, 'rgba(255,255,255,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'tween_container',
                    type: 'rect',
                    rect: ['0px', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    rect: ['0px', '0px', '90%', '90%', 'auto', 'auto'],
                    id: 'hotspot',
                    stroke: [5, 'rgb(255, 255, 255)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'tween_container',
                symbolName: 'tween_container',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_tween_container}": [
                ["style", "left", '0px']
            ],
            "${_stroke}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '92px'],
                ["style", "top", '0px'],
                ["style", "height", '92px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px']
            ],
            "${_hotspot}": [
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '90%'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '90%'],
                ["style", "cursor", 'pointer'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "start": 100,
                "out": 250
            },
            timeline: [
                { id: "eid142", tween: [ "style", "${_stroke}", "left", '0px', { fromValue: '0px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid143", tween: [ "style", "${_stroke}", "left", '0px', { fromValue: '0px'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "style", "${_stroke}", "top", '0px', { fromValue: '0px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid145", tween: [ "style", "${_stroke}", "top", '0px', { fromValue: '0px'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid146", tween: [ "style", "${_stroke}", "width", '92px', { fromValue: '92px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid147", tween: [ "style", "${_stroke}", "width", '92px', { fromValue: '92px'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid167", tween: [ "style", "${_stroke}", "border-width", '4px', { fromValue: '4px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid168", tween: [ "style", "${_stroke}", "border-width", '4px', { fromValue: '4px'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid148", tween: [ "style", "${_stroke}", "height", '92px', { fromValue: '92px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid149", tween: [ "style", "${_stroke}", "height", '92px', { fromValue: '92px'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid197", tween: [ "style", "${_stroke}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid200", tween: [ "style", "${_stroke}", "opacity", '0.5', { fromValue: '1'}], position: 100, duration: 150 }            ]
        }
    }
},
"icon": {
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
                    rect: ['0px', '22px', '100px', 'auto', 'auto', 'auto'],
                    font: ['icon-font, Arial, sans-serif', 60, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'txt',
                    text: 'O',
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
                ["style", "top", '22px'],
                ["style", "text-align", 'center'],
                ["style", "width", '100px'],
                ["style", "line-height", '60px'],
                ["style", "font-family", 'icon-font, Arial, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '60px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
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
},
"tween_container": {
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
                    rect: ['50%', '0%', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'initial',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['50%', '0%', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'hover',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hover}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '-100%'],
                ["style", "width", '100%'],
                ["style", "top", '0%'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '100%'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'hidden']
            ],
            "${_initial}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0%'],
                ["style", "width", '100%'],
                ["style", "top", '0%'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '100%'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
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
                "start": 100
            },
            timeline: [
                { id: "eid196", tween: [ "style", "${_initial}", "opacity", '0', { fromValue: '1'}], position: 100, duration: 150, easing: "easeOutQuad" },
                { id: "eid190", tween: [ "style", "${_hover}", "left", '0%', { fromValue: '-100%'}], position: 250, duration: 150, easing: "easeOutQuad" },
                { id: "eid193", tween: [ "style", "${_initial}", "left", '50%', { fromValue: '0%'}], position: 100, duration: 150, easing: "easeOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-10963708");
