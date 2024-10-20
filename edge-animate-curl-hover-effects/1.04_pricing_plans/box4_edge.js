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
                rect: ['85px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box2',
                type: 'rect',
                rect: ['355px', '50px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box3',
                type: 'rect',
                rect: ['625px', '50px','auto','auto','auto', 'auto'],
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
                ["style", "left", '85px'],
                ["style", "cursor", 'auto']
            ],
            "${_box2}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '355px'],
                ["style", "cursor", 'auto']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(240,239,235,1.00)'],
                ["style", "width", '960px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_box3}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '625px'],
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
                    rect: ['-1px', '2px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    opacity: 0.25,
                    id: 'bckg_shadow',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(31,31,31,0.50)']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    opacity: 1,
                    id: 'bckg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1.00)']
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
                    rect: ['25px', '-25px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'shine',
                    transform: [[0, 0], [], [], ['1.25', '0.75']],
                    type: 'rect',
                    sizeRange: ['0px', '', '', '']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '246px', '398px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    opacity: 1,
                    id: 'stroke',
                    stroke: [2, 'rgb(43, 116, 176)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'curl_ani',
                    type: 'rect',
                    rect: ['auto', 'auto', 'auto', 'auto', '0px', '-2px']
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
                ["color", "background-color", 'rgba(31,31,31,0.50)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.25'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '2px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100%'],
                ["style", "left", '-1px'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_stroke}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '246px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "height", '398px'],
                ["color", "border-color", 'rgba(43,116,176,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'solid']
            ],
            "${_hotspot}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '100%']
            ],
            "${_shine}": [
                ["style", "top", '-25px'],
                ["style", "min-width", '0px'],
                ["transform", "scaleX", '1.25'],
                ["style", "left", '25px'],
                ["transform", "scaleY", '0.75']
            ],
            "${_bckg}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100%'],
                ["style", "left", '0px'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
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
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '250px'],
                ["style", "overflow", 'visible']
            ],
            "${_curl_ani}": [
                ["style", "top", 'auto'],
                ["transform", "scaleY", '1'],
                ["style", "bottom", '-2px'],
                ["transform", "scaleX", '1'],
                ["style", "right", '0px'],
                ["style", "left", 'auto']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: false,
            labels: {
                "start": 33,
                "end": 200
            },
            timeline: [
                { id: "eid182", tween: [ "style", "${_bckg_shadow}", "opacity", '0.25', { fromValue: '0.25'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid181", tween: [ "style", "${_bckg_shadow}", "opacity", '0', { fromValue: '0.25'}], position: 33, duration: 0, easing: "easeOutQuad" },
                { id: "eid175", tween: [ "style", "${_stroke}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 33 },
                { id: "eid176", tween: [ "style", "${_stroke}", "opacity", '1', { fromValue: '0.5'}], position: 33, duration: 167, easing: "easeOutQuad" },
                { id: "eid177", tween: [ "color", "${_bckg}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid180", tween: [ "color", "${_bckg}", "background-color", 'rgba(244,247,252,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 33, duration: 167, easing: "easeOutQuad" }            ]
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
                    rect: ['0px', '30px', '250px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 36, 'rgba(50,129,195,1.00)', '900', 'none', ''],
                    id: 'title',
                    text: 'BASIC',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['0px', '90px', '250px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 24, 'rgba(73,81,88,1)', '700', 'none', ''],
                    id: 'price',
                    text: 'free',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '143px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 13, 'rgba(73,81,88,1)', '400', 'none', ''],
                    id: 'description',
                    text: 'A selection of philosophy texts by philosophers of the early modern period, prepared',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '230px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 14, 'rgba(73,81,88,1)', '600', 'none', ''],
                    id: 'benifit_1',
                    text: 'Benefit one',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '270px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 14, 'rgba(73,81,88,1)', '600', 'none', ''],
                    id: 'benifit_2',
                    text: 'Another benefit',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '310px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 14, 'rgba(73,81,88,1)', '600', 'none', ''],
                    id: 'benifit_3',
                    text: 'Yet another benefit',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'lines',
                    type: 'group',
                    rect: ['1', '219', '250', '121', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'line1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '0px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    },
                    {
                        type: 'rect',
                        id: 'line2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '40px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    },
                    {
                        type: 'rect',
                        id: 'line3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '80px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    },
                    {
                        type: 'rect',
                        id: 'line4',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '120px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_line3}": [
                ["color", "background-color", 'rgba(136,136,136,0.15)'],
                ["style", "top", '80px'],
                ["style", "left", '0px'],
                ["style", "height", '1px']
            ],
            "${_price}": [
                ["style", "top", '90px'],
                ["style", "font-size", '24px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '250px']
            ],
            "${_description}": [
                ["style", "top", '143px'],
                ["style", "width", '230px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '250px']
            ],
            "${_line2}": [
                ["style", "height", '1px'],
                ["color", "background-color", 'rgba(136,136,136,0.15)'],
                ["style", "left", '0px'],
                ["style", "top", '40px']
            ],
            "${_benifit_1}": [
                ["style", "top", '230px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '10px'],
                ["style", "width", '230px']
            ],
            "${_line4}": [
                ["style", "top", '120px'],
                ["style", "height", '1px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(136,136,136,0.15)']
            ],
            "${_benifit_2}": [
                ["style", "top", '270px'],
                ["style", "width", '230px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '14px']
            ],
            "${_line1}": [
                ["style", "top", '0px'],
                ["style", "height", '1px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(136,136,136,0.15)']
            ],
            "${_benifit_3}": [
                ["style", "top", '310px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '10px'],
                ["style", "width", '230px']
            ],
            "${_title}": [
                ["style", "top", '30px'],
                ["style", "width", '250px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(50,129,195,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '36px']
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
                    borderRadius: ['5px', '5px', '5px', '5px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'curl_elementShadow',
                    opacity: 0.5,
                    type: 'rect',
                    fill: ['rgba(48,48,48,0.75)']
                },
                {
                    rect: ['129px', '129px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['5px', '5px', '5px', '5px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'curl_element',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(48,48,48,1)']
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
                ["color", "background-color", 'rgba(48,48,48,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '101px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '101px']
            ],
            "${_curl_elementShadow}": [
                ["color", "background-color", 'rgba(48,48,48,0.75)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.5'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '103px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
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
                { id: "eid138", tween: [ "style", "${_hider}", "top", '65px', { fromValue: '86px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_curl_elementShadow}", "left", '57px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_curl_element}", "top", '59px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "style", "${_hider}", "left", '65px', { fromValue: '86px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_curl_elementShadow}", "top", '61px', { fromValue: '103px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_curl_element}", "left", '59px', { fromValue: '101px'}], position: 0, duration: 300, easing: "easeOutQuad" }            ]
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
            duration: 400,
            autoPlay: false,
            labels: {
                "start": 33
            },
            timeline: [
                { id: "eid126", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 33 },
                { id: "eid127", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 33, duration: 367 }            ]
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
                    rect: ['0px', '30px', '250px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 36, 'rgba(50,129,195,1.00)', '900', 'none', ''],
                    id: 'title',
                    text: 'PRO',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['0px', '90px', '250px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 24, 'rgba(73,81,88,1)', '700', 'none', ''],
                    id: 'price',
                    text: '$9 / month',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '143px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 13, 'rgba(73,81,88,1)', '400', 'none', ''],
                    id: 'description',
                    text: 'A selection of philosophy texts by philosophers of the early modern period, prepared',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '230px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 14, 'rgba(73,81,88,1)', '600', 'none', ''],
                    id: 'benifit_1',
                    text: 'Benefit one',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '270px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 14, 'rgba(73,81,88,1)', '600', 'none', ''],
                    id: 'benifit_2',
                    text: 'Another benefit',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '310px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 14, 'rgba(73,81,88,1)', '600', 'none', ''],
                    id: 'benifit_3',
                    text: 'Yet another benefit',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'lines',
                    type: 'group',
                    rect: ['1', '219', '250', '121', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'line1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '0px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    },
                    {
                        type: 'rect',
                        id: 'line2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '40px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    },
                    {
                        type: 'rect',
                        id: 'line3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '80px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    },
                    {
                        type: 'rect',
                        id: 'line4',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '120px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_line3}": [
                ["style", "top", '80px'],
                ["style", "height", '1px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(136,136,136,0.15)']
            ],
            "${_price}": [
                ["style", "top", '90px'],
                ["style", "width", '250px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ],
            "${_description}": [
                ["style", "top", '143px'],
                ["style", "font-size", '13px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '230px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '250px']
            ],
            "${_line2}": [
                ["color", "background-color", 'rgba(136,136,136,0.15)'],
                ["style", "top", '40px'],
                ["style", "left", '0px'],
                ["style", "height", '1px']
            ],
            "${_benifit_3}": [
                ["style", "top", '310px'],
                ["style", "width", '230px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '14px']
            ],
            "${_line4}": [
                ["style", "height", '1px'],
                ["color", "background-color", 'rgba(136,136,136,0.15)'],
                ["style", "left", '0px'],
                ["style", "top", '120px']
            ],
            "${_benifit_2}": [
                ["style", "top", '270px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '10px'],
                ["style", "width", '230px']
            ],
            "${_line1}": [
                ["style", "height", '1px'],
                ["color", "background-color", 'rgba(136,136,136,0.15)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_benifit_1}": [
                ["style", "top", '230px'],
                ["style", "width", '230px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '14px']
            ],
            "${_title}": [
                ["style", "top", '30px'],
                ["style", "font-size", '36px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(50,129,195,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '250px']
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
                    rect: ['0px', '30px', '250px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 36, 'rgba(50,129,195,1.00)', '900', 'none', ''],
                    id: 'title',
                    text: 'BUSINESS',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['0px', '90px', '250px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 24, 'rgba(73,81,88,1)', '700', 'none', ''],
                    id: 'price',
                    text: '$15 / month',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '143px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 13, 'rgba(73,81,88,1)', '400', 'none', ''],
                    id: 'description',
                    text: 'A selection of philosophy texts by philosophers of the early modern period, prepared',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '230px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 14, 'rgba(73,81,88,1)', '600', 'none', ''],
                    id: 'benifit_1',
                    text: 'Benefit one',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '270px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 14, 'rgba(73,81,88,1)', '600', 'none', ''],
                    id: 'benifit_2',
                    text: 'Another benefit',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10px', '310px', '230px', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 14, 'rgba(73,81,88,1)', '600', 'none', ''],
                    id: 'benifit_3',
                    text: 'Yet another benefit',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'lines',
                    type: 'group',
                    rect: ['1', '219', '250', '121', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'line1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '0px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    },
                    {
                        type: 'rect',
                        id: 'line2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '40px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    },
                    {
                        type: 'rect',
                        id: 'line3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '80px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    },
                    {
                        type: 'rect',
                        id: 'line4',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '120px', '250px', '1px', 'auto', 'auto'],
                        fill: ['rgba(136,136,136,0.15)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_line3}": [
                ["style", "height", '1px'],
                ["color", "background-color", 'rgba(136,136,136,0.15)'],
                ["style", "left", '0px'],
                ["style", "top", '80px']
            ],
            "${_price}": [
                ["style", "top", '90px'],
                ["style", "font-size", '24px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '250px']
            ],
            "${_description}": [
                ["style", "top", '143px'],
                ["style", "width", '230px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '250px']
            ],
            "${_line2}": [
                ["style", "top", '40px'],
                ["style", "height", '1px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(136,136,136,0.15)']
            ],
            "${_benifit_1}": [
                ["style", "top", '230px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '10px'],
                ["style", "width", '230px']
            ],
            "${_line4}": [
                ["color", "background-color", 'rgba(136,136,136,0.15)'],
                ["style", "top", '120px'],
                ["style", "left", '0px'],
                ["style", "height", '1px']
            ],
            "${_benifit_2}": [
                ["style", "top", '270px'],
                ["style", "width", '230px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '14px']
            ],
            "${_line1}": [
                ["color", "background-color", 'rgba(136,136,136,0.15)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '1px']
            ],
            "${_benifit_3}": [
                ["style", "top", '310px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(73,81,88,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '10px'],
                ["style", "width", '230px']
            ],
            "${_title}": [
                ["style", "top", '30px'],
                ["style", "width", '250px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(50,129,195,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '36px']
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
