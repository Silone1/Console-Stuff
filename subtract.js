//*
* subtraction!!!!!! 0-100 - 0-100, 0-100  is random
*//
var subtract = function(num1, num2) {
    
    if(num1 === undefined) {
        console.log("You need 2 numbers to subtract!");
    }
    
    if(num2 === undefined) {
        console.log("You need to 2 numbers to subtract!");
    }    
    console.log(num1 - num2);
};
subtract(Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1));


