// Configuration
var WONMod_Ver= '0.1';
var SERVER		= 'www.tubasa.fr/wonmod/'; 

var pageBanque	= '/banque.php';  
var pageBanqueForteresse = '/camp_banque.php';
var pageCheckBanque	= '/check_banque.php';
var pageAttaque = '/fight.php';
var pageMessage = '/mp.php';

var win = window.self.location.toString();

function chargePage(page) {
	var newScript = document.createElement('script');
	newScript.setAttribute('language',"JavaScript");
	newScript.setAttribute('type', 'text/javascript');
	newScript.setAttribute('src', SERVER + page);
	document.getElementsByTagName('head')[0].appendChild(newScript);
}

	if(win.indexOf(pageCheckBanque) != -1) {
			window.history.back();
	 }


	 if(win.indexOf(pageBanque) != -1) {	
		
		var div = document.getElementById('depot_or').innerHTML;
		var tableau = []; 
		tableau = div.split(" ");
		
		 /*
		 *
		 *	CALCUL OR SUR SOIT
		 *
		 */
	   if(tableau[5] == "déposé" || tableau[5] == "retiré"){
				var or_sur_soit = tableau[9];   
		}else{
			if(tableau[4] == "Rioks")
				var or_sur_soit = tableau[2] + tableau[3];  
			else if(tableau[5] == "Rioks")
				var or_sur_soit = tableau[2] + tableau[3] + tableau[4];  
				else
					var or_sur_soit = tableau[2];  
		}
				
		 
		 
		 
		var longueur_or_sur_soit = or_sur_soit.length; 
		
		longueur_or_sur_soit = (longueur_or_sur_soit-7);
		or_sur_soit = or_sur_soit.substr(3, longueur_or_sur_soit);
		 
		 
		/*var input = document.getElementById('depot');
		input.value = or_sur_soit;*/
			
		 /*
		 *
		 *	CALCUL OR EN BANQUE
		 *
		 */
	   if(tableau[5] == "déposé" || tableau[5] == "retiré"){
			var or_en_banque = tableau[43];  
		}else{
		
			if(tableau[38] == "Rioks")
				var or_en_banque = tableau[36] + tableau[37];  
			else if(tableau[39] == "Rioks")
				var or_en_banque = tableau[36] + tableau[37] + tableau[38];  
				else
					var or_en_banque = tableau[36]; 
		 }
		var longueur_or_en_banque = or_en_banque.length; 
		
		longueur_or_en_banque = (longueur_or_en_banque-7);
		or_en_banque = or_en_banque.substr(3, longueur_or_en_banque);
		 
		/*var input2 = document.getElementById('retrait');
		input2.value = or_en_banque; */
		
		/*
		*
		* On va créer un nouveau lien
		* ET OU un bouton
		*
		*/
		
		var lienOrSurSoit = 'check_banque.php?depot=' + or_sur_soit;
		var lienOrEnBanque = 'check_banque.php?retrait=' + or_en_banque;
		
		var btnNone1 = document.createElement('input');
		btnNone1.setAttribute('type', 'button');
		btnNone1.setAttribute('value', 'Tout Déposer'); 
		
		var btnNone2 = document.createElement('input');
		btnNone2.setAttribute('type', 'button');
		btnNone2.setAttribute('value', 'Tous récupérer'); 
		
		
		var espace = document.createElement('br');
		var centrer = document.createElement('center');
		
		var newLink = document.createElement('a');
		newLink.id    = 'depot_tous';
		newLink.href = lienOrSurSoit;
		newLink.title = 'Tous déposer !';
		
		
		var newLink2 = document.createElement('a');
		newLink2.id    = 'retrait_tous';
		newLink2.href = lienOrEnBanque;
		newLink2.title = 'Tous Récupérer !';
		
		document.getElementById('depot_or').appendChild(espace);
		document.getElementById('depot_or').appendChild(espace); 
		document.getElementById('depot_or').appendChild(centrer);
		
		//Bouton 1
		centrer.appendChild(newLink);
		newLink.appendChild(btnNone1);
		
		//Délimiteur
		var spanPlus = document.createElement('span');
		var newTextSpan = document.createTextNode(" ---- ");  
		spanPlus.appendChild(newTextSpan); 
		centrer.appendChild(spanPlus);  
		
		//bouton 2
		centrer.appendChild(newLink2);
		newLink2.appendChild(btnNone2);
		 
	}

	if(win.indexOf(pageAttaque) != -1) { 
		var page = document.getElementsByClassName("td_body")[0];
		var message = page.getElementsByTagName("b")[0];
		var verif = "Le monstre est mort";
		if(message.innerHTML == verif){
			document.location.href="http://www.nemerial.net/carte.php";
		}
	 }
	 
	 if(win.indexOf(pageMessage) != -1) { 
		/*var tabTitres = document.getElementsByClassName("titre_message");
		var titre = "";
		var id = "";
		var nomContenu = "";
		var contenu = "";
		for(var i = 0; i < tabTitres.length; i++){
			titre = tabTitres[i];
			if(titre.innerHTML.indexOf("<a href=") != -1){
				id = titre.getElementsByTagName("a")[0].getAttribute('id');
				nomContenu = "commentbox" + id;
				contenu = document.getElementById(nomContenu);
				contenu.style.height="200px";
				contenu.style.overflow="scroll";
				contenu.style.display="block";
			}
		}*/
	 }
