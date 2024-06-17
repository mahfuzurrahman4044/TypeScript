"use strict";
var form = document.querySelector("form");
// console.log(form)
var usersName = document.querySelector("#name");
// console.log(usersName);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = {
        usersName: usersName
    };
    console.log(data);
});
