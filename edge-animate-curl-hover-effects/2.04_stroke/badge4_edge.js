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
                id: 'bg_stripes',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto'],
                opacity: 0.02,
                transform: [[],[],['45']]
            },
            {
                id: 'badge1',
                type: 'rect',
                rect: ['160px', '100px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'badge2',
                type: 'rect',
                rect: ['380px', '100px','auto','auto','auto', 'auto']
            },
            {
                id: 'badge3',
                type: 'rect',
                rect: ['600px', '100px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'bg_stripes',
                symbolName: 'bg'
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
                ["style", "top", '100px']
            ],
            "${_badge2}": [
                ["style", "left", '380px'],
                ["style", "top", '100px']
            ],
            "${_bg_stripes}": [
                ["transform", "skewX", '45deg'],
                ["style", "opacity", '0.02']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(249,231,192,1.00)'],
                ["style", "width", '960px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_badge1}": [
                ["style", "top", '100px'],
                ["style", "cursor", 'auto'],
                ["style", "left", '160px']
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
                    id: 'badge',
                    type: 'image',
                    rect: ['0px', '0px', '2000px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/badge.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                    opacity: 1,
                    id: 'txt-container',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'badge-flip',
                    type: 'image',
                    rect: ['0px', '0px', '2000px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/badge.svg', '0px', '0px']
                },
                {
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['0px', '1px', '100%', '100%', 'auto', 'auto'],
                    id: 'hotspot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
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
            "${_hotspot}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px'],
                ["style", "overflow", 'hidden']
            ],
            "${_txt-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '200px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${_badge-flip}": [
                ["style", "top", '-200px'],
                ["style", "left", '0px'],
                ["style", "width", '2000px']
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
                "off": 0,
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
                { id: "eid39", tween: [ "style", "${_badge}", "left", '-1800px', { fromValue: '-1600px'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid75", tween: [ "style", "${_badge-flip}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid76", tween: [ "style", "${_badge-flip}", "left", '-200px', { fromValue: '0px'}], position: 33, duration: 0, easing: "easeOutQuad" },
                { id: "eid77", tween: [ "style", "${_badge-flip}", "left", '-400px', { fromValue: '-200px'}], position: 67, duration: 0, easing: "easeOutQuad" },
                { id: "eid78", tween: [ "style", "${_badge-flip}", "left", '-600px', { fromValue: '-400px'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid79", tween: [ "style", "${_badge-flip}", "left", '-800px', { fromValue: '-600px'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_badge-flip}", "left", '-1000px', { fromValue: '-800px'}], position: 167, duration: 0, easing: "easeOutQuad" },
                { id: "eid81", tween: [ "style", "${_badge-flip}", "left", '-1200px', { fromValue: '-1000px'}], position: 200, duration: 0, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_badge-flip}", "left", '-1400px', { fromValue: '-1200px'}], position: 234, duration: 0, easing: "easeOutQuad" },
                { id: "eid83", tween: [ "style", "${_badge-flip}", "left", '-1600px', { fromValue: '-1400px'}], position: 267, duration: 0, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_badge-flip}", "left", '-1800px', { fromValue: '-1600px'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid85", tween: [ "style", "${_badge-flip}", "top", '-200px', { fromValue: '-200px'}], position: 0, duration: 0 }            ]
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
                    font: ['amaranth, sans-serif', 90, 'rgba(51,51,51,1.00)', '400', 'none', ''],
                    id: 'Text',
                    text: '9',
                    type: 'text',
                    rect: ['74px', '44px', '124px', '90px', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 40, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text2',
                    text: '$',
                    type: 'text',
                    rect: ['51px', '65px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 30, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text3',
                    text: '99',
                    type: 'text',
                    rect: ['121px', '68px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '68px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '121px'],
                ["style", "font-size", '30px']
            ],
            "${_Text}": [
                ["style", "top", '44px'],
                ["style", "font-size", '90px'],
                ["style", "height", '90px'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '74px'],
                ["style", "width", 'auto']
            ],
            "${_Text2}": [
                ["style", "top", '65px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '51px'],
                ["style", "font-size", '40px']
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
                    font: ['amaranth, sans-serif', 90, 'rgba(51,51,51,1.00)', '400', 'none', ''],
                    id: 'Text',
                    text: '15',
                    type: 'text',
                    rect: ['57px', '44px', '124px', '90px', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 40, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text2',
                    text: '$',
                    type: 'text',
                    rect: ['34px', '65px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 30, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text3Copy2',
                    text: '99',
                    type: 'text',
                    rect: ['138px', '68px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '44px'],
                ["style", "font-size", '90px'],
                ["style", "height", '90px'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '57px'],
                ["style", "width", 'auto']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '68px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '138px'],
                ["style", "font-size", '30px']
            ],
            "${_Text2}": [
                ["style", "top", '65px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '34px'],
                ["style", "font-size", '40px']
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
                    font: ['amaranth, sans-serif', 90, 'rgba(51,51,51,1.00)', '400', 'none', ''],
                    id: 'Text',
                    text: '19',
                    type: 'text',
                    rect: ['57px', '44px', '124px', '90px', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 40, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text2',
                    text: '$',
                    type: 'text',
                    rect: ['34px', '65px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['amaranth, sans-serif', 30, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    id: 'Text3Copy3',
                    text: '99',
                    type: 'text',
                    rect: ['138px', '68px', 'auto', 'auto', 'auto', 'auto']
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
            "${_Text}": [
                ["style", "top", '44px'],
                ["style", "width", 'auto'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "height", '90px'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '57px'],
                ["style", "font-size", '90px']
            ],
            "${_Text2}": [
                ["style", "top", '65px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '34px'],
                ["style", "font-size", '40px']
            ],
            "${_Text3Copy3}": [
                ["style", "top", '68px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '138px'],
                ["style", "font-size", '30px']
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['40px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['80px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['120px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['160px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy28',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-200px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy27',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-160px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy26',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-120px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy25',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-80px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy24',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-40px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['200px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['240px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['280px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy15',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['320px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy14',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['360px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy13',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['400px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy12',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['440px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy11',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['480px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy10',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['520px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['560px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['600px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy23',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['640px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy22',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['680px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy21',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['720px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy20',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['760px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy19',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['800px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy18',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['840px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy17',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['880px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy16',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['920px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy33',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['960px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy32',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['1000px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy31',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['1040px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy30',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['1080px', '0px', '20px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy29',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['1120px', '0px', '20px', '400px', 'auto', 'auto'],
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
            "${_RectangleCopy29}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '1120px'],
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
            "${_RectangleCopy26}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '-120px'],
                ["style", "width", '20px']
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
            "${_RectangleCopy14}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '360px'],
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
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '100%']
            ],
            "${_RectangleCopy17}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '880px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy15}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '320px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy16}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '920px'],
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
            "${_RectangleCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '40px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '600px'],
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
