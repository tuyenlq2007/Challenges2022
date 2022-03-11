function permute(str, l, r)
{

    if (l == r){
            document.write(str+"<br>");
            return;
    }

        
            for (let i = l; i < r; i++)
            {
                newstr = swap(str, l, i);
                permute(newstr, l + 1, r);
            }

        
}
 

function swap(a, i, j)
{

let temp;
let charArray = a.split("");
temp = charArray[i] ;
charArray[i] = charArray[j];
charArray[j] = temp;
return (charArray).join("");
}
 

let str = "ABC";
let n = str.length;
permute(str, 0, n);
