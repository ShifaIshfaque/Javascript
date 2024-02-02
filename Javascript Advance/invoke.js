// function fun(...numbers){
//     console.log(...numbers);
//     }
//     fun(3,5,1,9,7,8);


// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`Database Connection`);
})();


((name) =>{
    console.log(`Database Connected to ${name}`);
})('shifa')



//CALL STACK

function greet(name) {
    console.log("Hello, " + name + "!");
    greet();
}

function welcome() {
    console.log("Welcome to the call stack example!");
    welcome();
    
}

function main() {
    console.log("Shifffa!");
    // welcome();
    // greet("John");
}

main();

