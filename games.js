let phrases = [ "Chanter une chanson accapella", 
"Chanter une chanson avec de l’eau dans la bouche", 
"Chanter une chanson avec des chamallows dans la bouche", 
"Chanter une chanson imposée tout en écoutant une autre chanson (casque nécessaire)", 
"Raconter une blague", 
"Raconter une blague dans une autre langue", 
"Manger un aliment (piment, moutarde, poivre, oignon…)", 
"Boire un verre cul-sec", 
"Boire un shooter sans les mains", 
"Boire un shooter préparé par le gagnant", 
"Enlever un vêtement", 
"Mettre ses vêtements à l’envers", 
"Porter un déguisement imposé (le costume du looser)", 
"Passer le reste de la soirée avec ses chaussettes sur les mains", 
"Danser sur une chanson imposée", 
"Danser la macarena sur une autre chanson", 
"Parler pendant 5 minutes sur un thème imposé", 
"Parler dans une autre langue pendant 2 minutes sur un thème imposé", 
"Plonger habillé dans une piscine", 
"Se bander les yeux pendant un temps imposé (5 minutes, 10 minutes …)", 
"Attacher les 2 mains du perdant", 
"Attacher 2 perdants ensemble par la main ou la jambe pendant un temps imposé", 
"Dormir dans une autre pièce que la chambre (couloir, escalier, terrasse…)", 
"Organiser un repas pour le ou les gagnants", 
"Payer sa tournée dans un bar", 
"Le ou les perdants est/sont à la disposition du ou des gagnants pendant un temps imposé", 
"Faire une déclaration d’amour", 
"Faire un discours élogieux sur l’amitié", 
"Faire une série de pompe", 
"Faire un tour de la maison avec le gagnant sur le dos", 
"Appeler un numéro au hasard et tenir la conversation le plus longtemps possible", 
"Faire une démonstration de air guitare", 
"Faire une démonstration de air sexe", 
"Interdiction de parler jusqu’à ce que le gagnant l’ait décidé", 
"Interdiction de dire “non” de toute la soirée (sinon autre gage)", 
"Interdiction de refuser un verre", 
"Faire le champ du coq à chaque heure de la soirée", 
"Faire le ménage le lendemain de soirée", 
"Refaire la scène avec Gandalf du Seigneur des Anneaux “vous ne passerez pas !!!”", 
"Se faire épiler une partie du corps", 
"Simuler un orgasme", 
"Rentrer le plus de chamallows dans la bouche", 
"Imiter le cris d'un animal", 
"Imiter la gestuelle d'un animal", 
"Attacher les jambes du perdant pendant un temps imposé", 
"Mettre en scène une expression ou proverbe", 
"Devenir le Marjordome de tout le monde", 
"S'occuper des vomis", 
"Prendre uns photo de tous les invités à leur insu", 
"Echanger leurs vêtements (si 2 perdants)", 
"Manger une cuillère de cannelle", 
"Manger un petit beurre en moins d'une minute", 
"Sauter dans un slip (ou short)", 
"Appeler une personne inconnue et lui faire dire un mot imposé avant qu'il ne raccroche", 
"Appeler une personne inconnue et placer 3 fois un mot imposé avant qu'il raccroche sans les dire à la suite", 
"Balancer un dossier sur soi", 
"Raconter sa dernière journée en détail", 
"Faire un cover sur << J'irais ou tu iras >> (si 2 perdants)", 
"Se faire maquiller par une fille (si le perdant est un gars)", 
"Se faire maquiller par un mec (si le perdant est une fille)", 
"Imiter la personne à sa gauche ou à sa droite", 
"Se déplacer en moonwalk", 
"Chanter s'il veut s'exprimer", 
"Demander l'autorisation pour aller aux toilettes", 
"Faire la vaisselle à la fin de la soirée", 
"Amener les croissants le lendemain", 
"Faire dix tours sur lui-même avec un balai", 
"Faire un gage sans que les autres le sache", 
"Boire un cocktail préparé par les autres", 
"Faire le striker tout nu dans la rue ou le jardin", 
"Faire du pole dance autour d'un lampadaire", 
"Enlever un vêtement", 
"Répéter en double", 
"Mettre du vernis sur les mains et pieds (pour les mec)", 
"Faire un strip-tease", 
"Parler sans utiliser un lettre définie par les autres", 
"Parler en chantant", 
"Twitter de son compte perso : j'aime secret story", 
"Faire la macarena à l'envers", 
"Se faire prendre en photo dans une position définie par les autres" ]

random = Math.floor(Math.random()*phrases.length)

let card = document.getElementById("phrase")
card.innerHTML = phrases[random]
