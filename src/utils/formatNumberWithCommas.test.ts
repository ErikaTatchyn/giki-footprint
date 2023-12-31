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

  it("should handle numbers with no decimal part", () => {
    const result = formatNumberWithCommas(9876543210);
    expect(result).toBe("9,876,543,210");
  });

  it("should handle NaN", () => {
    const result = formatNumberWithCommas(NaN);
    expect(result).toBe("NaN");
  });
});
