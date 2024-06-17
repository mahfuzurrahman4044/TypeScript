type userInfo = { userName: string, userId: number, description?: string }
let userInfo1: userInfo;
userInfo1 = { userName: "Saikat", userId: 10 }

let userInfo2: userInfo;
userInfo2 = { userName: "Saikat", userId: 10 }


type requestType = "POST" | "GET"
let getRequest: requestType;
getRequest = "GET"
getRequest = "POST"
// getRequest = "X"; Type '"X"' is not assignable to type 'requestType'


type isAddOrSub = "Addition" | "Subtraction"
const handleAddOrSub = (e: isAddOrSub) => {
    if (e === "Addition") {
        console.log(20 + 20);
    }
    else {
        console.log(20 - 10);
    }
}
handleAddOrSub("Addition")