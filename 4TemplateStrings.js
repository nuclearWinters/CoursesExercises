const nombre = "Fernando Rueda";
const edad = 26;

const oracion = `¡Hola! Mi nombre es Armando Rueda y tengo 27 años`;

const oracion2 = `¡Hola! Mi nombre es ${nombre} y tengo ${edad} años`;

const oracion3 = `¡Hola! Mi nombre es ${"Armando Rueda"} y tengo ${
  (17 + 10 - 27 + 1) * edad
} años`;

console.log(oracion);
console.log(oracion2);
console.log(oracion3);
