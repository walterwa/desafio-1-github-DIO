function returnEvenValues(array) {
    let evenNums = [];
    let oddNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i]%2 === 0) {
            evenNums.push(array[i]);
        } else { //complemento com ímpares
            oddNums.push(array[i]);
        }
    }
    console.log('Os números pares são: ', evenNums);
    console.log('Os números ímpares são: ', imparNums);
}
let array = [1, 2, 4, 6, 7, 8, 9, 18, 44];
returnEvenValues(array)