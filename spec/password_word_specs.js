const { passwordIsValid } = require("../src/password-checker.js");

let password = ''
describe("The functions should return a password that follows the bellow conditions", function () {
    it("Should return can't be empty if the password is empty", function () {
      expect(password).not.toBe('');
    })
    it("Should return greater than 8", function () {
      expect(password.length).toBeGreaterThan(8)
    });

    it("Should see if password has lowercase character", function () {
      expect(password).toMatch(/[a-z]/)
    });

    it("Should see if password has uppercase character", function () {
      expect(password).toMatch(/[A-Z]/)
    });

    it("Should see if password has any digits", function () {
      expect(password).toMatch(/[0-9]/)
    });

    it("Should see if password has special character", function () {
      expect(password).toMatch(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)
    });
})