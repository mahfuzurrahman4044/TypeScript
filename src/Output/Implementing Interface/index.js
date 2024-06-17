"use strict";
var UsersInfo = /** @class */ (function () {
    function UsersInfo(name, age) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.formatUser = function () {
            return "name: ".concat(_this.name, ", age: ").concat(_this.age, " ");
        };
    }
    return UsersInfo;
}());
var user5 = new UsersInfo("Saikat", 23);
console.log(user5);
console.log(user5.formatUser());
