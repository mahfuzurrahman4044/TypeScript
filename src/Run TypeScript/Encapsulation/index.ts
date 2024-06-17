class UsersClass {
    userName: string;
    protected userAge: number;
    constructor(name: string, age: number) {
        this.userName = name;
        this.userAge = age;
    }
}

let userInfo3 = new UsersClass("Saikat", 23)
console.log(userInfo3);

class StudentInfo extends UsersClass {
    private studentId: string | number;
    constructor(userName: string, userAge: number, id: number | string) {
        super(userName, userAge);
        this.studentId = id;
    }

    setStudentId(id: string | number) {
        this.studentId = id;
    }

    getStudentId() {
        return this.studentId;
    }
}

let student4 = new StudentInfo("Saikat", 23, 10)
console.log(student4);
console.log(student4.getStudentId());
student4.setStudentId(20)
console.log(student4.getStudentId());