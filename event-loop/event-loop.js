const fs = require("fs");
const https = require("https");
const a = 10;

setImmediate(() => console.log("set immediate A"));

setTimeout(() => {
  console.log("timer completed A");
}, 0);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  Promise.resolve("promise").then(() => console.log("promise inside file read C"));
  process.nextTick(() => {
    console.log("next tick inside file read D");
  });
  setImmediate(() => console.log("set immediate inside file read B"));

  setTimeout(() => {
    console.log("timer completed inside file read B");
  }, 0);
  console.log("file read is completed A");
});

https.get("https://api.github.com/users/vikasvicky372",(res) => {
    console.log("api is called A");
})

Promise.resolve("promise").then(() => console.log("outer promise A"));

process.nextTick(() => {
  process.nextTick(() => {
    Promise.resolve("inner promise").then(() => {
      console.log("inner promise B");
      process.nextTick(() => {
        console.log("next tick inside promise C");
      });
    });
    console.log("inner Tick B");
  });
  console.log("next tick A");
});

function print() {
    console.log("a = "+a);
}

print();

console.log("last line");
