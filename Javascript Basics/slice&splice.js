const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 4); // Slice elements from index 1 to 3 (exclusive)
console.log(slicedArray); // Output: [2, 3, 4]

// Splice elements into the slicedArray
slicedArray.splice(1, 0, 'a', 'b'); // Insert 'a' and 'b' starting at index 1
console.log(slicedArray); // Output: [2, 'a', 'b', 3, 4]

// const array = [1, 2, 3, 4, 5];
// array.splice(2, 0, 'a', 'b'); // Starts at index 2, removes 0 elements, and adds 'a' and 'b'
// console.log(array); // Output: [1, 2, 'a', 'b', 3, 4, 5]


// Chai or code
// Original Array
const myArr = [0,1,2,3,4,5];
console.log("A", myArr);
// slice
const mynewArr1 = myArr.slice(1,3)
console.log(mynewArr1)
console.log("B", myArr)
// splice
const mynewArr2 = myArr.splice(1,3)
console.log(mynewArr2)
console.log("B", myArr)

// in splice it affects the original array and ...it manipulate the original array