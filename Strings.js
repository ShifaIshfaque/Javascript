// Use backticks (string InterPolation you can inject any variable here)

const name = "Shifa"
const repoCount = 21

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Arain Shifa')

console.log(gameName[3]);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 ,4)
console.log(newString);

const anotherString = gameName.slice(-8 ,-4)
console.log(anotherString);

const newStringOne = "     Shifuu     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mail.google.com/mail/u/0/#inbox"

 console.log(url.replace('mail', 'shifa'))
console.log(url.includes('com'))


const arrOne = "Shifa-Ishfaque-Arain"
console.log(arrOne.split('-'));


let text = 'The rain is in SPAIN stay mainly in the town';

console.log(text.search('ain'))//5
console.log(text.search('/ain/'))//5
console.log(text.search('/AIN/'))//14
console.log(text.search('/AIN/i'))//5 converts to lowerCase
console.log(text.search('/w/'))//-1 means not found
console.log(text.search('ain'))//5





























