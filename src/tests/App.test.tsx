import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "@/App";
// import PortfolioLanding from "@/components/PortfolioLanding";
// import PortfolioGridSection from "@/components/PortfolioGridSection";

describe("App page", () => {
  it("should render all components", () => {
    render(<App />);

    const appContent = screen.getByTestId("main-component");

    const pfLanding = screen.getByTestId("portfolio-landing");
    const pfGridSection = screen.getByTestId("portfolio-grid-section");

    const about = screen.getByTestId("about");
    const skills = screen.getByTestId("skills");
    const experience = screen.getByTestId("experience");
    const projects = screen.getByTestId("projects");

    expect(appContent).toBeInTheDocument();

    // pf
    expect(pfLanding).toBeInTheDocument();
    expect(pfGridSection).toBeInTheDocument();

    // sections
    expect(about).toBeInTheDocument();
    expect(skills).toBeInTheDocument();
    expect(experience).toBeInTheDocument();
    expect(projects).toBeInTheDocument();
  });
});
