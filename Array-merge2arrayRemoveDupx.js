function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = 0;
    var assoc = {};

    while(len<arr.length) {
        var item = arr[len];

        if(!result_array.includes(item)) 
        { 
            result_array.push(item);
        }
        len++;
    }

    return result_array;
}


var array1 = [1, 2, 3];

var array2 = [2, 30, 1];

console.log(merge_array(array1, array2));
