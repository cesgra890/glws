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
                rect: ['160px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box3',
                type: 'rect',
                rect: ['160px', '50px','auto','auto','auto', 'auto'],
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
                ["style", "left", '120px'],
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
                ["style", "width", '960px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_box3}": [
                ["style", "top", '150px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '640px'],
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
                { id: "eid193", tween: [ "style", "${_box3}", "left", '640px', { fromValue: '640px'}], position: 0, duration: 0 },
                { id: "eid197", tween: [ "style", "${_box2}", "left", '380px', { fromValue: '380px'}], position: 0, duration: 0 },
                { id: "eid199", tween: [ "style", "${_box1}", "left", '120px', { fromValue: '120px'}], position: 0, duration: 0 }            ]
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
                    borderRadius: ['0px', '0px', '0px', '0px'],
                    opacity: 1,
                    id: 'bckg_shadow',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    opacity: 1,
                    id: 'bckg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(90,90,90,1.00)']
                },
                {
                    rect: ['0px', '0px', '250px', '150px', 'auto', 'auto'],
                    opacity: 1,
                    id: 'container',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'curl_ani',
                    type: 'rect',
                    rect: ['auto', 'auto', 'auto', 'auto', '-50px', '-52px']
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
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '208px'],
                ["style", "top", '-4px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '208px'],
                ["style", "left", '-4px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
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
                ["style", "width", '200px'],
                ["style", "overflow", 'visible']
            ],
            "${_container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '150px'],
                ["transform", "scaleX", '1'],
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
                ["color", "background-color", 'rgba(90,90,90,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100%'],
                ["style", "left", '0px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
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
                { id: "eid176", tween: [ "style", "${_curl_ani}", "right", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid175", tween: [ "style", "${_curl_ani}", "bottom", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 }            ]
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
                    type: 'text',
                    rect: ['10px', '15px', '180px', 'auto', 'auto', 'auto'],
                    id: 'product_title',
                    text: 'MOON LANDING',
                    align: 'left',
                    font: ['open-sans, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['10px', '79px', '180px', 'auto', 'auto', 'auto'],
                    id: 'product_description',
                    text: 'We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard.',
                    align: 'left',
                    font: ['open-sans, sans-serif', 12, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
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
                    type: 'rect',
                    rect: ['129px', '129px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    opacity: 0.75,
                    display: 'none',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'curl_elementShadow',
                    fill: ['rgba(0,0,0,0.20)']
                },
                {
                    rect: ['129px', '129px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'curl_element',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(51,51,51,1.00)']
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '100px']
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
            ],
            "${_curl_elementShadow}": [
                ["color", "background-color", 'rgba(0,0,0,0.20)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.75'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '103px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '99px'],
                ["style", "display", 'none']
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
                { id: "eid138", tween: [ "style", "${_hider}", "top", '65px', { fromValue: '86px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid212", tween: [ "style", "${_curl_elementShadow}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_curl_element}", "top", '59px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "style", "${_hider}", "left", '65px', { fromValue: '86px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_curl_element}", "left", '59px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_curl_elementShadow}", "top", '61px', { fromValue: '103px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_curl_elementShadow}", "left", '57px', { fromValue: '99px'}], position: 0, duration: 300, easing: "easeOutQuad" }            ]
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
                    type: 'text',
                    rect: ['10px', '15px', '180px', 'auto', 'auto', 'auto'],
                    id: 'product_title',
                    text: 'SPACEFLIGHTS ERA BEGINS',
                    align: 'left',
                    font: ['open-sans, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['10px', '79px', '180px', 'auto', 'auto', 'auto'],
                    id: 'product_description',
                    text: 'It is a historical process which mankind is carrying out in accordance with the natural laws of human development.<br>',
                    align: 'left',
                    font: ['open-sans, sans-serif', 12, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
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
                    rect: ['10px', '15px', '180px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    id: 'product_title',
                    text: 'TRANQUILLITY BASE',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['10px', '79px', '180px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 12, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'product_description',
                    text: 'We want to explore. We’re curious people. Look back over history, people have put their lives at stake to go out and explore.',
                    align: 'left',
                    type: 'text'
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
