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
                ["color", "background-color", '#37a86a'],
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
                    opacity: 0.15,
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'ellipse_ani',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
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
            {
                id: 'ellipse_ani',
                symbolName: 'ellipse',
                autoPlay: {

               }
            }            ]
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
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '100px'],
                ["style", "opacity", '0.150000'],
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
            duration: 400,
            autoPlay: false,
            labels: {
                "start": 250,
                "Label 2": 400
            },
            timeline: [
                { id: "eid57", tween: [ "style", "${_Ellipse}", "width", '100px', { fromValue: '100px'}], position: 400, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Ellipse}", "height", '100px', { fromValue: '100px'}], position: 400, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0.150000'}], position: 250, duration: 150 },
                { id: "eid54", tween: [ "style", "${_Ellipse}", "left", '0px', { fromValue: '0px'}], position: 400, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Ellipse}", "top", '0px', { fromValue: '0px'}], position: 400, duration: 0 }            ]
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
"ellipse": {
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
                    opacity: 1,
                    id: 'ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '-90px'],
                ["style", "height", '102px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px'],
                ["style", "width", '102px']
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
            duration: 250,
            autoPlay: false,
            labels: {
                "start": 100
            },
            timeline: [
                { id: "eid103", tween: [ "style", "${_ellipse}", "width", '102px', { fromValue: '102px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid97", tween: [ "style", "${_ellipse}", "width", '110px', { fromValue: '102px'}], position: 250, duration: 0 },
                { id: "eid93", tween: [ "style", "${_ellipse}", "top", '-5px', { fromValue: '-90px'}], position: 100, duration: 150, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_ellipse}", "left", '-1px', { fromValue: '-1px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_ellipse}", "left", '-5px', { fromValue: '-1px'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_ellipse}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid95", tween: [ "style", "${_ellipse}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 0 },
                { id: "eid104", tween: [ "style", "${_ellipse}", "height", '102px', { fromValue: '102px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${_ellipse}", "height", '110px', { fromValue: '102px'}], position: 250, duration: 0 }            ]
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
