function sayMyName(){
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
    console.log("U");
}

sayMyName()
// function ka referrence -> sayMyName
// function ka execution -> ()

function addTwoNumber(number1, number2){ // parameter
// let result = number1 + number2
// return result
return number1 + number2
}
const result = addTwoNumber(3, 5) // argument 

// console.log(result);

function loginUserMessage(username = "sam"){
if(!username){
    // if(username === undefined){
        console.log("Please enter a username");
        return 
    }
return `${username} just logged in` // backticks 
}

// console.log(loginUserMessage("Jeetu"))

function calculateCartPrice(val1, val2, ...num1){
return num1
}

console.log(calculateCartPrice(200, 400, 500, 20000))

const user = {
    username: "Jeetu",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return  getArray[1]
}

console.log(returnSecondValue(myNewArray));
