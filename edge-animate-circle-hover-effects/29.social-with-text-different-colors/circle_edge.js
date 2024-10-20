/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['icon-font, Arial, sans-serif']='<link rel=\"stylesheet\" href=\"icons/styles.css\">';
    fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';

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
                rect: ['40', '120','880','160','auto', 'auto'],
//              rect: ['130', '150','700','100','auto', 'auto'],
                c: [
                {
                    id: 'box1',
                    type: 'rect',
                    rect: ['0px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'box2',
                    type: 'rect',
                    rect: ['180px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'box3',
                    type: 'rect',
                    rect: ['360px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'box4',
                    type: 'rect',
                    rect: ['540px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'box5',
                    type: 'rect',
                    rect: ['720px', '0px','auto','auto','auto', 'auto']
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
                ["style", "left", '180px'],
                ["style", "top", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '100%'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_box4}": [
                ["style", "left", '540px'],
                ["style", "top", '0px']
            ],
            "${_box3}": [
                ["style", "left", '360px'],
                ["style", "top", '0px']
            ],
            "${_box5}": [
                ["style", "left", '720px'],
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
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'Ellipse',
                    opacity: 0.1,
                    type: 'ellipse',
                    fill: ['rgba(51,51,51,1.00)']
                },
                {
                    rect: ['-5px', '-5px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    stroke: [5, 'rgba(51,51,51,1.00)', 'solid'],
                    id: 'stroke',
                    opacity: 1,
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
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
            ]
        },
    states: {
        "Base State": {
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
            "${_Ellipse}": [
                ["style", "top", '50px'],
                ["color", "background-color", 'rgba(51,51,51,1.00)'],
                ["style", "height", '60px'],
                ["style", "opacity", '0'],
                ["style", "left", '50px'],
                ["style", "width", '60px']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '160px']
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
            "${_stroke}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '0.6'],
                ["style", "left", '0px'],
                ["style", "width", '158px'],
                ["style", "top", '0px'],
                ["style", "height", '158px'],
                ["color", "border-color", 'rgba(51,51,51,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "start": 250,
                "Label 1": 500
            },
            timeline: [
                { id: "eid107", tween: [ "style", "${_Ellipse}", "top", '-8px', { fromValue: '50px'}], position: 250, duration: 150, easing: "easeOutQuad" },
                { id: "eid111", tween: [ "style", "${_Ellipse}", "top", '0px', { fromValue: '-8px'}], position: 400, duration: 100, easing: "easeOutQuad" },
                { id: "eid17", tween: [ "style", "${_stroke}", "left", '-8px', { fromValue: '0px'}], position: 250, duration: 150, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 150 },
                { id: "eid106", tween: [ "style", "${_Ellipse}", "left", '-8px', { fromValue: '50px'}], position: 250, duration: 150, easing: "easeOutQuad" },
                { id: "eid110", tween: [ "style", "${_Ellipse}", "left", '0px', { fromValue: '-8px'}], position: 400, duration: 100, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_stroke}", "height", '174px', { fromValue: '158px'}], position: 250, duration: 150, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "style", "${_Ellipse}", "width", '176px', { fromValue: '60px'}], position: 250, duration: 150, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "style", "${_Ellipse}", "width", '160px', { fromValue: '176px'}], position: 400, duration: 100, easing: "easeOutQuad" },
                { id: "eid11", tween: [ "style", "${_stroke}", "width", '174px', { fromValue: '158px'}], position: 250, duration: 150, easing: "easeOutQuad" },
                { id: "eid109", tween: [ "style", "${_Ellipse}", "height", '176px', { fromValue: '60px'}], position: 250, duration: 150, easing: "easeOutQuad" },
                { id: "eid113", tween: [ "style", "${_Ellipse}", "height", '160px', { fromValue: '176px'}], position: 400, duration: 100, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_stroke}", "top", '-8px', { fromValue: '0px'}], position: 250, duration: 150, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_stroke}", "border-width", '1px', { fromValue: '1px'}], position: 400, duration: 0, easing: "easeOutQuad" },
                { id: "eid114", tween: [ "style", "${_stroke}", "opacity", '0', { fromValue: '0.6'}], position: 250, duration: 150 }            ]
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
                    font: ['icon-font, Arial, sans-serif', 50, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'txt',
                    text: 'O',
                    align: 'center',
                    rect: ['0px', '0px', '100%', '160px', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 20, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'counter',
                    text: '179 tweets',
                    align: 'center',
                    rect: ['10%', '93px', '80%', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["style", "top", '0px'],
                ["style", "font-size", '50px'],
                ["style", "text-align", 'center'],
                ["style", "line-height", '125px'],
                ["style", "height", '160px'],
                ["style", "font-family", 'icon-font, Arial, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_counter}": [
                ["style", "top", '93px'],
                ["style", "font-size", '20px'],
                ["style", "font-weight", '400'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '10%'],
                ["style", "width", '80%']
            ],
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '160px']
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
