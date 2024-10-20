//navigation ----------------------------------------------------------------------------------------------------------------
function navigateTo(sel, target, newWindow) {
  var url = sel.options[sel.selectedIndex].value;
  if (newWindow) {
    window.open(url, target, '--- attributes here, see below ---');
  } else {
    window[target].location.href = url;
  }
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.top.location.href.slice(window.top.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
//var id = getUrlVars()["id"];
var id_arr = id-1;

var nav = [
    {link:"../01.inverse-double-stroke-outside-outwards/circle.html", text:"01. inverse: double stroke outside outwards"},
    {link:"../02.fill-double-stroke-inside/circle.html",              text:"02. fill: double stroke inside"},
    {link:"../03.inverse-double-stroke-inwards/circle.html",          text:"03. inverse: double stroke inwards"},
    {link:"../04.inverse-double-stroke-outside-inwards/circle.html",  text:"04. inverse: double stroke outside inwards"},
    {link:"../05.double-stroke-inside/circle.html",                   text:"05. double stroke inside"},
    {link:"../06.empty-inside-inwards/circle.html",                   text:"06. empty: inside inwards"},
    {link:"../07.empty-outside-outwards/circle.html",                 text:"07. empty: outside outwards"},
    {link:"../08.fill-outside-inwards/circle.html",                   text:"08. fill: outside inwards"},
    {link:"../09.dashed-border-svg/circle.html",                      text:"09. dashed border SVG"},
    {link:"../10.dashed-border-rounded-svg/circle.html",              text:"10. dashed border rounded SVG"},
    {link:"../11.dashed-border-animated-svg/circle.html",             text:"11. dashed border animated SVG"},
    {link:"../12.fill-icon-slide-from-left/circle.html",              text:"12. fill: icon slide from left"},
    {link:"../13.fill-icon-slide-from-top/circle.html",               text:"13. fill: icon slide from top"},
    {link:"../14.empty-icon-slide-from-left/circle.html",             text:"14. empty: icon slide from left"},
    {link:"../15.empty-icon-slide-from-top/circle.html",              text:"15. empty: icon slide from top"},
    {link:"../16.simple-fades/circle.html",                           text:"16. simple fades"},
    {link:"../17.scale-and-echoes/circle.html",                       text:"17. scale and echoes"},
    {link:"../18.scale-water-ripples/circle.html",                    text:"18. scale: water ripples"},
    {link:"../19.double-stroke-outside/circle.html",                  text:"19. double stroke outside"},
    {link:"../20.double-stroke-outside/circle.html",                  text:"20. double stroke outside"},
    {link:"../21.inverse-slide-from-top/circle.html",                 text:"21. inverse: slide from top"},
    {link:"../22.inverse-fill-from-inside/circle.html",               text:"22. inverse: fill from inside"},
    {link:"../23.fill-slide-from-top/circle.html",                    text:"23. fill: slide from top"},
    {link:"../24.cover-flip-from-top/circle.html",                    text:"24. cover: flip from top"},
    {link:"../25.push-down/circle.html",                              text:"25. push down"},
    {link:"../26.inverse-flip-middle/circle.html",                    text:"26. inverse: flip middle"},
    {link:"../27.inverse-scale/circle.html",                          text:"27. inverse: scale"},
    {link:"../28.inverse-scale-dark/circle.html",                     text:"28. inverse: scale dark"},
    {link:"../29.social-with-text-different-colors/circle.html",      text:"29. social: with text different colors"},
];

function build_navigation() {

  /*
  redirect_url = nav[id_arr].link+'?id='+id;
  //navigateTo(redirect_url,'window',false);
  window["_top"].location.href = redirect_url;
  */

  document.write('  <div class="nav-container">');
  document.write('    <select id="nav" name="nav" onchange="navigateTo(this,\'window\',false);">');
  for (var i=0;i<nav.length;i++) {

    if (id_arr==i) {sel = " selected"} else {sel = ""};
    if (
      i==0
      || i==5
      || i==8
      || i==11
      || i==16
      || i==20
      || i==26
      ) {document.write('<option value="" disabled="disabled">------------------------------</option>');  }
    document.write('<option value="'+nav[i].link+'"'+sel+'>'+nav[i].text+'</option>');
  }
  document.write('<option value="" disabled="disabled">------------------------------</option>');
  document.write('</select>');

if ( id != undefined && id <= nav.length) {

  document.write('<div class="nav-fwd-bck">');
      if (id == nav.length) {
        href = nav[0].link; // last item
      } else {
        href = nav[id].link;
      }

  document.write('<a href="'+href+'" class="button" title="Next example">next</a>');
  document.write('</div>');
} else {};

  document.write('</div>');

  }


function build_next_nav() {
  if ( id != undefined && id <= nav.length) {

document.write('<div id="big-nav">');
      if (id == nav.length) {
        // nxt_href = nav[0].link+'?id=1';
        nxt_href = nav[0].link;
      } else {
        // nxt_href = nav[id].link+'?id='+(id_arr+2);
        nxt_href = nav[id].link;
      }
        document.write('<a href="'+nxt_href+'" class="button" id="big-nav-btn" title="Next example">next &rarr;</a>');


  }
document.write('</div>');
document.getElementById("big-nav-btn").style.color = '#'+document.querySelector('#color').value;
}










