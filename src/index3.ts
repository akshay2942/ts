let x1:number =10;
//program 1

function addition1(x:number,y:number){
    console.log(x+y)
}
addition1(2,4)

//programe 2

function additionM(x,y){
    if(typeof x == 'number' && typeof y=="number"){
        console.log(x+y)
    }else{
        console.log('please enter correct input')
    }
}
additionM('10','20')
additionM(5,6)



//program 
function sub(x:number,y:number,result:true,message:string){
    if(result){
        console.log(message)
        console.log(x-y)
    }
}
sub(5,3,true,'substraction is done !!')


//program 

function multiplication(x:number,y:number):void{ //void is empty deta type no need for return keyword
    console.log(x*y)
}
multiplication(5,9)

// programe
// without void and use other data types we need to specify return keyword
function mul(x:number,y:number):number{ 
    console.log(x*y)
    return x*y
}
let q1=mul(7,5)


//program
//array 
let mark:number[]=[11,22,33,55]
let marks:number[]=[55,22,55,88]
let marksc:string[]=['akshay','chinmay','amol','arjun']


//Tuple ===> array of fixed length and specific data types


//program


let role:[number,string]=[1,'admin']
role.push(52)
console.log(role)


//object

//program 

let infoz:object={
firstName:'akshay',
lastName:'kshirsagar'
}
console.log(infoz)

let infoP:{
    firstName:string,
    lastName:string
}={
    firstName:'akshay',
    lastName:'kshirsagar'
}
console.log(infoP)

//type || 
type person ={
    fName:string,
    lName:string,
    age:number,
    skill:string[]
}
let detail:person={
fName:'akshay',
lName:'kshirsagar',
age:52,
skill:['javascript','cypress']
}

console.log(detail.skill)
console.log(detail.skill[0])

//union  program

let bn:number |string|true =45
function addtionbnm(x:number|string,y:number|string){
    if(typeof x == 'number' && typeof y =='number'){
        console.log(x+y)
    }else(
        console.log(Number(x)+Number(y))
    )
}

addtionbnm(50,50)
addtionbnm('5','25')












