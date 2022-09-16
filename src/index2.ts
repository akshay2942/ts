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
function additionN (x:number | string,y:number |string){
    if(typeof x== 'number' && typeof y=="number"){
        console.log(x+y)
    }
    else{
        console.log(Number(x)+Number(y))
    }
}
additionN(12,52)
additionN(2,2)
additionN('2','2')

//----------------------UNION-------------

type Result = number | string | boolean
let a:Result = "10"
let b:Result = true


type lastName ='dani'| 'deshmukh'
type firstName ='chinmay'| 'chaitnya'
let info5:{
    firstName:firstName;
    lastName:lastName;
}={
    firstName:'chinmay',
    lastName:'dani'
}
console.log(info5)

// programe 4

type parent ={mother:string,father:string}
let info6:parent ={
    mother:'santoshi',
    father:'anil'
}
console.log(info6)

//program 5

enum Roles{
    'read_only'=1,
    'read_and_write',
    'admin',
    'customer'
}

enum account{

    'saving'=1,
    'current'
}

if(Roles.read_only){
    console.log('reading only')
}
if(Roles.read_and_write){
    console.log('read and write')
}
if(Roles.admin){
    console.log('admin')
}
if(account.saving){
    console.log('saving')
}
if(account.current){
    console.log('current')
}
