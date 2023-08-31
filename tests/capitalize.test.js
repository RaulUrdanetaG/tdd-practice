import capitalize from "../capitalize";

describe("Capitalize word", () => {
  test("Capitalize one word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("Capitalize one sentence", () => {
    expect(capitalize("hello this is a jest test.")).toBe(
      "Hello this is a jest test."
    );
  });
  test("Dont capitalize other characters", () => {
    expect(capitalize("1234hello")).toBe("1234hello");
    expect(capitalize("@!?hello")).toBe("@!?hello");
  });
  test("Capitalize first found letter", () => {
    expect(capitalize("   hello this is a jest test.")).toBe(
      "Hello this is a jest test."
    );
  });
  test("Check if its a string", () => {
    expect(capitalize(1234)).toBe(
      "Not a string"
    );
  });
});
