
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
