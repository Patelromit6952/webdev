// // array

// const myarr = [0,1,2,3,4,5]
// const myheros = ["romit","patel"]

// const myarr2 = new Array(1,2,3,4,5,6)

// myarr2.shift()                   // left side shift left most element is discarded 
// console.log(myarr2.includes(1))  // return true if element is there otherwise return false
// console.log(myarr2.indexOf(1))  // return index of element in arrray if exist otherwise return -1
// console.log(myarr2)


//slice  , splice

// console.log("A",myarr2)
//  const myn1 = myarr2.slice(1,3)
//  console.log("B",myn1)
//  const myn2 = myarr2.splice(1,3)
//  console.log("c",myn2)

//  const marvel_heros = ["thor","ironman","spiderman"]
//  const dc_heros = ["superman","flash","batman"]

//  marvel_heros.push(dc_heros)  // add array into array
// // const newarr = marvel_heros.concat(dc_heros) //concat return new array
// const all_heros = [...marvel_heros,...dc_heros]  // spread operator

// const newarr = [1,2,3,[4,5,6],7,[8,[9,10]]]
// const real_array = newarr.flat(Infinity)
// console.log(real_array)

// console.log(Array.isArray("romit"))
// console.log(Array.from("romit"))

// console.log(Array.from({name:"romit"}))

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3))


//object literals

// Object.create

// const mysym = Symbol("key1")
// const jsuser = {
//     name:"romit",
//     [mysym]:"mykey1",
//     age:18,
//     location:"patan",
//     gmail:"rkp@gmail.com",
//     IsloggedIn:true
// }

// console.log(jsuser.name)
// console.log(jsuser["gmail"])  
// // console.log( typeof jsuser[mysym])
// // Object.freeze(jsuser)    // lock the object


// jsuser.greeting = function(){
//     console.log("hello js user ")
//     console.log(`hello ${this.name}`)
// }
//  console.log(jsuser.greeting())

// const tinderuser = new Object()  //singleton object
// const tinderuser = {}  // non-singleton Object

//  tinderuser.id = "123abc"
//  tinderuser.name = "romit"
//  tinderuser.isLoggedIn = false
//  console.log(tinderuser)

//  const obj1 = {1:"a",2:"b"}
//  const obj2 = {3:"c",4:"d"}

//  const obj3 = Object.assign({},obj1,obj2)
//  console.log(obj3);
 

//  console.log("romit opatel");

 
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty('id'));

// const course = {
//     cousername : "js in hindi",
//     price : "999",
//     courseinstructor : "romit"
// }
// const {courseinstructor  : instructor} = course
// console.log(instructor);
// function addtwonum(num1,num2){
//     // console.log(num1+num2)
//     return num1+num2;
// }
// addtwonum(3,"a")
// const result = addtwonum(45,89)
// console.log(result);

// function calculateprice(...num1){     // ... rest operator retrun array 
//        return num1; 
// }
// console.log(calculateprice(222,456,489));


// const user = {
//     name:"romit",
//     price : 199
// }

// function handleObject (anyobject){
//     console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
// }

// handleObject(user)

// const user = {
//     username : "romit",
//     price  : 199,
//     welcomemsg : function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
    
//     }

// }

// user.username = "rk"
// user.welcomemsg()
// function chai (){
//     console.log(this);
    
// }
// chai()

// arrow function in javascript

// const add =  (num1,num2) =>  (num1+num2);
// const subtract = (num1,num2) => {
//     return num1-num2;
// }
// console.log(add(58,2));
// console.log(subtract(58,2));

// IIFE   immediately invoked function Expresstions    used for remo*ve pollution in global scope

// (function chai (){   // named IIFE
//     console.log("DB connected");
    
// })();

// ((name) => {      //   unnamed IIFE
//     console.log("DB connected two ${name}");
    
// })("romit");

// for (let i = 0; i < 10; i++) {
//     console.log(i+1);
    
// // }
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(j+i);
        
//     }
// }

// const arr = [4,5,6,8,9]
// for(const num of arr){
//     console.log(num);
    
// // }

// const map = new Map()
// map.set('IN',"INDIA")
// map.set('US',"USA")
// // console.log(map);
// for(const [key,value] of map){
//     console.log(key  + value);
    
// }


// const promiseone = new Promise(function(resolve,reject){
//     // do an async task
//     //db calls , cryptography,network
//     setTimeout(() => {
//         console.log("Async task is completed");
//         resolve()
        
//     }, 1000);
// })
// promiseone.then(function(){
//     console.log("promise is consumed");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task two");
//         resolve()
//     },1000)
// }).then( () => {
//     console.log("Async two resolved");
    
// })

// const promisethree = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve({username:"chai",email:"rk@gmail.com"})
//     },1000)
// })
// promisethree.then((user)=>{
//     console.log(user.email);
//     console.log(user.username);
        
// })

// const promisefour = new  Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error) {
//             resolve({username : "romit ", password:"123456"})
//         }
//         else{
//             reject("promise rejected")
//         }
//     },2000)
// })
// promisefour.then((user)=>{
//     // console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
    
// }).catch((error)=>{
//     console.log(error);
    
// }).finally(()=>{
//     console.log("finall worked");
    
// })


// const promisefive = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//                 let error = true
//                 if(!error) {
//                     resolve({username : "javascript ", password:"123456"})
//                 }
//                 else{
//                     reject("ERROR : JS WENT WRONG")
//                 }
//             },2000)
// })

// async function consumepromisefive() {
//     try {
//         const response =  await promisefive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// consumepromisefive()

// async function getallusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     }catch(error){
//         console.log("E: ",error);
//     }
// }

// getallusers()

// fetch('https://api.github.com/users/patelromit6952').then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data);  
// }).catch((error)=>{
//     console.log(error);
    
// }

// const user = {
//     username: "romit",
//     logincount  : 10 , 
//     signedin : true,
//     getuserdetails : function(){
//         console.log(`username: ${this.username}`);
//     },
// } 

// console.log(user.username);
// console.log(user.getuserdetails())

// function multiply(num){
//     return num*5;
// }
// multiply.power = 2
// console.log(multiply(5));
// console.log(multiply.power);
// console.log(multiply.prototype);

// function createuser(username,score){
//     this.username = username;
//     this.score = score;
// }

// createuser.prototype.printme = function(username){
//     console.log(`my name is : ${this.username}`);
// }
// createuser.prototype.value = function(score){
//     console.log(`price is : ${this.score}`);
// }
// const chai = new createuser("chai",25)
// const tea = new createuser("tea",250)

// chai.printme()
// chai.value()

// class user {
//     constructor (username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password = password;
//     }

//     encryptpassword(){
//         return `${this.password}abc`
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("romit","romit@gmail.com","123456")

// console.log(chai.changeusername());
// console.log(chai.encryptpassword());



