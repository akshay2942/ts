"use strict";
let x1 = 10;
//program 1
function addition1(x, y) {
    console.log(x + y);
}
addition1(2, 4);
//programe 2
function additionM(x, y) {
    if (typeof x == 'number' && typeof y == "number") {
        console.log(x + y);
    }
    else {
        console.log('please enter correct input');
    }
}
additionM('10', '20');
additionM(5, 6);
//program 
function sub(x, y, result, message) {
    if (result) {
        console.log(message);
        console.log(x - y);
    }
}
sub(5, 3, true, 'substraction is done !!');
//program 
function multiplication(x, y) {
    console.log(x * y);
}
multiplication(5, 9);
// programe
// without void and use other data types we need to specify return keyword
function mul(x, y) {
    console.log(x * y);
    return x * y;
}
let q1 = mul(7, 5);
//program
//array 
let mark = [11, 22, 33, 55];
let marks = [55, 22, 55, 88];
let marksc = ['akshay', 'chinmay', 'amol', 'arjun'];
//Tuple ===> array of fixed length and specific data types
//program
let role = [1, 'admin'];
role.push(52);
console.log(role);
//object
//program 
let infoz = {
    firstName: 'akshay',
    lastName: 'kshirsagar'
};
console.log(infoz);
let infoP = {
    firstName: 'akshay',
    lastName: 'kshirsagar'
};
console.log(infoP);
let detail = {
    fName: 'akshay',
    lName: 'kshirsagar',
    age: 52,
    skill: ['javascript', 'cypress']
};
console.log(detail.skill);
console.log(detail.skill[0]);
//union  program
let bn = 45;
function addtionbnm(x, y) {
    if (typeof x == 'number' && typeof y == 'number') {
        console.log(x + y);
    }
    else
        (console.log(Number(x) + Number(y)));
}
addtionbnm(50, 50);
addtionbnm('5', '25');
