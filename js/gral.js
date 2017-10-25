$(document).ready(function() {	
	setTimeout(function() {
		$('.cover').removeClass('fadeIn').addClass('fadeOut').hide();
		$('.pag-inicio').addClass('fadeIn').show();
	}, 1500);

	$('.border-ponente').click(function() {
		var id = $(this).attr('id');

		$('.shadow-speakers').addClass('fadeIn').show();

		$.getJSON('js/cv.json', function(response){
    		console.log(response.cv[(id-1)].name);
    		$('.speaker-img').attr('src', 'img/ponentes/ponente-'+id+'.jpg');
    		$('.name-speaker').text(response.cv[(id-1)].name);
    		$('.cv-speaker').html(response.cv[(id-1)].description);
    	});
	});

	$('.close-speakers').click(function() {
		$('.shadow-speakers').removeClass('fadeIn').addClass('fadeOut');
		setTimeout(function() {
			$('.shadow-speakers').hide().removeClass('fadeOut');
		}, 500);
	});

	$('.next-encuesta').click(function() {
		$('.step-1').hide();
		$('.step-2').show();
		
		$('.prev-encuesta').show();
		$('.save-encuesta').show();

		$(this).hide();
	});

	$('.prev-encuesta').click(function() {
		$('.step-1').show();
		$('.step-2').hide();
		
		$('.next-encuesta').show();
		$('.save-encuesta').hide();

		$(this).hide();
	});

	$('.save-encuesta').click(function() {
		$(".mandando-nota").show();
		
		setTimeout(function() {
			$('.txt-enviando-1').hide();
			$('.txt-confirmado-1').show();

			setTimeout(function() {
				$('.txt-enviando-1').show();
				$('.txt-confirmado-1').hide();
				$(".mandando-nota").hide();		
				limpiar_checks();
				back_home();
			}, 1000);
		}, 1500);		
	});

	function limpiar_checks() {
		$('.step-1').show();
		$('.step-2').hide();
		$('.txt-area-encuesta').val("");
		$('input:radio').removeAttr('checked');
	}

	$('.row-break').click(function() {
		var id = $(this).attr("id");
		$('#position').val(id);
	});

	$(".show-caso").click(function(){
		var ide=$(this).attr("id");
		$(".todas-pres").hide();
			$(".paginas").hide();
			$(".contiene-presentacion").show();
			$(".contiene-pre-"+ide).show();
			$(".pre-paginas-"+ide).hide();
			var encual=$("#pag-pre-"+ide).val();
			$(".pag-"+encual).show();
			$(".barra-menu").show();
			$("#visible-pre").val(ide);
			$(".idioma-int").hide();
		});

		$(".ir-home").hide();
		
		$(".btn-pregunta, .sub-pregunta-experto").click(function(){
			$(".fondo-negro").show();
			$(".tanger-live").show();
		});



		$(".btn-voto").click(function(){
			$(".fondo-negro").show();
			$(".contiene-pregunta").show();
		});

		var socket = io.connect();
		
		$(".ir-home,.btn-regreso-menu").click(function(){
			back_home();
		});

		$(".btn-back-presentacion").click(function(){
			$(".paginas").hide();
			$(".in-presentaciones").show();
		});
		$(".btn-back-break").click(function(){
			$(".paginas").hide();
			$(".pag-inicio").show();
		});

		$(".btn-back-encuesta").click(function(){
			$(".paginas").hide();
			$(".in-encuestas").show();
			$(".btn-che").show();
			$(".btn-back-encuesta").hide();
			$(".muestro-encuestas").show();
			$(".encuestas-grales").hide();
			$(".chirikahua").show();
			$(".manita").hide();
		});
		
		$(".sub-menus").click(function(){
			$(".interiores").hide();
			var ide = $(this).attr("id");
			
			if (ide != 'experto') {
				$(".pag-inicio").hide();
				$(".in-"+ide).show();
				$(".barra-menu-top").show();
				$(".btns-menu-top").removeClass("slideInDown");
				$(".btns-menu-top").removeClass("agrego-top");
				$(".btn-"+ide).addClass("agrego-top");
				$(".btn-"+ide).addClass("slideInDown");	
			}
		});

		$(".btns-menu-top").click(function(){
			$(".interiores").hide();
			var ide=$(this).attr("id");
			$(".btns-menu-top").removeClass("slideInDown");
			$(".btns-menu-top").removeClass("slideInUp");
			$(".btns-menu-top").each(function(){
				var i=$(this).position();
				var q=$(this).attr("id");
				if (i.top>0) {
					$(".btns-menu-top").removeClass("agrego-top");
					$(".bt"+q).addClass("slideInUp");
				}
			});
			$(".bt"+ide).addClass("agrego-top");
			$(".bt"+ide).addClass("slideInDown");
			$(".i"+ide).show();
			
		});
		$(".img-chic").click(function(){
			var ide=$(this).attr("id");
			$(".img-sedes").hide();
			$(".gde-"+ide).show();
		});
		$(".mis-caras img").click(function(){
			$(".fondo-negro").show();
			$(".muestro-info-ponentes").show();
			$(".mis-caras-minis").hide();
			$(".mis-infos").hide();
			var ide=$(this).attr("id");
			$(".mini-"+ide).show();
			$(".infos-"+ide).show();
		});
		$(".btn-cierro-ponente").click(function(){
			$(".fondo-negro").hide();
			$(".muestro-info-ponentes").hide();
			$(".mis-caras-minis").hide();
			$(".mis-infos").hide();
			

		});
		$(".click-caras").click(function(){
			var ide=$(this).attr("id");
			$(".datos-staff-gral").addClass("fadeOut");
			setTimeout(function(){
				$(".datos-staff-gral").hide();
				$(".dato-"+ide).removeClass("fadeOut");
				$(".dato-"+ide).show();
			},600);
		});
		$(".btn-siguiente-pre").click(function(){
			$(".cont-pre-1").hide();
			$(".cont-pre-2").show();
			$(".btn-siguiente-pre").hide();
			$(".btn-anterior-pre").show();
		});
		$(".btn-anterior-pre").click(function(){
			$(".cont-pre-2").hide();
			$(".cont-pre-1").show();
			$(".btn-siguiente-pre").show();
			$(".btn-anterior-pre").hide();
		});
		

		$(".veo-pre").click(function(){
			var ide=$(this).attr("id");
			$(".todas-pres").hide();
			$(".paginas").hide();
			$(".barra-menu-top").hide();
			$(".contiene-presentacion").show();
			$(".todas-pres").hide();
			$(".contiene-pre-"+ide).show();
			$(".pre-paginas-"+ide).hide();
			var encual=$("#pag-pre-"+ide).val();
			$(".pag-"+encual).show();
			$(".barra-menu").show();
			$(".ir-home").hide();
			$("#visible-pre").val(ide);
		});
		
		$(".pase-pagina").touchwipe(
		{
		   wipeLeft: function() 
		   {
		   		var visible=$("#visible-pre").val();
		        var pag=parseInt($("#pag-pre-"+visible).val());
		        var total=parseInt($("#total-pre-"+visible).val());
		        var siguiente=1;
	            siguiente+=pag;
	            if (siguiente<=total) {
	                $(".pre-paginas-"+visible).hide();
	                $(".pag-"+visible+"-"+siguiente).show();
	                $("#pag-pre-"+visible).val(siguiente);
	            }
		   
		    }, 
		    wipeRight: function() 
		    { 
		      	var visible=$("#visible-pre").val();
		        var pag=parseInt($("#pag-pre-"+visible).val());
		        var total=parseInt($("#total-pre-"+visible).val());
		        var siguiente=1;
	            siguiente=pag-siguiente;
	            if (siguiente >=1) {
	                $(".pre-paginas-"+visible).hide();
	                $(".pag-"+visible+"-"+siguiente).show();
	                $("#pag-pre-"+visible).val(siguiente);
	                
	            }
		    },
		    min_move_x: 0,
		    min_move_y: 0,
		    preventDefaultEvents: true
		});
		$(".btn-menu").click(function(){
			$(".paginas").hide();
			$(".barra-menu-top").show();
			$(".in-presentaciones").show();
			$(".barra-menu").hide();
			$(".ir-home").show();
		});
		$(".btn-encuestas").click(function(){
			$(".todas-pres").hide();
			$(".paginas").hide();
			$(".in-encuestas").show();
			$(".encuestas-grales").hide();
			$(".muestro-encuestas").show();
		});
		$(".muestro-encuestas").click(function(){
			$(".chirikahua").hide();
			$(".btn-che").hide();
			$(".btn-back-encuesta").show();
			var ide=$(this).attr("id");
			$(".muestro-encuestas").hide();
			$(".encuesta-"+ide).show();
			$(".manita").show();
		});
		$(".cierro-voto").click(function(){
			$(".contiene-pregunta").hide();
			$(".fondo-negro").hide();
		});

		$(".cierro-live").click(function(){
			$(".tanger-live").hide();
			$(".fondo-negro").hide();
		});

		$(".show-live").click(function(){
			$(".tanger-live").show();
			$(".fondo-negro").show();
		});
		$(".btn-envio-pregunta").click(function(){
			envio_pregunta();
		});
		$(".show-notas").click(function(){
			$(".muestro-notas").show();
			$(".fondo-negro").show();
		});
		$(".cierro-notas").click(function(){
			$(".muestro-notas").hide();
			$(".fondo-negro").hide();
		});
		$(".btn-guardo-nota").click(function(){
			guardo_nota();
		});
		socket.on("hay alerta",function(data){
			if (data.op) {
					//$(".muestro_voteo").hide();
					$(".fondo-negro").show();
					$(".txt-alerta").html(data.msg);
					$("#notificacion").show();
					setTimeout(function(){
						$(".fondo-negro").hide();
						$("#notificacion").hide();
						$(".txt-alerta").html('');
					},8000);
				}else{
					$(".fondo-negro").hide();
					$("#notificacion").hide();
					$(".txt-alerta").html('');
				}
		});

		socket.on("hay wordcloud", function(data) {
			console.log(data);
		});

		socket.on("hay voteo", function(data){
			// console.log("hay voteo");
			// console.log(data);
			// console.log(data);

			// console.log($('#position').val());
			var breakout_position = $('#position').val();
			if(breakout_position == data.breakout) {
				if (data.opp=="1") {
					if (data.op) {
						//$(".muestro_voteo").hide();
						$(".fondo-negro").show();
						$(".txt-alerta").html(data.msg);
						$("#notificacion").show();
						setTimeout(function(){
							$(".fondo-negro").hide();
							$("#notificacion").hide();
							$(".txt-alerta").html('');
						},8000);
					}else{
						$(".fondo-negro").hide();
						$("#notificacion").hide();
						$(".txt-alerta").html('');
					}
				}else if (data.opp=="2") {
					$(".gracias").hide();
					if (data.op) {

						var pregunta="";
						var idepregunta="";
						var yavotos=data.yavoto;
						$(".respuestas").html('');
						$(".fondo-negro").show();
						$(".contiene-pregunta").show();
						for (var i = 0; i < data.infos.length; i++) {
							pregunta=data.infos[0].nombre;
							idepregunta=data.infos[0].idvoto_pregunta;
							$(".respuestas").append('<div class="row preguntas-voteo-muestro">'
							+'<div class="col-lg-12 col-md-12 col-sm-12">'
							+'<input type="radio" name="radiog_lite" id="radio'+data.infos[i].idvoto_respuesta+'" class="css-checkbox" value="u-'+data.infos[i].idvoto_respuesta+'"><label for="radio'+data.infos[i].idvoto_respuesta+'" class="css-label">'+data.infos[i].opcion+'</label>'
							+'</div>'
							+'</div>'
							+'<hr />');
						};
					    
					    // $(".pregunta").html(pregunta);
						$(".pregunta").html("perra 2");
						$("#notificacion").hide();
					    if (!yavotos) {
					    	clearTimeout(settime);
					    	$("#reloj_cuenta").val(20);
					    	cuenta_regresiva();
							$(".css-checkbox").off();
							$(".css-checkbox").click(function(){
								var ide=$(this).val();
								$(".barrita").show();
								var user=$("#usuario").val();
								socket.emit("voto",{ide:ide,user:user,pregunta:idepregunta},function(data){
									
								});
								$(".cierro-voto").show();
								pongo_off();
							});
					    }else{
					    	$(".fondo-negro").show();
							$(".contiene-pregunta").show();
							pongo_off();
					    	socket.emit("voto2",idepregunta,function(data){
										
									});
					    	$(".cierro-voto").show();
					    }
					}else{
						$(".fondo-negro").hide();
						$(".contiene-pregunta").hide();
					}
				}
			}// if que valida el breakout
		});
		function pongo_off(){
			$(".css-checkbox").off();
			$(".css-checkbox").prop("disabled",true);
			$(".gracias").show();
		}
		socket.on("calculando",function(data){
			
			var algo=Object.keys(data);

			var total=0;
			for (var i = 0,p=1; i < algo.length; i++,p++) {
				total+=data[algo[i]];
			}

			for (var i = 0,p=1; i < algo.length; i++,p++) {
				var num=(parseInt(data[algo[i]])*100)/total;
				console.log(num)
				var otro=algo[i].split("-");
				//$("#progressbar"+i).css({"width":num+"%"},1000);
				$("#progressbar"+otro[1]).animate({ width: num+"%" }, 1000 );
				$(".porcentaje"+otro[1]).html(Math.round(num)+"%");
			}
		});
		$(".cerrar-alerta").click(function(){
			$(".alerta-login").hide();
		});
		function ingresar(){
			var email=$("#email").val();
			var pass=$("#pass").val();
			if (email=='' || pass=='') {
				$(".alerta-login").show();
				$(".txt-alerta").html("No deje campos vacios");

				return;
			}
			socket.emit("login",{email:email,pass:pass},function(data){
				console.log(data);
				if (data) {
					$("#usuario").val(data[0]);
					$(".fondo-negro").hide();
					$(".login").hide();
					listar_notas(0);
				}else{
					$(".alerta-login").show();
					$(".txt-alerta").html("Usuario y/o contraseña incorrecta");
					return;
				}
			});
		}

		function envio_pregunta(){
			$(".txt-textos").hide();
			$(".txt-enviando").show();
			$(".mandando-pregunta").show();
			var pregunta=$("#pregunta-ponente").val();
			var user=$("#usuario").val();


			$(".fondo-negro").hide();
			$(".tanger-live").hide();

			setTimeout(function() {
				socket.emit("pregunta live",{user:user,pregunta:pregunta},function(data){
					console.log(data);
					if (data) {
						$(".txt-textos").hide();
						$(".txt-confirmado").show();
						$("#pregunta-ponente").val("");
						$(".cerrar-pregunta").click(function(){
							$(".mandando-pregunta").hide();
						});
					};
				});
			}, 2000);
		}

		function listar_notas(donde){
			var user=$("#usuario").val();
			socket.emit("listar notas",user,function(data){
				console.log(data.length);
				if (donde==0) {
					console.log("si hay notassss");
					$(".listar-notas").html('');
					if (data.length>0) {
						for (var i = 0; i < data.length; i++) {
							$(".listar-notas").append('<div class="view-nota" id="'+data[i].idnotas+'">'+data[i].titulo+'</div><input type="hidden" id="tmp-nota-'+data[i].idnotas+'" ><br>');
							$("#tmp-nota-"+data[i].idnotas).val(data[i].nota);
						}
						$(".view-nota").click(function(){
							$(".btn-borro-nota").show();
							var ide=$(this).attr("id");
							var nombre=$(this).html();
							var nota=$("#tmp-nota-"+ide).val();
							$("#ide_nota").val(ide);
							$("#actualizo_nota").val(1);
							$("#nombre-nota").val(nombre);
							$("#comentario-nota").val(nota);
							$(".guardar-nota").show();
						});
						$(".listar-notas").show();
					}else{
						$(".guardar-nota").show();
							//$(".listar-notas").hide();
					}
				}else{
					console.log("no hay notass");
					console.log(data.length);
					$(".listar-notas").html('');
					if (data.length>0) {
						for (var i = 0; i < data.length; i++) {
							$(".listar-notas").append('<div class="view-nota" id="'+data[i].idnotas+'">'+data[i].titulo+'</div><input type="hidden" id="tmp-nota-'+data[i].idnotas+'" ><br>');
							$("#tmp-nota-"+data[i].idnotas).val(data[i].nota);
						}
						$(".view-nota").click(function(){
							$(".btn-borro-nota").show();
							var ide=$(this).attr("id");
							var nombre=$(this).html();
							var nota=$("#tmp-nota-"+ide).val();
							$("#ide_nota").val(ide);
							$("#actualizo_nota").val(1);
							$("#nombre-nota").val(nombre);
							$("#comentario-nota").val(nota);
							$(".guardar-nota").show();
						});
					}
				}
				
			});
		}
		$(".nueva-nota").click(function(){
			$(".btn-borro-nota").hide();
			$("#ide_nota").val("");
			$("#actualizo_nota").val(0);
			$("#nombre-nota").val("");
			$("#comentario-nota").val("");
		});
		$(".btn-borro-nota").click(function(){
			borro_nota();
		});
		function guardo_nota(){
			$(".txt-textos").hide();
			$(".txt-textos2").hide();
			$(".txt-enviando2").show();
			$(".nota-enviando").show();
			$(".mandando-nota").show();
			var nombre=$("#nombre-nota").val();
			var comentario=$("#comentario-nota").val();
			var user=$("#usuario").val();
			var actualizo=$("#actualizo_nota").val();
			var idenota=$("#ide_nota").val();
			socket.emit("guardo nota",{user:user,nombre:nombre,comentario:comentario,actualizo:actualizo,idenota:idenota},function(data){
				console.log(data);
				if (data) {
					$(".txt-textos2").hide();
					$(".txt-confirmado2").show();
						$(".cerrar-pregunta").click(function(){
						$(".mandando-nota").hide();
					});
					$("#nombre-nota").val("");
					$("#actualizo_nota").val(0);
					$("#comentario-nota").val("");
					listar_notas(1);
				};
			});
		}
		$(".btn-envio-1").click(function(){
			$(".btn-envio-1").prop("disabled",true);
			var datos=$("#mando-encuesta-1").serialize();
			var datos2=new Array($(".res1:checked").val(),$(".res2:checked").val(),$(".res3").val(),$(".res4:checked").val(),$(".res5:checked").val(),$(".res6:checked").val(),
				$(".res7:checked").val(),$(".res8:checked").val(),$(".res9:checked").val(),$(".res10:checked").val(),$(".res11:checked").val(),$(".res12:checked").val(),$(".res13:checked").val(),
				$(".res14:checked").val(),$(".res15:checked").val(),$(".res16:checked").val(),$(".res17:checked").val(),$(".res18").val());
			socket.emit("guardo encuesta",{datos:datos2,otro:$(".res1-otro").val()},function(data){
				if (data) {
					$(".btn-envio-1").prop("disabled",false);
					$(".msg-encuesta").show();
					$(".manita").hide();
					$(".btn-che").show();
					$(".btn-back-encuesta").hide();
					$(".encuestas-grales").hide();
					setTimeout(function(){$(".msg-encuesta").hide();$(".muestro-encuestas").show();},3000);
				}
			});
		});
		

		function back_home() {
			$(".paginas").hide();
			$(".pag-inicio").show();
			$(".barra-menu-top").hide();
			$(".barra-menu").hide();
		}

		function borro_nota(){
			$(".txt-textos").hide();
			$(".txt-textos2").hide();
			$(".txt-enviando2").show();
			$(".nota-borrando").show();
			$(".mandando-nota").show();
			var idenota=$("#ide_nota").val();
			var user=$("#usuario").val();
			socket.emit("borro nota",{user:user,idenota:idenota},function(data){
				console.log(data);
				if (data) {
					listar_notas(1);
					
					$(".txt-textos2").hide();
					$(".txt-nota-borrando").show();
					$(".cerrar-pregunta").click(function(){
						$(".mandando-nota").hide();
					});
					$("#nombre-nota").val("");
					$("#actualizo_nota").val(0);
					$("#comentario-nota").val("");
					$(".btn-borro-nota").hide();
					
				};
			});
		}
		function dia1(){
			$(".generales").hide();
			$(".pag-agenda").show();
			$(".titles").hide();
			$(".titulo-agenda1").show();
			$(".dia1").show();
			$(".dia2").hide();
		}
		function dia2(){
			$(".titles").hide();
			$(".titulo-agenda2").show();
			$(".dia1").hide();
			$(".dia2").show();
		}
		function ponentes(){
			$(".pag-inicio").hide();
			$(".barra-menu").show();
			$(".titles").hide();
			$(".titulos-grales").show();
			$(".titulo-ponentes").show();
			$(".contenido-gral").show();
			$(".generales").hide();
			$(".pag-ponentes").show();
		}
		function individual(ide){
			$(".titles").hide();
			$(".generales").hide();
			$(".pag-individual").show();
			$(".ver-caras").hide();
			$(".cara"+ide).show();
			$(".ver-textos").hide();
			$(".texto"+ide).show();
		}
		var settime="";
		function cuenta_regresiva(){
			var i=20;
			var num=$("#reloj_cuenta").val();
			if (num<=0) {
				$(".cierro-voto").show();
				$("#reloj_cuenta").val(20);
				pongo_off();
			}else{
				num--;
			$("#reloj_cuenta").val(num);
			$(".reloj").html(num);
			settime=setTimeout(function(){
				cuenta_regresiva();
			},1000);
			}
			

		}
	});