const map1 = new Map();
const array1=['a','b','c','a'];
array1.forEach(char1=>map1.get(char1)==null?map1.set(char1,1):map1.set(char1,map1.get(char1)+1));
console.log(map1);

console.log(map1.size);


for (const key of map1.keys()) {
  if(map1.get(key)>1){
      let i=0;
      while (i<map1.get(key)) {
          console.log(key);
          i++;
      }
  }
};
