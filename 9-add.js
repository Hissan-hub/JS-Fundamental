function add(a, b) {
  return a + b;
}

const [, , arg1, arg2] = process.argv;
const num1 = parseInt(arg1, 10);
const num2 = parseInt(arg2, 10);

console.log(add(num1, num2));