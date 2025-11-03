
/*  The first three digits in each number are operator codes
 make print to console like this
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/

// input
let st = `063-111-1234
(333) 456-8768
4446575547`;

// normalize each line to digits, then format as "(XXX) YYY ZZZZ"
st
  .split(/\r?\n/)                       // split lines
  .map(line => line.replace(/\D/g, '')) // remove non-digits
  .filter(d => d.length === 10)         // keep only 10-digit numbers
  .map(d => `(${d.slice(0,3)}) ${d.slice(3,6)} ${d.slice(6)}`)
  .forEach(s => console.log(s));


