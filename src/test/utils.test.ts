import { getStringInfo, toUpperCase } from "../app/utils";

describe("utils test suite", () => {
  it("should return uppercase string", () => {
    //arrange:
    const sut = toUpperCase; //system under test
    const expected = "ABC";

    //act:
    const actual = sut("abc");

    //assertion:
    expect(actual).toBe(expected);
  });

  describe("getStringInfo for arg Example-Test should", () => {
    const actual = getStringInfo("Example-Test");

    test("return correct length", () => {
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
});
