let counter = 0;
const value = document.querySelector('#counter')
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

increaseButton.addEventListener('click', increase);
decreaseButton.addEventListener('click', decrease);
resetButton.addEventListener('click', reset)



function increase() {
    ++counter
    return value.textContent = counter;
}

function decrease() {
    --counter
    return value.textContent = counter;
}

function reset() {
    counter = counter - counter;
    return value.textContent = counter;
}