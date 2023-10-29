import { render, screen } from "@testing-library/react";
import Target from "./Target";

test("Target component renders with the correct text", () => {
  render(<Target twentyThirtyTarget="2,500" />);
  expect(screen.getByText("Your 2030 target is 2,500 kg")).toBeInTheDocument();
});
