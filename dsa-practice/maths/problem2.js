const sqrt = (num)=>{
    let res;
    let i = 0;
    let found = true;
    while(found){
        if(i*i===num){
            res = i
            found = false
        }
        i++;
    }
    return res
}
console.log(sqrt(4))