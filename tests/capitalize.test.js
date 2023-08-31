import capitalizeWord from "../capitalize";

describe("Capitalize word", () => {
  test("Capitalize one word", () => {
    expect(capitalizeWord("hello")).toBe("Hello");
  });
  test("Capitalize one sentence", () => {
    expect(capitalizeWord("hello this is a jest test.")).toBe(
      "Hello this is a jest test."
    );
  });
  test("Dont capitalize other characters", () => {
    expect(capitalizeWord("1234hello")).toBe("1234hello");
    expect(capitalizeWord("@!?hello")).toBe("@!?hello");
  });
  test("Capitalize first found letter", () => {
    expect(capitalizeWord("   hello this is a jest test.")).toBe(
      "Hello this is a jest test."
    );
  });
  
});
