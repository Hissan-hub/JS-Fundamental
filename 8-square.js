const [, , arg] = process.argv;
const size = parseInt(arg, 10);

if (!arg || isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  let i = 0;
  while (i < size) {
    console.log('X'.repeat(size));
    i++;
  }
}