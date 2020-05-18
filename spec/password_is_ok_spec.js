const { passwordIsOk } = require("../src/password_checker");

describe("The function should return true  if three or more of the conditions are true and false if they are not ", function () {
  it("Should return return false if function parameter is empty ", function () {
    expect(passwordIsOk("")).toBeFalsy();
  });

  it("Should return return false if function parameter is less than 8 characters ", function () {
    expect(passwordIsOk("12345678")).toBeFalsy();
  });

  it("Should return return true if function parameter has more than 8 characters, not empty and has lowercase letters", function () {
    expect(passwordIsOk("nomannnna")).toBeTruthy();
  }); 

  it("Should return return true if function parameter has more than 8 characters, not empty and has Uppercase letters", function () {
    expect(passwordIsOk("NOMANNNNANA")).toBeTruthy();
  });

  it("Should return return true if function parameter has more than 8 characters, not empty and has digit", function () {
    expect(passwordIsOk("123456789")).toBeTruthy();
  });

  it("Should return return true if function parameter has more than 8 characters, not empty and has special charaters", function () {
    expect(passwordIsOk("!@#$$#@@!!@^^^")).toBeTruthy();
  });

  it("Should return return true if function parameter has more than 8 characters, not empty, has lowecase letters, uppercase,special character and digit", function () {
    expect(passwordIsOk("Nomanna@21")).toBeTruthy();
  });
});
