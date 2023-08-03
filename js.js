// 8 kyu Up and down, the string grows
const STRANGE_STRING = "ß"

// 8 kyu Find Multiples of a Number
function findMultiples(integer, limit) {
  //your code here
  const arr = [];
  for(let i = integer; i <= limit; i += integer){
    arr.push(i);
  }
  return arr;
}

// 8 kyu MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase();
}
