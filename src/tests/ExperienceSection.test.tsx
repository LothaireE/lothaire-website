import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import en from "@/locales/en.json";
import ExperienceSection from "@/components/sections/ExperienceSection";
import type { SingleExperienceItem } from "@/types/portfolioTypes";



const translations: Record<string, string | SingleExperienceItem[]> = {
  "experience.title": en.experience.title,
  "experience.intro": en.experience.intro,
  "profile.portrait.src": en.profile.portrait.src,
  "profile.portrait.alt": en.profile.portrait.alt,
  "experience.stackLabel": en.experience.stackLabel,
  "experience.experienceList" : en.experience.experienceList,
  // "experience.stackLabel": en.experience.stackLabel,
  // "experience.sideText2": en.experience.sideText2,
  // "experience.sideText3": en.experience.sideText3,
  
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
        render(<ExperienceSection />);

        expect(screen.getByRole("heading", {
            level: 2,
            name: "Experience and career path",
            })).toBeInTheDocument()    

        // expect(screen.getByRole("img", { name: "Lothaire Epee's portrait" })).toBeInTheDocument()    
        const stackEl = screen.getAllByText("Stack")
        expect(stackEl).length(3);

        expect(screen.getByRole("heading", {
            level: 3,
            name: "Freelance Developer",
            })).toBeInTheDocument()
        expect(screen.getByRole("heading", {
            level: 3,
            name: "Full-Stack Developer",
            })).toBeInTheDocument()  
        expect(screen.getByRole("heading", {
            level: 3,
            name: "Developer Conceptor",
            })).toBeInTheDocument()  

    });

});
