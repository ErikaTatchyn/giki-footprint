import { render, screen } from "@testing-library/react";
import App from "./App";

test("App component displays CarbonFootprint, Estimation, and Target components", () => {
  render(<App />);
  const carbonFootprint = screen.getByTestId("carbon-footprint");
  const estimation = screen.getByTestId("estimation");
  const target = screen.getByTestId("target");

  expect(carbonFootprint).toBeInTheDocument();
  expect(estimation).toBeInTheDocument();
  expect(target).toBeInTheDocument();
});
