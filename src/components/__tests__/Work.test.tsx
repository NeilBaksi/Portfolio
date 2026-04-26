import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Work from "../Work";

describe("Work", () => {
  it("renders all four project titles", () => {
    render(<Work />);
    expect(
      screen.getByRole("heading", { name: /Optus Digital Platform/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /MarketNow/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /STACK Payments/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Shimmer Bazaar/i, level: 3 })
    ).toBeInTheDocument();
  });

  it("renders no carousel navigation", () => {
    render(<Work />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(
      document.querySelector(".carousel-track, .carousel-arrow, .carousel-dots")
    ).toBeNull();
  });

  it("renders tech stack icons for each project", () => {
    render(<Work />);
    const stacks = document.querySelectorAll(".work__stack");
    expect(stacks.length).toBe(4);
    stacks.forEach((stack) => {
      expect(stack.querySelectorAll(".work__stack-icon").length).toBeGreaterThan(0);
    });
  });

  it("renders outbound link only for Optus", () => {
    render(<Work />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute(
      "href",
      expect.stringContaining("optus.com.au")
    );
    expect(links[0]).toHaveAttribute("target", "_blank");
    expect(links[0]).toHaveAttribute(
      "rel",
      expect.stringContaining("noreferrer")
    );
  });
});
