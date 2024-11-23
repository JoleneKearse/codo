import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { describe, it, expect } from "vitest";

describe("App component", () => {
  it("should render the main heading", () => {
    render(<App />);
    const mainHeading = screen.getByRole("heading", { level: 1 });
    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading).toHaveTextContent("Codo: A Todo List for Developers");
  });

  it("should have the correct class names for styling", () => {
    render(<App />);
    const containerDiv = screen.getByRole("heading", { level: 1 }).parentElement;
    expect(containerDiv).toHaveClass("flex flex-col gap-24 my-20 mx-10");
  });
});