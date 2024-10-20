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
                rect: ['160px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box2',
                type: 'rect',
                rect: ['380px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box3',
                type: 'rect',
                rect: ['600px', '50px','auto','auto','auto', 'auto'],
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
                ["style", "top", '150px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '160px'],
                ["style", "cursor", 'auto']
            ],
            "${_box2}": [
                ["style", "top", '150px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '380px'],
                ["style", "cursor", 'auto']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(52,152,219,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '960px']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_box3}": [
                ["style", "top", '150px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '600px'],
                ["style", "cursor", 'auto']
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
                    rect: ['-4px', '-4px', '208px', '208px', 'auto', 'auto'],
                    borderRadius: ['12px 12px', '12px 12px', '12px 12px', '12px 12px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'bckg_shadow',
                    opacity: 1,
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'bckg',
                    opacity: 1,
                    cursor: ['pointer'],
                    fill: ['rgba(90,90,90,1)']
                },
                {
                    rect: ['0px', '0px', '250px', '150px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'curl_ani',
                    type: 'rect',
                    rect: ['auto', 'auto', 'auto', 'auto', '-50px', '-52px']
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
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [12,12], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [12,12], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.25'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '208px'],
                ["style", "top", '-4px'],
                ["style", "border-bottom-left-radius", [12,12], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '208px'],
                ["style", "border-top-right-radius", [12,12], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-4px']
            ],
            "${_curl_ani}": [
                ["style", "top", 'auto'],
                ["transform", "scaleY", '1'],
                ["style", "bottom", '-4px'],
                ["transform", "scaleX", '1'],
                ["style", "right", '-4px'],
                ["style", "left", 'auto']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '200px']
            ],
            "${_container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '150px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '250px']
            ],
            "${_bckg}": [
                ["color", "background-color", 'rgba(90,90,90,1.00)'],
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100%'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_hotspot}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '100%']
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
                { id: "eid175", tween: [ "style", "${_curl_ani}", "bottom", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_bckg_shadow}", "opacity", '0.4', { fromValue: '0.25'}], position: 0, duration: 33 },
                { id: "eid203", tween: [ "style", "${_bckg_shadow}", "opacity", '1', { fromValue: '0.4'}], position: 33, duration: 217, easing: "easeOutQuad" },
                { id: "eid176", tween: [ "style", "${_curl_ani}", "right", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 }            ]
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
                    font: ['open-sans, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    type: 'text',
                    id: 'product_title',
                    text: 'GAGGENAU PREMIUM',
                    align: 'left',
                    rect: ['10px', '15px', '180px', 'auto', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 12, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'product_description',
                    text: 'Winkreative first-class Gaggenau, Sunspel Swiss airport the best sharp. Charming Winkreative Nordic.',
                    align: 'left',
                    rect: ['10px', '79px', '180px', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_product_description}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '79px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "font-size", '12px']
            ],
            "${_product_title}": [
                ["style", "line-height", '26px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '10px'],
                ["style", "font-size", '24px'],
                ["style", "top", '15px'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '180px']
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
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    opacity: 1,
                    id: 'curl_elementShadow',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,0.20)']
                },
                {
                    rect: ['129px', '129px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                    opacity: 1,
                    id: 'curl_element',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(51,51,51,1.00)']
                },
                {
                    type: 'rect',
                    rect: ['150px', '150px', '100px', '100px', 'auto', 'auto'],
                    transform: [[0, 0], ['45']],
                    id: 'hider',
                    opacity: 1,
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
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
                ["color", "background-color", 'rgba(0,0,0,0.20)'],
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '103px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '99px']
            ],
            "${_curl_element}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '101px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '101px']
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
            duration: 300,
            autoPlay: false,
            labels: {
                "start": 33
            },
            timeline: [
                { id: "eid138", tween: [ "style", "${_hider}", "top", '60px', { fromValue: '86px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_curl_elementShadow}", "left", '47px', { fromValue: '99px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_curl_element}", "top", '49px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "style", "${_hider}", "left", '60px', { fromValue: '86px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_curl_elementShadow}", "top", '51px', { fromValue: '103px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_curl_element}", "left", '49px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" }            ]
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
                    font: ['open-sans, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    type: 'text',
                    id: 'product_title',
                    text: 'SHINKANSEN PORTER',
                    align: 'left',
                    rect: ['10px', '15px', '180px', 'auto', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 12, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'product_description',
                    text: 'Extraordinary exquisite ryokan essential Ettinger, hand-crafted Zürich the best intricate concierge alluring bulletin.',
                    align: 'left',
                    rect: ['10px', '79px', '180px', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ],
            "${_product_title}": [
                ["style", "line-height", '26px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '10px'],
                ["style", "font-size", '24px'],
                ["style", "top", '15px'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '180px']
            ],
            "${_product_description}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '79px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "font-size", '12px']
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
                    font: ['open-sans, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    type: 'text',
                    id: 'product_title',
                    text: 'DESTINATION SWISS',
                    align: 'left',
                    rect: ['10px', '15px', '180px', 'auto', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 12, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'product_description',
                    text: 'Toto global Melbourne smart Ettinger finest hand-crafted exclusive iconic carefully curated.',
                    align: 'left',
                    rect: ['10px', '79px', '180px', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_product_title}": [
                ["style", "line-height", '26px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '10px'],
                ["style", "font-size", '24px'],
                ["style", "top", '15px'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '180px']
            ],
            "${_product_description}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '79px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "font-size", '12px']
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
