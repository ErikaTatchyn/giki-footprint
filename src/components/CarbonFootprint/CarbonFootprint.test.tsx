import { render, screen } from "@testing-library/react";
import CarbonFootprint from "./CarbonFootprint";

test("CarbonFootprint component renders correctly", () => {
  render(<CarbonFootprint footprintValue="5855" />);

  expect(screen.getByText("Your footprint")).toBeInTheDocument();

  expect(screen.getByText("Take a step")).toBeInTheDocument();
});
