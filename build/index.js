"use strict";
/** steps for installing typescript and initialize
 *
 *npm init -y   use default package.json file confrigration
 * npm install typescript --save-dev
 * npnpx tsc --init --rootDir src --outDir build
 * npx tsc
 *
 */
// program 1
function addition(x, y) {
    console.log(x + y);
}
addition(3, 4);
// program 2
function add(x, y, result, message) {
    if (result) {
        console.log(x + y);
        console.log(message);
        return x + y;
    }
    else {
        return 0;
    }
}
let sum = add(12, 23, true, "addition is done");
console.log(sum);
// Object
// program 3
let info = {
    firstName: "akshay",
    lastName: "kshirsagar",
    age: 25,
};
console.log(info);
// program 4
let info2 = {
    firstName: "akshay1",
    lastName: "kshirsagar1",
    age1: 25,
};
console.log(info2);
