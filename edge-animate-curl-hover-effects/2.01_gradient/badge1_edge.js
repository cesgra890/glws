/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['abel, sans-serif']='<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>';

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
                opacity: 0.03,
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
            "${_bg_stripes}": [
                ["style", "opacity", '0.03'],
                ["transform", "skewX", '45deg']
            ],
            "${_badge2}": [
                ["style", "left", '380px'],
                ["style", "top", '100px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,204,0,1.00)'],
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
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
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
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
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
                    rect: ['71px', '42px', '124px', '90px', 'auto', 'auto'],
                    id: 'TextCopy',
                    text: '5',
                    font: ['abel, sans-serif', 90, 'rgba(51,51,51,1.00)', '400', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['48px', '63px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'TextCopy3',
                    text: '$',
                    font: ['abel, sans-serif', 40, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['118px', '112px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'TextCopy4',
                    text: '/ month',
                    font: ['abel, sans-serif', 16, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["style", "top", '112px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '118px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '63px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '48px'],
                ["style", "font-size", '40px']
            ],
            "${_TextCopy}": [
                ["style", "top", '42px'],
                ["style", "width", 'auto'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "height", '90px'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '71px'],
                ["style", "font-size", '90px']
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
                    type: 'text',
                    id: 'TextCopy2',
                    text: '7',
                    rect: ['76px', '42px', '124px', '90px', 'auto', 'auto'],
                    font: ['abel, sans-serif', 90, 'rgba(51,51,51,1.00)', '400', 'none', '']
                },
                {
                    type: 'text',
                    id: 'TextCopy',
                    text: '$',
                    rect: ['53px', '63px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['abel, sans-serif', 40, 'rgba(51,51,51,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'text',
                    id: 'Text',
                    text: '/ month',
                    rect: ['113px', '112px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['abel, sans-serif', 16, 'rgba(51,51,51,1.00)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy2}": [
                ["style", "top", '42px'],
                ["style", "font-size", '90px'],
                ["style", "height", '90px'],
                ["style", "font-family", 'abel, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '76px'],
                ["style", "width", '46px']
            ],
            "${_TextCopy}": [
                ["style", "top", '63px'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '53px'],
                ["style", "font-size", '40px']
            ],
            "${_Text}": [
                ["style", "top", '112px'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '113px'],
                ["style", "font-size", '16px']
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
                    type: 'text',
                    id: 'TextCopy5',
                    text: '9',
                    rect: ['71px', '42px', '124px', '90px', 'auto', 'auto'],
                    font: ['abel, sans-serif', 90, 'rgba(51,51,51,1.00)', '400', 'none', '']
                },
                {
                    type: 'text',
                    id: 'TextCopy4',
                    text: '$',
                    rect: ['48px', '63px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['abel, sans-serif', 40, 'rgba(51,51,51,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'text',
                    id: 'TextCopy3',
                    text: '/ month',
                    rect: ['118px', '112px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['abel, sans-serif', 16, 'rgba(51,51,51,1.00)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["style", "top", '63px'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '48px'],
                ["style", "font-size", '40px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '112px'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '118px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '42px'],
                ["style", "font-size", '90px'],
                ["style", "height", '90px'],
                ["style", "font-family", 'abel, sans-serif'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '71px'],
                ["style", "width", '46px']
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
            "${_RectangleCopy26}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-120px'],
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
            "${_RectangleCopy29}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '1120px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy32}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '1000px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy24}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '-40px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy31}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '1040px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy16}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '920px'],
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
            "${_RectangleCopy28}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-200px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy15}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '320px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy8}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '600px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '40px'],
                ["style", "width", '20px']
            ],
            "${_RectangleCopy20}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '760px'],
                ["style", "width", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '100%']
            ],
            "${_RectangleCopy14}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '360px'],
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
