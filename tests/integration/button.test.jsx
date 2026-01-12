import { render } from "@testing-library/react";
import { Button } from "../../src/components/Button/Button";

test("Button integration test", () => {
  const { container } = render(<Button>Click me!</Button>);
  expect(container).toBeInTheDocument();
});
