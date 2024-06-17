let user: object;
// user="Saikat"; Type 'string' is not assignable to type 'object'
// user=10; Type 'number' is not assignable to type 'object'
user = { name: "Saikat", id: 1 };
user = [{ name: "Saikat", id: 1 }, { name: "Shadhin", id: 2 }]
console.log(user);


let user1: { userName: string, userId: number, description?: string }
user1 = {
    userName: "Saikat",
    userId: 1
}
// user1 = {
//     Type '{}' is missing the following properties from type '{ userName: string; userId: number; }': userName, userId
// }

// user1 = {
//     userName: "Saikat",
//     Property 'userId' is missing in type '{ userName: string; }' but required in type '{ userName: string; userId: number; }'
// }

// user1 = {
//     userName: 1, Type 'number' is not assignable to type 'string'
//      userId: "Saikat" Type 'string' is not assignable to type 'number'
// }

let user2: { userName: string, userId: number, description?: any }
user2 = {
    userName: "Saikat",
    userId: 1,
    description: "lorem"
}