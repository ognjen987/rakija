$(document).ready(function(){
	  $("#racunaj").on("tap",function(){
	//    $(this).hide();
	    var litaraRakije = $("#rakijaLitara").val();
	    var trenutnoStepeni = $("#trenutnoIzmerenoStepeni").val();
	    var zeljenoStepeni = $("#kolikoZeliStepeni").val();
		
	    
	    var kolicinaDestilovaneVode = litaraRakije * (trenutnoStepeni - zeljenoStepeni) / zeljenoStepeni;
		
		var fin = kolicinaDestilovaneVode.toFixed(2);
	    
		$("#kolVode").html("Dodati " + fin + "L destilovane vode.");
		
		if (litaraRakije == "" || trenutnoStepeni == "" || zeljenoStepeni == ""){
			$("#kolVode").html("Popunite sva polja!");
		}
	  });
	});