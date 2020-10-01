alert("Het is nacht. Je rijd over een verlaten weg wanneer je auto plotseling pech krijgt. verderop zie je een klein huisje...");

if(prompt("Het is koud buiten en je hebt het gevoel dat je word bekeken. wil je naar het huis toe gaan?") == "ja"){

	if(prompt("Je komt aan bij het huis en ziet een voordeur en een deur naar de kelder. Ga je naar de voordeur?") == "nee"){

		if(prompt("Je besluit de kelder binnen te gaan. Binnen in de kelder is het pikdonker, je ziet een lichtknopje, doe je het licht aan?") == "ja"){

			while (kamer !== "trap" && kamer !== "keuken" && kamer !== "vluchten"){
			var kamer = prompt("je loopt de trap op de kelder uit. Je hebt nu drie opties: keuken, trap, vluchten");
			}
			if (kamer =="trap"){

				if(prompt("Je komt aan op de bovenverdieping en ziet twee open deuren: Links en Rechtdoor. Welke deur neem je?") =="links"){
					if(prompt("je komt in een slaapkamer en op het nachtkastje ligt een revolver. Je neemt de revolver mee een loopt naar de kamer aan het einde van de gang. In de kamer zie je een kastje staan. wil je het kastje doorzoeken?") =="ja"){
						
						if(prompt("In het kastje vind je een autosleutel. je loopt de kamer uit. In de kamer recht tegenover je zie je plotseling een man staan. Wat kies je: Val aan of Ren weg?") =="val aan"){
							alert("Je richt je wapen op de man en hij duikt uit de weg(gelukkig weet hij niet dat er geen kogels in zitten). Dit geeft je genoeg tijd om weg te rennen. Je rent de trap af en ziet een open deur naar een garage. in de garage staat een auto. Je gebruikt de sleutel die je hebt gevonden en de auto start. Je rijd de garage uit en je bent ontsnapt.")
							alert("GEFELICITEERD! Je hebt gewonnen!")
						}else{
							alert("Je rent naar beneden en de man komt achter je aan. Hij krijgt je te pakken als je net de trap af bent. Hij maakt je dood.")
						}
					}else{
						if(prompt("je loopt de kamer uit. In de kamer recht tegenover je zie je plotseling een man staan. Wat kies je: Val aan of Ren weg?") =="val aan"){
							alert("Je richt je wapen op de man en hij duikt uit de weg(gelukkig weet hij niet dat er geen kogels in zitten). Dit geeft je genoeg tijd om weg te rennen. Je rent de trap af en ziet een open deur naar een garage. in de garage staat een auto. Je hebt geen sleutel en voordat je de garage uit kan rennen komt de man binnen. hij maakt je dood")
						}else{
							alert("Je rent naar beneden en de man komt achter je aan. Hij krijgt je te pakken als je net de trap af bent. Hij maakt je dood.")
						}
					}


				}else{
					if(prompt("Je komt in een kleine kamer met een kastje, wil je het kastje doorzoeken?") =="ja"){

						if(prompt("In het kastje vind je een Autosleutel. je loopt de kamer uit. In de kamer recht tegenover je zie je plotseling een man staan. Wat kies je: Val aan of Ren weg?") =="val aan"){
							alert("Je valt de man aan maar zonder wapen verlies je het gevecht direct. De man maakt je dood.")
						}else{
							alert("Je rent naar beneden en de man komt achter je aan. Hij krijgt je te pakken als je net de trap af bent. Hij maakt je dood.")
						}
					}else{
						if(prompt("je loopt de kamer uit. In de kamer recht tegenover je zie je plotseling een man staan. Wat kies je: Val aan of Ren weg?") =="val aan"){
							alert("Je valt de man aan maar zonder wapen verlies je het gevecht direct. De man maakt je dood.")
						}else{
							alert("Je rent naar beneden en de man komt achter je aan. Hij krijgt je te pakken als je net de trap af bent. Hij maakt je dood.")
						}
					}
				}

			}else if (kamer =="vluchten"){
				alert("Je vlucht naar buiten toe de koude nacht in. Je vriest dood.")
			}else if (kamer =="keuken"){
				alert("Ik heb geen idee wat er gebeurt maar het eindigt met je dood, jammer hoor.")
			}


		}else{
			alert("Je besluit het licht niet aan te doen en voorzichtig verder te lopen. Helaas zie je daardoor het grote gat in de grond niet en val je erin.")
		}

	}else{
		alert("Je loopt naar de voordeur maar voordat je er bent val je door een luik in de grond. Het gat is te diep om uit te klimmen, je zit vast.")
	}

}else{
	if(prompt("Je hebt besloten om niet naar het huis te gaan. Je word moe en besluit even je ogen dicht te doen. Hoeveel uur wil je slapen?") >="3"){
		alert("Je valt in slaap en vriest dood.")
	}else{
		alert("Je valt even in slaap en als je wakker word hoor je een geluid buiten je auto. Je stapt uit en word aangevallen door wolven. Ze eten je op.")
	}
}
