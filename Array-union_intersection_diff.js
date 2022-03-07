//union 2 sorted array
var a1 = [ 1, 2, 4, 5, 6 ];
var a2 = [ 2, 3 ];
var union=[]
let i=0
let j=0
while (i<a1.length && j<a2.length){
    if (a1[i]<a2[j]) {
        union.push(a1[i]);
        i++;
    }else if (a1[i]>a2[j]){
        union.push(a2[j]);
        j++;
    }else{
        union.push(a1[i]);
        union.push(a2[j]);
        i++;
        j++
    }
}

while (i<a1.length){
        union.push(a1[i]);
        i++;
}
while (j<a2.length){
        union.push(a2[j]);
        j++;
}
console.log(union);

//find intersection 2 sorted array
a1 = [ 1, 2, 4, 5, 6 ];
a2 = [ 2, 3 ];
var intersec=[]
i=0
j=0
while (i<a1.length && j<a2.length){
    if (a1[i]<a2[j]) {
        i++;
    }else if (a1[i]>a2[j]){
        j++;
    }else{
        intersec.push(a1[i]);
        i++;
        j++
    }
}

console.log(intersec);

//find diff 2 sorted array
a1 = [ 1, 2, 4, 5, 6 ];
a2 = [ 2, 3 ];
var diff=[]
i=0
j=0
while (i<a1.length && j<a2.length){
    if (a1[i]<a2[j]) {
        diff.push(a1[i]);
        i++;
    }else if (a1[i]>a2[j]){
        diff.push(a2[j]);
        j++;
    }else{
        i++;
        j++
    }
}
while (i<a1.length){
        diff.push(a1[i]);
        i++;
}
while (j<a2.length){
        diff.push(a2[j]);
        j++;
}
console.log(diff);





