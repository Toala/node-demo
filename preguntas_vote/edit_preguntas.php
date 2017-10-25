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
        $('#form_edit_preguntas')[0].reset();

        $('#question').change(function() {
          if( $(this).val() != 0 ) {
            $('.block-question').fadeIn('slow');
          }else {
            $('.block-question').fadeOut('slow');
          }
        });

        $('#form_edit_preguntas').submit(function(e) {
          var option = $('#question').val();
            if(option == 0) {
              e.preventDefault();
              apprise("Lo sentimos, debes elegir una pregunta !!!");
            }
        });

        $('#cancelar').click(function() {
          location.href = "index.php";
        });
      });
    </script>
  </head>
  <body>
    <div class="space"></div>
    <div class="bar">
      <div class="row">
        <div class="large-12 medium-12 columns">
          <div class="title">Editar Preguntas</div>
        </div>
      </div>
    </div>
    
    <div class="air"></div>
    <div class="row">
      <div class="large-12 columns">
          <form action="controller/controller.php" id="form_edit_preguntas" method="POST">
            <input type="hidden" value="edit" name="action" />
            <div class="panel">
              <select id="question" name="question">
                <option value="0">Seleccione una opción</option>
                <?php 
                  include_once ("lib/utils.php");
                  require_once "application/Model.php";
                  
                  $model = new Model();
                  $model->execute("SELECT idvoto_pregunta id, nombre FROM voto_pregunta");
                  $preguntas = $model->fetchAll();

                  foreach ($preguntas as $key => $value) {
                ?>
                  <option value="<?php echo $value['id']?>"><?php echo $value['nombre'];?></option>   
                <?php     
                  }
                ?>
              </select>
              <div class="block-question hide">
                <input type="text" class="answer" name="answer[]" placeholder="respuesta" />
                <input type="text" class="answer" name="answer[]" placeholder="respuesta" />
                <input type="text" class="answer" name="answer[]" placeholder="respuesta" />
                <input type="text" class="answer" name="answer[]" placeholder="respuesta" />
                <input type="text" class="answer" name="answer[]" placeholder="respuesta" />
                <input type="text" class="answer" name="answer[]" placeholder="respuesta" />
              </div>
            </div>

           <div class="row">
              <div class="large-3 medium-3 columns">&nbsp;</div>
              <div class="large-3 medium-3 columns text-center">
                <input type="submit" value="Guardar" name="guardar" class="button success" id="guardar"/>
              </div>
              <div class="large-3 medium-3 columns text-center">
                <input type="button" value="Cancelar" name="guardar" class="button alert" id="cancelar" />
              </div>
              <div class="large-3 medium-3 columns">&nbsp;</div>
            </div>

          </form>
      </div>
    </div>
    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>