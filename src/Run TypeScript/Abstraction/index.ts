abstract class Users {
    userName: string;
    userAge: number;
    constructor(name: string, age: number) {
        this.userName = name;
        this.userAge = age;
    }
}

// let userInfo6 = new Users("Saikat", 23); Cannot create an instance of an abstract class

class Students extends Users {
    studentId: string | number;
    constructor(userName: string, userAge: number, id: number | string) {
        super(userName, userAge);
        this.studentId = id;
    }
}

let student3 = new Students("Saikat", 23, 10)
console.log(student3);