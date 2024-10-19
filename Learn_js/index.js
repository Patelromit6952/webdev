// // array

// const myarr = [0,1,2,3,4,5]
// const myheros = ["romit","patel"]

// const myarr2 = new Array(1,2,3,4)

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

const chai =  () => {

}