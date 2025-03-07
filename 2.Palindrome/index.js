function isPalindrome(x) {
    /*
    if(x<0){
    return false}
    const number_as_string=x.toString();
    if(number_as_string.length<2){
        return true
    }
    const reversed_string=number_as_string.split("").reverse().join('');
    return number_as_string===reversed_string;
    */
    //NUMERICAL SOLUTION
    var sum = 0; // my reversed number 
    var r = 0;
    var temp = x;
    while (temp > 0) {
        r = temp % 10; //taking last digit of a number for example 43 % 10 = 3
        sum = sum * 10 + r; //if sum 3 and r=5 then sum = 35
        temp = Math.floor(temp / 10); //integer division
    }
    return x === sum ? true : false;
}
;
console.log(isPalindrome(530));
