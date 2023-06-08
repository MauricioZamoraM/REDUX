function * numbers() {
  const array = [1, 2, 3];
  for (let i = 0; i < array.length; i++) {
    yield array[i]; //Detiene la ejecucion y devuelve el valor;
  }
}

let num = numbers();
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());



