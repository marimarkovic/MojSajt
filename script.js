"use strict"
let tabela = document.getElementById("tabela");  
let niz = ["Ugaona garnitura","Kreveti","Stolovi","Stolice","Sofa","Fotelja"];
function dodajTabelu (x){ // f-ja sa ulaznim param, for petlju, dogadjaj, dinamcko generisanje html-a
let ispis = "";
if (x==1){
    ispis+=`<table border = "1px solid grey"><caption>Najprodavaniji proizvodi</caption>`;
    for(let i=0;i<niz.length;i++){
        ispis += `<tr><td>${i+1}</td><td>${niz[i]}</td></tr>`;
    }
    ispis +=`</table>` ;
    tabela.innerHTML=ispis;
}
}

function promena(a) {
    let upozorenje = document.getElementsByTagName("img");
    if (a==2){
     alert("Naša nova ponuda");
    }
    else if(a==3){
        alert("Nemamo na stanju!");
    }
}

niz.splice(3,0,"Tabure"); // Metoda sa nizom Dodavanje elemnta niza na tacno odredjenu poziciju prvi parametar je za poziciju (index), a drugi da obisemo parametre ovde je 0 da ne i obrisao nijedan
let poruka = document.getElementById ("poruka");

function boja(z) {
    if (z == 4){
        poruka.style.color = "lightblue";
    }
    if (z == 5){
       poruka.style.color = "black";
    }
}
function promBoja (f){
    let adresa = document.getElementById("adresa");
    if (f=='stil'){
        adresa.style.color = "darkblue";
    }
    else if (f == 'stil2'){
        adresa.style.color = "lightblue";
    }
}

function provenaVelicine(t) {
    return t.toLowerCase();
}

function podaci() {
    let ime = forma.ime.value;
    let prezime = forma.prezime.value;
    let email = forma.email.value;
    ime = ime.toUpperCase();
   alert( `Vasi uneti podaci su: \n ime: ${ime} \n Prezime: ${prezime} \n Email: ${email}`);
   
}
