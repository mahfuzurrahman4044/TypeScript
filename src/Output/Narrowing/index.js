"use strict";
var printTodos = function (toDos) {
    if (toDos) {
        toDos.map(function (toDo) { return console.log(toDo); });
    }
    else {
        console.log("No ToDos");
    }
};
printTodos(["Saikat", "Shadhin"]);
