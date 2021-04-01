//const esVerdad = false;
//
//if (esVerdad) {
//  console.log("Es Verdad");
//} else {
//  console.log("No es verdad");
//}

//const edad = 17;
//
//if (edad > 18) {
//  console.log("Puede tomar alcohol");
//} else {
//  console.log("No puede tomar alcohol");
//}

const dinero = 499;

//if (dinero >= 900) {
//  console.log("Tiene 900 o más de 900");
//} else if (dinero >= 500 && dinero <= 899) {
//  console.log("Tiene entre 500 y 899");
//} else {
//  console.log("Tiene 499 o menos de 499");
//}

//if (dinero >= 900) {
//  console.log("Tiene 900 o más de 900");
//}
//if (dinero >= 500 && dinero <= 899) {
//  console.log("Tiene entre 500 y 899");
//}
//if (dinero >= 499) {
//  console.log("Tiene 499 o menos de 499");
//}

const numeroDel0Al5 = 5;

/*if (numeroDel0Al5 === 5) {
  console.log("El numero es 5");
}
if (numeroDel0Al5 === 0) {
  console.log("El numero NO es 5");
}
if (numeroDel0Al5 === 1) {
  console.log("El numero NO es 5");
}
if (numeroDel0Al5 === 2) {
  console.log("El numero NO es 5");
}
if (numeroDel0Al5 === 3) {
  console.log("El numero NO es 5");
}
if (numeroDel0Al5 === 4) {
  console.log("El numero NO es 5");
}*/

//if (numeroDel0Al5 === 5) {
//  console.log("El numero es 5");
//} else {
//  console.log("El numero NO es 5");
//}

const valor = false;

const ternaryEjemplo = valor ? "Es verdad" : "Es falso";

//console.log(ternaryEjemplo);

const valor2 = false;

const nestedTernary = valor
  ? "Valor 1 es verdadero"
  : valor2
  ? "Valor2 es verdadero"
  : "Valor2 es falso";

console.log(nestedTernary);

//No es recomdable tener if/elses y ternaries muy grandes ya que pueden ser dificiles de leer
