a=[3,-1,2,-4,-5,-6]
for(let i=0;i<a.length;i++){
    let key=a[i]
    for(let j=i;j<a.length;j++){
        if (key>a[j]) {
            a[i]=a[j]
            a[j]=key
            key=a[i]
        }
    }
}

console.log(a)
