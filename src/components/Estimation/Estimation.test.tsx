import { render, screen } from "@testing-library/react";
import EstimationInfo from "./Estimation";

test("EstimationInfo component renders end of year target and left to cut", () => {
  const endOfYearTarget = "2030";
  const leftToCut = "409";

  render(
    <EstimationInfo endOfYearTarget={endOfYearTarget} leftToCut={leftToCut} />
  );

  expect(screen.getByText("End of")).toBeInTheDocument();
  expect(screen.getByText("year target")).toBeInTheDocument();

  expect(screen.getByText("Left to cut this year")).toBeInTheDocument();
  expect(screen.getByText("409")).toBeInTheDocument();
});
