import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react/pure";
import { Welcome } from "../../src/exercises/Welcome";

test("properly renders the greet text", () => {
  const name = "John Paul";
  render(<Welcome>{name}</Welcome>);

  const greet = screen.getByText(`Welcome ${name}!`);
  expect(greet).toBeInTheDocument();
});
