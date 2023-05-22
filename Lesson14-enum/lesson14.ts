enum API_STATUS {
    PENDDING, FULLFILLED, REJECTED // PROMISE
}
//Trong thực tế - STRING ENUM

enum API_STATUS2 {
    PENDING = "PENDING",
    FULLFILLED = "FULLFILLED",
    REJECTED="REJECTED"
}
//constant
//java

let a1 = API_STATUS.PENDDING; // 0
let a2 = API_STATUS.FULLFILLED; // 1

let a3 = API_STATUS2.PENDING; // "PENDING"
let a4 = API_STATUS2.FULLFILLED; // "FULLFILLED"

console.log(">> a1 = ", a1, " a2 = ", a2);
// a1 = 0 , a2 = 1 (index của mảng)

//frontend: systax (mang ý nghĩa cú pháp)