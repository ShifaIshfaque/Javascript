//Table of 1 - 10

// for (let i = 0; i < 20; i++) {
//     console.log(`outer Loop is ${i}`)
//     for (let j = 0; j < 10; j++) {
//         console.log(i+ "*" +j + "=" + i*j )
        
//     }
    
// }


//continue and break

// for (let x = 0; x < 10; x++) {
    
//     if (x == 5) {
//         console.log("I love 5")
//        continue
//     }
//     console.log(x)
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 8) {
       // console.log("8 is best number");
    }
   // console.log(element);
    
}


let count = 0; // Initialization

while (count < 5) { // Condition Checking
   // console.log("Count is " + count); // Executes as long as count is less than 5
    count++; // Iteration - incrementing count by 1
}

//console.log("Loop ended"); // Executed after the loop


// array

let myArray = [1,2,3,4,5]
let index = 0

while(index < 3){
    console.log(myArray[index]);
    index = index+1

}