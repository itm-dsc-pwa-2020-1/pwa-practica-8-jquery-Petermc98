/* MENU */
$(document).ready(function() {
    $menu = $('#menu').find('ul').find('li');

    $menu.hover(function() {
        $(this).children('ul').stop();
        $(this).children('ul').slideDown();
    }, function() {
        $(this).children('ul').stop();
        $(this).children('ul').slideUp();
    });
});
/*****SLIDER  */
$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });
  });
  /******CARGAR */
  
  /*NOTA*/
/* Al abrir el archivo index directamente sin abrirlo con el localhost, no funciona la parte de cargar el texto externo
esto debido a que es bloqueado por CORS, una seguridad de los navegadores.
 solo funciona montado en el servidor local*/

$(document).ready(function(){
  $("#btnCargar").click(function(){
    $('#contenido').load('externo.txt');
    $('#contenido').css({padding:'10px', fontSize:'2rem'});   
  });
});

  /*****AJAX */
  $(document).ready(function(){
    $("#boton").click(function(){
      $.ajax({
        url: 'https://reqres.in/api/users',
        success: function(respuesta) {
    
          var listaUsuarios = $("#lista-usuarios");
          $.each(respuesta.data, function(index, elemento) {
            listaUsuarios.append(
                '<div>'
              +     '<p>' + elemento.first_name + ' ' + elemento.last_name + '</p>'
              +     '<img src=' + elemento.avatar + '></img>'
              + '</div>'
            );    
          });
        },
        error: function() {
          console.log("No se ha podido obtener la información");
        }
      });
    });
  });
  /***Efecto */
  $(document).ready(function(){
      $('#btn1').click(function(){
          $('#imagen').fadeIn(1000);
      });
      $('#btn2').on('click',function(){
        $('#imagen').fadeOut(1000);
    });
  });
  /******OTRO */
  $("document").ready(function(){
    $('#btn').click(function(){
    $('#cuadro').animate({left: '34vh'});
    $('#cuadro').animate({top: '21vh'});
    $('#cuadro').animate({left: '1px'});
    $('#cuadro').animate({top: '1px'});
    $('#cuadro').animate({fontSize: '2.5rem'});
    });
  }); 
