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
                    rect: ['50%', '253px', '22%', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 25, 'rgba(0,0,0,1)', '400', 'none', ''],
                    id: 'number_2nd',
                    text: '50',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['50%', '250px', '1px', '40px', 'auto', 'auto'],
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'divider',
                    opacity: 0.15,
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['auto', '253px', '22%', 'auto', '50%', 'auto'],
                    font: ['open-sans, sans-serif', 25, 'rgba(0,0,0,1)', '400', 'none', ''],
                    id: 'number',
                    text: '50',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['10%', '10px', '80%', 'auto', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 20, 'rgba(0,0,0,1)', '400', 'none', ''],
                    id: 'text',
                    text: 'text',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'legend_',
                    type: 'group',
                    rect: ['111', '307px', '120', '37', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['12.8%', '0px', '87.5%', '17px', 'auto', 'auto'],
                        font: ['open-sans, sans-serif', 12, 'rgba(0,0,0,1)', '400', 'none', ''],
                        align: 'left',
                        id: 'legend_title',
                        opacity: 0.5,
                        text: 'Legend First',
                        type: 'text'
                    },
                    {
                        rect: ['0.3%', '6px', '10px', '6px', 'auto', 'auto'],
                        id: 'legend_color',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(0,0,0,1.00)']
                    },
                    {
                        rect: ['12.8%', '20px', '87.5%', '17px', 'auto', 'auto'],
                        font: ['open-sans, sans-serif', 12, 'rgba(0,0,0,1)', '400', 'none', ''],
                        align: 'left',
                        id: 'legend_title_2nd',
                        opacity: 0.5,
                        text: 'Legend First',
                        type: 'text'
                    },
                    {
                        rect: ['0.3%', '26px', '10px', '6px', 'auto', 'auto'],
                        id: 'legend_color_2nd',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(0,0,0,1.00)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_divider}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '250px'],
                ["style", "height", '40px'],
                ["style", "opacity", '0.15000000596046448'],
                ["style", "left", '50%'],
                ["style", "width", '1px']
            ],
            "${_legend_color_2nd}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '26px'],
                ["style", "height", '6px'],
                ["style", "right", 'auto'],
                ["style", "left", '0.33%'],
                ["style", "width", '10px']
            ],
            "${_number}": [
                ["style", "top", '253px'],
                ["style", "width", '22%'],
                ["style", "text-align", 'center'],
                ["style", "right", '50%'],
                ["style", "font-weight", '400'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", 'auto'],
                ["style", "font-size", '25px']
            ],
            "${_legend_color}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '6px'],
                ["style", "top", '6px'],
                ["style", "left", '0.33%'],
                ["style", "width", '10px']
            ],
            "${_legend_title_2nd}": [
                ["style", "font-weight", '400'],
                ["style", "left", '12.83%'],
                ["style", "width", '87.5%'],
                ["style", "top", '20px'],
                ["style", "text-align", 'left'],
                ["style", "opacity", '0.5'],
                ["style", "height", '17px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "right", 'auto'],
                ["style", "font-size", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '300px']
            ],
            "${_number_2nd}": [
                ["style", "top", '253px'],
                ["style", "font-size", '25px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '400'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "right", 'auto'],
                ["style", "left", '50%'],
                ["style", "width", '22%']
            ],
            "${_svg_container}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_text}": [
                ["style", "top", '10px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '20px'],
                ["style", "font-weight", '400'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '10%'],
                ["style", "width", '80%']
            ],
            "${_legend_}": [
                ["style", "top", '307px']
            ],
            "${_legend_title}": [
                ["style", "font-weight", '400'],
                ["style", "left", '12.83%'],
                ["style", "font-size", '12px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["style", "height", '17px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "opacity", '0.5'],
                ["style", "width", '87.5%']
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
