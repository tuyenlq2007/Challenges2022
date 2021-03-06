/*1. print all permute*/
var per = [];
function permute(str, l, r) {
    if (l == r) {
        per.push(str);
        return;
    }

    for (let i = l; i < r; i++) {
        let newstr = swap(str, l, i);
        permute(newstr, l + 1, r);
    }
}


function swap(a, i, j) {

    let temp;
    let charArray = a.split("");
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray).join("");
}

function main() {
    let str = "ABC";
    let n = str.length;
    permute(str, 0, n);
    console.log("1. print all permute");
    console.log(per);
}

if (require.main === module) {
    main();
}

//(6) ['ABC', 'ACB', 'BAC', 'BCA', 'CBA', 'CAB']