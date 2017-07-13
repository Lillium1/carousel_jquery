$(document).ready(function() {
    var imagenes = [
        'img/cuy4.jpg',
        'img/cuy2.jpg',
        'img/cuy5.jpg',
        'img/cuy6.jpg',
        'img/cuy0.jpg'
    ];

    var cont = 0;
    setInterval(function() {
        cont++;
        if (cont > imagenes.length - 1) {
            cont = 0;
        }
        agregarFoto(imagenes[cont]);

    }, 6000);

    // Click de las flechas para mover izquierda - derecha
    $('#f_antes').on('click', function() {
        cont--;
        if (cont < 0) {
            cont = imagenes.length - 1;
        }
        agregarFoto(imagenes[cont]);

    });

    $('#f_siguiente').on('click', function() {
        cont++;
        if (cont > imagenes.length - 1) {
            cont = 0;
        }
        agregarFoto(imagenes[cont]);
    });

    function agregarFoto(foto) {
        $("#fotos").empty().append('<img src="' + foto + '" alt="fotos de cuyis">');
    }

    // Cambiar la foto

    $('#pelotita1').on('click', function() {
        agregarFoto(imagenes[0]);
    });
    $('#pelotita2').on('click', function() {
        agregarFoto(imagenes[1]);
    });
    $('#pelotita3').on('click', function() {
        agregarFoto(imagenes[2]);
    });
    $('#pelotita4').on('click', function() {
        agregarFoto(imagenes[3]);
    });
    $('#pelotita5').on('click', function() {
        agregarFoto(imagenes[4]);
    });

});