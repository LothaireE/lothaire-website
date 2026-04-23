import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import en from "@/locales/en.json";
import ProjectsSection from "@/components/sections/ProjectsSection";
import type { Project } from "@/types/portfolioTypes";

const translations: Record<string, string | Project[]> = {
  "projects.title": en.projects.title,
  "profile.portrait.src": en.profile.portrait.src,
  "profile.portrait.alt": en.profile.portrait.alt,
  "projects.projectList": en.projects.projectList,
  "experience.stackLabel": en.experience.stackLabel,
};

const mockT = vi.fn((key: string) => translations[key] ?? key);

vi.mock("@/context/appContext", () => ({
  useLanguageContext: () => ({
    t: mockT,
    locale: "en",
  }),
}));

describe("Project component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the project section properly", () => {
    render(<ProjectsSection />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Selected projects",
      }),
    ).toBeInTheDocument();

    const projectAmount = en.projects.projectList.length;

    const stackEl = screen.getAllByText("Stack");
    const headers = screen.getAllByRole("heading", {
      level: 3,
    });

    expect(stackEl).length(projectAmount);
    expect(headers.length).toBe(projectAmount);
  });
});
