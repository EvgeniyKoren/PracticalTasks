const calculatorData = {
    number1: '',
    operator: '',
    number2: '',
    result: ''
};

let activeField = null;

function saveData() {
    calculatorData.number1 = document.getElementById('number1').value;
    calculatorData.operator = document.getElementById('operator').value;
    calculatorData.number2 = document.getElementById('number2').value;
}

document.getElementById('number1').addEventListener('focus', () => activeField = 'number1');
document.getElementById('operator').addEventListener('focus', () => activeField = 'operator');
document.getElementById('number2').addEventListener('focus', () => activeField = 'number2');

document.getElementById('number1').addEventListener('blur', saveData);
document.getElementById('operator').addEventListener('blur', saveData);
document.getElementById('number2').addEventListener('blur', saveData);

function calculate() {
    const num1 = parseFloat(calculatorData.number1);
    const num2 = parseFloat(calculatorData.number2);
    const op = calculatorData.operator;

    if (isNaN(num1) || isNaN(num2) || !['+', '-', '*', '/'].includes(op)) {
        alert('Enter both numbers and the operation (+, -, *, /), please');
        return;
    }

    let result;
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            alert('Unknown operation: ' + op);
            return;
    }

    calculatorData.result = result;
    alert(`Result: ${result}`);
}

document.getElementById('calculateButton').addEventListener('click', calculate);

function handleKeyClick(event) {
    const key = event.target.textContent;

    if (activeField) {
        const activeElement = document.getElementById(activeField);

        if (!isNaN(key)) {
            activeElement.value += key;
        } else {
            if (activeField === 'operator') {
                activeElement.value = key;
            }
        }

        saveData();
    } else {
        alert('Be kind, select the input field before pressing on the keyboard.');
    }
}

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', handleKeyClick);
});

function cacheData() {
    localStorage.setItem('calculatorData', JSON.stringify(calculatorData));
    alert('Дані збережені в кеш.');
}

function showCache() {
    const cachedData = localStorage.getItem('calculatorData');
    if (cachedData) {
        console.log('Cached data:', JSON.parse(cachedData));
    } else {
        console.log('Empty cached...');
    }
}

document.getElementById('cacheButton').addEventListener('click', cacheData);
document.getElementById('showCacheButton').addEventListener('click', showCache);