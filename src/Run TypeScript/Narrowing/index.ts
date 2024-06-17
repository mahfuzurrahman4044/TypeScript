const printTodos = (toDos: string[] | null) => {
    if (toDos) {
        toDos.map((toDo) => console.log(toDo))
    }
    else {
        console.log("No ToDos");
    }
}

printTodos(["Saikat", "Shadhin"])