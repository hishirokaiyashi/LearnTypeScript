let skill: (string | number)[] = ["Giao", 22];
skill.push("coding");
skill.push(22);
//Tuple: dataType/size/order
let skill2: [string, number] = ["Giao", 22];
skill2.push("coding");
skill2.push(22);
let skill3: [boolean, string, number];
skill3 = [true, "Giao", 22];

// OPTIONAL TUTPLE
let skill4: [boolean, string, number?]; // tham số cuối k có cũng đc

skill4 = [true, "string"]; // bỏ tham số cuối nè
