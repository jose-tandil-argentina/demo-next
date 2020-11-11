"use strict";


let btnindex = document.getElementById("index");

async function showIndex(){
    let response = await fetch("index.html");
    response = await response.text();
    document.getElementById("content").innerHTML=response;
}

btnHome.addEventListener('click', showIndex);


/*
let btnMarca = document.querySelector("#btnMarca");

btnMarca.addEventListener("click", marca);


let btnPatente = document.querySelector("#btnPatente");


btnPatente.addEventListener("click", patente);


let btnModelo = document.querySelector("#btnModelo");


btnModelo.addEventListener("click", modelo);


function marca(){
    
}


function patente(){

}


function modelo(){

}

