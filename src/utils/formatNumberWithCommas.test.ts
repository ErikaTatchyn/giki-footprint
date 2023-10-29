// Import the function to be tested
import formatNumberWithCommas from "./formatNumberWithCommas";

describe("formatNumberWithCommas", () => {
  it("should format a whole number with commas", () => {
    const result = formatNumberWithCommas(1234567);
    expect(result).toBe("1,234,567");
  });

  it("should format a decimal number with commas", () => {
    const result = formatNumberWithCommas(12345.67);
    expect(result).toBe("12,345.67");
  });

  it("should format a negative number with commas", () => {
    const result = formatNumberWithCommas(-9876543.21);
    expect(result).toBe("-9,876,543.21");
  });

  it("should handle zero correctly", () => {
    const result = formatNumberWithCommas(0);
    expect(result).toBe("0");
  });

  // it("should handle very large numbers", () => {
  //   const result = formatNumberWithCommas(12345678901234567890);
  //   expect(result).toBe("12,345,678,901,234,567,890");
  // });

  it("should handle numbers with no decimal part", () => {
    const result = formatNumberWithCommas(9876543210);
    expect(result).toBe("9,876,543,210");
  });

  // it('should handle numbers with leading zeros', () => {
  //   const result = formatNumberWithCommas(00123.456);
  //   expect(result).toBe('123.456');
  // });

  it("should handle NaN", () => {
    const result = formatNumberWithCommas(NaN);
    expect(result).toBe("NaN");
  });

  // it('should handle invalid input', () => {
  //   const result = formatNumberWithCommas('invalid');
  //   expect(result).toBe('invalid');
  // });
});
