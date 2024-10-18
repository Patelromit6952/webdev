// array

const myarr = [0,1,2,3,4,5]
const myheros = ["romit","patel"]

const myarr2 = new Array(1,2,3,4)

// myarr2.shift()                   // left side shift left most element is discarded 
// console.log(myarr2.includes(1))  // return true if element is there otherwise return false
// console.log(myarr2.indexOf(1))  // return index of element in arrray if exist otherwise return -1
// console.log(myarr2)


//slice  , splice

console.log("A",myarr2)
 const myn1 = myarr2.slice(1,3)
 console.log("B",myn1)
 const myn2 = myarr2.splice(1,3)
 console.log("c",myn2)