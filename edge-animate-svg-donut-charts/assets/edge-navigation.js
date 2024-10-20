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
    {link:"../01.1.single-bar/donut_charts.html", text:"1. single bar"},
    {link:"../02.2.two-bars/donut_charts.html", text:"2. two bars"},
    {link:"../03.3.two-segments/donut_charts.html", text:"3. two segments"},
    {link:"../04.4.full-circle-two-bars-opposite/donut_charts.html", text:"4. full circle two bars opposite"},
    {link:"../05.5.full-circle-two-segments-opposite/donut_charts.html", text:"5. full circle two segments opposite"},
    {link:"../06.6.full-circle-single-bar-plusminus/donut_charts.html", text:"6. full circle single bar plusminus"},
    {link:"../07.1.01.single-bar-add-circle/donut_charts.html", text:"1.01. single bar add circle"},
    {link:"../08.1.02.single-bar-add-circle/donut_charts.html", text:"1.02. single bar add circle"},
    {link:"../09.1.03.single-bar-add-img/donut_charts.html", text:"1.03. single bar add img"},
    {link:"../10.1.04.single-bar/donut_charts.html", text:"1.04. single bar"},
    {link:"../11.1.05.single-bar/donut_charts.html", text:"1.05. single bar"},
    {link:"../12.1.06.single-bar/donut_charts.html", text:"1.06. single bar"},
    {link:"../13.1.07.single-bar-ruler/donut_charts.html", text:"1.07. single bar ruler"},
    {link:"../14.1.08.single-bar-ruler/donut_charts.html", text:"1.08. single bar ruler"},
    {link:"../15.1.09.single-bar-ruler/donut_charts.html", text:"1.09. single bar ruler"},
    {link:"../16.1.10.single-bar-ruler/donut_charts.html", text:"1.10. single bar ruler"},
    {link:"../17.1.11.single-bar-ruler/donut_charts.html", text:"1.11. single bar ruler"},
    {link:"../18.1.12.single-bar-ruler/donut_charts.html", text:"1.12. single bar ruler"},
    {link:"../19.1.13.single-bar-classic-pie/donut_charts.html", text:"1.13. single bar classic pie"},
    {link:"../20.1.14.single-bar-pie/donut_charts.html", text:"1.14. single bar pie"},
    {link:"../21.3.two-segments-classic-pie/donut_charts.html", text:"classic pie of 3."},
    {link:"../22.5.full-circle-two-segments-opposite-classic-pie/donut_charts.html", text:"classic pie of 5."},
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
      || i==6
      || i==9
      || i==12
      || i==18
      || i==20
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










