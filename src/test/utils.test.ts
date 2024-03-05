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

  it("should return info for a valid string", () => {
    const actual = getStringInfo("Example-Test");

    expect(actual.lowerCase).toBe("example-test");
    expect(actual.extraInfo).toEqual({});

    //two below are the same
    expect(actual.characters.length).toBe(12);
    expect(actual.characters).toHaveLength(12);

    expect(actual.characters).toContain<string>("E");
    expect(actual.extraInfo).toEqual(
      expect.arrayContaining(["E", "x", "a", "m", "p", "l", "e"])
    );

    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
