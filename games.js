let phrases = [ "Si tu t'apelles maxime tu peux aller te faire foutre", "OUAIS FREH", "TA MERE OUAIS" ]

random = Math.floor(Math.random()*phrases.length)

let card = document.getElementById("phrase")
card.innerHTML = phrases[random]
