var comp;
AdobeEdge.bootstrapCallback(function(compId) {
	comp = AdobeEdge.getComposition(compId).getStage();
});

var stage = document.querySelector("#Stage");
var clr = document.querySelector('#color');

function vc_toggle(t){
  if (t.innerHTML == 'Stop') {
    comp.getSymbol("globe").getSymbol("continents").stop();
    t.innerHTML = 'Play';
  } else {
    comp.getSymbol("globe").getSymbol("continents").play();
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
  toggle(w,n);
  document.querySelector('#Stage_globe_reflections').style.opacity = 1;
  document.querySelector('#in_reflections').value = 100;
}

//navigation ----------------------------------------------------------------------------------------------------------------
function navigateTo(sel, target, newWindow) {
  var url = sel.options[sel.selectedIndex].value;
  if (newWindow) {
    window.open(url, target, '--- attributes here, see below ---');
  } else {
    window[target].location.href = url;
  }
}


// STAGE ADDITIONAL IMAGE 12,14 plus 07,08,15,22,28,29 ---------------------------------------------------------------------------------------------
function stageImageOn(w,n,i) {
  stage.style.backgroundColor = '#' + clr.value;
  document.querySelector("#stage-bg-color").style.display = 'none';
  toggle(w,n);
  toggle('s','2');
  if (i) {
    document.querySelector("#"+i).style.display = 'block';}
}
function stageImageOff(w,n,i) {
  stage.style.backgroundColor = '#' + clr.value;
  document.querySelector("#stage-bg-color").style.display = 'block';
  toggle(w,n);
  toggle('s','1');
  if (i) {
    document.querySelector("#"+i).style.display = 'none';}
}

//STAGE BACKGROUND COLOR ----------------------------------------------------------------------------------------------------------------
function stageOn(w,n,i) {
  addClass('ani_bgc');

  stage.style.backgroundColor = '#' + clr.value;
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




