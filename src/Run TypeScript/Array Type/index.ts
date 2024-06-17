let names = ["Saikat", "Shadhin", "Sumon"]
names = ["Saikat", "Shadhin", "Sumon", "Siyam"]
// names = ["Saikat", "Shadhin", 10]; Type 'number' is not assignable to type 'string'
// names = ["Saikat", "Shadhin", true]; Type 'boolean' is not assignable to type 'string'


let userNames: string[]; // let userNames:Array<string>
userNames = ["Saikat", "Shadhin", "Sumon", "Siyam"];
// userNames= ["Saikat", "Shadhin", "Sumon", 10]; Type 'number' is not assignable to type 'string'
// userNames= ["Saikat", "Shadhin", "Sumon", true]; Type 'boolean' is not assignable to type 'string'


let multipleType: (string | number)[];
multipleType = ["Saikat", "Shadhin", "Sumon", 10];
// multipleType=["Saikat", "Shadhin", "Sumon", true]; Type 'boolean' is not assignable to type 'string | number'


// ---------------------------- Tupple Type -------------------------------


let tuppleArray: [string, number]

tuppleArray = ["Saikat", 10];
// tuppleArray = ["Saikat"]; Type '[string]' is not assignable to type '[string, number]'.Source has 1 element(s) but target requires 2
// tuppleArray = [10]; Type 'number' is not assignable to type 'string'