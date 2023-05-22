// class Person {
//   ssn;
//   firstName;
//   lastName;
//   constructor(ssn, firstName, lastName) {
//     this.ssn = ssn;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// } // kiểu oop

class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let Giao = new Person("123", "Ngoc", "Giao");

console.log(">>Check Giao ", Giao); // >>Check Giao: Person {ssn:"123", firstName:"Ngoc", lastName:"Giao"}
console.log(Giao.getFullName()) // Ngoc Giao