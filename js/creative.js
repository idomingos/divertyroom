!function(a) {
    "use strict";
    a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = a(this.hash);
                if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length) 
            	   return a("html, body").animate({scrollTop: e.offset().top - 56}, 3e3, "easeInOutBack", function(){}), !1
            } 
        }
    ), 
    a(".js-scroll-trigger").click(function() {
        a(".navbar-collapse").collapse("hide")
        }
    ), 
    a("body").scrollspy({
        target: "#mainNav",
        offset: 57
        }
    );
    /* Hide or show function*/
    var e = function() {
        /* Top */
       
        a("#mainNav").offset().top > 100 ? a("#mainNav").addClass("navbar-shrink") : a("#mainNav").removeClass("navbar-shrink");
        /* Serveis 
        Math.trunc(a(window).scrollTop()-a("#serveis").offset().top)+56 == 0 ? a("#calen").fadeIn() : a("#calen").fadeOut(),
        console.log(Math.trunc(a(window).scrollTop()-a("#serveis").offset().top)+56),*/
        /* Active section select*/
        var element = a('.active');
        
        if(element.length>0){
            /*Element Actiu*/
           !0;
        }
        //console.log(a(element[0].hash));
        //!1console.log($(a(element[0].hash)));
        else{ 
            !1;
            }
            //Fireworks.createParticle();
        //Fireworks.createFirework();
            //console.log(Fireworks);

        /*Posició element
        **a("#serveis").offset().top)
        **Posició Scroll
        **a(window).scrollTop()
        */
    };

    e(),    
    a(window).scroll(e), 
	/*Animació icons*/
    window.sr = ScrollReveal(), sr.reveal(".sr-icons", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 200), sr.reveal(".sr-button", {
        duration: 1e3,
        delay: 200
    }), sr.reveal(".sr-contact", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 300),

    /* Popup image*/
     a(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    })
}(jQuery);

window.onload = function() {
    /* Init FireWorks */
  //Fireworks.initialize();
  /*Slider portada*/
  $('canvas').on('click', function(){
      let element = $('#slider').children(':visible');
      element.fadeOut(1500, function(){
        element.next().length ? element.next().fadeIn(500) : element.parent().children().first().fadeIn(500);
    })
    }),
  $('div.portada').children('div').on('click', function(){
    $(this).fadeOut(1500,function(){
        $(this).next().length ? $(this).next().fadeIn() : $(this).parent().children().first().fadeIn()
    })
    });

  var festius = "ca.spain#holiday@group.v.calendar.google.com";
  var tarifa = "u0vqqk6aat4s31j18phgqjvamk@group.calendar.google.com";
  var calTarifa = new Calendars();
  var calEvent = new Calendars();
  getCalendar(tarifa,'2018-01-01').then(function(cal){
    calTarifa.set(cal);
    showCalendar(calTarifa);

    calEvent.set(cal);
    showReserva(calEvent);
  });

   //Form Validation
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });

};