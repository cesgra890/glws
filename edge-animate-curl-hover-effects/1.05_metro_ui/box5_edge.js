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
                id: 'box2',
                type: 'rect',
                rect: ['60px', '260px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box1',
                type: 'rect',
                rect: ['60px', '100px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box3',
                type: 'rect',
                rect: ['220px', '260px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box5',
                type: 'rect',
                rect: ['700px', '100px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box7',
                type: 'rect',
                rect: ['700px', '260px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box4',
                type: 'rect',
                rect: ['380px', '100px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box6',
                type: 'rect',
                rect: ['860px', '100px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
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
                ["style", "top", '260px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '60px'],
                ["style", "cursor", 'auto']
            ],
            "${_box7}": [
                ["style", "top", '260px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '700px'],
                ["style", "cursor", 'auto']
            ],
            "${_box5}": [
                ["style", "top", '100px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '700px'],
                ["style", "cursor", 'auto']
            ],
            "${_box1}": [
                ["style", "top", '100px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '60px'],
                ["style", "cursor", 'auto']
            ],
            "${_box4}": [
                ["style", "top", '100px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '380px'],
                ["style", "cursor", 'auto']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(51,72,94,1.00)'],
                ["style", "min-width", '960px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '1060px']
            ],
            "${_box3}": [
                ["style", "top", '260px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '220px'],
                ["style", "cursor", 'auto']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_box6}": [
                ["style", "top", '100px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '860px'],
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
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'bckg',
                    opacity: 1,
                    cursor: ['pointer'],
                    fill: ['rgba(35,52,70,1.00)']
                },
                {
                    rect: ['0px', '0px', '150px', '150px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'curl_ani',
                    type: 'rect',
                    rect: ['auto', 'auto', 'auto', 'auto', '-38px', '-37px']
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
            "${_curl_ani}": [
                ["style", "top", 'auto'],
                ["transform", "scaleY", '1'],
                ["style", "bottom", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "right", '0px'],
                ["style", "left", 'auto']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '150px']
            ],
            "${_container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '150px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '150px']
            ],
            "${_bckg}": [
                ["color", "background-color", 'rgba(35,52,70,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100%'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
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
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid198", tween: [ "style", "${_curl_ani}", "bottom", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid197", tween: [ "style", "${_curl_ani}", "right", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgb(51, 72, 94)', 'none'],
                    type: 'rect',
                    fill: ['rgba(155,89,182,1.00)']
                },
                {
                    type: 'text',
                    rect: ['9px', 'auto', '141px', 'auto', 'auto', '7px'],
                    id: 'title',
                    text: 'San Francisco',
                    align: 'left',
                    font: ['open-sans, sans-serif', 20, 'rgba(255,255,255,1.00)', '400', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['147px', 'auto', '141px', 'auto', 'auto', '45px'],
                    id: 'temperature',
                    text: '22º',
                    align: 'left',
                    font: ['open-sans, sans-serif', 66, 'rgba(255,255,255,1.00)', '100', 'none', '']
                },
                {
                    rect: ['64px', '46px', '70px', '52px', 'auto', 'auto'],
                    borderRadius: ['0px', '0px', '0px', '0px'],
                    id: 'cloudy1',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cloudy1.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_temperature}": [
                ["style", "line-height", '66px'],
                ["style", "bottom", '45px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '147px'],
                ["style", "font-size", '66px'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '141px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '310px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(155,89,182,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_cloudy1}": [
                ["style", "top", '46px'],
                ["style", "height", '52px'],
                ["style", "left", '64px'],
                ["style", "width", '70px']
            ],
            "${_title}": [
                ["style", "line-height", '20px'],
                ["style", "bottom", '7px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '9px'],
                ["style", "font-size", '20px'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '141px']
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
                    borderRadius: ['0px', '0px 0px', '0px 0px', '0px 0px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'curl_elementShadow',
                    opacity: 0.75,
                    type: 'rect',
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
                ["style", "top", '87px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", '87px'],
                ["style", "width", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'hidden']
            ],
            "${_curl_elementShadow}": [
                ["color", "background-color", 'rgba(0,0,0,0.20)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.75'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '105px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '101px']
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
                { id: "eid138", tween: [ "style", "${_hider}", "top", '67px', { fromValue: '87px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_curl_elementShadow}", "left", '61px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_curl_element}", "top", '63px', { fromValue: '103px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "style", "${_hider}", "left", '67px', { fromValue: '87px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_curl_elementShadow}", "top", '65px', { fromValue: '105px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_curl_element}", "left", '63px', { fromValue: '103px'}], position: 0, duration: 300, easing: "easeOutQuad" }            ]
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
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgb(51, 72, 94)', 'none'],
                    type: 'rect',
                    fill: ['rgba(49,166,108,1.00)']
                },
                {
                    rect: ['9px', 'auto', '141px', 'auto', 'auto', '7px'],
                    font: ['open-sans, sans-serif', 20, 'rgba(255,255,255,1.00)', '400', 'none', ''],
                    id: 'title',
                    text: 'Maps',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'map492',
                    type: 'image',
                    rect: ['44px', '33px', '64px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map49.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_map492}": [
                ["style", "height", '64px'],
                ["style", "top", '33px'],
                ["style", "left", '44px'],
                ["style", "width", '64px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(49,166,108,1.00)'],
                ["style", "height", '100%'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_title}": [
                ["style", "line-height", '20px'],
                ["style", "bottom", '7px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '9px'],
                ["style", "font-size", '20px'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '141px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '150px'],
                ["style", "overflow", 'hidden']
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
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgb(51, 72, 94)', 'none'],
                    type: 'rect',
                    fill: ['rgba(230,126,34,1.00)']
                },
                {
                    type: 'text',
                    rect: ['9px', 'auto', '141px', 'auto', 'auto', '7px'],
                    id: 'title',
                    text: 'Files',
                    align: 'left',
                    font: ['open-sans, sans-serif', 20, 'rgba(255,255,255,1.00)', '400', 'none', '']
                },
                {
                    id: 'text20',
                    type: 'image',
                    rect: ['50px', '38px', '56px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/text20.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '150px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(230,126,34,1.00)'],
                ["style", "height", '100%'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_title}": [
                ["style", "line-height", '20px'],
                ["style", "bottom", '7px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '9px'],
                ["style", "font-size", '20px'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '141px']
            ],
            "${_text20}": [
                ["style", "height", '56px'],
                ["style", "top", '38px'],
                ["style", "left", '50px'],
                ["style", "width", '56px']
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
                    id: 'album_cover',
                    type: 'image',
                    rect: ['0', '0', '310px', '310px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/album_cover.png', '0%', '0%', '100%', '100%']
                },
                {
                    type: 'text',
                    rect: ['9px', 'auto', '290px', '20px', 'auto', '72px'],
                    id: 'title',
                    text: 'Came Back Haunted',
                    align: 'center',
                    font: ['open-sans, sans-serif', 20, 'rgba(51,72,94,1.00)', '400', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['9px', 'auto', '290px', '20px', 'auto', '43px'],
                    align: 'center',
                    id: 'titleCopy2',
                    text: 'Favourite band',
                    opacity: 0.8,
                    font: ['open-sans, sans-serif', 13, 'rgba(51,72,94,1.00)', '400', 'none', '']
                },
                {
                    id: 'raise2',
                    type: 'image',
                    rect: ['134px', '133px', '40px', '36px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/raise.svg', '0px', '0px']
                },
                {
                    rect: ['119px', '116px', '68px', '68px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [1, 'rgba(51,72,94,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_album_cover}": [
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_Ellipse}": [
                ["style", "top", '116px'],
                ["color", "border-color", 'rgba(51,72,94,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "height", '68px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '119px'],
                ["style", "width", '68px']
            ],
            "${symbolSelector}": [
                ["style", "height", '310px'],
                ["style", "width", '310px'],
                ["style", "overflow", 'hidden']
            ],
            "${_raise2}": [
                ["style", "top", '133px'],
                ["style", "height", '36px'],
                ["style", "left", '134px'],
                ["style", "width", '40px']
            ],
            "${_titleCopy2}": [
                ["style", "line-height", '20px'],
                ["style", "bottom", '43px'],
                ["color", "color", 'rgba(51,72,94,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '9px'],
                ["style", "font-size", '13px'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'center'],
                ["style", "height", '20px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '290px'],
                ["style", "opacity", '0.8']
            ],
            "${_title}": [
                ["style", "line-height", '20px'],
                ["style", "bottom", '72px'],
                ["color", "color", 'rgba(51,72,94,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '9px'],
                ["style", "font-size", '20px'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'center'],
                ["style", "height", '20px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '290px']
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
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgb(51, 72, 94)', 'none'],
                    type: 'rect',
                    fill: ['rgba(41,128,185,1.00)']
                },
                {
                    rect: ['9px', 'auto', '141px', 'auto', 'auto', '7px'],
                    font: ['open-sans, sans-serif', 20, 'rgba(255,255,255,1.00)', '400', 'none', ''],
                    id: 'title',
                    text: 'Calendar',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'weekly3',
                    type: 'image',
                    rect: ['50px', '37px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/weekly3.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_title}": [
                ["style", "line-height", '20px'],
                ["style", "bottom", '7px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '9px'],
                ["style", "font-size", '20px'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '141px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(41,128,185,1.00)'],
                ["style", "height", '100%'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_weekly3}": [
                ["style", "top", '37px'],
                ["style", "height", '50px'],
                ["style", "left", '50px'],
                ["style", "width", '50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '150px']
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
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [1, 'rgb(51, 72, 94)', 'none'],
                    type: 'rect',
                    fill: ['rgba(49,166,108,1.00)']
                },
                {
                    rect: ['9px', 'auto', '141px', 'auto', 'auto', '7px'],
                    font: ['open-sans, sans-serif', 20, 'rgba(255,255,255,1.00)', '400', 'none', ''],
                    id: 'title',
                    text: 'Messages',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'airplane19',
                    type: 'image',
                    rect: ['41px', '33px', '64px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/airplane19.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_airplane19}": [
                ["style", "left", '41px'],
                ["style", "top", '33px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(49,166,108,1.00)'],
                ["style", "height", '100%'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_title}": [
                ["style", "line-height", '20px'],
                ["style", "bottom", '7px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '9px'],
                ["style", "font-size", '20px'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '141px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '150px'],
                ["style", "overflow", 'hidden']
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
                    id: 'mountains',
                    type: 'image',
                    rect: ['0px', '0px', '310px', '150px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/mountains.jpg', '0px', '0px']
                },
                {
                    rect: ['9px', 'auto', '141px', 'auto', 'auto', '7px'],
                    font: ['open-sans, sans-serif', 20, 'rgba(255,255,255,1.00)', '400', 'none', ''],
                    id: 'title',
                    text: 'Photos',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_title}": [
                ["style", "line-height", '20px'],
                ["style", "bottom", '7px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '9px'],
                ["style", "font-size", '20px'],
                ["style", "top", 'auto'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '141px']
            ],
            "${_mountains}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '310px']
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
