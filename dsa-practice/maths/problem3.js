const reverseNumber = (number) =>{
    let reversedNumber = 0;
    while(number>0){
        let ld = number%10;
        reversedNumber = reversedNumber*10 + ld;
        number = Math.round(number/10);
    }
    return reversedNumber;
}
console.log(reverseNumber(345))