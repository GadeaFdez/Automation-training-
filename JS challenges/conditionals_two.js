/*
  Challenge Two
  Create a JavaScript function that takes a score as an argument (a number between 0 and 100) and determines their grade. 
  The function should return the corresponding letter grade based on the following criteria:
  - 90-100: A
  - 80-89: B
  - 70-79: C
  - 60-69: D
  - Below 60: F
*/

function score(points) {

  if (points < 60)
    console.log("F"); 

  else if (points >= 60, points <= 69)
    console.log("D"); 

  else if (points >= 70, points <= 79)
    console.log("C"); 
    
  else if (points >= 80, points <= 89)
    console.log("B"); 

  else if (points >= 90, points <=100)
    console.log("A"); 

  else    console.log("The score entered is not valid");
 
}

score(89);
