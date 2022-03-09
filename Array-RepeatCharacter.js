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
