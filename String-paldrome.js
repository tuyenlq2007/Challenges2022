var allPal=[];
function getPal(str){
    let allPal=[];
    for (let i=0; i<str.length;i++){
        for (let j=str.length-1; j>i;j--){
            if (isPal(str,i,j)) allPal.push(str.slice(i,j+1));
        }
    }
    return allPal
}
    
function isPal(str,l,r){
    if(l>=r) return true;
    if (str.charAt(l)!=str.charAt(r)) return false;
    return isPal(str,l+1,r-1);
}


console.log(getPal("abbaergttgre"));

