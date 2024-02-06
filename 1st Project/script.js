const button = document.getElementById("changeColorButton");
const body = document.body;

button.addEventListener('click' ,function(){
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
});

function getRandomColor(){
    const randomColorNumber = Math.floor(Math.random()* 16777215);
    const hexColor = randomColorNumber.toString(16);
    return '#' + hexColor;
}