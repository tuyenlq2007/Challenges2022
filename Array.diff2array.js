//option1
function dif(array1, array2) {
    var result = [];
    array1.forEach(e=>!array2.includes(e)?result.push(e):0);
    array2.forEach(e=>!array1.includes(e)?result.push(e):0);
    return result;
}


var array1 = [1, 2, 3];

var array2 = [2, 30, 1];

console.log(dif(array1, array2));

//option2
function dif(array1, array2) {
    var result_array = [];
    var len = 0;

    while(len<array2.length) {
        var item = array1[len];

        if(!array2.includes(item)) 
        { 
            result_array.push(item);
        }
        len++;
    }
    
    len=0;
while(len<array1.length) {
        var item = array2[len];

        if(!array1.includes(item)) 
        { 
            result_array.push(item);
        }
        len++;
    }

    return result_array;
}


var array1 = [1, 2, 3];

var array2 = [2, 30, 1];

console.log(dif(array1, array2));
