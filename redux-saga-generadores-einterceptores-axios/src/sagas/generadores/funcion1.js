function* some() {
  yield 1;
  yield 2;
  return 6;
}

let s = some();
console.log(s.next());  
console.log(s.next());  
console.log(s.next());  
console.log(s.next());  
