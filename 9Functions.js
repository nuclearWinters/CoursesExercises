const primerNumero = 10;
const segundoNumero = 10;

const sumaDosNumerosVarible = primerNumero + segundoNumero; //20

console.log(`Variable: ${sumaDosNumerosVarible}`);

//Función que no regresa un valor

const sumaDosNumerosFuncion = (a, b) => {
  console.log(`Valor de a: ${a}`);
  console.log(`Valor de b: ${b}`);
  console.log(`a + b: ${a + b}`);
};

console.log(`Console.log de una función: ${sumaDosNumerosFuncion}`);

const resultado = sumaDosNumerosFuncion(primerNumero, segundoNumero);

console.log(`Valor que regresa la función: ${resultado}`);

//Funcion que regresa un valor

const sumaDosNumerosFunctionReturn = (a, b) => {
  console.log(`Valor de a: ${a}`);
  console.log(`Valor de b: ${b}`);
  console.log(`a + b: ${a + b}`);
  return a + b;
};

const resultadoReturn = sumaDosNumerosFunctionReturn(
  primerNumero,
  segundoNumero
);

console.log(`Valor que regresa la función: ${resultadoReturn}`);

const sumaDosNumerosFunctionReturnShort = (a, b) => a + b;

console.log(
  `Valor que regresa la función: ${sumaDosNumerosFunctionReturnShort(
    primerNumero,
    segundoNumero
  )}`
);

//Lo importante de las funciones es que puedes reutilizarlas y lo unico que cambia son los argumentos que les introduces
