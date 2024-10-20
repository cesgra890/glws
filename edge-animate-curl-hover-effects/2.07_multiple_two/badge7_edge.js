/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['amaranth, sans-serif']='<script src=\"http://use.edgefonts.net/amaranth:n7,i4,i7,n4:all.js\"></script>';
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
                id: 'bg_stripes',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto'],
                opacity: 0.02,
                transform: [[],[],['45']]
            },
            {
                id: 'badge1',
                type: 'rect',
                rect: ['160px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'badge2',
                type: 'rect',
                rect: ['380px', '50px','auto','auto','auto', 'auto']
            },
            {
                id: 'badge3',
                type: 'rect',
                rect: ['600px', '50px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'bg_stripes',
                symbolName: 'bg',
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
                id: 'badge2',
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
                ["style", "left", '600px'],
                ["style", "top", '50px']
            ],
            "${_badge2}": [
                ["style", "left", '380px'],
                ["style", "top", '50px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(236,237,233,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '960px']
            ],
            "${_badge1}": [
                ["style", "top", '50px'],
                ["style", "cursor", 'auto'],
                ["style", "left", '160px']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_bg_stripes}": [
                ["transform", "skewX", '45deg'],
                ["style", "opacity", '0.02']
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
                    rect: ['0px', '0px', '200px', '300px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'background',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.46)']
                },
                {
                    id: 'bdg',
                    type: 'rect',
                    rect: ['25px', '25px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '200px', '300px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'txt-container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'bdg_flip',
                    type: 'rect',
                    rect: ['25px', '25px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['0% 0%', '0% 0%', '0% 0%', '0% 0%'],
                    type: 'ellipse',
                    id: 'hotspot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            {
                id: 'bdg_flip',
                symbolName: 'bdg_flip',
                autoPlay: {

               }
            },
            {
                id: 'bdg',
                symbolName: 'bdg',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bdg}": [
                ["style", "left", '25px'],
                ["style", "top", '25px']
            ],
            "${_hotspot}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '200px']
            ],
            "${_txt-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '300px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${_bdg_flip}": [
                ["style", "top", '25px'],
                ["style", "left", '25px']
            ],
            "${_background}": [
                ["color", "background-color", 'rgba(255,255,255,0.46)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
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
                { id: "eid104", tween: [ "style", "${_background}", "opacity", '1', { fromValue: '0'}], position: 33, duration: 217 }            ]
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
                    rect: ['76px', '76px', '48px', '48px', 'auto', 'auto'],
                    id: 'Flaticon_4213',
                    boxShadow: ['', 0, 0, 0, 0, 'rgba(0,0,0,0)'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Flaticon_4213.svg', '0px', '0px']
                },
                {
                    font: ['open-sans, sans-serif', 26, 'rgba(58,145,196,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2',
                    text: 'Discussions',
                    align: 'center',
                    rect: ['0px', '189px', '200px', 'auto', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 13, 'rgba(153,153,153,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy',
                    text: 'Seven Wonders corporate',
                    align: 'center',
                    rect: ['0px', '229px', '200px', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '200px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '229px'],
                ["style", "font-size", '13px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(153,153,153,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${_Text2}": [
                ["style", "top", '189px'],
                ["style", "font-size", '26px'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(58,145,196,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${_Flaticon_4213}": [
                ["style", "top", '76px'],
                ["style", "left", '76px']
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
"txt_2_": {
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
                    id: 'Flaticon_4025',
                    type: 'image',
                    rect: ['77px', '76px', '48px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flaticon_4025.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Flaticon_4025}": [
                ["style", "left", '77px'],
                ["style", "top", '76px']
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
"txt_3_": {
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
                    id: 'Flaticon_4160',
                    type: 'image',
                    rect: ['76px', '76px', '48px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Flaticon_4160.svg', '0px', '0px']
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
            "${_Flaticon_4160}": [
                ["style", "top", '76px'],
                ["style", "left", '76px']
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
"bdg_flip": {
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
                    rect: ['0px', '0px', '1500px', '300px', 'auto', 'auto'],
                    id: 'badge-flip',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/badge.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_badge-flip}": [
                ["style", "top", '-150px'],
                ["style", "height", '300px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1500px']
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
            duration: 300,
            autoPlay: false,
            labels: {
                "start": 33
            },
            timeline: [
                { id: "eid91", tween: [ "style", "${_badge-flip}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_badge-flip}", "left", '-150px', { fromValue: '0px'}], position: 33, duration: 0, easing: "easeOutQuad" },
                { id: "eid93", tween: [ "style", "${_badge-flip}", "left", '-300px', { fromValue: '-150px'}], position: 67, duration: 0, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_badge-flip}", "left", '-450px', { fromValue: '-300px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid95", tween: [ "style", "${_badge-flip}", "left", '-600px', { fromValue: '-450px'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${_badge-flip}", "left", '-750px', { fromValue: '-600px'}], position: 167, duration: 0, easing: "easeOutQuad" },
                { id: "eid97", tween: [ "style", "${_badge-flip}", "left", '-900px', { fromValue: '-750px'}], position: 200, duration: 0, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "style", "${_badge-flip}", "left", '-1050px', { fromValue: '-900px'}], position: 234, duration: 0, easing: "easeOutQuad" },
                { id: "eid99", tween: [ "style", "${_badge-flip}", "left", '-1200px', { fromValue: '-1050px'}], position: 267, duration: 0, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "style", "${_badge-flip}", "left", '-1350px', { fromValue: '-1200px'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_badge-flip}", "top", '-150px', { fromValue: '-150px'}], position: 0, duration: 0 }            ]
        }
    }
},
"bdg": {
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
                    rect: ['0px', '0px', '1500px', '300px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/badge.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_badge}": [
                ["style", "top", '0px'],
                ["style", "height", '300px'],
                ["style", "left", '0px'],
                ["style", "width", '1500px']
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
            duration: 300,
            autoPlay: false,
            labels: {
                "start": 33
            },
            timeline: [
                { id: "eid30", tween: [ "style", "${_badge}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "style", "${_badge}", "left", '-150px', { fromValue: '-150px'}], position: 33, duration: 0, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_badge}", "left", '-300px', { fromValue: '-150px'}], position: 67, duration: 0, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "style", "${_badge}", "left", '-450px', { fromValue: '-300px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_badge}", "left", '-600px', { fromValue: '-450px'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid35", tween: [ "style", "${_badge}", "left", '-750px', { fromValue: '-600px'}], position: 167, duration: 0, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_badge}", "left", '-900px', { fromValue: '-750px'}], position: 200, duration: 0, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_badge}", "left", '-1050px', { fromValue: '-900px'}], position: 234, duration: 0, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_badge}", "left", '-1200px', { fromValue: '-1050px'}], position: 267, duration: 0, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_badge}", "left", '-1350px', { fromValue: '-1200px'}], position: 300, duration: 0, easing: "easeOutQuad" }            ]
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
                    rect: ['76px', '76px', '48px', '48px', 'auto', 'auto'],
                    id: 'Flaticon_4213',
                    boxShadow: ['', 0, 0, 0, 0, 'rgba(0,0,0,0)'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Flaticon_4025.svg', '0px', '0px']
                },
                {
                    font: ['open-sans, sans-serif', 26, 'rgba(210,60,73,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2',
                    text: 'Exchange',
                    align: 'center',
                    rect: ['0px', '189px', '200px', 'auto', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 13, 'rgba(153,153,153,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy',
                    text: 'Seven Wonders corporate',
                    align: 'center',
                    rect: ['0px', '229px', '200px', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '200px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '229px'],
                ["style", "width", '200px'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(153,153,153,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '13px']
            ],
            "${_Text2}": [
                ["style", "top", '189px'],
                ["style", "width", '200px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(210,60,73,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "font-size", '26px']
            ],
            "${_Flaticon_4213}": [
                ["style", "top", '76px'],
                ["style", "left", '76px']
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
                    rect: ['76px', '76px', '48px', '48px', 'auto', 'auto'],
                    id: 'Flaticon_4213',
                    boxShadow: ['', 0, 0, 0, 0, 'rgba(0,0,0,0)'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Flaticon_4160.svg', '0px', '0px']
                },
                {
                    font: ['open-sans, sans-serif', 26, 'rgba(231,158,15,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2',
                    text: 'Creative Lab',
                    align: 'center',
                    rect: ['0px', '189px', '200px', 'auto', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 13, 'rgba(153,153,153,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy',
                    text: 'Seven Wonders corporate',
                    align: 'center',
                    rect: ['0px', '229px', '200px', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '200px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '229px'],
                ["style", "font-size", '13px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(153,153,153,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${_Text2}": [
                ["style", "top", '189px'],
                ["style", "font-size", '26px'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(231,158,15,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${_Flaticon_4213}": [
                ["style", "top", '76px'],
                ["style", "left", '76px']
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
            "${_RectangleCopy31}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '1040px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy33}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '960px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy5}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '240px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy22}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '680px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy28}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '-200px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy10}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '520px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy27}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '-160px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy7}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '160px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy30}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '1080px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy19}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '800px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy11}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '480px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy32}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '1000px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy9}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '560px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy4}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '280px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '40px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '120px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy13}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '400px'],
                ["style", "width", '20px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '100%']
            ],
            "${_RectangleCopy24}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-40px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy12}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '440px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy15}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '320px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy6}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '200px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy18}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '840px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '80px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy26}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '-120px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy17}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '880px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy14}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '360px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '600px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy25}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '-80px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy20}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '760px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy16}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '920px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy29}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '1120px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy21}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '720px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy23}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
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
