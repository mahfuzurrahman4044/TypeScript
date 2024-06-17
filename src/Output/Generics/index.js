"use strict";
var handleGenirics1 = function (name) {
    console.log(name);
};
handleGenirics1("Saikat");
handleGenirics1(23);
handleGenirics1(true);
var handleGenirics2 = function (name, age) {
    console.log(name, age);
};
handleGenirics2("Saikat", 23);
handleGenirics2(23, "Saikat");
handleGenirics2(true, false);
