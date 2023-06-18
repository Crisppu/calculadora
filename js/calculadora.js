const botonC = document.querySelector("[data-c]");
const botonMasMenos = document.querySelector("[data-masMenos]");
const botonDivision = document.querySelector("[data-division]");
const botonPorcentaje = document.querySelector("[data-porcentaje]");

const boton7 = document.querySelector("[data-7]");
const boton8 = document.querySelector("[data-8]");
const boton9 = document.querySelector("[data-9]");
const botonMultiplicar = document.querySelector("[data-multiplicacion]");

const boton4 = document.querySelector("[data-4]");
const boton5 = document.querySelector("[data-5]");
const boton6 = document.querySelector("[data-6]");
const botonResta = document.querySelector("[data-resta]");

const boton1 = document.querySelector("[data-1]");
const boton2 = document.querySelector("[data-2]");
const boton3 = document.querySelector("[data-3]");
const botonSuma = document.querySelector("[data-suma]");

const boton0 = document.querySelector("[data-0]");
const botonPunto = document.querySelector("[data-punto]");
const botonIgual = document.querySelector("[data-igual]");

const input = document.querySelector("[data-input]");

botonC.addEventListener("click", function() {
  limpiarPantalla();
  borraTodoRegistrosArrays();
  activarTodosLosBotonesOperaciones();
  input.value = 0;
});
botonMasMenos.addEventListener("click", function() {
  let cambioSigno = cambiarSigno(capturarValor(input.value));
  imprimir(cambioSigno);
  activarTodosLosBotonesOperaciones();
  borraTodoRegistrosArrays();
});
botonPorcentaje.addEventListener("click", function() {
  let valorInput = capturarValor(input.value);
  imprimir(calcularPorcentaje(valorInput));
});

boton7.addEventListener("click", function() {
  boton7.value = "7";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});

boton8.addEventListener("click", function() {
  boton8.value = "8";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});
boton9.addEventListener("click", function() {
  boton9.value = "9";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});

boton4.addEventListener("click", function() {
  boton4.value = "4";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});

boton5.addEventListener("click", function() {
  boton5.value = "5";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});
boton6.addEventListener("click", function() {
  boton6.value = "6";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});

boton1.addEventListener("click", function() {
  boton1.value = "1";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});

boton2.addEventListener("click", function() {
  boton2.value = "2";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});
boton3.addEventListener("click", function() {
  boton3.value = "3";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});

boton0.addEventListener("click", function() {
  boton0.value = "0";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});

botonPunto.addEventListener("click", function() {
  botonPunto.value = ".";
  imprimir(agregarNumLista(this.value));
  activarTodosLosBotonesOperaciones();
});

var listaSuma = [];
botonSuma.addEventListener("click", function() {
  botonSuma.value = "+";
  let signoBoton = botonSuma.value;
  listaSuma.push(capturarValor(input.value));
  console.log(listaSuma);
  limpiarPantalla();
  listaNumIngresados.length = 0;
  borrarRegistrosListas(signoBoton);
  let totalSuma = suma(listaSuma);
  imprimir(totalSuma);
  desactivarBoton(signoBoton);
  activarBotones(signoBoton);
  mostrarResultado(totalSuma, signoBoton);
});

var listaResta = [];
botonResta.addEventListener("click", function() {
  botonResta.value = "-";
  let signoBoton = botonResta.value;
  listaResta.push(capturarValor(input.value));
  limpiarPantalla();
  listaNumIngresados.length = 0;
  borrarRegistrosListas(signoBoton);
  let totalResta = resta(listaResta);
  imprimir(totalResta);
  desactivarBoton(signoBoton);
  activarBotones(signoBoton);
  mostrarResultado(totalResta, signoBoton);
});

var listaMultiplicar = [];
botonMultiplicar.addEventListener("click", function() {
  botonMultiplicar.value = "*";
  let signoBoton = botonMultiplicar.value;
  listaMultiplicar.push(capturarValor(input.value));
  limpiarPantalla();
  listaNumIngresados.length = 0;
  borrarRegistrosListas(signoBoton);
  let totalMultiplicar = multiplicacion(listaMultiplicar);
  imprimir(totalMultiplicar);
  desactivarBoton(signoBoton);
  activarBotones(signoBoton);
  mostrarResultado(totalMultiplicar, signoBoton);
});

var listaDivision = [];
botonDivision.addEventListener("click", function() {
  botonDivision.value = "/";
  let signoBoton = botonDivision.value;
  listaDivision.push(capturarValor(input.value));
  limpiarPantalla();
  listaNumIngresados.length = 0;
  borrarRegistrosListas(signoBoton);
  let totalDivision = division(listaDivision);
  imprimir(totalDivision);
  desactivarBoton(signoBoton);
  activarBotones(signoBoton);
  mostrarResultado(totalDivision, signoBoton);
});

