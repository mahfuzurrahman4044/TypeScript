const form = document.querySelector("form") as HTMLFormElement
// console.log(form)

const usersName = document.querySelector("#name")
// console.log(usersName);

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const data = {
        usersName: usersName
    }
    console.log(data);
})