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
comp.$("Group").css({"left":"50%"});
comp.$("Group").css({"margin-left":"-138px"});

$(document).ready(function(){

 $('input').on('change', function(){
      $('a.current').removeClass('current');
  });

 $('.presets a').on('click', function(){
      $('a.current').removeClass('current');
      $(this).addClass('current');
  });

 $('#restart').on('click', function(){
   i = 99;
   ii = 98;
   update_digits();
   comp.getSymbol("Stage").stop(0);
   comp.getSymbol("box").play(0);
  });
  
 $('#restart_icons').on('click', function(){
   loop_total = 10;
   comp.getSymbol("Stage").stop(0);
   comp.getSymbol("box").play(0);
  });
  
});


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
/*
  var dd = '#'+n+'_display';
  var inner_shadow = document.querySelector(dd);
  inner_shadow.value = v;
  var graph_el_id = '#Stage_globe_'+n;
  var graph_el = document.querySelector(graph_el_id);
  graph_el.className += ' ' + 'ani_opacity';
  graph_el.style.opacity = v/100;
*/
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

function preset(parameter) {

switch(parameter) {
// stage_clr_,rect_clr_ ,text_clr_ ,rect_appears_from_clr_,rect_fades_to_clr_
    case '1':
        colors_arr = ["0E83CD","1F2128","FFFFFF","1F2128","000000"];
        colors_inp = ["FFFFFF","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '2':
        colors_arr = ["0E83CD","0B71C1","FFFFFF","85B8E0","000000"];
        colors_inp = ["FFFFFF","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '3':
        colors_arr = ["0E83CD","FFFFFF","1F2128","FFFFFF","154974"];
        colors_inp = ["FFFFFF","FFFFFF","000000","000000","FFFFFF"];
        break;
    case '4':
        colors_arr = ["0E83CD","2790d2","FFFFFF","93C8E9","154974"];
        colors_inp = ["FFFFFF","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '5':
        colors_arr = ["0E83CD","0E83CD","FFFFFF","85B8E0","154974"];
        colors_inp = ["FFFFFF","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '6':
        colors_arr = ["0E83CD","0E83CD","FFFFFF","0E83CD","0E83CD"];
        colors_inp = ["FFFFFF","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;

    case '7':
        colors_arr = ["1F2128","000000","FFFFFF","808080","000000"];
        colors_inp = ["FFFFFF","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '8':
        colors_arr = ["1F2128","0E83CD","FFFFFF","FFFFFF","000000"];
        colors_inp = ["FFFFFF","000000","FFFFFF","000000","FFFFFF"];
        break;
    case '9':
        colors_arr = ["1F2128","FFFFFF","1F2128","FFFFFF","000000"];
        colors_inp = ["FFFFFF","FFFFFF","000000","000000","FFFFFF"];
        break;
    case '10':
        colors_arr = ["1F2128","36383e","FFFFFF","9B9C9F","000000"];
        colors_inp = ["FFFFFF","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '11':
        colors_arr = ["1F2128","1F2128","FFFFFF","808080","000000"];
        colors_inp = ["FFFFFF","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '12':
        colors_arr = ["1F2128","1F2128","FFFFFF","1F2128","1F2128"];
        colors_inp = ["FFFFFF","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;

    case '13':
        colors_arr = ["ECF0F1","000000","FFFFFF","808080","000000"];
        colors_inp = ["000000","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '14':
        colors_arr = ["ECF0F1","0E83CD","FFFFFF","85B8E0","000000"];
        colors_inp = ["000000","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '15':
        colors_arr = ["ECF0F1","FFFFFF","1F2128","FFFFFF","B5BBBE"];
        colors_inp = ["000000","FFFFFF","000000","000000","FFFFFF"];
        break;
    case '16':
        colors_arr = ["ECF0F1","DAE2E4","1F2128","FFFFFF","B5BBBE"];
        colors_inp = ["000000","FFFFFF","000000","000000","FFFFFF"];
        break;
    case '17':
        colors_arr = ["ECF0F1","ECF0F1","1F2128","FFFFFF","B5BBBE"];
        colors_inp = ["000000","FFFFFF","000000","000000","FFFFFF"];
        break;
    case '18':
        colors_arr = ["ECF0F1","ECF0F1","1F2128","ECF0F1","ECF0F1"];
        colors_inp = ["000000","FFFFFF","000000","000000","000000"];
        break;

    case '19':
        colors_arr = ["FFFFFF","000000","FFFFFF","808080","000000"];
        colors_inp = ["000000","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '20':
        colors_arr = ["FFFFFF","0E83CD","FFFFFF","85B8E0","000000"];
        colors_inp = ["000000","000000","FFFFFF","FFFFFF","FFFFFF"];
        break;
    case '21':
        colors_arr = ["FFFFFF","ECF0F1","1F2128","FFFFFF","B5BBBE"];
        colors_inp = ["000000","FFFFFF","000000","000000","FFFFFF"];
        break;
    case '22':
        colors_arr = ["FFFFFF","FFFFFF","0E83CD","FFFFFF","ECF0F1"];
        colors_inp = ["000000","FFFFFF","000000","000000","000000"];
        break;
    case '23':
        colors_arr = ["FFFFFF","FFFFFF","0E83CD","FFFFFF","ECF0F1"];
        colors_inp = ["000000","FFFFFF","000000","000000","000000"];
        break;
    case '24':
        colors_arr = ["FFFFFF","FFFFFF","0E83CD","FFFFFF","FFFFFF"];
        colors_inp = ["000000","FFFFFF","000000","000000","000000"];
        break;

    default:
        break;
}

stage_clr_=colors_arr[0];
rect_clr_ =colors_arr[1];
text_clr_ =colors_arr[2];
rect_appears_from_clr_=colors_arr[3];
rect_fades_to_clr_=colors_arr[4];


  stage_clr = "#"+stage_clr_;
  rect_clr  = "#"+rect_clr_;
  text_clr  = "#"+text_clr_;
  rect_appears_from_clr = "#"+rect_appears_from_clr_;
  // rect_appears_from_opacity = '0.5';
  rect_fades_to_clr = "#"+rect_fades_to_clr_;
  // rect_fades_to_opacity = '0.9';

  document.querySelector('#big-nav-btn').style.color = stage_clr;

  //stage_clr
  stage_clr_el = document.querySelector('#color');
  stage_clr_el.value = stage_clr_;
  stage_clr_el.style.color = "#"+colors_inp[0];
  stage_clr_el.style.backgroundColor = stage_clr;
  document.querySelector('#Stage').style.backgroundColor = stage_clr;

  //text_clr
  text_clr_el = document.querySelector('#text_clr');
  text_clr_el.value = text_clr_;
  text_clr_el.style.color = "#"+colors_inp[1];
  text_clr_el.style.backgroundColor = text_clr;
  update_text_clr();

  //rect_clr
  rect_clr_el = document.querySelector('#rect_clr');
  rect_clr_el.value = rect_clr_;
  rect_clr_el.style.color = "#"+colors_inp[2];
  rect_clr_el.style.backgroundColor = rect_clr;
  // document.querySelector('#Stage_content_RoundRect').style.borderColor = rect_clr;
  // document.querySelector('#Stage_content_content').style.color = rect_clr;
  update_rect_clr();

  //rect_appears_from_clr
  rect_appears_from_clr_el = document.querySelector('#rect_appears_from_clr');
  rect_appears_from_clr_el.value = rect_appears_from_clr_;
  rect_appears_from_clr_el.style.color = "#"+colors_inp[3];
  rect_appears_from_clr_el.style.backgroundColor = rect_appears_from_clr;
  update_rect_appears_from_clr();

  //rect_fades_to_clr
  rect_fades_to_clr_el = document.querySelector('#rect_fades_to_clr');
  rect_fades_to_clr_el.value = rect_fades_to_clr_;
  rect_fades_to_clr_el.style.color = "#"+colors_inp[4];
  rect_fades_to_clr_el.style.backgroundColor = rect_fades_to_clr;
  update_rect_fades_to_clr();

}

