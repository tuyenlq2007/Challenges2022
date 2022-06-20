/*Program to find the duplicate characters in a string */
console.log("find the duplicate characters in a string");
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