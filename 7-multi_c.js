const [, , arg] = process.argv;
const times = parseInt(arg, 10);

if (!arg || isNaN(times) || times <= 0) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  while (i < times) {
    console.log('C is fun');
    i++;
  }
}