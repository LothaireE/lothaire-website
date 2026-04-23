import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import en from "@/locales/en.json";
import PortfolioGridSection from "@/components/PortfolioGridSection";

const translations: Record<string, string | string[]> = {
  "about.intro": en.about.intro,
  "profile.portrait.src": en.profile.portrait.src,
  "profile.portrait.alt": en.profile.portrait.alt,
  "about.sideText1": en.about.sideText1,
  "about.sideText2": en.about.sideText2,
  "about.sideText3": en.about.sideText3,
  "about.closing": en.about.closing,
};

const mockT = vi.fn((key: string) => translations[key] ?? key);

vi.mock("@/context/appContext", () => ({
  useLanguageContext: () => ({
    t: mockT,
    locale: "en",
  }),
}));

describe("PortfolioGridSection component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the landing section and main content properly", () => {
    render(<PortfolioGridSection />);
  });
});
