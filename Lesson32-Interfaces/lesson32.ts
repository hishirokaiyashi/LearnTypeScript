interface IPerson {
    readonly firstName: string; //  không thể modified ví dụ 
    lastName?: string // optional parameter
    address: string
}
function getFullname(person: IPerson) {
    // person.firstName = "giao" sẽ lỗi vì không đổi giá trị đc
    return `${person.firstName} ${person.lastName}`;
}
// function getFullname(
//     person: { firstName: string; lastName: string }) {
//     return `${person.firstName} ${person.lastName}`;
// }
// let person = {
//     firstName: "Giao",
//     lastName: "Ngoc",
// };
// console.log(getFullname(person)); //Giao Ngoc

