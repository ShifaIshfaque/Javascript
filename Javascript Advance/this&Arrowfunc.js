const user = {
    name: "Shifa",
    age: 22,

    welcomeMessage: function(){
        //console.log(this.name, "welcome to our new video")
       // console.log(this);
    }
}
//user.welcomeMessage()
// user.name = "Khubaib"
// user.welcomeMessage()

//console.log(this);

// function chai (){
//     let name = "Adan"
//     console.log(this.name);
// }
// chai()


// const chai = function(){
//     let name = "Adan"
//     console.log(this.name);
// }
// chai()

//Arrow func

// const chai = () => {
//     let name = "Adan"
//     console.log(this.name);
// }
// chai()


const addtwo = (num1, num2) =>{   //with curly braces you must use return keyword
    return num1+num2
}

const addtwo = (num1, num2) => num1+num2
const addtwo = (num1, num2) => (num1+num2) //in paranthesis you don't use return

console.log(addtwo(3,8))