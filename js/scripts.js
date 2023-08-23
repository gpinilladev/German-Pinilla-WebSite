$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function(){
  $("#counter").countdown({
  until: new Date(2023, 9 - 1, 1),
  format: 'dHMS'
  });

  $("#counter_wrapper").fitText(1.2, {
  minFontSize: '20px',
  maxFontSize: '50px'
  });
});


// GET /api/usuario - Listado
// POST /api/usuario - Crea un nuevo usuario
// DELETE /api/usuario - Borra todos los usuario
// GET /api/usuario/id - Datos del usuario
// PUT /api/usuario/id - Actualiza un usuario
// DELETE /api/usuario/id - Borra un usuario en especifico