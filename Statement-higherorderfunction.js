//Function Expressions
const sum=(sum,num)=>{
    return sum+num;
}

//call back function
function f(sum,num){
    return sum+num;
}

//higher-order function
function b(f){
    console.log(f);
}

b(f(sum(1,2),3));
