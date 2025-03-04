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
                    rect: ['-56px', '-79px','auto','auto','auto', 'auto']
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
                ["color", "background-color", '#1bbc9d'],
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
                { id: "eid120", tween: [ "style", "${_box1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid121", tween: [ "style", "${_box1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
                    opacity: 0.1,
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    opacity: 1,
                    id: 'container',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
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
            ]
        },
    states: {
        "Base State": {
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
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
            ],
            "${_container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
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
                "start": 250
            },
            timeline: [
                { id: "eid105", tween: [ "style", "${_Ellipse}", "top", '10px', { fromValue: '0px'}], position: 150, duration: 250 },
                { id: "eid107", tween: [ "style", "${_Ellipse}", "height", '80px', { fromValue: '100px'}], position: 150, duration: 250 },
                { id: "eid118", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '1'}], position: 150, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '1'}], position: 400, duration: 0 },
                { id: "eid104", tween: [ "style", "${_Ellipse}", "left", '10px', { fromValue: '0px'}], position: 150, duration: 250 },
                { id: "eid110", tween: [ "style", "${_stroke}", "height", '92px', { fromValue: '92px'}], position: 150, duration: 0, easing: "easeOutQuad" },
                { id: "eid111", tween: [ "style", "${_stroke}", "height", '92px', { fromValue: '92px'}], position: 400, duration: 0, easing: "easeOutQuad" },
                { id: "eid106", tween: [ "style", "${_Ellipse}", "width", '80px', { fromValue: '100px'}], position: 150, duration: 250 },
                { id: "eid114", tween: [ "style", "${_stroke}", "top", '0px', { fromValue: '0px'}], position: 150, duration: 0, easing: "easeOutQuad" },
                { id: "eid115", tween: [ "style", "${_stroke}", "top", '0px', { fromValue: '0px'}], position: 400, duration: 0, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "style", "${_stroke}", "left", '0px', { fromValue: '0px'}], position: 150, duration: 0, easing: "easeOutQuad" },
                { id: "eid113", tween: [ "style", "${_stroke}", "left", '0px', { fromValue: '0px'}], position: 400, duration: 0, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "style", "${_stroke}", "width", '92px', { fromValue: '92px'}], position: 150, duration: 0, easing: "easeOutQuad" },
                { id: "eid109", tween: [ "style", "${_stroke}", "width", '92px', { fromValue: '92px'}], position: 400, duration: 0, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_stroke}", "border-width", '4px', { fromValue: '4px'}], position: 400, duration: 0, easing: "easeOutQuad" },
                { id: "eid116", tween: [ "style", "${_stroke}", "opacity", '1', { fromValue: '1'}], position: 150, duration: 0, easing: "easeOutQuad" },
                { id: "eid117", tween: [ "style", "${_stroke}", "opacity", '1', { fromValue: '1'}], position: 400, duration: 0, easing: "easeOutQuad" }            ]
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
