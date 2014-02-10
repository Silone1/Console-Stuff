//*

* Adds a random number between 100. In other words... 0-100 + 0-100 *

*//

var add = function(num1, num2) {
    if(num1 === undefined) {
        console.log("You need to add 2 numbers!");
    }
    if(num2 === undefined) {
        console.log("You need to add 2 numbers!");
    }    
    console.log(num1 + num2);
};
add(Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1));

