function passwordIsValid(password) {
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let digit = /[0-9]/g;
  let specialchar = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g; /// /\W_/g

  if (password == "") {
    throw "password should exist";
  }
  if (password.length <= 8) {
    throw "password should be longer than 8 characters";
  }
  if (!password.match(lowerCaseLetters)) {
    throw "password should have at least one lowercase letter";
  }
  if (!password.match(upperCaseLetters)) {
    throw "password should have at least one uppercase letter";
  }
  if (!password.match(digit)) {
    throw "password should have at least one digit";
  }
  if (!password.match(specialchar)) {
    throw "password should have at least one special character";
  } 
}

console.log(passwordIsValid("ertw4erS!ggg"));

// function passwordIsOk(password) {
//   let lowerCaseLetters = /[a-z]/g;
//   let upperCaseLetters = /[A-Z]/g;
//   let digit = /[0-9]/g;
//   let special = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;

//   if (
//     (!password == "" &&
//       password.length > 8 &&
//       password.match(lowerCaseLetters)) ||
//     (!password == "" &&
//       password.length > 8 &&
//       password.match(upperCaseLetters)) ||
//     (!password == "" && password.length > 8 && password.match(digit)) ||
//     (!password == "" && password.length > 8 && password.match(digit)) ||
//     (!password == "" && password.length > 8 && password.match(special))
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(passwordIsOk("Nomannnae1!"));
module.exports = {
  passwordIsValid,
};
