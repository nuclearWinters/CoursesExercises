const listaNumeros = [20, 10, 8, 13].map((number) => number * 2);
//console.log(listaNumeros);

for (const numero of listaNumeros) {
  console.log(`Numero: ${numero}`);
}

const map = (funcion) => {
  const nuevaLista = [];
  for (const idx in lista) {
    const num = lista[idx];
    const nuevoValor = funcion(num, idx);
    nuevaLista.push(nuevoValor);
  }
  return nuevaLista;
};

const lista = [1, 2, 3];

const listaPorDos = map((number) => number * 2);

console.log(listaPorDos);
console.log(lista);
