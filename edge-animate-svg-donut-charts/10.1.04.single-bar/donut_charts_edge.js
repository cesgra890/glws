/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
    fonts['icon-font, Arial, sans-serif']='<link rel=\"stylesheet\" href=\"icons/styles.css\">';
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
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Group',
                type: 'group',
                rect: ['30', '30','900','300','auto', 'auto'],
                c: [
                {
                    id: 'box1',
                    type: 'rect',
                    rect: ['0px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'box2',
                    type: 'rect',
                    rect: ['300px', '0px','auto','auto','auto', 'auto']
                },
                {
                    id: 'box3',
                    type: 'rect',
                    rect: ['600px', '0px','auto','auto','auto', 'auto']
                }]
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
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '100%']
            ],
            "${_box1}": [
                ["style", "top", '0px'],
                ["style", "left", '50px']
            ],
            "${_box2}": [
                ["style", "top", '0px'],
                ["style", "left", '300px']
            ],
            "${_box3}": [
                ["style", "top", '0px'],
                ["style", "left", '550px']
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
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    id: 'svg_container',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    type: 'text',
                    rect: ['10%', '125px', '80%', 'auto', 'auto', 'auto'],
                    id: 'number',
                    text: '50',
                    align: 'center',
                    font: ['open-sans, sans-serif', 40, 'rgba(0,0,0,1)', '400', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['15%', '252px', '70%', 'auto', 'auto', 'auto'],
                    id: 'text',
                    text: 'text',
                    align: 'center',
                    font: ['open-sans, sans-serif', 20, 'rgba(0,0,0,1)', '400', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['10%', '200px', '80%', 'auto', 'auto', 'auto'],
                    id: 'icon',
                    text: 'i',
                    align: 'center',
                    font: ['icon-font, Arial, sans-serif', 40, 'rgba(0,0,0,1)', '400', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '300px']
            ],
            "${_svg_container}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_text}": [
                ["style", "top", '252px'],
                ["style", "text-align", 'center'],
                ["style", "width", '70%'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "font-weight", '400'],
                ["style", "left", '15%'],
                ["style", "font-size", '20px']
            ],
            "${_number}": [
                ["style", "top", '125px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '40px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "font-weight", '400'],
                ["style", "left", '10%'],
                ["style", "width", '80%']
            ],
            "${_icon}": [
                ["style", "top", '200px'],
                ["style", "text-align", 'center'],
                ["style", "width", '80%'],
                ["style", "font-weight", '400'],
                ["style", "font-family", 'icon-font, Arial, sans-serif'],
                ["style", "left", '10%'],
                ["style", "font-size", '40px']
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
})(jQuery, AdobeEdge, "EDGE-1404005");
