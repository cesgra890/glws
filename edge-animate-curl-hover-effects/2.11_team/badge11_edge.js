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
                id: 'badge1',
                type: 'rect',
                rect: ['160px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'badge2',
                type: 'rect',
                rect: ['390px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'badge3',
                type: 'rect',
                rect: ['620px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            }],
            symbolInstances: [
            {
                id: 'badge2',
                symbolName: 'badge',
                autoPlay: {

                }
            },
            {
                id: 'badge3',
                symbolName: 'badge',
                autoPlay: {

                }
            },
            {
                id: 'badge1',
                symbolName: 'badge',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_badge3}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '620px'],
                ["style", "cursor", 'auto']
            ],
            "${_badge2}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '390px'],
                ["style", "cursor", 'auto']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(36,178,150,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '960px']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_badge1}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '160px'],
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
"badge": {
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
                    id: 'flip_bottom',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['8px', '8px', '184px', '184px', 'auto', 'auto'],
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'img-container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['0px', '200px', '200px', '200px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'txt-container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'shine',
                    type: 'rect',
                    rect: ['1', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'flip_top',
                    type: 'rect',
                    rect: ['0', '0px', 'auto', 'auto', 'auto', 'auto']
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
                id: 'shine',
                symbolName: 'shine',
                autoPlay: {

               }
            },
            {
                id: 'flip_top',
                symbolName: 'flip_top',
                autoPlay: {

               }
            },
            {
                id: 'flip_bottom',
                symbolName: 'flip_bottom',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_hotspot}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '200px']
            ],
            "${_img-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '8px'],
                ["style", "width", '184px'],
                ["style", "top", '8px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '184px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_txt-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '200px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '200px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${_flip_top}": [
                ["style", "top", '0px']
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
"flip_top": {
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
                    rect: ['0px', '0px', '2000px', '400px', 'auto', 'auto'],
                    id: 'badge-flip',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/badge_pseudo_mask.svg', '0px', '0px']
                },
                {
                    transform: [[], ['45']],
                    rect: ['125px', '125px', '150px', '150px', 'auto', 'auto'],
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    id: 'curl_ani_hider',
                    opacity: 1,
                    display: 'block',
                    fill: ['rgba(36,178,150,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_badge-flip}": [
                ["style", "top", '-200px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '2000px']
            ],
            "${_curl_ani_hider}": [
                ["style", "top", '125px'],
                ["style", "display", 'block'],
                ["color", "background-color", 'rgba(36,178,150,1.00)'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '150px'],
                ["style", "opacity", '1'],
                ["style", "left", '185px'],
                ["style", "width", '150px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px'],
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
                { id: "eid103", tween: [ "style", "${_badge-flip}", "top", '-200px', { fromValue: '-200px'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "style", "${_badge-flip}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_badge-flip}", "left", '-200px', { fromValue: '0px'}], position: 33, duration: 0, easing: "easeOutQuad" },
                { id: "eid93", tween: [ "style", "${_badge-flip}", "left", '-400px', { fromValue: '-200px'}], position: 67, duration: 0, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_badge-flip}", "left", '-600px', { fromValue: '-400px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid95", tween: [ "style", "${_badge-flip}", "left", '-800px', { fromValue: '-600px'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${_badge-flip}", "left", '-1000px', { fromValue: '-800px'}], position: 167, duration: 0, easing: "easeOutQuad" },
                { id: "eid97", tween: [ "style", "${_badge-flip}", "left", '-1200px', { fromValue: '-1000px'}], position: 200, duration: 0, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "style", "${_badge-flip}", "left", '-1400px', { fromValue: '-1200px'}], position: 234, duration: 0, easing: "easeOutQuad" },
                { id: "eid99", tween: [ "style", "${_badge-flip}", "left", '-1600px', { fromValue: '-1400px'}], position: 267, duration: 0, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "style", "${_badge-flip}", "left", '-1800px', { fromValue: '-1600px'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid131", tween: [ "style", "${_curl_ani_hider}", "left", '185px', { fromValue: '185px'}], position: 0, duration: 0 },
                { id: "eid132", tween: [ "style", "${_curl_ani_hider}", "left", '161px', { fromValue: '185px'}], position: 33, duration: 0 },
                { id: "eid133", tween: [ "style", "${_curl_ani_hider}", "left", '159px', { fromValue: '125px'}], position: 67, duration: 0 },
                { id: "eid134", tween: [ "style", "${_curl_ani_hider}", "left", '156px', { fromValue: '159px'}], position: 100, duration: 0 },
                { id: "eid135", tween: [ "style", "${_curl_ani_hider}", "left", '154px', { fromValue: '125px'}], position: 133, duration: 0 },
                { id: "eid136", tween: [ "style", "${_curl_ani_hider}", "left", '152px', { fromValue: '155px'}], position: 167, duration: 0 },
                { id: "eid137", tween: [ "style", "${_curl_ani_hider}", "left", '151px', { fromValue: '153px'}], position: 200, duration: 0 },
                { id: "eid138", tween: [ "style", "${_curl_ani_hider}", "left", '150px', { fromValue: '145px'}], position: 234, duration: 0 },
                { id: "eid139", tween: [ "style", "${_curl_ani_hider}", "left", '149px', { fromValue: '145px'}], position: 267, duration: 0 },
                { id: "eid140", tween: [ "style", "${_curl_ani_hider}", "left", '149px', { fromValue: '145px'}], position: 300, duration: 0 },
                { id: "eid142", tween: [ "style", "${_badge-flip}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid141", tween: [ "style", "${_curl_ani_hider}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"flip_bottom": {
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
                    id: 'badge',
                    type: 'image',
                    rect: ['0px', '0px', '2000px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/badge_pseudo_mask.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_badge}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '2000px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px'],
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
                { id: "eid30", tween: [ "style", "${_badge}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "style", "${_badge}", "left", '-200px', { fromValue: '0px'}], position: 33, duration: 0, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_badge}", "left", '-400px', { fromValue: '-200px'}], position: 67, duration: 0, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "style", "${_badge}", "left", '-600px', { fromValue: '-400px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_badge}", "left", '-800px', { fromValue: '-600px'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid35", tween: [ "style", "${_badge}", "left", '-1000px', { fromValue: '-800px'}], position: 167, duration: 0, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_badge}", "left", '-1200px', { fromValue: '-1000px'}], position: 200, duration: 0, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_badge}", "left", '-1400px', { fromValue: '-1200px'}], position: 234, duration: 0, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_badge}", "left", '-1600px', { fromValue: '-1400px'}], position: 267, duration: 0, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_badge}", "left", '-1800px', { fromValue: '-1600px'}], position: 300, duration: 0, easing: "easeOutQuad" }            ]
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
                    font: ['amaranth, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'BOBBY PIERCE',
                    align: 'center',
                    rect: ['0px', '10px', '200px', 'auto', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    type: 'text',
                    id: 'TextCopy',
                    text: 'Entrepreneur',
                    align: 'center',
                    rect: ['0px', '45px', '200px', 'auto', 'auto', 'auto']
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
                    font: ['amaranth, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'HEATHER JORDAN',
                    align: 'center',
                    rect: ['0px', '10px', '200px', 'auto', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'italic'],
                    type: 'text',
                    id: 'TextCopy',
                    text: 'System analyst',
                    align: 'center',
                    rect: ['0px', '45px', '200px', 'auto', 'auto', 'auto']
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
                    rect: ['2px', '2px', '196px', '196px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
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
                ["style", "top", '2px'],
                ["style", "height", '196px'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '196px']
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
"bg": {
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
                    rect: ['0px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['40px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['80px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['120px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['160px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['-200px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy28',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['-160px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy27',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['-120px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy26',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['-80px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy25',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['-40px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy24',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['200px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['240px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['280px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['320px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy15',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['360px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy14',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['400px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy13',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['440px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy12',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['480px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy11',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['520px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy10',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['560px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['600px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['640px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy23',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['680px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy22',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['720px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy21',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['760px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy20',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['800px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy19',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['840px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy18',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['880px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy17',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['920px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy16',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['960px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy33',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['1000px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy32',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['1040px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy31',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['1080px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy30',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['1120px', '0px', '20px', '400px', 'auto', 'auto'],
                    id: 'RectangleCopy29',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy17}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '880px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy33}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '960px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '240px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy22}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '680px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy28}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-200px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy10}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '520px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy27}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-160px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy7}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '160px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy30}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '1080px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy19}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '800px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy11}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '480px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy25}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-80px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy9}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '560px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy4}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '280px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy12}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '440px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '120px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy13}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '400px'],
                ["style", "width", '20px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '100%']
            ],
            "${_RectangleCopy24}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '-40px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy29}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '1120px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '40px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy6}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '200px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy18}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '840px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy3}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '80px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy8}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '600px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy31}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '1040px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy14}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '360px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy16}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '920px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy32}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '1000px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy20}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '760px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy26}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-120px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy15}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '320px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy21}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '720px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy23}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '640px'],
                ["style", "width", '20px']
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
})(jQuery, AdobeEdge, "EDGE-5080209");
