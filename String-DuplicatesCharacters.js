/*Program to find the duplicate characters in a string */
console.log("find the duplicate characters in a string");
stack= [[]]

stack.push([1,1])
stack.push([2,2])
pop=stack.pop()
console.log(pop)
pop=stack.pop()
console.log(pop)



function printDups(str)
{
    let map = new Map();
    let map2 = new Map();

    for (let i = 0; i < str.length-1; i++) {
        j=i+1
        while ((j<str.length)&&(str[i]==str[j])){
          if(map.has(str[i]))
             map.set(str[i],map.get(str[i])+str[i])
          else map.set(str[i], str[i]+str[i])
          i++
          j++;
        }
      if (j==1) map2.set(str[i],str[i])
      map2.set(str[j],str[j]);
    }
  
    for (let [it,it2] of map) {   //iterating through the unordered map
          //if the count of characters is greater than 1 then duplicate found
            if (it2.length > 1)console.log(it,", string = ",it2,"</br>");
    }
    
    
  for (let [it,it2] of map2) {   //iterating through the unordered map
          //if the count of characters is greater than 1 then duplicate found
            console.log(it,", string = ",it2,"</br>");
    }
    
    
}
/* Driver code*/
 
let str = "tessstttsaring";
printDups(str.split(''));



function finddupx(inputstring){
    var dupx=[];
    var arr=inputstring.split('');
    var count;
    for(let i=0;i<arr.length;i++){
        count=1;
        for(let j=i+1;j<arr.length;j++){
            if(inputstring[j]==inputstring[i]){
            count++;
            inputstring[j]='0'
            }
        }
        if(count>1 && inputstring[i]!='0') dupx.push(inputstring[i]);
    }
    return dupx;
}

var dx = finddupx("Greatresponsibility");
console.log(dx);
//['r', 'e', 't', 's', 'i', 'i']
