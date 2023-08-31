import reverseString from "../reverseString.js";

describe("Reverse String", () => {
  test("Reverse a single word", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  test("Reverse a sentence", () => {
    expect(reverseString("hello this is a jest test")).toBe(
      "tset tsej a si siht olleh"
    );
  });
  test("Reverse a sentence with punctuation and chars", () => {
    expect(reverseString("hello! this is-a jest test.")).toBe(
      ".tset tsej a-si siht !olleh"
    );
  });
  test("Reverse different chars", () => {
    expect(reverseString("1234!@#$")).toBe("$#@!4321");
  });
  test("Check if its a string", () => {
    expect(reverseString(1234)).toBe("Not a string");
  });
});
