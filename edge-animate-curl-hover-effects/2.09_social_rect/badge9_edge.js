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
                rect: ['149px', '80px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'badge2',
                type: 'rect',
                rect: ['257px', '80px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'badge3',
                type: 'rect',
                rect: ['367px', '80px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'badge4',
                type: 'rect',
                rect: ['477px', '80px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'badge5',
                type: 'rect',
                rect: ['587px', '80px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.5','0.5']]
            }],
            symbolInstances: [
            {
                id: 'bg_stripes',
                symbolName: 'bg'
            },
            {
                id: 'badge1',
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
                id: 'badge5',
                symbolName: 'badge',
                autoPlay: {

                }
            },
            {
                id: 'badge4',
                symbolName: 'badge',
                autoPlay: {

                }
            },
            {
                id: 'badge3',
                symbolName: 'badge',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_badge2}": [
                ["style", "top", '80px'],
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '257px']
            ],
            "${_badge4}": [
                ["transform", "scaleX", '0.5'],
                ["style", "left", '477px'],
                ["transform", "scaleY", '0.5'],
                ["style", "top", '80px']
            ],
            "${_badge1}": [
                ["style", "top", '80px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '149px'],
                ["style", "cursor", 'auto']
            ],
            "${_badge5}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '80px'],
                ["style", "left", '587px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(236,237,233,1.00)'],
                ["style", "width", '960px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bg_stripes}": [
                ["style", "opacity", '0.02'],
                ["transform", "skewX", '45deg']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_badge3}": [
                ["style", "top", '80px'],
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '367px']
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
                    rect: ['0px', '-200px', '2000px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/badge.svg', '0px', '0px']
                },
                {
                    type: 'ellipse',
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
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
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
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
                { id: "eid101", tween: [ "style", "${_badge-flip}", "top", '-200px', { fromValue: '-200px'}], position: 0, duration: 0 }            ]
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
                    id: 'icon_linkedin',
                    type: 'image',
                    rect: ['70px', '66px', '64px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_linkedin.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icon_linkedin}": [
                ["style", "height", '64px'],
                ["style", "top", '66px'],
                ["style", "left", '70px'],
                ["style", "width", '64px']
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
                    id: 'icon_linkedin',
                    type: 'image',
                    rect: ['68px', '68px', '64px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_pinterest.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icon_linkedin}": [
                ["style", "top", '68px'],
                ["style", "height", '64px'],
                ["style", "left", '68px'],
                ["style", "width", '64px']
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
                    id: 'icon_linkedin',
                    type: 'image',
                    rect: ['68px', '68px', '64px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_twitter.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icon_linkedin}": [
                ["style", "height", '64px'],
                ["style", "top", '68px'],
                ["style", "left", '68px'],
                ["style", "width", '64px']
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
                    id: 'icon_linkedin',
                    type: 'image',
                    rect: ['68px', '68px', '64px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_facebook.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icon_linkedin}": [
                ["style", "top", '68px'],
                ["style", "height", '64px'],
                ["style", "left", '68px'],
                ["style", "width", '64px']
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
                    id: 'icon_linkedin',
                    type: 'image',
                    rect: ['67px', '67px', '70px', '70px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_googleplus.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icon_linkedin}": [
                ["style", "height", '70px'],
                ["style", "top", '67px'],
                ["style", "left", '67px'],
                ["style", "width", '70px']
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
            "${_RectangleCopy8}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '600px'],
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
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '40px'],
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
