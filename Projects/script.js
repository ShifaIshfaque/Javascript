const button = document.getElementById('changeColorButton');
const body = document.body;

button.addEventListener('click', function() {
    // Generate a random color
    const randomColor = getRandomColor();
    // Set the background color of the body
    body.style.backgroundColor = randomColor;
});

function getRandomColor() {
    // Generate a random number between 0 and 16777215
    const randomColorNumber = Math.floor(Math.random() * 16777215);
    // Convert the random number to its hexadecimal representation
    const hexColor = randomColorNumber.toString(16);
    // Prefix the hexadecimal color code with '#'
    return '#' + hexColor;
}
