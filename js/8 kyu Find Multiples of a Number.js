function findMultiples(integer, limit) {
  //your code here
  const arr = [];
  for(let i = integer; i <= limit; i += integer){
    arr.push(i);
  }
  return arr;
}
