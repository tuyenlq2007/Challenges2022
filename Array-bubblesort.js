/*option 1*/
var items = [1,8,7,2,46,4,5,25]
function bubble_sort(items){
    for (i=0; i< items.length; i++){
        for (j=0;j< i;j++){
            let item=items[i]
            if (items[j]>item){
                items[i]=items[j]
                items[j]=item
                item=item[i]
            }
        }
    }
    return items
}
console.log(bubble_sort(items))

//option 2
function bubblesort(B,lo,hi){
    let A=B;
    for (let i=lo;i<hi;i++){
        let lowest=A[i];
        let lo=i;
        for (let j=i; j<hi; j++){
            if(lowest>A[j]){
                lowest=A[j];
                lo=j;
            }
        }
        let temp=A[i];
        A[i]=lowest;
        A[lo]=temp;
    }
    return A;
}
A=[10, 9, 8, 7, 4, 70, 60, 50];
console.log(bubblesort(A,0,8));
k=4;
for (let i=0;i<A.length-k;i++) C = bubblesort(A,i,i+k);
console.log(C)
