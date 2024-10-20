/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';

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
                id: 'box1',
                type: 'rect',
                rect: ['211px', '200px','auto','auto','auto', 'auto']
            },
            {
                id: 'box2',
                type: 'rect',
                rect: ['491px', '200px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'box1',
                symbolName: 'box',
                autoPlay: {

                }
            },
            {
                id: 'box2',
                symbolName: 'box',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(207,231,233,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '960px']
            ],
            "${_box1}": [
                ["style", "left", '211px'],
                ["style", "top", '200px']
            ],
            "${_box2}": [
                ["style", "left", '491px'],
                ["style", "top", '200px']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
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
                    type: 'rect',
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'bckg_shadow',
                    opacity: 0.5,
                    cursor: ['pointer'],
                    rect: ['-4px', '4px', '100%', '100%', 'auto', 'auto'],
                    display: 'none',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    fill: ['rgba(31,31,31,0.50)']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'bckg',
                    opacity: 1,
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['0px', '0px', '250px', '80px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'curl_ani',
                    type: 'rect',
                    rect: ['auto', 'auto', 'auto', 'auto', '0px', '0px']
                },
                {
                    rect: ['1px', '0px', '100%', '100%', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotspot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            {
                id: 'curl_ani',
                symbolName: 'curl_ani',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bckg_shadow}": [
                ["color", "background-color", 'rgba(31,31,31,0.50)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.5'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '4px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-4px']
            ],
            "${_curl_ani}": [
                ["style", "top", 'auto'],
                ["transform", "scaleY", '1'],
                ["style", "bottom", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "right", '0px'],
                ["style", "left", 'auto']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '260px']
            ],
            "${_container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '80px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '250px']
            ],
            "${_hotspot}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '100%']
            ],
            "${_bckg}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100%'],
                ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
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
                { id: "eid171", tween: [ "style", "${_bckg_shadow}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
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
                    id: 'store_itunes',
                    type: 'image',
                    rect: ['0px', '0px', '240px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/store_itunes.png', '0px', '0px']
                },
                {
                    font: ['open-sans, sans-serif', 14, 'rgba(255,255,255,1.00)', '100', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'Available on the',
                    align: 'left',
                    rect: ['62px', '10px', '180px', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_store_itunes}": [
                ["style", "height", '80px'],
                ["style", "width", '240px']
            ],
            "${_Text}": [
                ["style", "top", '10px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'left'],
                ["style", "font-weight", '100'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '62px'],
                ["style", "width", '180px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '250px']
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
"curl_ani": {
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
                    rect: ['129px', '129px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['5px', '5px', '5px', '5px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'curl_elementShadow',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(48,48,48,1.00)']
                },
                {
                    rect: ['129px', '129px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'curl_element',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(117,117,117,1)']
                },
                {
                    rect: ['150px', '150px', '100px', '100px', 'auto', 'auto'],
                    type: 'rect',
                    opacity: 1,
                    id: 'hider',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    transform: [[0, 0], ['45']],
                    fill: ['rgba(231,231,231,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hider}": [
                ["color", "background-color", 'rgba(231,231,231,1.00)'],
                ["style", "top", '86px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", '86px'],
                ["style", "width", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'hidden']
            ],
            "${_curl_element}": [
                ["color", "background-color", 'rgba(117,117,117,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '101px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '101px']
            ],
            "${_curl_elementShadow}": [
                ["color", "background-color", 'rgba(48,48,48,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '105px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '97px']
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
                "start": 67
            },
            timeline: [
                { id: "eid190", tween: [ "style", "${_curl_elementShadow}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid138", tween: [ "style", "${_hider}", "top", '70px', { fromValue: '86px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_curl_elementShadow}", "left", '65px', { fromValue: '97px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_curl_element}", "top", '69px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "style", "${_hider}", "left", '70px', { fromValue: '86px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_curl_elementShadow}", "top", '73px', { fromValue: '105px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_curl_element}", "left", '69px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" }            ]
        }
    }
},
"shine": {
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
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,0.50)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,0.50)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '100%'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100%'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
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
            duration: 250,
            autoPlay: false,
            labels: {
                "start": 33
            },
            timeline: [
                { id: "eid126", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 33 },
                { id: "eid127", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 33, duration: 217 }            ]
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
                    id: 'store_googleplay',
                    type: 'image',
                    rect: ['0px', '0px', '240px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/store_googleplay.png', '0px', '0px']
                },
                {
                    font: ['open-sans, sans-serif', 14, 'rgba(255,255,255,1.00)', '100', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'Available on the',
                    align: 'left',
                    rect: ['62px', '10px', '180px', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_store_googleplay}": [
                ["style", "height", '80px'],
                ["style", "width", '240px']
            ],
            "${_Text}": [
                ["style", "top", '10px'],
                ["style", "width", '180px'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '62px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '250px']
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
