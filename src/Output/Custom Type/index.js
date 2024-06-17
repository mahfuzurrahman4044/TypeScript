"use strict";
var userInfo1;
userInfo1 = { userName: "Saikat", userId: 10 };
var userInfo2;
userInfo2 = { userName: "Saikat", userId: 10 };
var getRequest;
getRequest = "GET";
getRequest = "POST";
var handleAddOrSub = function (e) {
    if (e === "Addition") {
        console.log(20 + 20);
    }
    else {
        console.log(20 - 10);
    }
};
handleAddOrSub("Addition");
