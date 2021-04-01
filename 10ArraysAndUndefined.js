const listaDeNumeros = [0, 1, 2];

console.log(typeof listaDeNumeros);

//console.log(listaDeNumeros);
//console.log(listaDeNumeros[0]);
//console.log(listaDeNumeros[1]);
//console.log(listaDeNumeros[2]);
const listaDeStrings = ["Armando", "Fernando", "Alejandro"];
//console.log(listaDeStrings);
//console.log(listaDeStrings[0]);
//console.log(listaDeStrings[2]);
const listaDeBooleans = [true, false, true, false];
//console.log(listaDeBooleans);
//console.log(listaDeBooleans[0]);
//console.log(listaDeBooleans[3]);

const [primerValor, segundoValor] = ["Armando", "Fernando"];
//console.log(primerValor, segundoValor);

let undefinedVariable;
//console.log(undefinedVariable);
const undefinedVariableDeclared = undefined;
//console.log(undefinedVariableDeclared);

//console.log(listaDeNumeros[3]);

//comparaciones

const lista = ["Armando"];

const isSame = lista === lista;

console.log(isSame);

const isSame2 = ["Armando"] === ["Armando"];

console.log(isSame2);

//creado copia de una lista

const listaCopia = [...lista];

const isSame3 = lista === listaCopia;

//console.log(isSame3);
