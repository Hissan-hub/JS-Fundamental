function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = process.argv[2];

if (arg === undefined) {
  console.log("No argument");
} else {
  const num = Number(arg);
  console.log(factorial(num));
}

