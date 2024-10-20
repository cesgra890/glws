/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
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
                id: 'bg',
                type: 'image',
                rect: ['0px', '0px','800px','400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg-stripes.svg",'0px','0px']
            },
            {
                id: 'globe',
                type: 'rect',
                rect: ['300px', '100px','auto','auto','auto', 'auto'],
                userClass: "globe"
            }],
            symbolInstances: [
            {
                id: 'globe',
                symbolName: 'globe',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bg}": [
                ["style", "height", '400px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(147,217,250,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '800px']
            ],
            "${_globe}": [
                ["style", "left", '300px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"globe": {
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
                    type: 'image',
                    display: 'block',
                    rect: ['-5px', '-5px', '210px', '210px', 'auto', 'auto'],
                    id: 'sphere',
                    fill: ['rgba(0,0,0,0)', 'images/sphere.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '186px', '200px', '30px', 'auto', 'auto'],
                    id: 'outer-shadow',
                    opacity: 1,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/outer-shadow.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['2px', '0px', '197px', '197px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'reflections-2nd',
                    opacity: 0.5,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/reflections.svg', '0px', '0px']
                },
                {
                    id: 'continents-animation',
                    type: 'rect',
                    rect: ['0', '0px', 'auto', 'auto', 'auto', 'auto'],
                    userClass: 'continents'
                },
                {
                    type: 'image',
                    rect: ['2px', '0px', '197px', '197px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'reflections',
                    opacity: 1,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/reflections.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'continents-animation',
                symbolName: 'continents-animation',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_continents-animation}": [
                ["style", "top", '0px']
            ],
            "${_reflections}": [
                ["style", "top", '0px'],
                ["style", "height", '197px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '2px'],
                ["style", "width", '197px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px'],
                ["style", "overflow", 'visible']
            ],
            "${_outer-shadow}": [
                ["style", "top", '186px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_sphere}": [
                ["style", "top", '-5px'],
                ["style", "height", '210px'],
                ["style", "display", 'block'],
                ["style", "left", '-5px'],
                ["style", "width", '210px']
            ],
            "${_reflections-2nd}": [
                ["style", "top", '0px'],
                ["style", "height", '197px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.5'],
                ["style", "left", '2px'],
                ["style", "width", '197px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
                { id: "eid861", tween: [ "style", "${_reflections-2nd}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid311", tween: [ "style", "${_outer-shadow}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid312", tween: [ "style", "${_reflections}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid870", tween: [ "style", "${_sphere}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"flatmap-two": {
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
                    id: 'worldmap-flat',
                    type: 'image',
                    rect: ['0px', '0px', '1000px', '410px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/worldmap-flat-5-continents.svgz', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_worldmap-flat}": [
                ["style", "height", '410px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1000px']
            ],
            "${symbolSelector}": [
                ["style", "height", '220px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '1000px']
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
"continents-animation": {
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
                    rect: ['0px', '-220px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'flatmap-back',
                    opacity: 1,
                    display: 'block',
                    type: 'rect'
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'flatmap-front'
                },
                {
                    rect: ['-5px', '-5px', '210px', '210px', 'auto', 'auto'],
                    id: 'inner-shadow',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/inner-shadow.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'flatmap-front',
                symbolName: 'flatmap-two',
                autoPlay: {

               }
            },
            {
                id: 'flatmap-back',
                symbolName: 'flatmap-two',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px'],
                ["style", "overflow", 'hidden']
            ],
            "${_flatmap-back}": [
                ["style", "top", '-220px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_inner-shadow}": [
                ["style", "top", '-5px'],
                ["style", "display", 'block'],
                ["style", "height", '210px'],
                ["style", "left", '-5px'],
                ["style", "width", '210px']
            ],
            "${_flatmap-front}": [
                ["style", "display", 'block'],
                ["style", "left", '-473px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
                { id: "eid872", tween: [ "style", "${_flatmap-front}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid873", tween: [ "style", "${_flatmap-back}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid860", tween: [ "style", "${_flatmap-front}", "left", '0px', { fromValue: '-473px'}], position: 0, duration: 8000 },
                { id: "eid875", tween: [ "style", "${_inner-shadow}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid851", tween: [ "style", "${_flatmap-back}", "left", '-473px', { fromValue: '0px'}], position: 0, duration: 8000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-10260560");
