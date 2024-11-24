import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Terminal from "./Terminal";
import { describe, it, expect } from "vitest";

describe("Terminal component", () => {


	it("should display 'Initializing...' when loading then display Menu and InputBlock", async () => {
		render(<Terminal />);
		expect(screen.getByText(/Initializing/i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.queryByText("Initializing...")).not.toBeInTheDocument();
      expect(screen.getByText(/1. View todos/i)).toBeInTheDocument();
      expect(screen.getByRole("input")).toBeInTheDocument();
    });
	});
});

