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
                rect: ['100px', '70px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box2',
                type: 'rect',
                rect: ['370px', '70px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'box3',
                type: 'rect',
                rect: ['640px', '70px','auto','auto','auto', 'auto'],
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
                ["style", "top", '70px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '100px'],
                ["style", "cursor", 'auto']
            ],
            "${_box2}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '370px'],
                ["style", "cursor", 'auto']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(207,231,233,1.00)'],
                ["style", "width", '960px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy}": [
                ["style", "top", '62px']
            ],
            "${_box3}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '640px'],
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
                    rect: ['-2px', '2px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    opacity: 0.5,
                    id: 'bckg_shadow',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(31,31,31,0.50)']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
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
                    fill: ['rgba(241,241,241,1.00)']
                },
                {
                    rect: ['55px', 'auto', '140px', '30px', 'auto', '66px'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'btn',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(223,85,85,1.00)']
                },
                {
                    type: 'text',
                    rect: ['0px', '259px', '250px', 'auto', 'auto', 'auto'],
                    id: 'btn_txt',
                    text: 'ADD TO BASKET',
                    align: 'center',
                    font: ['amaranth, sans-serif', 16, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'rect',
                    id: 'shine',
                    rect: ['25px', '-25px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.25', '0.75']],
                    sizeRange: ['0px', '', '', '']
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
            "${_curl_ani}": [
                ["style", "top", 'auto'],
                ["transform", "scaleY", '1'],
                ["style", "bottom", '-2px'],
                ["transform", "scaleX", '1'],
                ["style", "right", '0px'],
                ["style", "left", 'auto']
            ],
            "${_shine}": [
                ["style", "top", '-25px'],
                ["style", "min-width", '0px'],
                ["transform", "scaleX", '1.25'],
                ["style", "left", '25px'],
                ["transform", "scaleY", '0.75']
            ],
            "${_btn_txt}": [
                ["style", "top", '259px'],
                ["style", "text-align", 'center'],
                ["style", "width", '250px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_bckg_shadow}": [
                ["color", "background-color", 'rgba(31,31,31,0.50)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.5'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '2px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100%'],
                ["style", "left", '-2px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_bckg}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100%'],
                ["style", "left", '0px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_btn}": [
                ["color", "background-color", 'rgba(239,116,116,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "bottom", '66px'],
                ["style", "left", '55px'],
                ["style", "width", '140px'],
                ["style", "top", 'auto'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '30px'],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_container}": [
                ["color", "background-color", 'rgba(241,241,241,1.00)'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '150px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '250px']
            ],
            "${symbolSelector}": [
                ["style", "height", '350px'],
                ["style", "width", '250px'],
                ["style", "overflow", 'visible']
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
            duration: 200,
            autoPlay: false,
            labels: {
                "start": 33
            },
            timeline: [
                { id: "eid181", tween: [ "color", "${_btn}", "background-color", 'rgba(223,85,85,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,116,116,1.00)'}], position: 33, duration: 167 }            ]
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
                    font: ['amaranth, sans-serif', 24, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    rect: ['0px', '165px', '250px', 'auto', 'auto', 'auto'],
                    type: 'text',
                    id: 'product_title',
                    text: 'PRODUCT ONE',
                    align: 'center',
                    userClass: 'txt'
                },
                {
                    font: ['amaranth, sans-serif', 14, 'rgba(87,87,87,1.00)', '400', 'none', 'italic'],
                    rect: ['10px', '205px', '230px', 'auto', 'auto', 'auto'],
                    type: 'text',
                    id: 'product_description',
                    text: 'A collection of textile samples',
                    align: 'center',
                    userClass: 'txt'
                },
                {
                    rect: ['0px', '0px', '250px', '150px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'img',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/product1.jpg', '0px', '0px', '100%', '100%']
                },
                {
                    id: 'new_bar',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'new_bar',
                symbolName: 'new_bar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '350px'],
                ["style", "width", '250px']
            ],
            "${_new_bar}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_img}": [
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '0px'],
                ["style", "width", '250px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '150px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_product_title}": [
                ["style", "top", '165px'],
                ["style", "text-align", 'center'],
                ["style", "width", '250px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ],
            "${_product_description}": [
                ["color", "color", 'rgba(87,87,87,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '230px'],
                ["style", "top", '205px'],
                ["style", "text-align", 'center'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "font-size", '14px']
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
                    opacity: 0.75,
                    id: 'curl_elementShadow',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(147,147,147,1.00)']
                },
                {
                    rect: ['129px', '129px', '100px', '100px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    opacity: 1,
                    id: 'curl_element',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(51,51,51,1.00)']
                },
                {
                    transform: [[0, 0], ['45']],
                    rect: ['150px', '150px', '100px', '100px', 'auto', 'auto'],
                    id: 'hider',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
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
                ["style", "top", '86px'],
                ["color", "background-color", 'rgba(231,231,231,1.00)'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", '86px'],
                ["style", "width", '100px']
            ],
            "${_curl_element}": [
                ["color", "background-color", 'rgba(51,51,51,1.00)'],
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
                ["color", "background-color", 'rgba(147,147,147,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.75'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100px'],
                ["style", "top", '103px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '100px'],
                ["style", "left", '99px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '100px']
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
                { id: "eid158", tween: [ "style", "${_curl_elementShadow}", "left", '57px', { fromValue: '99px'}], position: 0, duration: 300, easing: "easeOutQuad" },
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
"new_bar": {
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
                    transform: [[0, 0], ['-45']],
                    rect: ['-59px', '9px', '152px', '21px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(58,191,107,1.00)']
                },
                {
                    type: 'text',
                    rect: ['-56px', '9px', '150px', 'auto', 'auto', 'auto'],
                    align: 'center',
                    id: 'new',
                    text: 'NEW',
                    font: ['amaranth, sans-serif', 14, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    transform: [[0, 0], ['-45']]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '9px'],
                ["transform", "rotateZ", '-45deg'],
                ["style", "height", '21px'],
                ["style", "left", '-59px'],
                ["color", "background-color", 'rgba(58,191,107,1.00)']
            ],
            "${_new}": [
                ["style", "top", '9px'],
                ["style", "width", '150px'],
                ["style", "text-align", 'center'],
                ["transform", "rotateZ", '-45deg'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '-56px'],
                ["style", "font-size", '14px']
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
            duration: 0,
            autoPlay: false,
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
                    userClass: 'txt',
                    font: ['amaranth, sans-serif', 24, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    align: 'center',
                    id: 'product_title',
                    text: 'PRODUCT TWO',
                    type: 'text',
                    rect: ['0px', '165px', '250px', 'auto', 'auto', 'auto']
                },
                {
                    userClass: 'txt',
                    font: ['amaranth, sans-serif', 14, 'rgba(87,87,87,1.00)', '400', 'none', 'italic'],
                    align: 'center',
                    id: 'product_description',
                    text: 'A collection of textile samples',
                    type: 'text',
                    rect: ['10px', '205px', '230px', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'img',
                    rect: ['0px', '0px', '250px', '150px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/product2.jpg', '0px', '0px', '100%', '100%']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_product_description}": [
                ["color", "color", 'rgba(87,87,87,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '230px'],
                ["style", "top", '205px'],
                ["style", "text-align", 'center'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '350px'],
                ["style", "width", '250px']
            ],
            "${_product_title}": [
                ["style", "top", '165px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '24px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '250px']
            ],
            "${_img}": [
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '0px'],
                ["style", "width", '250px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '150px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
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
                    userClass: 'txt',
                    font: ['amaranth, sans-serif', 24, 'rgba(51,51,51,1.00)', 'normal', 'none', ''],
                    align: 'center',
                    id: 'product_title',
                    text: 'THIRD PRODUCT',
                    type: 'text',
                    rect: ['0px', '165px', '250px', 'auto', 'auto', 'auto']
                },
                {
                    userClass: 'txt',
                    font: ['amaranth, sans-serif', 14, 'rgba(87,87,87,1.00)', '400', 'none', 'italic'],
                    align: 'center',
                    id: 'product_description',
                    text: 'A collection of textile samples',
                    type: 'text',
                    rect: ['10px', '205px', '230px', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'img',
                    rect: ['0px', '0px', '250px', '150px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/product3.jpg', '0px', '0px', '100%', '100%']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_product_description}": [
                ["color", "color", 'rgba(87,87,87,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '10px'],
                ["style", "width", '230px'],
                ["style", "top", '205px'],
                ["style", "text-align", 'center'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '350px'],
                ["style", "width", '250px']
            ],
            "${_img}": [
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '0px'],
                ["style", "width", '250px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '150px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_product_title}": [
                ["style", "top", '165px'],
                ["style", "text-align", 'center'],
                ["style", "width", '250px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-family", 'amaranth, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
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
