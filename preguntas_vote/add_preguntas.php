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
        $('#form_preguntas')[0].reset();

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
          <div class="title">Preguntas</div>
        </div>
      </div>
    </div>
    
    <div class="air"></div>
    <div class="row">
      <div class="large-12 columns">
          <form action="controller/controller.php" id="form_preguntas" method="POST">
            <input type="hidden" value="add" name="action" />
            <?php 
              $aux = 1;
              $final = 7;
              for ( $i = 1; $i <= 2; $i++ ) { ?>
                <div class="panel">
                  
                  <div class="row">
                    <div class="large-2 medium-2 small-1 columns">&nbsp;</div>
                    <div class="large-8 medium-8 small-10 columns">
                      <input type='text' name='questions[]' placeholder="<?php echo "Pregunta ".$i;?>" class="input"/>
                    </div>
                    <div class="large-2 medium-2 small-1 columns">&nbsp;</div>
                  </div>
                  
                  <?php 
                    $value = 1;
                    for( $j = $aux; $j < ($final + $aux) - 1; $j++) {?>
                      <div class="row">
                        <div class="large-2 medium-2 small-1 columns">&nbsp;</div>
                        <div class="large-8 medium-8 small-8 columns">
                          <input type='text' name='answers[]' class="input-2"/>  
                        </div>
                        <div class="large-2 medium-2 small-3 columns">&nbsp;</div>
                      </div>
                  <?php }
                    $aux += 6;
                  ?>
                </div>
            <?php } ?>
      
            <div class="row">
              <div class="large-3 medium-3 columns">&nbsp;</div>
              <div class="large-3 medium-3 columns text-center">
                <input type="submit" value="Guardar" name="guardar" class="button success"/>
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
