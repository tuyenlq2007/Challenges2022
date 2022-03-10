a = [5,1,1, 2, 3,4];
c=[5,6];
for (let d of c){
b=a.find(a=>a==d);
console.log(b==null?"not found":b);
}

