interface iUsersInfo {
    formatUser: () => string
}

class UsersInfo implements iUsersInfo {
    constructor(private name: string, private age: number) { }

    formatUser = () => {
        return `name: ${this.name}, age: ${this.age} `
    };
}

let user5 = new UsersInfo("Saikat", 23)
console.log(user5);
console.log(user5.formatUser());
