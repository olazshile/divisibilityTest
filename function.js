
// function to check for number divisibility 

    function divisibilityTest(number){

        var new_array = [];

        // get all the numbers starting from 1 until last digit
        for (var index = 1; index <= number; index++) {

            //start from the biggest and counting downward
            if (index%2 == 0 && index%3 == 0 && index%5 == 0){ 
                new_array.push("yu-gi-oh");
                // check if number is divisible by 2,3 and 5 
            }else
            if (index%3 == 0 && index%5 == 0){ 
                new_array.push("gi-oh");
                // check if number is divisible by 3 and 5
            }else 
            if (index%2 == 0 && index%5 == 0){ 
                new_array.push("yu-oh");
                // check if number is divisible by 2 and 5 
            }else
            if (index%2 == 0 && index%3 == 0){ 
                new_array.push("yu-gi");
                // check if number is divisible by 2 and 3 
            }else
            if (index%5 == 0){
                new_array.push("oh");
                // check if number is divisible by 5
            }else  
            if (index%3 == 0){
                new_array.push("gi");
                // check if number is divisible by 3
            }else  
            if (index%2 == 0){
                new_array.push("yu");    
                // check if number is divisible by 3 
            }
            else {
                new_array.push(index);
            }
           
            // ======= End of Divisibility Test =======
    
        }
            return new_array;

    }

        console.log(divisibilityTest(100));
        console.log(divisibilityTest(30));
    