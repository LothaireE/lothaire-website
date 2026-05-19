import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LandingNav from "@/components/nav/LandingNav";

const mockT = vi.fn((key: string) => key);

vi.mock("@/context/appContext", () => ({
  useLanguageContext: () => ({
    t: mockT,
  }),
}));

const mockScrollToSection = vi.fn();

vi.mock("@/utils/utils", () => ({
  scrollToSection: (id: string) => mockScrollToSection(id),
}));

describe("LandingNav", () => {
  it("should render all landing navitems", () => {
    render(<LandingNav />);

    expect(screen.getByText("nav.about")).toBeInTheDocument();
    expect(screen.getByText("nav.skills")).toBeInTheDocument();
    expect(screen.getByText("nav.experience")).toBeInTheDocument();
    expect(screen.getByText("nav.projects")).toBeInTheDocument();
  });

  it("should call scrollToSection with correct id on click", () => {
    render(<LandingNav />);

    fireEvent.click(screen.getByText("nav.about"));
    expect(mockScrollToSection).toHaveBeenCalledWith("about");

    fireEvent.click(screen.getByText("nav.skills"));
    expect(mockScrollToSection).toHaveBeenCalledWith("skills");

    fireEvent.click(screen.getByText("nav.experience"));
    expect(mockScrollToSection).toHaveBeenCalledWith("experience");

    fireEvent.click(screen.getByText("nav.projects"));
    expect(mockScrollToSection).toHaveBeenCalledWith("projects");
  });
});
