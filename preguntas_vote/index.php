<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>.:: Preguntas ::.</title>
    <!-- CSS Files Import -->
    <link rel="stylesheet" href="css/foundation.css" />
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="stylesheet" href="css/apprise.css" />

    <!-- Javascript Files Import -->
    <script src="js/vendor/modernizr.js"></script>
    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/apprise.js"></script>
    <script type="text/javascript">
      $(document).ready(function() {
        var msg = '<?php echo $_GET[success];?>';
        
        if(msg == 1) {
          apprise("Preguntas agregadas correctamente !!!");
          setTimeout(function(){location.href = "index.php";}, 3000);
        }

        $('.menu').click(function() {
          var id = $(this).attr('id');
          if(id == 1)  {
            location.href = "add_preguntas.php";
          }else if(id == 2) {
            location.href = "edit_preguntas.php";
          }else {

            apprise('¿Esta seguro de eliminar las preguntas?', {'verify':true}, function(r) {
              if(r) { 
                $.ajax({
                  type: 'POST',
                  url: "controller/controller.php",
                  data: {
                    action : 'delete'
                  },
                  dataType: "json",
                  success: function(response) {
                      if(response.response == "done") {
                        apprise("Las preguntas han sido eliminadas !!!");
                      }
                  },
                  error: function(xhr) {
                    console.log(xhr.responseText);
                  }
                });
              }
            });
          } 
        });
      });
    </script>
  </head>
  <body>
    <div class="space"></div>
    <div class="bar">
      <div class="row">
        <div class="large-12 medium-12 columns">
          <div class="title">Home</div>
        </div>
      </div>
    </div>
    
    <div class="air"></div>
    <div class="row">
      <div class="large-12 columns">
        <div class="row">
          <div class="large-3 medium-3 columns">&nbsp;</div>
          <div class="large-6 medium-6 columns center">
            <div class="menu button secondary" id="1">Agregar preguntas</div>
          </div>
          <div class="large-3 medium-3 columns">&nbsp;</div>
        </div>

        <div class="row">
          <div class="large-3 medium-3 columns">&nbsp;</div>
          <div class="large-6 medium-6 columns center">
            <div class="menu button secondary" id="2">Editar Preguntas</div>
          </div>
          <div class="large-3 medium-3 columns">&nbsp;</div>
        </div>
        
        <div class="row">
          <div class="large-3 medium-3 columns">&nbsp;</div>
          <div class="large-6 medium-6 columns center">
            <div class="menu button secondary" id="3">Elimina Preguntas</div>
          </div>
          <div class="large-3 medium-3 columns">&nbsp;</div>
        </div>

      </div>
    </div>

    
    
    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>
