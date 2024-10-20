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
                ["color", "background-color", '#F06060'],
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
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'visible']
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
            ]
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
                    rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse_initial',
                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(22,22,22,0.63)']
                },
                {
                    rect: ['50%', '0%', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    opacity: 1,
                    id: 'initial',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.1']],
                    rect: ['-2px', '-1px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse_hover',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    opacity: 0.1,
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['50%', '0%', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    opacity: 1,
                    id: 'hover',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
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
            "${_Ellipse_hover}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.05'],
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
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '100px']
            ],
            "${_Ellipse_initial}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '100px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '100px'],
                ["color", "background-color", 'rgba(22,22,22,0.63)'],
                ["style", "border-width", '0px']
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
                { id: "eid246", tween: [ "style", "${_Ellipse_initial}", "opacity", '0.5', { fromValue: '1'}], position: 221, duration: 129 },
                { id: "eid248", tween: [ "style", "${_Ellipse_hover}", "top", '0px', { fromValue: '0px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid249", tween: [ "style", "${_Ellipse_hover}", "top", '0px', { fromValue: '0px'}], position: 350, duration: 0, easing: "easeOutQuad" },
                { id: "eid199", tween: [ "style", "${_initial}", "top", '0%', { fromValue: '0%'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid245", tween: [ "style", "${_Ellipse_initial}", "top", '5px', { fromValue: '0px'}], position: 100, duration: 250 },
                { id: "eid247", tween: [ "transform", "${_Ellipse_initial}", "scaleY", '0.1', { fromValue: '1'}], position: 100, duration: 250, easing: "easeOutQuad" },
                { id: "eid235", tween: [ "style", "${_initial}", "opacity", '0', { fromValue: '1'}], position: 100, duration: 250 },
                { id: "eid222", tween: [ "transform", "${_hover}", "scaleY", '1', { fromValue: '0.1'}], position: 100, duration: 250, easing: "easeOutQuad" },
                { id: "eid250", tween: [ "style", "${_Ellipse_hover}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid251", tween: [ "style", "${_Ellipse_hover}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid223", tween: [ "style", "${_hover}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid224", tween: [ "style", "${_hover}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid252", tween: [ "transform", "${_Ellipse_hover}", "scaleY", '1', { fromValue: '0.05'}], position: 100, duration: 250, easing: "easeOutQuad" },
                { id: "eid233", tween: [ "transform", "${_initial}", "scaleY", '0.01', { fromValue: '1'}], position: 100, duration: 250, easing: "easeOutQuad" }            ]
        }
    }
},
"ellipse_ani": {
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
                    transform: [[0, 0], [], [], ['1', '0.1']],
                    rect: ['-2px', '-1px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    opacity: 0.1,
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.1'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'hidden']
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
                { id: "eid213", tween: [ "style", "${_Ellipse}", "top", '0px', { fromValue: '0px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid214", tween: [ "style", "${_Ellipse}", "top", '0px', { fromValue: '0px'}], position: 350, duration: 0, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid212", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid217", tween: [ "transform", "${_Ellipse}", "scaleY", '1', { fromValue: '0.1'}], position: 100, duration: 250, easing: "easeOutQuad" }            ]
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
