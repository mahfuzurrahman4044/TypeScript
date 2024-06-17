"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.userName = name;
        this.userAge = age;
    }
    return User;
}());
var userInfo = new User("Saikat", 23);
console.log(userInfo);
console.log(userInfo.userName, userInfo.userAge);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, userAge, id) {
        var _this = _super.call(this, userName, userAge) || this;
        _this.studentId = id;
        return _this;
    }
    return Student;
}(User));
var student1 = new Student("Saikat", 23, 10);
console.log(student1);
