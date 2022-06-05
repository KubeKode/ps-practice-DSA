const boom = (x,y)=>{
    if(y==0){
        return x;
    }
    return boom(x^y,(x&y)<<1)
}
console.log(boom(2,4))