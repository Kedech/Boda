
//animacion de flores
    let svgContainerFlores1 = document.querySelector('.portada-flor-izq-sup');

    let animFlores1 = bodymovin.loadAnimation({
      wrapper: svgContainerFlores1,
      animType: 'svg',
      autoplay: false,
      loop: false,
      path: "../animations/img_flores01.json"//_pathProducto + "img/img_flores01.json"
    });

    var wpFlores1 = new Waypoint({
      element: document.querySelector('.box-nombres-fecha-portada'),
      handler: function() {
        animFlores1.stop();
        animFlores1.play()
      }
    });



    let svgContainerFlores2 = document.querySelector('.portada-flor-der-inf');

    let animFlores2 = bodymovin.loadAnimation({
      wrapper: svgContainerFlores2,
      animType: 'svg',
      autoplay: false,
      loop: false,
      path: "../animations/img_flores02.json"//_pathProducto + "img/img_flores02.json"
    });

    var wpFlores2 = new Waypoint({
      element: document.querySelector('.box-nombres-fecha-portada'),
      handler: function() {
        animFlores2.stop();
        animFlores2.play()
      }
    });


    let svgContainerFlores3 = document.querySelector('.portada-flor-izq-inf');

    let animFlores3 = bodymovin.loadAnimation({
      wrapper: svgContainerFlores3,
      animType: 'svg',
      autoplay: false,
      loop: false,
      path: "../animations/img_flores03.json"//_pathProducto + "img/img_flores03.json"
    });

    var wpFlores3 = new Waypoint({
      element: document.querySelector('.flecha-continuar'),
      handler: function() {
        animFlores3.stop();
        animFlores3.play();

      }
    });


    let svgContainerFlores4 = document.querySelector('.ceremonia-fiesta-flor-der');

    let animFlores4 = bodymovin.loadAnimation({
      wrapper: svgContainerFlores4,
      animType: 'svg',
      autoplay: false,
      loop: false,
      path: "../animations/img_flores04.json"//_pathProducto + "img/img_flores04.json"
    });

    var wpFlores4 = new Waypoint({
      element: document.querySelector('.info-col'),
      handler: function() {
        animFlores4.stop();
        animFlores4.play()
      }
    });


    let svgContainerFlores5 = document.querySelector('.regalos-flor-der');

    let animFlores5 = bodymovin.loadAnimation({
      wrapper: svgContainerFlores5,
      animType: 'svg',
      autoplay: false,
      loop: false,
      path: "../animations/img_flores05.json"//_pathProducto + "img/img_flores05.json"
    });

    var wpFlores5 = new Waypoint({
      element: document.querySelector('.anim-musica'),
      handler: function() {
        animFlores5.stop();
        animFlores5.play();
      }
    });
//fin animacion de flores

//portada parallax
if (device == 'mobile' || $(window).width() < 768) {

  // Aceptar webp?
  if (support_format_webp()) {
    var imageParallax = '../src/photo3.jpg';
  } else {
    var imageParallax = '../src/photo3.jpg';
  }

} else {

  // Aceptar webp?
  if (support_format_webp()) {
    var imageParallax = '../src/photo3.jpg';
  } else {
    var imageParallax = '../src/photo3.jpg';
  }

}

$('.portada').parallax({
  imageSrc: imageParallax// _pathProducto + imageParallax
});
//fin portada parallax