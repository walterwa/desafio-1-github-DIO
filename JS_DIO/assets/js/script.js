var currentNumberWrapper =  document.getElementById('currentNumber'); //pegando o número atual que está no HTML
var currentNumber = 0; //setando uma nova variável de incrmento com o número zero


function numberColorChange(){
    if (currentNumber <= -1) {
        document.getElementById('currentNumber').style.color = 'red';
    } else {
        document.getElementById('currentNumber').style.color = 'green';
    }
}

let incrementButton = document.querySelector('#adicionar');
incrementButton.addEventListener('click', () => {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    numberColorChange();
});


let decrementButton = document.querySelector('#subtrair');
decrementButton.addEventListener('click', () => {
    currentNumber -=1;
    currentNumberWrapper.innerHTML = currentNumber;
    numberColorChange();
});

let resetButton = document.querySelector('#zerar');
resetButton.addEventListener('click', () => {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
})



//função decrement original da instrutora
// function decrement() {
//     currentNumber -= 1; //diminuindo 
//     currentNumberWrapper.innerHTML = currentNumber; 
// }


//função increment original da instrutora
// function increment() {
//     currentNumber += 1; //aumentando com a variável criada acima
//     currentNumberWrapper.innerHTML = currentNumber;
// }


//metodo addEventListener - OK
//botão de zerar caso a conta for maior que 10 - OK
//ou quando for negativo, mudar a cor com o current_number - OK