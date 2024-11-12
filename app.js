// const {calculateSum} = require("./calculate/sum")
// const {calculateMultiply} = require("./calculate/multiply")

const {calculateSum,calculateMultiply} = require("./calculate")
var name = "Vikas";

var a = 20;
var b = 10;

console.log(calculateSum(a,b));
console.log(calculateMultiply(a,b));

//console.log(name);
//console.log(a + b);

//like window object in browser
//console.log(global);

//this is not pointed to global unlike in browser case
// it will be empty object {}
//console.log(this);

//in 2020 openJs foundation came up with the keyword, 
//it'll be referred as global across all platofrms

//console.log(globalThis);


//it'll be same as global
console.log(globalThis === global)
