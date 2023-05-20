//script.js

// Declaracion de variable global
let textoEncriptado;
let textoResultado;

//funcion de encriptacion
function encriptado() {
    // Obtener el texto del input
    textoEncriptado = document.getElementById("miInput").value;
  
    // Definir la tabla de reemplazo
    let tablaReemplazo = {
      "a": "ai",
      "e": "enter",
      "i": "imes",
      "o": "ober",
      "u": "ufat"
    };
    // Realizar las sustituciones
    textoEncriptado = textoEncriptado.replace(/[aeiou]/g, function(letra) {
      return tablaReemplazo[letra];
    });
    
}


//funcion de desencriptacion
function desencriptar() {
  let textoEntrada = document.getElementById('miInput').value;
  textoResultado = textoEntrada.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
  console.log(textoResultado);
}


//funcion para mostrar texto encriptado
  function mostrarTexto1(){
    let elemento = document.getElementById("miElemento");
    elemento.textContent = textoEncriptado;

    let boton = document.getElementById("btn-copiar");
    if (elemento.textContent.trim() !== ""){
      boton.style.display = "block";
    } else {
      boton.style.display = "none"
    }
  }


//funcion para ocultar la imagen cuando existe un texto en "miElemento"
  function ocultarImagen(){
    let elemento = document.getElementById("miElemento");

    let imagenMono = document.getElementById("monoIMG");

    if (elemento.textContent.trim() !== ""){
      imagenMono.style.display = "none";
    } else {
      imagenMono.style.display = "block"
    }
  }


//funcion para ocultar parrafo cuando existe un texto en "miElemento"
function ocultarParrafo(){
  let elemento = document.getElementById("miElemento");

  let parrafo1 = document.getElementById("sinMensaje");

  if (elemento.textContent.trim() !== ""){
    parrafo1.style.display = "none";
  } else {
    parrafo1.style.display = "block"
  }
}


//funcion para ocultar segundo parrafo cuando existe un texto en "miElemento"
function ocultarParrafo2(){
  let elemento = document.getElementById("miElemento");

  let parrafo2 = document.getElementById("escribeTexto");

  if (elemento.textContent.trim() !== ""){
    parrafo2.style.display = "none";
  } else {
    parrafo2.style.display = "block"
  }
}


  //funcion para mostrar texto desencriptado
  function mostrarTexto2(){
    let elemento = document.getElementById("miElemento");
    elemento.textContent = textoResultado;
  }


//llamando funciones al ejecutar el encriptado
function llamarFunciones(){
  encriptado();
  mostrarTexto1();
  ocultarImagen();
  ocultarParrafo();
  ocultarParrafo2();
}


//funcion doble para boton de desencriptar
function llamarFunciones2(){
  desencriptar();
  mostrarTexto2();
}


//funcion copiar al portapapeles
// copiarAlPortapapeles se agrego onclick en html
function copiarAlPortapapeles(){

  // selecciona el elemento con el ID "miElemento" 
  // El resultado se almacena en la variable texto
  let texto =  document.getElementById('miElemento');

  // utiliza navigator para copiar el texto al portapapeles
  navigator.clipboard.writeText(texto.textContent);
}