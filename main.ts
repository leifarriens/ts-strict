function main() {
  console.log("hello");

  doSomething();
}

async function doSomething(input: number[]) {
  input[3].toFixed(1);

  return input[0];
}
