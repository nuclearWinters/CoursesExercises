// 1. Demonstrate all the different ways to iterate the below array
const myArray = [1, 2, 3, 4, 5, 6];

myArray.map((number) => number + 1);
myArray.filter((number) => number === 1);
myArray.find((number) => number === 1);
myArray.findIndex((number) => number === 1);
myArray.reduce((prev, curr) => {
  return prev + curr;
}, 0);
myArray.sort((a, b) => a + b);

for (const number in myArray) {
  console.log(number);
}

myArray.forEach((number) => number);

Object.values(myArray);

// 2. Demonstrate all the different ways to iterate the keys of
// the below object

const myObject = { x: 1, y: "hi" };

for (const val in myObject) {
  console.log(val);
}

const keysArray = Object.keys(myObject);

console.log(keysArray);

// 3. Repeat #2, demonstrate different ways to iterate
// the values of "myObject"

for (const val in myObject) {
  console.log(myObject[val]);
}

const valuesArray = Object.values(myObject);

console.log(valuesArray);
