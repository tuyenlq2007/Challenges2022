Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
Finally, join the array items together in a single string called myString, with a separator of "-".

a=["1","2","3","4","5"]
a.pop()
a.shift()

b=a.map((e,i)=>e.concat("("+i+")"))
console.log(b.join("-"))
