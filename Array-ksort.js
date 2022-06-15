//option 1

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
/* Function to sort an array using insertion sort*/
function insertionSort(B, size)
{
   var A=B;
   var i, key, j;
   for (i = 1; i < size; i++)
   {
       key = A[i];
       j = i-1;
 
       /* Move elements of A[0..i-1], that are
          greater than key, to one
          position ahead of their current position.
          This loop will run at most k times */
       while (j >= 0 && A[j]>key)
       {
           //step A move to right
           A[j+1]=A[j];
           j--;
       }
       //set value for j at step A
       A[j+1] = key;
   }
   return A;
}
 
A = [6, 5, 3, 2, 8, 10, 9]
k = 3
console.log(insertionSort(A,k))

 

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
