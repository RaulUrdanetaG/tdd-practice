import analyzeArray from "../analyzeArray.js";

describe("Analyze array", () => {
  test("analyze simple array", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject({
      avg: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });
  test("analyze huge array", () => {
    expect(
      analyzeArray([
        13, 11, 21, 17, 14, 27, 25, 35, 30, 29, 23, 38, 37, 43, 41, 39, 51, 46,
        56, 54, 52, 44, 36, 60, 59, 67, 63, 61, 83, 80, 88, 87, 86, 73, 93, 90,
        103, 102, 101, 106, 105, 108, 110, 109, 107, 104, 89, 57,
      ])
    ).toMatchObject({
      avg: 61.9375,
      min: 11,
      max: 110,
      length: 48,
    });
  });
  test("Check if its an array", () => {
    expect(analyzeArray(1234)).toBe("Not an array");
  });
});
