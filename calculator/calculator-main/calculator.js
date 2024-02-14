const displayButtons = document.getElementsByClassName('displayed');
const operationButtons = document.getElementsByClassName('button-on-right');
const screen = document.getElementById('screen');

for(const btn of displayButtons) {
    btn.onclick = () => {screen.textContent += btn.textContent;};
}

function calculateExpression(expression) {
    console.log("to be added");
  }

document.getElementById('equal').onclick = () => {screen.textContent += "=" + calculateExpression(screen.textContent);};
