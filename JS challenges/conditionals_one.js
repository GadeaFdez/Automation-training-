/*
  Challenge One
  Build a JavaScript function that takes a password as input and uses if and else statements to determine the password strength. 
  The password strength rules are as follows:
  - If the password is less than 8 characters long, return "Weak: Password is too short."
  - If the password is 8 characters or longer but does not contain at least one number, return "Weak: Password should include at least one letter and one number."
  - If the password meets the above criteria, return "Strong: Password is strong enough."
*/
function password(pw){  //defining the function password with argument pw

    let pLength = pw.length; //defining pLength as the length of the argument pw

    if (pLength < 8) 
      console.log("Weak: Password is too short."); 
    
    else if (pLength >= 8 & !/\d/.test(pw)) // \d is equivalent to [0-9], .test(pw) searches for \d in pw argument. We are looking for does not contain, therefore !
      console.log("Weak: Password should include at least one letter and one number.");

    else
      console.log("Strong: Password is strong enough."); 
    
    
}

password("abcdefkrehfoq1");



