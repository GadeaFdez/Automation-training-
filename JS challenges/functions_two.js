/* 
Doubts: What's the difference between using return and console.log? What's best practice? 
Return can be use for when there is a new variable in the function of which we want the final value 

What's the best practice for defining variables/parameters for a function? 
*/

// Declare a simple function that returns the sum (+) of two numbers.

function add(){ 
    const first_num=1; 
    const second_num=1; 

    console.log(first_num + second_num);
}

add(); 


function add2(x,y){ 
    
    console.log(x + y);
}

add2(1,1); 



//Declare a simple function that returns the difference (-) of two numbers.

function dif(){ 
   
    console.log(1-5);
}

dif(); 


function dif2(x,y){ 
    
    return (y-x);
}

console.log(dif2(5,1)); 



//Declare a simple function that returns the product (*) of two numbers.

function mul(){ 
   
    return (first_number * second_number);
}

let first_number=10; 
let second_number=2; 

console.log(mul()); 


function mul2(x,y){ 
    
    return (x * y);
}

console.log(mul2(10,2)); 


//Declare a simple function that returns the dividend (/) of two numbers.

function div(){ 
    
    return (30/5);
}

console.log(div()); 

function div2(x,y){ 
    
    console.log (x/y);

}

let x_1 = 30; 
let y_1 = 4; 

div2(x_1,y_1); 


// Feel free to declare a catch-all function for errors.
