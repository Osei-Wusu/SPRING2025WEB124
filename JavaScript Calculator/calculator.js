//Author: Dominic Appiah
//Class: WEB  124 
//Description: Final Project JavaScript  Calculator
function doAddition(num) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${num} + ${i} = ${num + i}<br>`;
    }
    document.getElementById('addition').innerHTML = result;
}

function doSubtraction(num) {
    let result = '';
    let i = 1;
    while (i <= 10) {
        result += `${num} - ${i} = ${num - i}<br>`;
        i++;
    }
    document.getElementById('subtraction').innerHTML = result;
}

function doMultiplication(num) {
    let result = '';
    let i = 1;
    do {
        result += `${num} × ${i} = ${num * i}<br>`;
        i++;
    } while (i <= 10);
    document.getElementById('multiplication').innerHTML = result;
}

function doDivision(num) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${num} ÷ ${i} = ${(num / i).toFixed(2)}<br>`;
    }
    document.getElementById('division').innerHTML = result;
}

function runAll() {
    const num = Number(document.getElementById('num').value);
    if (isNaN(num)) {
        alert('Please enter a valid number!');
        return;
    }
    doAddition(num);
    doSubtraction(num);
    doMultiplication(num);
    doDivision(num);
}
document.getElementById('calculateBtn').addEventListener('click', runAll);