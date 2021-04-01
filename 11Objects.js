//Son parecidos a los arrays pero se accede a los datos con propiedades y no solo con indices

const usuario = {
  edad: 22,
  nombre: "Armando",
  hobbies: ["Programar", "Dibujar", "Jugar videojuegos"],
  gustos: {
    color: "Azul",
    comida: "Hotcakes",
  },
  1: "Valor con indice",
  "mis amigos": ["Eduardo", "Aldo"],
  funcion: (numero) => numero,
};

console.log(usuario.edad);
console.log(usuario.nombre);
console.log(usuario.hobbies);
console.log(usuario.gustos);
console.log(usuario.gustos.color);
console.log(usuario[1]);
console.log(usuario["mis amigos"]);
console.log(usuario.funcion(100));

//explicando console.log()

console.log(typeof console);

//console es un objeto al que se puede acceder desde cualquier parte

console.log(console.log);

//console.log es una función dentro de ese objeto

const objeto = {};

const isSame = objeto === objeto;

//console.log(isSame);

const isSame2 = {} === {};

//console.log(isSame2);

//creado copia de una lista

const objetoCopia = { ...objeto };

const isSame3 = objeto === objetoCopia;

//console.log(isSame3);
