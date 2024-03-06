import { PasswordChecker } from "../../app/password_checker/password_checker";

// A password is invalid if:
// -length is less than 8 characters
// -length is greater than 20 characters
// -password does not contain at least one special character

describe("Password Checker Test Suite", () => {
  let sut: PasswordChecker;

  //arrange
  beforeEach(() => {
    sut = new PasswordChecker();
  });

  describe.skip("Password Length Too Short Test", () => {
    it("Passwords with less than 8 characters are invalid", () => {
      //actual
      const actual = sut.checkPassword("123");
      //assert
      expect(actual).toBe(false);
    });

    it("Passwords that are equal to 8 characters are valid", () => {
      //actual
      const actual = sut.checkPassword("12345678");
      //assert
      expect(actual).toBe(true);
    });

    it("Passwords that are greater than 8 characters are valid", () => {
      //actual
      const actual = sut.checkPassword("12345678910");
      //assert
      expect(actual).toBe(true);
    });
  });

  describe.skip("Password Length Too Long Test", () => {
    it("Passwords with greater than 20 characters are invalid", () => {
      //actual
      const actual = sut.checkPassword("123456789123456789123456789"); //9x3 = 27chars
      //assert
      expect(actual).toBe(false);
    });

    it("Password equal to 20 characters are valid", () => {
      //actual
      const actual = sut.checkPassword("12345678912345678912"); //9x3+2 = 20chars
      //assert
      expect(actual).toBe(true);
    });
  });

  describe("Password Special Character Test", () => {
    it("Passwords that contain at least one specified special character are valid", () => {
        //actual
        const actual = sut.checkPassword("123456!@#")
        //assert
        expect(actual).toBe(true)
    })

    it("Passwords that do not contain at least one specified special character are invalid", () => {
        //actual
        const actual = sut.checkPassword("123456789")
        //assert
        expect(actual).toBe(false)
    })
  })
});
