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
                ["style", "width", '600px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
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
                    rect: ['1px', '0px', '1600px', '4800px', 'auto', 'auto'],
                    id: '_2_globe_180fr',
                    type: 'image',
                    clip: ['rect(0px 200px 200px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2_globe_180fr.svgz', '0px', '0px']
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
            "${__2_globe_180fr}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,200,200,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '1px']
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
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid845", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid846", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 33, duration: 0 },
                { id: "eid847", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 67, duration: 0 },
                { id: "eid848", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 100, duration: 0 },
                { id: "eid849", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 133, duration: 0 },
                { id: "eid850", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 167, duration: 0 },
                { id: "eid851", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 200, duration: 0 },
                { id: "eid852", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 233, duration: 0 },
                { id: "eid853", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 267, duration: 0 },
                { id: "eid854", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 300, duration: 0 },
                { id: "eid855", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 333, duration: 0 },
                { id: "eid856", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 367, duration: 0 },
                { id: "eid857", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 400, duration: 0 },
                { id: "eid858", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 433, duration: 0 },
                { id: "eid859", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 467, duration: 0 },
                { id: "eid860", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 500, duration: 0 },
                { id: "eid861", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 533, duration: 0 },
                { id: "eid862", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 567, duration: 0 },
                { id: "eid863", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-3600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3400]}], position: 600, duration: 0 },
                { id: "eid864", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-3800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3600]}], position: 633, duration: 0 },
                { id: "eid865", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-4000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3800]}], position: 667, duration: 0 },
                { id: "eid866", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-4200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4000]}], position: 700, duration: 0 },
                { id: "eid867", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-4400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4200]}], position: 733, duration: 0 },
                { id: "eid868", tween: [ "style", "${__2_globe_180fr}", "background-position", [0,-4600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4400]}], position: 767, duration: 0 },
                { id: "eid870", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4600]}], position: 800, duration: 0 },
                { id: "eid871", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 833, duration: 0 },
                { id: "eid872", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 867, duration: 0 },
                { id: "eid873", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 900, duration: 0 },
                { id: "eid874", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 933, duration: 0 },
                { id: "eid875", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 967, duration: 0 },
                { id: "eid876", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 1000, duration: 0 },
                { id: "eid877", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 1033, duration: 0 },
                { id: "eid878", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 1067, duration: 0 },
                { id: "eid879", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 1100, duration: 0 },
                { id: "eid880", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 1133, duration: 0 },
                { id: "eid881", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 1167, duration: 0 },
                { id: "eid882", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 1200, duration: 0 },
                { id: "eid883", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 1233, duration: 0 },
                { id: "eid884", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 1267, duration: 0 },
                { id: "eid885", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 1300, duration: 0 },
                { id: "eid886", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 1333, duration: 0 },
                { id: "eid887", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 1367, duration: 0 },
                { id: "eid888", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-3600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3400]}], position: 1400, duration: 0 },
                { id: "eid889", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-3800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3600]}], position: 1433, duration: 0 },
                { id: "eid890", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-4000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3800]}], position: 1467, duration: 0 },
                { id: "eid891", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-4200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4000]}], position: 1500, duration: 0 },
                { id: "eid892", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-4400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4200]}], position: 1533, duration: 0 },
                { id: "eid893", tween: [ "style", "${__2_globe_180fr}", "background-position", [-200,-4600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4400]}], position: 1567, duration: 0 },
                { id: "eid894", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4600]}], position: 1600, duration: 0 },
                { id: "eid895", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1633, duration: 0 },
                { id: "eid896", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 1667, duration: 0 },
                { id: "eid897", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 1700, duration: 0 },
                { id: "eid898", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 1733, duration: 0 },
                { id: "eid899", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 1767, duration: 0 },
                { id: "eid900", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 1800, duration: 0 },
                { id: "eid901", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 1833, duration: 0 },
                { id: "eid902", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 1867, duration: 0 },
                { id: "eid903", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 1900, duration: 0 },
                { id: "eid904", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 1933, duration: 0 },
                { id: "eid905", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 1967, duration: 0 },
                { id: "eid906", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 2000, duration: 0 },
                { id: "eid907", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 2033, duration: 0 },
                { id: "eid908", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 2067, duration: 0 },
                { id: "eid909", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 2100, duration: 0 },
                { id: "eid910", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 2133, duration: 0 },
                { id: "eid911", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 2167, duration: 0 },
                { id: "eid912", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-3600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3400]}], position: 2200, duration: 0 },
                { id: "eid913", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-3800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3600]}], position: 2233, duration: 0 },
                { id: "eid914", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-4000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3800]}], position: 2267, duration: 0 },
                { id: "eid915", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-4200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4000]}], position: 2300, duration: 0 },
                { id: "eid916", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-4400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4200]}], position: 2333, duration: 0 },
                { id: "eid917", tween: [ "style", "${__2_globe_180fr}", "background-position", [-400,-4600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4400]}], position: 2367, duration: 0 },
                { id: "eid918", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4600]}], position: 2400, duration: 0 },
                { id: "eid919", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2433, duration: 0 },
                { id: "eid920", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 2467, duration: 0 },
                { id: "eid921", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 2500, duration: 0 },
                { id: "eid922", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 2533, duration: 0 },
                { id: "eid923", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 2567, duration: 0 },
                { id: "eid924", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 2600, duration: 0 },
                { id: "eid925", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 2633, duration: 0 },
                { id: "eid926", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 2667, duration: 0 },
                { id: "eid927", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 2700, duration: 0 },
                { id: "eid928", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 2733, duration: 0 },
                { id: "eid929", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 2767, duration: 0 },
                { id: "eid930", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 2800, duration: 0 },
                { id: "eid931", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 2833, duration: 0 },
                { id: "eid932", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 2867, duration: 0 },
                { id: "eid933", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 2900, duration: 0 },
                { id: "eid934", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 2933, duration: 0 },
                { id: "eid935", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 2967, duration: 0 },
                { id: "eid936", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-3600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3400]}], position: 3000, duration: 0 },
                { id: "eid937", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-3800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3600]}], position: 3033, duration: 0 },
                { id: "eid938", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-4000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3800]}], position: 3067, duration: 0 },
                { id: "eid939", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-4200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4000]}], position: 3100, duration: 0 },
                { id: "eid940", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-4400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4200]}], position: 3133, duration: 0 },
                { id: "eid941", tween: [ "style", "${__2_globe_180fr}", "background-position", [-600,-4600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4400]}], position: 3167, duration: 0 },
                { id: "eid942", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4600]}], position: 3200, duration: 0 },
                { id: "eid943", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 3233, duration: 0 },
                { id: "eid944", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 3267, duration: 0 },
                { id: "eid945", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 3300, duration: 0 },
                { id: "eid946", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 3333, duration: 0 },
                { id: "eid947", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 3367, duration: 0 },
                { id: "eid948", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 3400, duration: 0 },
                { id: "eid949", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 3433, duration: 0 },
                { id: "eid950", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 3467, duration: 0 },
                { id: "eid951", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 3500, duration: 0 },
                { id: "eid952", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 3533, duration: 0 },
                { id: "eid953", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 3567, duration: 0 },
                { id: "eid954", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 3600, duration: 0 },
                { id: "eid955", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 3633, duration: 0 },
                { id: "eid956", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 3667, duration: 0 },
                { id: "eid957", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 3700, duration: 0 },
                { id: "eid958", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 3733, duration: 0 },
                { id: "eid959", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 3767, duration: 0 },
                { id: "eid960", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-3600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3400]}], position: 3800, duration: 0 },
                { id: "eid961", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-3800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3600]}], position: 3833, duration: 0 },
                { id: "eid962", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-4000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3800]}], position: 3867, duration: 0 },
                { id: "eid963", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-4200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4000]}], position: 3900, duration: 0 },
                { id: "eid964", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-4400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4200]}], position: 3933, duration: 0 },
                { id: "eid965", tween: [ "style", "${__2_globe_180fr}", "background-position", [-800,-4600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4400]}], position: 3967, duration: 0 },
                { id: "eid966", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4600]}], position: 4000, duration: 0 },
                { id: "eid967", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4033, duration: 0 },
                { id: "eid968", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 4067, duration: 0 },
                { id: "eid969", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 4100, duration: 0 },
                { id: "eid970", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 4133, duration: 0 },
                { id: "eid971", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 4167, duration: 0 },
                { id: "eid972", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 4200, duration: 0 },
                { id: "eid973", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 4233, duration: 0 },
                { id: "eid974", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 4267, duration: 0 },
                { id: "eid975", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 4300, duration: 0 },
                { id: "eid976", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 4333, duration: 0 },
                { id: "eid977", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 4367, duration: 0 },
                { id: "eid978", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 4400, duration: 0 },
                { id: "eid979", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 4433, duration: 0 },
                { id: "eid980", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 4467, duration: 0 },
                { id: "eid981", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 4500, duration: 0 },
                { id: "eid982", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 4533, duration: 0 },
                { id: "eid983", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 4567, duration: 0 },
                { id: "eid984", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-3600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3400]}], position: 4600, duration: 0 },
                { id: "eid985", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-3800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3600]}], position: 4633, duration: 0 },
                { id: "eid986", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-4000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3800]}], position: 4667, duration: 0 },
                { id: "eid987", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-4200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4000]}], position: 4700, duration: 0 },
                { id: "eid988", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-4400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4200]}], position: 4733, duration: 0 },
                { id: "eid989", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1000,-4600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4400]}], position: 4767, duration: 0 },
                { id: "eid990", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4600]}], position: 4800, duration: 0 },
                { id: "eid991", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4833, duration: 0 },
                { id: "eid992", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 4867, duration: 0 },
                { id: "eid993", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 4900, duration: 0 },
                { id: "eid994", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 4933, duration: 0 },
                { id: "eid995", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 4967, duration: 0 },
                { id: "eid996", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 5000, duration: 0 },
                { id: "eid997", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 5033, duration: 0 },
                { id: "eid998", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 5067, duration: 0 },
                { id: "eid999", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 5100, duration: 0 },
                { id: "eid1000", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 5133, duration: 0 },
                { id: "eid1001", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 5167, duration: 0 },
                { id: "eid1002", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2200]}], position: 5200, duration: 0 },
                { id: "eid1003", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-2600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 5233, duration: 0 },
                { id: "eid1004", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-2800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2600]}], position: 5267, duration: 0 },
                { id: "eid1005", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-3000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2800]}], position: 5300, duration: 0 },
                { id: "eid1006", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-3200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3000]}], position: 5333, duration: 0 },
                { id: "eid1007", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-3400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3200]}], position: 5367, duration: 0 },
                { id: "eid1008", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-3600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3400]}], position: 5400, duration: 0 },
                { id: "eid1009", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-3800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3600]}], position: 5433, duration: 0 },
                { id: "eid1010", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-4000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-3800]}], position: 5467, duration: 0 },
                { id: "eid1011", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-4200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4000]}], position: 5500, duration: 0 },
                { id: "eid1012", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-4400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4200]}], position: 5533, duration: 0 },
                { id: "eid1013", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1200,-4600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4400]}], position: 5567, duration: 0 },
                { id: "eid1014", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-4600]}], position: 5600, duration: 0 },
                { id: "eid1015", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5633, duration: 0 },
                { id: "eid1016", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-200]}], position: 5667, duration: 0 },
                { id: "eid1017", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-400]}], position: 5700, duration: 0 },
                { id: "eid1018", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 5733, duration: 0 },
                { id: "eid1019", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-1000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-800]}], position: 5767, duration: 0 },
                { id: "eid1020", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1000]}], position: 5800, duration: 0 },
                { id: "eid1021", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-1400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 5833, duration: 0 },
                { id: "eid1022", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-1600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1400]}], position: 5867, duration: 0 },
                { id: "eid1023", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1600]}], position: 5900, duration: 0 },
                { id: "eid1024", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-2000], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 5933, duration: 0 },
                { id: "eid1025", tween: [ "style", "${__2_globe_180fr}", "background-position", [-1400,-2200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2000]}], position: 5967, duration: 0 }            ]
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
                    rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                    id: 'sphere',
                    fill: ['rgba(0,0,0,0)', 'images/sphere.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '182px', '200px', '30px', 'auto', 'auto'],
                    id: 'outer-shadow',
                    opacity: 0.75,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/outer-shadow.svg', '0px', '0px']
                },
                {
                    rect: ['215px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    display: 'block',
                    type: 'rect',
                    id: 'continents'
                },
                {
                    type: 'image',
                    rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
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
                ["subproperty", "filter.grayscale", '0'],
                ["style", "left", '0px'],
                ["subproperty", "filter.invert", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '200px']
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
