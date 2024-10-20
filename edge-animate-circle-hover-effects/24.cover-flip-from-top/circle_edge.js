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
                ["color", "background-color", '#3e73e6'],
                ["style", "width", '100%'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
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
                    rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(22,22,22,0.25)']
                },
                {
                    id: 'tween_container',
                    type: 'rect',
                    rect: ['0px', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '90%', '90%', 'auto', 'auto'],
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    type: 'rect',
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
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(22,22,22,0.25)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '100px'],
                ["style", "opacity", '1'],
                ["style", "border-width", '0px'],
                ["style", "width", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'visible']
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
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 350,
            autoPlay: false,
            labels: {
                "start": 100,
                "out": 350
            },
            timeline: [
                { id: "eid226", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid225", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 0, easing: "easeOutQuad" }            ]
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
                    type: 'text',
                    rect: ['0px', '22px', '100px', 'auto', 'auto', 'auto'],
                    id: 'txt',
                    text: 'O',
                    align: 'center',
                    font: ['icon-font, Arial, sans-serif', 60, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["style", "line-height", '60px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '60px'],
                ["style", "top", '22px'],
                ["style", "font-family", 'icon-font, Arial, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
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
                    transform: [[], [], [], ['1', '0.1']],
                    rect: ['-2px', '-1px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'Ellipse',
                    opacity: 0.1,
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
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
                ["style", "opacity", '0'],
                ["style", "left", '0%'],
                ["style", "width", '100%'],
                ["style", "top", '0%'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.1'],
                ["style", "height", '100%'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.1'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
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
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 350,
            autoPlay: false,
            labels: {
                "start": 100
            },
            timeline: [
                { id: "eid232", tween: [ "style", "${_Ellipse}", "top", '0px', { fromValue: '0px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid233", tween: [ "style", "${_Ellipse}", "top", '0px', { fromValue: '0px'}], position: 350, duration: 0, easing: "easeOutQuad" },
                { id: "eid196", tween: [ "style", "${_initial}", "opacity", '1', { fromValue: '1'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid222", tween: [ "transform", "${_hover}", "scaleY", '1', { fromValue: '0.1'}], position: 100, duration: 250, easing: "easeOutQuad" },
                { id: "eid234", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid235", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid199", tween: [ "style", "${_initial}", "top", '0%', { fromValue: '0%'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid236", tween: [ "transform", "${_Ellipse}", "scaleY", '1', { fromValue: '0.1'}], position: 100, duration: 250, easing: "easeOutQuad" },
                { id: "eid223", tween: [ "style", "${_hover}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid224", tween: [ "style", "${_hover}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 0, easing: "easeOutQuad" }            ]
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
