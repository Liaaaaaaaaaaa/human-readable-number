
countUnits = number1 => ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][number1];

countForTwenty = number10 => ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'][number10];

countTens = number10 => ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][number10];

countHundreds = number10 => countUnits(number10) + ' hundred';

// console.log(countUnits(8));
// console.log(countTens(8));
// console.log(countHundreds(9));

module.exports = 

function toReadable(number) {
    let result = '';
    let massiveNumber = Array.from(String(number));

    let numberHundredsMassive = massiveNumber.length - 3;

    let numberHundreds = countHundreds(massiveNumber[numberHundredsMassive]);

    let numberUnitsMassive = massiveNumber.length - 1;
    let numberUnits = countUnits(massiveNumber[numberUnitsMassive]);

    let numberTensMassive = massiveNumber.length - 2;
    let numberTens = countTens(massiveNumber[numberTensMassive]);

    let numberTensUnits = massiveNumber.slice(-2);
    console.log(numberTensUnits);
    let numberForTwentyMassive = numberTensUnits.length - 1;
    let numberForTwenty = countForTwenty(numberTensUnits[numberForTwentyMassive]);

    console.log(numberTensUnits);
    // console.log(numberUnits );
    // let numberTens = countTens (massiveNumber.slice(0,-3));
    if (number === 0 ) {
        result = 'zero';
    }
if (number < 10 && number > 0 ) {
    result = numberUnits;
}
if (number < 20 && number >=10 ) {
    result = numberForTwenty;
}
if ( number >= 20 && number < 100  ) {
    result = numberTens.trim() + ' ' + numberUnits;
}
if (number >= 100 ) {
    if (numberTensUnits[0] >= 2 || numberTensUnits[0] < 1) {
        res1 = numberHundreds + ' ' + numberTens;
        result = res1.trim() + ' ' + numberUnits;
    } else {
        result = numberHundreds + ' ' + numberForTwenty;
    }
}
    return result.trim();
}

// console.log(toReadable(29));

// console.log(333);
// console.log(Array.from('333'))

// function toReadable (number) {
//     let i = -1;
//     let result = '';
//   while (i>= -(number.length)) {
//     if (i === -1) {
//         result = `${switchOne(number[i])}`;
//     } else if (i === -2) {
//         result = `${switchTen(number[i])}${result}`
//     } else if (i === -3) {
//         return `${switchOne(number[i])}${hundred}${result}`
//     } else if (i === -4) {
//         return `${switchOne(number[i])}${thousand}${result}`
//     }
//     i=i-1;
//   } console.log (result)
// }

//  toReadable(997);

