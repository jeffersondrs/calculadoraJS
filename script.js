'use strict';

// function insert(number){
//   var numbers = document.getElementById("resultado").innerHTML;
//   document.getElementById('resultado').innerHTML = numbers + number;
// }

function clean() {
  document.getElementById('resultado').innerHTML = "";
}

function back(){
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
  var resultado = document.getElementById('resultado').innerHTML;
  if (resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
  }else{
    document.getElementById('resultado').innerHTML = "no sum";
  }
}

const btn = document.querySelector(".btn-1");

function color(number){
  var numbers = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numbers + number;
  btn.style.backgroundColor = "blue";
  btn.style.color = "white";
}