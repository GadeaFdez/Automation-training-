/* 
  Challenge Five
  Create an interface called Car with properties make (string), model (string), and year (number).
  Make sure year is optional. 
  Then create an object called myCar which is based on this interface.
*/

interface Car { 
    make: string; 
    model: string; 
    year?: number; 
}; 


let myCar : Car = { 
    make: 'Citroen',
    model: 'DS4',
};

console.log(myCar);