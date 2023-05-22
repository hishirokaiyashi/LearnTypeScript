abstract class Employee31 {
    constructor (private firstName: string, private lastName:string) {
       
    }
    abstract getSalary() : number; // abstract method

    get fullName() : string {
        return `${this.firstName} ${this.lastName}`;
    }

    compenstationStatement():string{
        return `${this.firstName} makes ${this.getSalary()} a month.`
    }
}
// const giao = new Employee31("Giao","SinhVien") khonog tao object tu abstract dc
class FullTimeEmployee extends Employee31 {
    constructor(firstName:string, lastName:string, private salary:number) {
        super(firstName, lastName)
    }

    //Cần viết method này, vì nó được khai báo abstract ở trên
    getSalary():number{
        return this.salary
    }
}

class ConStractor extends Employee31 {
    constructor(firstName:string, lastName:string,private rate:number,private hours:number){
        super(firstName,lastName)
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}

const test1 = new FullTimeEmployee("Ngoc","giao",200000)