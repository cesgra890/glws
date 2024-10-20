var comp;
AdobeEdge.bootstrapCallback(function(compId) {
	comp = AdobeEdge.getComposition(compId).getStage();
	

  // comp.$("Stage").css({"opacity":0.5});
  // comp.getSymbol("globe").getSymbol("continents-animation").$("flatmap-front").css("opacity","0");
  // comp.getSymbol("globe").$("continents-animation").css("opacity","0.2");
  // document.querySelector("#Stage_globe_continents-animation_flatmap-front").style.display = 'none';
  // comp.getSymbol("globe").getSymbol("continents-animation").stop();
  // document.querySelector("body").className += "loaded";

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
//comp.$("Group").css({"left":"0%"});
//comp.getSymbol("Stage").$("Group").css({"margin-left":"auto"});
//comp.css({"opacity":"0"});

});

/*
var stage = document.querySelector("#Stage");
var stage_color = document.querySelector('#color');
var icon_color = document.querySelector('#icon-color');
var ellipse_color = document.querySelector('#ellipse-color');
*/

function vc_toggle(t){
  if (t.innerHTML == 'Stop') {
    comp.getSymbol("globe").getSymbol("continents-animation").stop();
    t.innerHTML = 'Play';
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
      el.classList.add("on");
      }
    else {
      el.className += ' ' + "on";}
}

function addClass(w) {
  if (stage.classList)
    stage.classList.add(w);
  else
    stage.className += ' ' + w;
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

//STAGE BACKGROUND COLOR ----------------------------------------------------------------------------------------------------------------
function stageOn(w,n,i) {
  addClass('ani_bgc');

  stage.style.backgroundColor = '#' + stage_color.value;
  document.querySelector("#stage-bg-color").style.display = 'block';
  if (i) {
    toggle(w,n);
    toggle('sg','2');
    document.querySelector("#"+i).style.display = 'none';} else {
      toggle(w,n);
    }
}
function stageOff(w,n,i) {
  addClass('ani_bgc');

  stage.style.backgroundColor = "";
  document.querySelector("#stage-bg-color").style.display = 'none';
  if (i) {
    toggle(w,n);
    toggle('sg','2');
    document.querySelector("#"+i).style.display = 'none';} else {
      toggle(w,n);
    }
}


//window.onload = callback;
//document.addEventListener("DOMContentLoaded", function(event) {});

