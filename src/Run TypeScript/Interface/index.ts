interface iUser {
    name: string,
    age: number,
    id: string | number
}

let users: iUser[] = []

let user3: iUser = {
    name: "Saikat",
    age: 23,
    id: 1
}

let user4: iUser = {
    name: "Shadhin",
    age: 23,
    id: 2
}

users.push(user3, user4)
console.log(users)