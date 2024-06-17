let userName = "Mahfuzur Rahman";
userName = "Saikat";
// userName=20; Type 'number' is not assignable to type 'string'
// userName=true; Type 'boolean' is not assignable to type 'string'
console.log(userName);


let number = 20;
number = 10;
// number="20"; Type 'string' is not assignable to type 'number'
// number=true; Type 'boolean' is not assignable to type 'number'
console.log(number);


let isError = false;
isError = true;
// isError="true"; Type 'string' is not assignable to type 'boolean'
// isError=20; Type 'number' is not assignable to type 'boolean'
console.log(isError);


// ---------------------------- Union Type ----------------------------------


let userId: string | number
userId = "10"
userId = 10;
// userId=true; Type 'boolean' is not assignable to type 'string | number'


let handleId = (id: string | number) => {
    console.log(id);
}
handleId("10");
handleId(10);
// handleId(true); Argument of type 'boolean' is not assignable to parameter of type 'string | number'


// -------------------------------------------------------------------------


const addNumbers = (num1: number, num2: number) => {
    console.log(num1 + num2);
}
addNumbers(10, 20)
// addNumbers(10) Expected 2 arguments, but got 1
// addNumbers(10, "20") Argument of type 'string' is not assignable to parameter of type 'number'
// addNumbers(10, true) Argument of type 'boolean' is not assignable to parameter of type 'number'