import caesarCipher from "../caesarCipher.js";

describe("caesar cipher test", () => {
  test("Apply 1 offset", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
      "bcdefghijklmnopqrstuvwxyza"
    );
  });
  test("Apply 2 offset", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 2)).toBe(
      "cdefghijklmnopqrstuvwxyzab"
    );
  });
  test("Apply 3 offset", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 3)).toBe(
      "defghijklmnopqrstuvwxyzabc"
    );
  });
  test("Apply to a sentence", () => {
    expect(caesarCipher("hello this is a jest test", 2)).toBe(
      "jgnnq vjku ku c lguv vguv"
    );
  });
  test("Apply 3 offset with capitals", () => {
    expect(caesarCipher("aBcDeFgHiJkLmNoPqRsTuVwXyZ", 3)).toBe(
      "defghijklmnopqrstuvwxyzabc"
    );
  });
  test("Apply to a sentence with capitals", () => {
    expect(caesarCipher("Hello This-is A jEst teSt.", 2)).toBe(
      "jgnnq vjku-ku c lguv vguv."
    );
  });
  test("Check if its a string", () => {
    expect(caesarCipher(1234)).toBe("Not a string");
  });
});
