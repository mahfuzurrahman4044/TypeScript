let userInfo4: () => void;
let userInfo5: (name: string) => void

userInfo4 = () => {
    console.log("Saikat is 23 years old.");
}
userInfo4()

userInfo5 = (name) => {
    console.log(`${name} is 23 years old.`);
}
userInfo5("Saikat")
// userInfo5(); Expected 1 arguments, but got 0.