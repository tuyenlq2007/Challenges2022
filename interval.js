//Write a code to merge overlapping intervals.



//Create an empty "result" array. Loop over the ranges array and either change the last item of the result or add the current range to it.

function merge(ranges) {
    var result = [], last;

    ranges.forEach(function (r) {
        if (!last || r[0] > last[1])
            result.push(last = r);
        else if (r[1] > last[1])
            last[1] = r[1];
    });

    return result;
}

r = [[10, 20], [19, 40], [40, 60], [70, 80]];
//console.log(JSON.stringify(merge(r)));
function mergeB(r){
mergea=[]
var i=0
var point=0
var tmp=[]
while (point < r.length){
tmp=r[point]
while(i<r.length-1){
if((tmp[1]>=r[i+1][0])&&(tmp[1]<r[i+1][1])){
tmp[1]=r[i+1][1]
r[i+1]=[0,0]
point=i+1;
}
i++
}
mergea.push(tmp)
point++
}
return mergea
}
console.log(JSON.stringify(mergeB(r)));

