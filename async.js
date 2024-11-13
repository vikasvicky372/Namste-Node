const https = require("https");
const fs = require("fs");
const { setTimeout } = require("timers");
const crypto = require("crypto")
const a = 987654321;
const b = 987654321;
console.log("hello world");

fs.readFileSync("./file.txt","utf-8");
console.log("file is read");

crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("first key is generated");

crypto.pbkdf2("password","salt",5000000,50,"sha512", (err, key)=> {
    console.log("second key is generated: ", key);
});

setTimeout(()=>{
    console.log("call me right now");
},100);

https.get("https://api.github.com/users/vikasvicky372",(res) => {
    console.log("api is called");
});

setTimeout(() => {
    console.log("call me after 5 seconds")
}, 5000);

fs.readFile("./file.txt","utf-8",(err,data) => {
    console.log("file data: ", data);
})

function multi (a,b){
    return a*b;
}

const c = multi(a,b);

console.log("multi result: ",c);