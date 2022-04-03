//option 1
const a = [1, 2, 3, 4,1];
s=new Set(a)
s.forEach(e=>console.log(a.filter(f=>f==e)))

//option 1
const map1 = new Map();
const array1=['a','b','c','a'];
array1.forEach(char1=>map1.get(char1)==null?map1.set(char1,1):map1.set(char1,map1.get(char1)+1));
console.log(map1);
console.log(map1.size);


//option 2
arr = [1,1, 2, 3, 4];
q=1
arr.forEach(e=>{
   if(e==q) console.log(e)}
)

//solution
for (const key of map1.keys()) {
  if(map1.get(key)>1){
      let i=0;
      while (i<map1.get(key)) {
          console.log(key);
          i++;
      }
  }
};

//Write a JavaScript program to find the most frequent item of an array. Go to the editor
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times )**

var a=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
var max=0;
var most;
for (let i=0;i<a.length;i++){
    let count=1;
    for (let j=i+1; j<a.length;j++){
        if (a[j]==a[i]){
            count++;
            a[j]='';
        }
    }
    if (a[i]!=''){
        if (count>max) {max=count; most=a[i];}
    }
}
console.log (most);
console.log (max);
