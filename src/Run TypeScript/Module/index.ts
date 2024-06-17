// import { studentName,studentAge } from "./student"
// import { studentName as name, studentAge as age } from "./student";
import * as studentInfo from "./student"

const handleStudentInfo = () => {
    // console.log(studentName,studentAge);
    // console.log(name, age);
    console.log(studentInfo.studentName, studentInfo.studentAge);
}

handleStudentInfo()