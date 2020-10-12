import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../Header";

test("renders Header component with `New event`", () => {
  const { getByText } = render(<Header />);

  expect(getByText(/new event/i)).toBeInTheDocument();
});
