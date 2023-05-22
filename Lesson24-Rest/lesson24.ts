/* REST 
- Với typeScript, Rest parameters có các rule sau:
- 1 function chỉ có 1 tham số duy nhất rest parameters
- Phải là tham số cuối cùng trong danh sách tham số
- Phải sử dụng với array type
*/
function getTotal(...numers: number[]): number {
  let total = 0;
  numers.forEach((num) => total + num);
  //[10,20].forEach((num)=> total += num));
  return total;
}
console.log(getTotal()); //0
console.log(getTotal(10, 20)); //30
console.log(getTotal(10, 20, 30)); // 60

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
//'a' gets value [10,20,30,40]
const a = multiply(10,1,2,3,4);

function Greet(greeting:string,...names:string[]){
    return greeting + "" + names.join(",") + "!";
}
Greet("Hello","Steve","Bill") // return "Hello, Steve, Bill"
Greet("Hello")// return "Hello !""