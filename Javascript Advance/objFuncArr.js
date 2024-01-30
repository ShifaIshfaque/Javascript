//Array

const arr = [1, 2, 3, 4, 5]
const arr1 = ["hi", "shifa", "how", "are", "you"]

//const newArr = [...arr,...arr1];//Two ways to concat strings
const newArrayone = arr.concat(arr1);
//console.log(newArrayone)



//function

// function calculateCartPrice(  num1, num2, num3){
//     return num1, num2, num3
// }
// console.log(calculateCartPrice(200,800,700))

function calculateCartPrice(...num1){
    return num1
   
}
console.log(calculateCartPrice(200, 400, 500, 2000))