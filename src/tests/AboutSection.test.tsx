import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import en from "@/locales/en.json";
import AboutSection from "@/components/sections/AboutSection";



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


describe("About component", () => {

    beforeEach(() => {
    vi.clearAllMocks();
    });

    it("should render the about section properly", () => {
        render(<AboutSection />);

        expect(screen.getByRole("heading", {
            level: 2,
            name: "A confident developer with 5+ years of experience in professional development",
            })).toBeInTheDocument()

        expect(screen.getByRole("img", { name: "Lothaire Epee's portrait" })).toBeInTheDocument()    

        expect(screen.getByText("I have contributed to the development of SaaS platforms in the renewable energy sector, as well as to a large-scale survey management system as part of a European open-source project. These experiences allowed me to work on data-driven applications and complex systems used in real-world contexts.")).toBeInTheDocument();
        expect(screen.getByText("In addition, I have built commercial websites and solutions for private clients, adapting to specific needs and delivering practical, user-oriented results.")).toBeInTheDocument();
        expect(screen.getByText("My focus is on writing clean, well-tested code and our following industry's best practices. I keep learning and enjoy solving technical challenges. My goal is to improve the product and to deliver a better experience for both clients and end users.")).toBeInTheDocument();
        
        expect(screen.getByText("Throughout my career, I have maintained a consistent direction, aiming to contribute to meaningful projects")).toBeInTheDocument();

    });

});
