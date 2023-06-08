async function * request() {
  let i = 1;
  let url = 'https://jsonplaceholder.typicode.com/todos/';
  while (true) {
    let res = await fetch(url+i)
    let json = await res.json();
    yield json;
    i++;
  }
}

let req = request();

async function get() {
  console.log(await req.next());
}

await get();
