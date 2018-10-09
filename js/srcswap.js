var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('altsrc');
    $this.data('altsrc', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
    $('img.logo-navbar').hover(sourceSwap, sourceSwap);
});

var color=["yellow","blue","red","green","white"];
var index = 0;
var colorchg = function(color){
	$('h1').css('color',color);
	//Fireworks.createFirework();
	};
setInterval("colorchg(color[++index%color.length])",3000);

function esVisible(elemento) {
    var esVisible = false;
    if ($(elemento).is(':visible') && $(elemento).css("visibility") != "hidden"
            && $(elemento).css("opacity") > 0) {
        esVisible = true;
    }

    return esVisible;
}

function estaEnPantalla(elemento) {
    var estaEnPantalla = false;
    //console.log(elemento);
    var posicionElemento = $(elemento).get(0).getBoundingClientRect();

    if (posicionElemento.top >= 0 && posicionElemento.left >= 0 
            && posicionElemento.bottom <= (window.innerHeight + 10 || document.documentElement.clientHeight + 10)
            && posicionElemento.right <= (window.innerWidth || document.documentElement.clientWidth)) {
        estaEnPantalla = true;
    }

    return estaEnPantalla;
}

function esVisibleEnPantalla(elemento) {
    var esVisible = false;
    if ($(elemento).is(':visible') && $(elemento).css("visibility") != "hidden" 
            && $(elemento).css("opacity") > 0 && estaEnPantalla(elemento)) {
        esVisible = true;
    }

    return esVisible;
}

/*
$(window).scroll(function(event) {
  var esVisible = esVisibleEnPantalla("#serveis");
  if(esVisible){
  	$('#calen').css("visibility", "visible");
  }
  else{
  	$('#calen').css("visibility", "hidden");
  }
});*/