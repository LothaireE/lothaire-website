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

    expect(appContent).toBeInTheDocument();

    // pf
    expect(pfLanding).toBeInTheDocument();
    expect(pfGridSection).toBeInTheDocument();
  });
});
