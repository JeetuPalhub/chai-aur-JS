// array

const myArr = [0, 1, 2, 3, 4, 5, true, "Jeetu"]
const myHeroes = ["shaktiman", "naag", "naagraj"]


const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[3]);


// Array methods 

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(0)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(newArr)
console.log(myArr);

// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ",myn1);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// splice original array ko manipulate krta hai .


const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Jeetu"))
console.log(Array.from("Jeetu"));
console.log(Array.from({name: "Jeetu"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));