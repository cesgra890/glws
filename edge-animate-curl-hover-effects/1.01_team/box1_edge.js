/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['amaranth, sans-serif']='<script src=\"http://use.edgefonts.net/amaranth:n7,i4,i7,n4:all.js\"></script>';

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
                rect: ['160px', '50px','200px','300px','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box2',
                type: 'rect',
                rect: ['390px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box3',
                type: 'rect',
                rect: ['620px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            }],
            symbolInstances: [
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
            },
            {
                id: 'box3',
                symbolName: 'box',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_box1}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "cursor", 'auto'],
                ["style", "left", '160px']
            ],
            "${_box2}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '390px'],
                ["style", "cursor", 'auto']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(30,188,197,1.00)'],
                ["style", "width", '960px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_box3}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '620px'],
                ["style", "cursor", 'auto']
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
                    rect: ['-4px', '4px', '200px', '200px', 'auto', 'auto'],
                    opacity: 1,
                    id: 'bckg_shadow',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0.20)']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                    opacity: 1,
                    id: 'bckg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    opacity: 1,
                    id: 'img-container',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['0px', '204px', '200px', '80px', 'auto', 'auto'],
                    opacity: 1,
                    id: 'txt-container',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'shine',
                    type: 'rect',
                    rect: ['0px', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'curl_ani',
                    type: 'rect',
                    rect: ['100px', '104px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '100%', '100%', 'auto', 'auto'],
                    id: 'hotspot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            {
                id: 'shine',
                symbolName: 'shine',
                autoPlay: {

               }
            },
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
                ["style", "top", '4px'],
                ["color", "background-color", 'rgba(0,0,0,0.20)'],
                ["style", "height", '200px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-4px']
            ],
            "${_hotspot}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '100%']
            ],
            "${_bckg}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '200px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_shine}": [
                ["style", "left", '0px']
            ],
            "${_txt-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '204px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '80px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${_img-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '200px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '200px'],
                ["style", "overflow", 'visible']
            ],
            "${_curl_ani}": [
                ["style", "top", '104px'],
                ["transform", "scaleY", '1'],
                ["style", "bottom", 'auto'],
                ["transform", "scaleX", '1'],
                ["style", "right", 'auto'],
                ["style", "left", '100px']
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
                    rect: ['0px', '10px', '200px', 'auto', 'auto', 'auto'],
                    font: ['amaranth, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'WILLIAM PORTER',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['0px', '45px', '200px', 'auto', 'auto', 'auto'],
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    id: 'TextCopy',
                    text: 'UI/UX specialist',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '45px'],
                ["style", "text-align", 'center'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "font-size", '14px']
            ],
            "${_Text}": [
                ["style", "top", '10px'],
                ["style", "text-align", 'center'],
                ["style", "width", '200px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
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
                    type: 'text',
                    rect: ['0px', '10px', '200px', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'BOBBY PIERCE',
                    align: 'center',
                    font: ['amaranth, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['0px', '45px', '200px', 'auto', 'auto', 'auto'],
                    id: 'TextCopy',
                    text: 'Entrepreneur',
                    align: 'center',
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '45px'],
                ["style", "text-align", 'center'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "font-size", '14px']
            ],
            "${_Text}": [
                ["style", "top", '10px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '24px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
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
                    type: 'text',
                    rect: ['0px', '10px', '200px', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'HEATHER JORDAN',
                    align: 'center',
                    font: ['amaranth, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['0px', '45px', '200px', 'auto', 'auto', 'auto'],
                    id: 'TextCopy',
                    text: 'System analyst',
                    align: 'center',
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '45px'],
                ["style", "text-align", 'center'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "font-size", '14px']
            ],
            "${_Text}": [
                ["style", "top", '10px'],
                ["style", "text-align", 'center'],
                ["style", "width", '200px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
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
            duration: 300,
            autoPlay: false,
            labels: {
                "start": 33
            },
            timeline: [
                { id: "eid126", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 33, duration: 267 }            ]
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
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    opacity: 0.5,
                    id: 'curl_elementShadow',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(48,48,48,1.00)']
                },
                {
                    rect: ['129px', '129px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    opacity: 1,
                    id: 'curl_element',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], ['45']],
                    rect: ['150px', '150px', '100px', '100px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hider',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    opacity: 1,
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
            "${_curl_elementShadow}": [
                ["color", "background-color", 'rgba(48,48,48,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.5'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '105px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '97px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'hidden']
            ],
            "${_curl_element}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '101px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '101px']
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
                "start": 33
            },
            timeline: [
                { id: "eid138", tween: [ "style", "${_hider}", "top", '60px', { fromValue: '86px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_curl_elementShadow}", "left", '45px', { fromValue: '97px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_curl_element}", "top", '49px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "style", "${_hider}", "left", '60px', { fromValue: '86px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_curl_elementShadow}", "top", '53px', { fromValue: '105px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_curl_element}", "left", '49px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" }            ]
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
