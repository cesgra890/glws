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
    {link:"../1.1.marker-B/globe.html", text:"1.1.marker"},
    {link:"../1.2.marker-A-looped/globe.html", text:"1.2.marker-looped"},
    {link:"../1.3.marker-multiple-globes-D/globe.html", text:"1.3.marker-multiple-globes"},
    {link:"../2.1.logo-carousel-C/globe.html", text:"2.1.logo-carousel"},
    {link:"../2.2.logo-C/globe.html", text:"2.2.logo"},
    {link:"../3.1.just-globe-A-looped/globe.html", text:"3.1.just-globe-looped"},
    {link:"../3.2.just-globe-B/globe.html", text:"3.2.just-globe"},
    {link:"../worldmap_color_presets/index.html", text:"color presets and effects"},
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
      || i==3
      || i==5
      || i==7
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

  // document.write('<a href="'+href+'" class="button" title="Next example">next</a>');
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
        document.write('<a href="'+nxt_href+'" class="button" id="big-nav-btn" title="Next example">next →</a>');


  }
document.write('</div>');
// document.getElementById("big-nav-btn").style.color = '#'+document.querySelector('#color').value;
}










