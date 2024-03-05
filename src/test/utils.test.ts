import { StringUtils, getStringInfo, toUpperCase } from "../app/utils";

describe("Utils test suite", () => {
  it("should return correct uppercase string", () => {
    //arrange:
    const sut = toUpperCase; //system under test
    const expected = "ABC";

    //act:
    const actual = sut("abc");

    //assertion:
    expect(actual).toBe(expected);
  });

  describe("Parameterized Testing (Breaking up the test into pieces)", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "def", expected: "DEF" },
      { input: "ghi", expected: "GHI" },
    ])("$input ToUpperCase should be expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  //describe will spit out a message in our terminal
  describe("Assertions and Matchers", () => {
    const actual = getStringInfo("Example-Test");

    test("return correct string length", () => {
      expect(actual.characters).toHaveLength(12);
    });

    test("return correct lower case string", () => {
      expect(actual.lowerCase).toBe("example-test");
    });

    test("return correct characters from original string", () => {
      expect(actual.characters).toEqual([
        "E",
        "x",
        "a",
        "m",
        "p",
        "l",
        "e",
        "-",
        "T",
        "e",
        "s",
        "t",
      ]);
    });
  });

  describe("StringUtils Class Test", () => {
    //arrange
    let sut: StringUtils;

    //this is called set up
    beforeEach(() => {
      sut = new StringUtils();
      console.log("SETTING UP");
    });

    //this is called tear down
    afterEach(() => {
      //clearing mocks (most common)
      console.log("TEARING DOWN");
    });

    it("Should return correct uppercase string", () => {
      //act
      const actual = sut.toUpperCase("brendan cordova");

      //assert
      expect(actual).toBe("BRENDAN CORDOVA");
    });
  });
});
