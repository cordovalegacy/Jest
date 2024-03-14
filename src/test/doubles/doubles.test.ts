import {
  StringInfo,
  calculateComplexity,
  toUpperCaseWithCallback,
} from "../../app/doubles/doubles";

describe("Doubles Test Suite", () => {

  describe('Tracking callbacks with Jest mocks', () => {
    const callBackMock = jest.fn()

    afterEach(() => {
      jest.clearAllMocks()
    })
    
    it("to upper case calls back for invalid argument", () => {
      //this is called a fake
      const actual = toUpperCaseWithCallback("", callBackMock);
      expect(actual).toBeUndefined();
    });
    it("to upper case calls back for invalid argument", () => {
      //this is called a fake
      const actual = toUpperCaseWithCallback("abc", callBackMock);
      expect(actual).toBe("ABC");
    });

  })

  describe("Tracking callbacks", () => {
    let callBackArgs = [];
    let timesCallBackCalled = 0;

    function callBackMock(arg: string) {
      callBackArgs.push(arg);
      timesCallBackCalled++;
    }
    it("calls callback mock", () => {
      //this is called a fake
      const actual = toUpperCaseWithCallback("", callBackMock);
      expect(actual).toBeUndefined();
      expect(callBackArgs).toContain("Invalid Argument!");
      expect(timesCallBackCalled).toBe(1);
    });

    afterEach(() => {
      callBackArgs = [];
      timesCallBackCalled = 0;
    });
  });
  it("to upper case calls back for invalid argument", () => {
    //this is called a fake
    const actual = toUpperCaseWithCallback("", () => {});
    expect(actual).toBeUndefined();
  });
  it("to upper case calls back for invalid argument", () => {
    //this is called a fake
    const actual = toUpperCaseWithCallback("abc", () => {});
    expect(actual).toBe("ABC");
  });
  it("calculates complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "someInfo",
        field2: "someOtherInfo",
      },
    };

    const actual = calculateComplexity(someInfo as StringInfo);
    expect(actual).toBe(10);
  });
});
