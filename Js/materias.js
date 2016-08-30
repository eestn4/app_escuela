 $ ( document ).ready(function( ) {
    
     $.ajax({
         type: 'GET',
         url: 'http://colegio.paparelli.com.ar/materias',
         dataType : 'json',
         success: function(data){
             var materias = $('#materias');
             item = ''
             $.each(data.results, function(i, field){
                item += '<p href="#" class="list-group-item">'+field.nombre+
                  ' ('+ field.anio_cursada + ' )' +

                '</p>';
              });
             materias.html(item);
             },
             error: function (response, status, error) {
                 console.log(error);
             }
     });
     
 })