// Consulto tipo de dispositivo
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  var device = 'mobile';
} else {
  var device = 'desktop';
}
//fin Consulto tipo de dispositivo

// Funcion para validar formato url
function is_url(str) {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

//<!-- Soporte WEBP -->
function support_format_webp() {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  } else {
    // very old browser like IE 8, canvas not supported
    return false;
  }
}
//Animacion loader
let svgContainerLoader = document.querySelector('.loader');

let animLoader = bodymovin.loadAnimation({
  wrapper: svgContainerLoader,
  animType: 'svg',
  loop: true,
  path: "../animations/corazon.json"//_pathProducto + "img/corazon.json"
});

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
    var imageParallax = '../src/photo2.jpg';
  } else {
    var imageParallax = '../src/photo2.jpg';
  }

} else {

  // Aceptar webp?
  if (support_format_webp()) {
    var imageParallax = '../src/photo2.jpg';
  } else {
    var imageParallax = '../src/photo2.jpg';
  }

}

$('.portada').parallax({
  imageSrc: imageParallax// _pathProducto + imageParallax
});
//fin portada parallax