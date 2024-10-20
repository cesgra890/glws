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
    {link:"../01.right_to_left/counter.html", text:"01. right to left"},
    {link:"../02.top_to_bottom/counter.html", text:"02. top to bottom"},
    {link:"../03.icons_right_to_left/counter.html", text:"03. icons: right to left"},
    {link:"../04.icons_top_to_bottom/counter.html", text:"04. icons: top to bottom"},
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










