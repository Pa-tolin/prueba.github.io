 // -- smooth scroll -->

  $(function () {
    $("a").click(function (event) {
        if (this.hash !== "quienes") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800);
        }
    });
});

  $(function () {
    $("a").click(function (event) {
        if (this.hash !== "destacados") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800);
        }
    });
});

  $(function () {
    $("a").click(function (event) {
        if (this.hash !== "contacto") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800);
        }
    });
});

// -- boton "Enviar"

$("#enviar").click(function(){
    alert ("El correo fue enviado con éxito!");
    });

//-- iconos -->

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
