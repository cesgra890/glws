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
                id: 'globe',
                type: 'rect',
                rect: ['200', '100px','auto','auto','auto', 'auto']
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
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '600px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"continents": {
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
                    rect: ['0', '0', '800px', '4800px', 'auto', 'auto'],
                    id: '_4_globe_90fr',
                    type: 'image',
                    clip: ['rect(0px 200px 200px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/4_globe_90fr.svgz', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sphere}": [
                ["style", "top", '-1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ],
            "${__4_globe_90fr}": [
                ["style", "clip", [0,200,200,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid638", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid639", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 33, duration: 0 },
                { id: "eid640", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 67, duration: 0 },
                { id: "eid641", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 100, duration: 0 },
                { id: "eid642", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 133, duration: 0 },
                { id: "eid643", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 167, duration: 0 },
                { id: "eid644", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 200, duration: 0 },
                { id: "eid645", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 233, duration: 0 },
                { id: "eid646", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 267, duration: 0 },
                { id: "eid647", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 300, duration: 0 },
                { id: "eid648", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 333, duration: 0 },
                { id: "eid649", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 367, duration: 0 },
                { id: "eid650", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 400, duration: 0 },
                { id: "eid651", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 433, duration: 0 },
                { id: "eid652", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 467, duration: 0 },
                { id: "eid653", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 500, duration: 0 },
                { id: "eid654", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 533, duration: 0 },
                { id: "eid655", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 567, duration: 0 },
                { id: "eid656", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-3600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3400]}], position: 600, duration: 0 },
                { id: "eid657", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-3800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3600]}], position: 633, duration: 0 },
                { id: "eid658", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-4000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3800]}], position: 667, duration: 0 },
                { id: "eid659", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-4200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4000]}], position: 700, duration: 0 },
                { id: "eid660", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-4400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4200]}], position: 733, duration: 0 },
                { id: "eid661", tween: [ "style", "${__4_globe_90fr}", "background-position", [0,-4600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4400]}], position: 767, duration: 0 },
                { id: "eid664", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4600]}], position: 800, duration: 0 },
                { id: "eid665", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 833, duration: 0 },
                { id: "eid666", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 867, duration: 0 },
                { id: "eid667", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 900, duration: 0 },
                { id: "eid668", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 933, duration: 0 },
                { id: "eid669", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 967, duration: 0 },
                { id: "eid670", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 1000, duration: 0 },
                { id: "eid671", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 1033, duration: 0 },
                { id: "eid672", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 1067, duration: 0 },
                { id: "eid673", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 1100, duration: 0 },
                { id: "eid674", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 1133, duration: 0 },
                { id: "eid675", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 1167, duration: 0 },
                { id: "eid676", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 1200, duration: 0 },
                { id: "eid677", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 1233, duration: 0 },
                { id: "eid678", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 1267, duration: 0 },
                { id: "eid679", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 1300, duration: 0 },
                { id: "eid680", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 1333, duration: 0 },
                { id: "eid681", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 1367, duration: 0 },
                { id: "eid682", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-3600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3400]}], position: 1400, duration: 0 },
                { id: "eid683", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-3800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3600]}], position: 1433, duration: 0 },
                { id: "eid684", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-4000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3800]}], position: 1467, duration: 0 },
                { id: "eid685", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-4200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4000]}], position: 1500, duration: 0 },
                { id: "eid686", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-4400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4200]}], position: 1533, duration: 0 },
                { id: "eid687", tween: [ "style", "${__4_globe_90fr}", "background-position", [-200,-4600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4400]}], position: 1567, duration: 0 },
                { id: "eid689", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4600]}], position: 1600, duration: 0 },
                { id: "eid690", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1633, duration: 0 },
                { id: "eid691", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 1667, duration: 0 },
                { id: "eid692", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 1700, duration: 0 },
                { id: "eid693", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 1733, duration: 0 },
                { id: "eid694", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 1767, duration: 0 },
                { id: "eid695", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 1800, duration: 0 },
                { id: "eid696", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 1833, duration: 0 },
                { id: "eid697", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 1867, duration: 0 },
                { id: "eid698", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 1900, duration: 0 },
                { id: "eid699", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 1933, duration: 0 },
                { id: "eid700", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 1967, duration: 0 },
                { id: "eid701", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 2000, duration: 0 },
                { id: "eid702", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 2033, duration: 0 },
                { id: "eid703", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 2067, duration: 0 },
                { id: "eid704", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 2100, duration: 0 },
                { id: "eid705", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 2133, duration: 0 },
                { id: "eid706", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 2167, duration: 0 },
                { id: "eid707", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-3600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3400]}], position: 2200, duration: 0 },
                { id: "eid708", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-3800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3600]}], position: 2233, duration: 0 },
                { id: "eid709", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-4000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3800]}], position: 2267, duration: 0 },
                { id: "eid710", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-4200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4000]}], position: 2300, duration: 0 },
                { id: "eid711", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-4400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4200]}], position: 2333, duration: 0 },
                { id: "eid712", tween: [ "style", "${__4_globe_90fr}", "background-position", [-400,-4600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4400]}], position: 2367, duration: 0 },
                { id: "eid714", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4600]}], position: 2400, duration: 0 },
                { id: "eid715", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2433, duration: 0 },
                { id: "eid716", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 2467, duration: 0 },
                { id: "eid717", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 2500, duration: 0 },
                { id: "eid718", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 2533, duration: 0 },
                { id: "eid719", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 2567, duration: 0 },
                { id: "eid720", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 2600, duration: 0 },
                { id: "eid721", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 2633, duration: 0 },
                { id: "eid722", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 2667, duration: 0 },
                { id: "eid723", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 2700, duration: 0 },
                { id: "eid724", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 2733, duration: 0 },
                { id: "eid725", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 2767, duration: 0 },
                { id: "eid726", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 2800, duration: 0 },
                { id: "eid727", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 2833, duration: 0 },
                { id: "eid728", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 2867, duration: 0 },
                { id: "eid729", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 2900, duration: 0 },
                { id: "eid730", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 2933, duration: 0 },
                { id: "eid731", tween: [ "style", "${__4_globe_90fr}", "background-position", [-600,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 2967, duration: 0 }            ]
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
                    rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto'],
                    id: 'sphere',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/sphere.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '182px', '200px', '30px', 'auto', 'auto'],
                    type: 'image',
                    id: 'outer-shadow',
                    opacity: 0.75,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/outer-shadow.svg', '0px', '0px']
                },
                {
                    rect: ['215px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'continents',
                    display: 'block',
                    type: 'rect'
                },
                {
                    rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                    type: 'image',
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'reflections',
                    opacity: 1,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/reflections.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'continents',
                symbolName: 'continents',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_reflections}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_continents}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["subproperty", "filter.invert", '0'],
                ["style", "left", '0px'],
                ["subproperty", "filter.grayscale", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px'],
                ["style", "overflow", 'visible']
            ],
            "${_outer-shadow}": [
                ["style", "top", '182px'],
                ["style", "opacity", '0.75'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_sphere}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid842", tween: [ "style", "${_continents}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid311", tween: [ "style", "${_outer-shadow}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid312", tween: [ "style", "${_reflections}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid310", tween: [ "style", "${_sphere}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
