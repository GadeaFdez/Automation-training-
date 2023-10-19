//  USING FOR LOOP, write a JavaScript program that uses a for loop to print numbers from 1 to 10 to the console.

for (let number = 1; number <= 10; number++){ 
    console.log(number); 
}


//Trying lop inside of a function, function should calculate how many books more I can buy based on how many I've got


function books (current_books){
    let max_books = 50; 
    for (current_books; current_books <= max_books; current_books++)
        console.log("I've got " + current_books + " so I can buy " + (max_books - current_books)+ " more books before I run out of space in my house");

}
books(30); 


//  USING DO ... WHILE LOOP, write a JavaScript program that uses a for loop to print numbers from 1 to 10 to the console.

let i= 1; 

do { 
    console.log(i); 
    i++;
} while (i<=10); 








