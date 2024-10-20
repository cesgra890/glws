/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['icon-font, Arial, sans-serif']='<link rel=\"stylesheet\" href=\"icons/styles.css\">';
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
                ["style", "width", '100%'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
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
                    rect: ['79px', '79px', '142px', '142px', 'auto', 'auto'],
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'img-container',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['10%', '285px', '80%', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 40, 'rgba(0,0,0,1)', '400', 'none', ''],
                    id: 'number',
                    text: '50',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['15%', '252px', '70%', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 20, 'rgba(0,0,0,1)', '400', 'none', ''],
                    id: 'text',
                    text: 'text',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10%', '200px', '80%', 'auto', 'auto', 'auto'],
                    font: ['icon-font, Arial, sans-serif', 40, 'rgba(0,0,0,1)', '400', 'none', ''],
                    id: 'icon',
                    text: 'i',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_number}": [
                ["style", "top", '285px'],
                ["style", "text-align", 'center'],
                ["style", "width", '80%'],
                ["style", "font-weight", '400'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '10%'],
                ["style", "font-size", '40px']
            ],
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
                ["style", "font-size", '20px'],
                ["style", "font-weight", '400'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '15%'],
                ["style", "width", '70%']
            ],
            "${_icon}": [
                ["style", "top", '200px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '40px'],
                ["style", "font-family", 'icon-font, Arial, sans-serif'],
                ["style", "font-weight", '400'],
                ["style", "left", '10%'],
                ["style", "width", '80%']
            ],
            "${_img-container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '79px'],
                ["style", "width", '142px'],
                ["style", "top", '79px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '142px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
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
