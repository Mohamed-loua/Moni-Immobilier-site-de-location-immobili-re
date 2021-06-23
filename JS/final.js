var nom= document.getElementById("pièce");
nom.textContent=sessionStorage.getItem("pièces");
var lieu=document.getElementById("lieu");
lieu.textContent=sessionStorage.getItem("place");
var piece= document.getElementById("piece");
piece.value=sessionStorage.getItem("pièces");
var residence=document.getElementById("residence");
residence.value=sessionStorage.getItem("place");