var listaIgual = [];
var listaSigno = [];
botonIgual.addEventListener("click", function() {
  botonIgual.value = "=";
  let signoBoton = botonIgual.value;
  listaIgual.push(capturarValor(input.value));
  limpiarPantalla();
  listaNumIngresados.length = 0;
  borrarRegistrosListas(signoBoton);
  if (listaSigno[0] === "+") {
    imprimir(suma(listaIgual));
  } else if (listaSigno[0] === "-") {
    imprimir(resta(listaIgual));
  } else if (listaSigno[0] === "*") {
    imprimir(multiplicacion(listaIgual));
  } else if (listaSigno[0] === "/") {
    imprimir(division(listaIgual));
  } else {
    input.value = "0";
  }
});

function borraTodoRegistrosArrays() {
  listaNumIngresados.length = 0;
  listaSuma.length = 0;
  listaResta.length = 0;
  listaMultiplicar.length = 0;
  listaDivision.length = 0;
  listaIgual.length = 0;
  listaSigno.length = 0;
}

function borrarRegistrosListas(signoBoton) {
  if (signoBoton == "-") {
    listaSuma.length = 0;
    listaMultiplicar.length = 0;
    listaDivision.length = 0;
    listaIgual.length = 0;
    listaSigno.length = 0;
  } else if (signoBoton == "+") {
    listaResta.length = 0;
    listaMultiplicar.length = 0;
    listaDivision.length = 0;
    listaIgual.length = 0;
    listaSigno.length = 0;
  } else if (signoBoton == "*") {
    listaSuma.length = 0;
    listaResta.length = 0;
    listaDivision.length = 0;
    listaIgual.length = 0;
  } else if (signoBoton == "/") {
    listaSuma.length = 0;
    listaResta.length = 0;
    listaMultiplicar.length = 0;
    listaIgual.length = 0;
  } else if (signoBoton == "=") {
    listaSuma.length = 0;
    listaResta.length = 0;
    listaMultiplicar.length = 0;
    listaDivision.length = 0;
  }
}
var listaNumIngresados = [];
function agregarNumLista(btnNumero) {
  listaNumIngresados.push(btnNumero);
  let totalNumeros = listaNumIngresados.join("");
  return totalNumeros;
}
function activarBotones(signoBoton) {
  if (signoBoton == "-") {
    botonSuma.disabled = false;
    botonMultiplicar.disabled = false;
    botonDivision.disabled = false;
  } else if (signoBoton == "+") {
    botonResta.disabled = false;
    botonMultiplicar.disabled = false;
    botonDivision.disabled = false;
  } else if (signoBoton == "*") {
    botonResta.disabled = false;
    botonSuma.disabled = false;
    botonDivision.disabled = false;
  } else if (signoBoton == "/") {
    botonResta.disabled = false;
    botonSuma.disabled = false;
    botonMultiplicar.disabled = false;
  }
}
function desactivarBoton(signoBoton) {
  if (signoBoton == "-") {
    botonResta.disabled = true;
  } else if (signoBoton == "+") {
    botonSuma.disabled = true;
  } else if (signoBoton == "*") {
    botonMultiplicar.disabled = true;
  } else if (signoBoton == "/") {
    botonDivision.disabled = true;
  }
}

function activarTodosLosBotonesOperaciones() {
  botonResta.disabled = false;
  botonSuma.disabled = false;
  botonMultiplicar.disabled = false;
  botonDivision.disabled = false;
}

function limpiarPantalla() {
  input.value = "";
}

function imprimir(num) {
  input.value = num;
}

function capturarValor(valorActualInput) {
  let valorConvertidoInt = valorActualInput;
  return valorConvertidoInt;
}

function mostrarResultado(sumaTotal, signo) {
  listaIgual.push(sumaTotal);
  listaSigno.push(signo);
}

function cambiarSigno(numero) {
  if (numero > 0) {
    return -numero;
  } else if (numero < 0) {
    return -numero;
  } else {
    return `-${numero}`;
  }
}

function calcularPorcentaje(numero) {
  var resultado = numero / 100;
  return resultado;
}

function suma(listaSuma) {
  let resultadoSuma = 0;
  for (let s = 0; s < listaSuma.length; s++) {
    resultadoSuma += parseFloat(listaSuma[s]);
  }
  return resultadoSuma;
}
function resta(listaResta) {
  let resultadoResta = listaResta[0];
  for (var r = 1; r < listaResta.length; r++) {
    resultadoResta -= parseFloat(listaResta[r]);
  }
  return resultadoResta;
}
function multiplicacion(listaMultiplicar) {
  let resultadoMultiplicacion = 1;

  for (var i = 0; i < listaMultiplicar.length; i++) {
    resultadoMultiplicacion *= listaMultiplicar[i];
  }
  return resultadoMultiplicacion;
}
function division(listaDivision) {
  let totalDivision = listaDivision[0];

  for (var i = 1; i < listaDivision.length; i++) {
    totalDivision /= listaDivision[i];
  }
  return totalDivision;
}
