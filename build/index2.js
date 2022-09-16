"use strict";
// let marks:number[]= [11,21,888] 
// let names:string[]=['akshay','sarola','chinmay','poorva','ram','seeta']
// let info4:{
//     firstName:string;
//     lastName:string;
//     skills:[number,string]
// }={
//     firstName:"akshay",
//     lastName:'kshirsagar',
//     skills:[22,'python']
// }
// info4.skills[0]=1
// info4.skills.push('javascript')
// // let prop:[number,number]=[155,52,55]
// console.log(info4)
///////////////////////////////////////////////
function additionN(x, y) {
    if (typeof x == 'number' && typeof y == "number") {
        console.log(x + y);
    }
    else {
        console.log(Number(x) + Number(y));
    }
}
additionN(12, 52);
additionN(2, 2);
additionN('2', '2');
let a = "10";
let b = true;
let info5 = {
    firstName: 'chinmay',
    lastName: 'dani'
};
console.log(info5);
let info6 = {
    mother: 'santoshi',
    father: 'anil'
};
console.log(info6);
//program 5
var Roles;
(function (Roles) {
    Roles[Roles["read_only"] = 1] = "read_only";
    Roles[Roles["read_and_write"] = 2] = "read_and_write";
    Roles[Roles["admin"] = 3] = "admin";
    Roles[Roles["customer"] = 4] = "customer";
})(Roles || (Roles = {}));
var account;
(function (account) {
    account[account["saving"] = 1] = "saving";
    account[account["current"] = 2] = "current";
})(account || (account = {}));
if (Roles.read_only) {
    console.log('reading only');
}
if (Roles.read_and_write) {
    console.log('read and write');
}
if (Roles.admin) {
    console.log('admin');
}
if (account.saving) {
    console.log('saving');
}
if (account.current) {
    console.log('current');
}
