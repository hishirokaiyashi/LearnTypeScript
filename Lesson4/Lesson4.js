//perfect
const sum = (x, y) => {
  return x + y;
};
console.log(">>> Check sum: ", sum(5, 8));

//need to validate
const sum2 = (x, y) => {
  //validate: x,y are number???
  return x + y;
};
console.log(">>> Check sum2: ", sum("name", 10));
