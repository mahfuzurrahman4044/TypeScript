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
var UsersClass = /** @class */ (function () {
    function UsersClass(name, age) {
        this.userName = name;
        this.userAge = age;
    }
    return UsersClass;
}());
var userInfo3 = new UsersClass("Saikat", 23);
console.log(userInfo3);
var StudentInfo = /** @class */ (function (_super) {
    __extends(StudentInfo, _super);
    function StudentInfo(userName, userAge, id) {
        var _this = _super.call(this, userName, userAge) || this;
        _this.studentId = id;
        return _this;
    }
    StudentInfo.prototype.setStudentId = function (id) {
        this.studentId = id;
    };
    StudentInfo.prototype.getStudentId = function () {
        return this.studentId;
    };
    return StudentInfo;
}(UsersClass));
var student4 = new StudentInfo("Saikat", 23, 10);
console.log(student4);
console.log(student4.getStudentId());
student4.setStudentId(20);
console.log(student4.getStudentId());
