
/*Map a letter to a phone number on key board*/

const obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
};

const map1 = new Map(Object.entries(obj));

var result = [];

function getDigit(letter) {
    
    for (let [key, value] of map1) {
        if (value.includes(letter)) return key;
        break;
    }
    return 0;
}
 
function main() {
    let digit = getDigit('a');
    console.log("Map a letter to a phone number on key board");
    console.log("digit of a");
    console.log(digit);
}

if (require.main === module) {
    main();
}
