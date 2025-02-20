// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "Jeetu",
  "full name": "Jeetu Pal",
  [mySym]: "mykey1",
  age: 22,
  location: "Meerut",
  email: "Jeetu@google.com",
  isLogged: false,
  lastLoginDays: ["Monday", "Saturday"]

};

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "chatgpt@gmail.com"
Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// ---------------------------------------------------------- //
 
// const tinder = new object() // singleton object hai ye.
const tinderUser = {} // Non - singleton object hai.
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false,

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jeetu",
            lastname: "Pal",
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2 }
// const obj3 = Object.assign({}, obj1 , obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "go2errle@gmail.com",
    },
    {

    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Jeetu"
}

// course.courseInstructor

const {courseInstructor: instructor } = course

console.log(instructor);


const navbar = ({company}) => {

}

navbar(company = "Jeetu")

// {
//     "name": "Jeetu",
//     "coursename": "js in hindi",
//     "price": "free",
// }

// [
//     {},
//     {},
//     {},
// ];