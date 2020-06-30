const { passwordIsValid } = require("../src/password_checker");

describe("The functions should return a password that follows the bellow conditions", function () {
  it("Should return can't be empty if the password is empty", function () {
    expect(() => {
      passwordIsValid("");
    }).toThrow("password should exist");
  }); 

  it("Should throw an error if password has 8 or less characters", function () {
    expect(() => {
      passwordIsValid("sfaefgv");
    }).toThrow("password should be longer than 8 characters");
  });

  it("Should see if password has lowercase character", function () {
    expect(() => {
      passwordIsValid("123456789A*");
    }).toThrow("password should have at least one lowercase letter");
  });

  it("Should see if password has uppercase character", function () {
    expect(() => {
      passwordIsValid("123456789a*");
    }).toThrow("password should have at least one uppercase letter");
  });
  it("Should see if password has any digits", function () {
    expect(() => {
      passwordIsValid("asdfgGHJKKK!");
    }).toThrow("password should have at least one digit");
  });
  
  it("Should see if password has special character", function () {
    expect(() => {
      passwordIsValid("asdfgGHJKKK33");
    }).toThrow("password should have at least one special character");
  });
});
