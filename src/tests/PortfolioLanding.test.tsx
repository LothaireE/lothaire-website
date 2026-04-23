import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import en from "@/locales/en.json";
import PortfolioLanding from "@/components/PortfolioLanding";

const translations: Record<string, string | string[]> = {
  "profile.firstname": en.profile.firstname,
  "profile.lastname": en.profile.lastname,
  "profile.profession": en.profile.profession,
  "profile.locations": en.profile.locations,
  "profile.phone": en.profile.phone,
  "profile.email": en.profile.email,
  "landing.locationLabel": en.landing.locationLabel,
  "nav.about": en.nav.about,
  "nav.skills": en.nav.skills,
  "nav.experience": en.nav.experience,
  "nav.projects": en.nav.projects,
};

const mockT = vi.fn((key: string) => translations[key] ?? key);

vi.mock("@/context/appContext", () => ({
  useLanguageContext: () => ({
    t: mockT,
    locale: "en",
  }),
}));

vi.mock("@/components/common/SeoHead", () => ({
  SeoHead: () => <div data-testid="seo-head" />,
}));

describe("PortfolioLanding component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("rendering", () => {
    it("should render the landing section and main content properly", () => {
      render(<PortfolioLanding />);

      expect(screen.getByTestId("portfolio-landing")).toBeInTheDocument();

      expect(screen.getByText("Language")).toBeInTheDocument();
      expect(screen.getByText("Theme")).toBeInTheDocument();

      expect(
        screen.getByRole("heading", {
          level: 1,
          name: /Lothaire/i,
        }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          level: 1,
          name: /Epee/i,
        }),
      ).toBeInTheDocument();

      expect(screen.getByText("About")).toBeInTheDocument();
      expect(screen.getByText("Skills and Expertise")).toBeInTheDocument();
      expect(screen.getByText("Experience")).toBeInTheDocument();
      expect(screen.getByText("Selected projects")).toBeInTheDocument();

      expect(screen.getByText("Based in")).toBeInTheDocument();
      expect(screen.getByText("Paris - Berlin")).toBeInTheDocument();

      expect(screen.getByText("+33 6 98 07 19 53")).toBeInTheDocument();
      expect(screen.getByText("lothaire.epee@gmail.com")).toBeInTheDocument();
    });
  });
});
