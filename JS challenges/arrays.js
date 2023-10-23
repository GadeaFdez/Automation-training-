/*
  Challenges
  Uncomment the code below and for each challenge, create a separate function.
*/

let names = ["Fred", "Wilma", "Barney", "Betty", "Pebbles", "Bamm-Bamm"];

console.log(names); 

//  1. Add a name to the beginning of the names array.

names.unshift("Gadea"); 

console.log(names); 

//  2. Add a name to the end of the names array.

names.push("Ana"); 

console.log(names); 

//  3. Remove the name you added to the beginning of the names array.

names.shift(); 

console.log(names); 

//  4. Remove the name you added to the end of the names array.

names.pop(); 

console.log(names); 
 
//  5. Create a new array called lowercasedNames with each name lowercased.

let lowercasedNames = [];

for (let i of names){ 

    lowercasedNames.push(i.toLowerCase()); //every element of the names array is getting lowered cased and push to the last position of the new array lowercasedNames 

}

console.log(lowercasedNames); 

//  6. Sort the names array alphabetically.

names.sort(); 

console.log(names); 

//  7. Find the index of "Pebbles".

console.log(names.indexOf("Pebbles"));

//  8. Reverse the order of the names array.

names.reverse(names);

console.log(names);