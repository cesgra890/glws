var comp;
AdobeEdge.bootstrapCallback(function(compId) {
	comp = AdobeEdge.getComposition(compId).getStage();
  // comp.getSymbol("globe").getSymbol("continents-animation").$("flatmap-front").css({"opacity":0.5});
  // comp.getSymbol("globe").getSymbol("continents-animation").$("flatmap-front").css("opacity","0");
  // comp.getSymbol("globe").$("continents-animation").css("opacity","0.2");
  // document.querySelector("#Stage_globe_continents-animation_flatmap-front").style.display = 'none';
  // comp.getSymbol("globe").getSymbol("continents-animation").stop();

document.querySelector("body").className += "loaded";

/*
function set() {
  document.querySelector('#Stage_globe_continents-animation_flatmap-back').style.opacity = '0';
}

if (/(?!.*?compatible|.*?webkit)^mozilla|opera/i.test(navigator.userAgent)){
  document.addEventListener("DOMContentLoaded", set, false);
}else{
  window.setTimeout(set,0);
}
*/


});

var stage = document.querySelector("#Stage");
var clr = document.querySelector('#color');

function vc_toggle(t){
  if (t.innerHTML == 'Stop') {
    comp.getSymbol("globe").getSymbol("continents-animation").stop();
    t.innerHTML = 'Play';
    // document.querySelector("#Stage_globe_continents-animation_inner-shadow").style.backgroundColor = '#fc0';
  } else {
    comp.getSymbol("globe").getSymbol("continents-animation").play();
    t.innerHTML = 'Stop';
  }
}

// -----------------------------------------------------------------------------------------------------

function toggle(what,number) {
  var elements = document.querySelectorAll('.'+what);
  for (i = 0; i < elements.length; ++i) {
    if (elements.classList) {
      elements[i].classList.remove("on");}
    else {
      elements[i].className = ' ' + what;}
    }
  var el = document.querySelector('#'+what+number);
    if (el.classList) {
      el.classList.add("on");}
    else {
      el.className += ' ' + "on";}
}

function updateInput(v, n){
  var dd = '#'+n+'_display';
  var inner_shadow = document.querySelector(dd);
  inner_shadow.value = v;
  var graph_el_id = '#Stage_globe_'+n;
  var graph_el = document.querySelector(graph_el_id);
  graph_el.className += ' ' + 'ani_opacity';
  graph_el.style.opacity = v/100;
}
function reflections(filename,w,n) {
  var r = document.querySelector("#Stage_globe_reflections");
  r.style.backgroundImage = "url('../assets/reflections/"+filename+".svg')";
  var r2 = document.querySelector("#Stage_globe_reflections-2nd");
  r2.style.backgroundImage = "url('../assets/reflections/"+filename+".svg')";
  toggle(w,n);
  document.querySelector('#Stage_globe_reflections').style.opacity = 1;
  document.querySelector('#Stage_globe_reflections-2nd').style.opacity = 1;
  document.querySelector('#in_reflections').value = 100;
  document.querySelector('#in_reflections-2nd').value = 100;
}

//stage background color ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function stageOn(w,n,i) {
  var a = document.querySelector("#"+w+n);
  alert("#"+w+n);
  var img = document.querySelector('#gradient');
  stage.className += ' ' + 'ani_background_color';
  stage.style.backgroundImage = "";
  stage.style.backgroundColor = '#' + clr.value;
  document.querySelector("#stage-bg-color").style.display = 'block';
  toggle(w,n);
  toggle('sg','2');
  if (i) {
    document.querySelector("#"+i).style.display = 'none';
  }
}
function stageOff(w,n,i) {
  stage.className += ' ' + 'ani_background_color';
  stage.style.backgroundImage = "";
  stage.style.backgroundColor = "";
  document.querySelector("#stage-bg-color").style.display = 'none';
  toggle(w,n);
  toggle(w+'g',n);
  if (i) {
    document.querySelector("#"+i).style.display = 'none';
  }
}

// stageGradient 7,8,15,22,28,29,six ----------------------------------------------------------------------------------------------------------------------------------------------------------
function stageGradientOn(w,n) {
  stage.className = '';
  var img = document.querySelector('#gradient');
  stage.style.backgroundImage = '' + img.value;
  toggle(w,n);
  toggle('s','2');
//  document.querySelector("#stage-bg-color").style.display = 'none';
}
function stageGradientOff(w,n) {
  stage.className = '';
  // stage.style.display = 'block';
  // stage.style.opacity = 1;
  stage.style.backgroundImage = "";
  stage.style.backgroundColor = '#' + clr.value;
  toggle(w,n);
  toggle('s','1');
//  document.querySelector("#stage-bg-color").style.display = 'block';
}

// stageImage 12,14 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function stageImageOn(w,n,i) {
  toggle(w,n);
  toggle('s','2');
  if (i) {
    document.querySelector("#"+i).style.display = 'block';
  }
}
function stageImageOff(w,n,i) {
  stage.style.backgroundImage = "";
  stage.style.backgroundColor = '#' + clr.value;
  toggle(w,n);
  toggle('s','1');
  if (i) {
    document.querySelector("#"+i).style.display = 'none';
  }
}

//navigation
function navigateTo(sel, target, newWindow) {
  var url = sel.options[sel.selectedIndex].value;
  if (newWindow) {
    window.open(url, target, '--- attributes here, see below ---');
  } else {
    window[target].location.href = url;
  }
}

// window.onload = document.querySelector("body").classList.remove("preload");
// window.onload = document.querySelector("body").className += "loaded";

//document.addEventListener("DOMContentLoaded", function(event) {});
// document.addEventListener("DOMContentLoaded", document.querySelector("body").className += "loaded");




