class User {
    userName: string;
    userAge: number;
    constructor(name: string, age: number) {
        this.userName = name;
        this.userAge = age;
    }
}

let userInfo = new User("Saikat", 23)
console.log(userInfo);
console.log(userInfo.userName, userInfo.userAge);

class Student extends User {
    studentId: string | number;
    constructor(userName: string, userAge: number, id: number | string) {
        super(userName, userAge);
        this.studentId = id;
    }
}

let student1 = new Student("Saikat", 23, 10)
console.log(student1);