/* 
  Challenge Four
  Uncomment the code below and fix the issues.
*/


// Addition of two number 
const result: number = 42;

function add(a: number, b: number): number {
  return (a + b);
}

console.log(add(5.35,7)); 

//Addition of number and string 

const result2: string = 'Reviews';

function add2(a2: number, b2: string): string {
  return (a2.toString() + ' ' + b2);
}

console.log(add2(5, result2)); 


//Assigning boolean type to variable

let isGood : boolean = true;
isGood = false;

console.log(isGood); 



//Assigning string type to variable

let isNotGood : string; 
isNotGood = 'Not sleeping'; 
console.log (isNotGood); 