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
    {link:"../example-01/loader.html", text:"1. different directions"},
    {link:"../example-02/loader.html", text:"2. different directions disappears"},
    {link:"../example-03/loader.html", text:"3. same direction"},
    {link:"../example-04/loader.html", text:"4. same direction disappears"},
    {link:"../example-05/loader.html", text:"5. double flip"},
// 
    {link:"../example-06/loader.html", text:"6. heart"},
    {link:"../example-07/loader.html", text:"7. rectangle shrinked"},
    {link:"../example-08/loader.html", text:"8. five dots"},
    {link:"../example-09/loader.html", text:"9. bars"},
    {link:"../example-10/loader.html", text:"10. cross"},
    {link:"../example-11/loader.html", text:"11. fat cross"},
    {link:"../example-12/loader.html", text:"12. octagon rounded"},
    {link:"../example-13/loader.html", text:"13. circle"},
    {link:"../example-14/loader.html", text:"14. clover"},
    {link:"../example-15/loader.html", text:"15. clover the 2nd"},
    {link:"../example-16/loader.html", text:"16. cross rotated"},
    {link:"../example-17/loader.html", text:"17. hexagon"},
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
      || i==99
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
        document.write('<a href="'+nxt_href+'" class="button" id="big-nav-btn" title="Next example"> &rarr;</a>');


  }
document.write('</div>');
document.getElementById("big-nav-btn").style.color = '#'+document.querySelector('#color').value;
}










