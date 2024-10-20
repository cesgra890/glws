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
                rect: ['85px', '70px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box2',
                type: 'rect',
                rect: ['285px', '70px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box3',
                type: 'rect',
                rect: ['485px', '70px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box4',
                type: 'rect',
                rect: ['685px', '70px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box5',
                type: 'rect',
                rect: ['85px', '270px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box6',
                type: 'rect',
                rect: ['285px', '270px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box7',
                type: 'rect',
                rect: ['485px', '270px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box8',
                type: 'rect',
                rect: ['685px', '270px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            }],
            symbolInstances: [
            {
                id: 'box8',
                symbolName: 'box',
                autoPlay: {

                }
            },
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
                id: 'box7',
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
            },
            {
                id: 'box6',
                symbolName: 'box',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_box2}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '285px'],
                ["style", "cursor", 'auto']
            ],
            "${_box7}": [
                ["style", "top", '270px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '485px'],
                ["style", "cursor", 'auto']
            ],
            "${_box5}": [
                ["style", "top", '270px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '85px'],
                ["style", "cursor", 'auto']
            ],
            "${_box1}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '85px'],
                ["style", "cursor", 'auto']
            ],
            "${_box4}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '685px'],
                ["style", "cursor", 'auto']
            ],
            "${_box3}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '485px'],
                ["style", "cursor", 'auto']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(149,165,165,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '960px']
            ],
            "${_box8}": [
                ["style", "top", '270px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '685px'],
                ["style", "cursor", 'auto']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_box6}": [
                ["style", "top", '270px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '285px'],
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
                    rect: ['-4px', '4px', '200px', '200px', 'auto', 'auto'],
                    display: 'none',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'bckg_shadow',
                    opacity: 1,
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0.50)']
                },
                {
                    rect: ['4px', '4px', '192px', '192px', 'auto', 'auto'],
                    type: 'rect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'bckg',
                    opacity: 1,
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['4px', '4px', '192px', '192px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'img-container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'shine',
                    type: 'rect',
                    rect: ['0px', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'txt-container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'curl_ani',
                    type: 'rect',
                    rect: ['auto', 'auto', 'auto', 'auto', '4px', '4px']
                },
                {
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    type: 'rect',
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
                ["color", "background-color", 'rgba(0,0,0,0.50)'],
                ["style", "left", '-4px'],
                ["style", "height", '200px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_curl_ani}": [
                ["style", "top", 'auto'],
                ["transform", "scaleY", '1'],
                ["style", "bottom", '4px'],
                ["transform", "scaleX", '1'],
                ["style", "right", '4px'],
                ["style", "left", 'auto']
            ],
            "${_hotspot}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px']
            ],
            "${_shine}": [
                ["style", "left", '0px']
            ],
            "${_txt-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '200px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '200px']
            ],
            "${_img-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '4px'],
                ["style", "width", '192px'],
                ["style", "top", '4px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '192px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_bckg}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '4px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '192px'],
                ["style", "opacity", '1'],
                ["style", "left", '4px'],
                ["style", "width", '192px']
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
                { id: "eid142", tween: [ "style", "${_bckg_shadow}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
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
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    type: 'text',
                    id: 'txt',
                    text: 'image caption #1',
                    align: 'left',
                    rect: ['10px', '10px', '180px', '90px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '10px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "height", '90px'],
                ["style", "font-size", '14px']
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
                    rect: ['4px', '4px', '192px', '192px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,0,0,0.25)']
                },
                {
                    id: 'zoom',
                    type: 'image',
                    rect: ['76px', '76px', '48px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/zoom.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_zoom}": [
                ["style", "top", '76px'],
                ["style", "opacity", '0'],
                ["style", "left", '76px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(0,0,0,0.25)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '192px'],
                ["style", "top", '4px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '192px'],
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
                { id: "eid138", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid141", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 217 },
                { id: "eid135", tween: [ "style", "${_zoom}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid137", tween: [ "style", "${_zoom}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 217 }            ]
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
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'curl_elementShadow',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(48,48,48,1.00)']
                },
                {
                    rect: ['129px', '129px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'curl_element',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['150px', '150px', '100px', '100px', 'auto', 'auto'],
                    transform: [[0, 0], ['45']],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'hider',
                    opacity: 1,
                    type: 'rect',
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
                ["style", "top", '87px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", '87px'],
                ["style", "width", '100px']
            ],
            "${_curl_element}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '103px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '103px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'hidden']
            ],
            "${_curl_elementShadow}": [
                ["color", "background-color", 'rgba(48,48,48,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '107px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '99px']
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
                { id: "eid170", tween: [ "style", "${_hider}", "top", '60px', { fromValue: '87px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_curl_elementShadow}", "left", '45px', { fromValue: '99px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_curl_element}", "top", '49px', { fromValue: '103px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid168", tween: [ "style", "${_hider}", "left", '60px', { fromValue: '87px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_curl_elementShadow}", "top", '53px', { fromValue: '107px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_curl_element}", "left", '49px', { fromValue: '103px'}], position: 0, duration: 300, easing: "easeOutQuad" }            ]
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
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    type: 'text',
                    id: 'txt',
                    text: 'image caption #2',
                    align: 'left',
                    rect: ['10px', '10px', '180px', '90px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '10px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "font-size", '14px'],
                ["style", "height", '90px']
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
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    type: 'text',
                    id: 'txt',
                    text: 'image caption #3',
                    align: 'left',
                    rect: ['10px', '10px', '180px', '90px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '10px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "height", '90px'],
                ["style", "font-size", '14px']
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
"txt_4": {
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
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    type: 'text',
                    id: 'txt',
                    text: 'image caption #4',
                    align: 'left',
                    rect: ['10px', '10px', '180px', '90px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '10px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "font-size", '14px'],
                ["style", "height", '90px']
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
"txt_5": {
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
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    type: 'text',
                    id: 'txt',
                    text: 'image caption #5',
                    align: 'left',
                    rect: ['10px', '10px', '180px', '90px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '10px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "height", '90px'],
                ["style", "font-size", '14px']
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
"txt_6": {
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
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    type: 'text',
                    id: 'txt',
                    text: 'image caption #6',
                    align: 'left',
                    rect: ['10px', '10px', '180px', '90px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '10px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "font-size", '14px'],
                ["style", "height", '90px']
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
"txt_7": {
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
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    type: 'text',
                    id: 'txt',
                    text: 'image caption #7',
                    align: 'left',
                    rect: ['10px', '10px', '180px', '90px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '10px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "height", '90px'],
                ["style", "font-size", '14px']
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
"txt_8": {
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
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    type: 'text',
                    id: 'txt',
                    text: 'image caption #8',
                    align: 'left',
                    rect: ['10px', '10px', '180px', '90px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '180px'],
                ["style", "top", '10px'],
                ["style", "text-align", 'left'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "font-size", '14px'],
                ["style", "height", '90px']
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
