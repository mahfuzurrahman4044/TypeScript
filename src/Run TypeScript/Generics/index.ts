const handleGenirics1 = <X>(name: X) => {
    console.log(name);
}
handleGenirics1("Saikat")
handleGenirics1(23)
handleGenirics1(true)

const handleGenirics2 = <X, Y>(name: X, age: Y) => {
    console.log(name, age);
}
handleGenirics2("Saikat", 23)
handleGenirics2(23, "Saikat")
handleGenirics2(true, false)