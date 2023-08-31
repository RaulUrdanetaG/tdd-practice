import { add, subtract, multiply, divide } from "../calculator";

describe("add", () => {
  test("adds 0 and 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("adds 2 and 2", () => {
    expect(add(2, 2)).toBe(4);
  });

  test("adds positive numbers", () => {
    expect(add(2, 6)).toBe(8);
  });
});

describe("subtract", () => {
  test("subtracts numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });
  test("subtracts numbers", () => {
    expect(subtract(-10, 4)).toBe(-14);
  });
});

describe("multiply", () => {
  test("multiplies two numbers", () => {
    expect(multiply(2, 4)).toBe(8);
  });

  test("multiplies several numbers", () => {
    expect(multiply(2, 4, 6, 8, 10, 12, 14)).toBe(645120);
  });
});

describe("divide", () => {
  test("divide two numbers", () => {
    expect(divide(2, 4)).toBe(0.5);
  });
  test("divide two numbers with a negative", () => {
    expect(divide(-2, 4)).toBe(-0.5);
  });
  test("divide by 0", () => {
    expect(divide(2, 0)).toBe('Cant divide by 0');
  });
});
