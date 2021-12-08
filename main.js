'use strict'

function showMenu() {
    let x = document.getElementById("myLinks");
    let nav = document.getElementById("navbar")
    if (x.style.display === "block") {
      x.style.display = "none";
      nav.style.backgroundColor = "";
    } else {
      x.style.display = "block";
      nav.style.backgroundColor = "#ff95a6";
    }
}