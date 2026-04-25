import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FooterSection from "@/components/footer/FooterSection";
import { type LegalSection } from "@/types/portfolioTypes";

const setupRender = (openSection: LegalSection | null = null) => {
  const onFooterClick = vi.fn();

  render(<FooterSection openSection={openSection} onFooterClick={onFooterClick} />);

  return {
    onFooterClick,
  };
};

describe("FooterSection component", () => {
  it("should render footer component", () => {
    setupRender();

    const impressumBtn = screen.getByRole("button", {
      name: "impressum",
    });

    const privacyBtn = screen.getByRole("button", {
      name: "privacy",
    });

    expect(screen.getByText("© 2026 Lothaire")).toBeInTheDocument();
    expect(impressumBtn).toBeInTheDocument();
    expect(privacyBtn).toBeInTheDocument();
  });

  it("should call onFooterClick with correct id when clicking", async () => {
    const { onFooterClick } = setupRender();

    const impressumBtn = screen.getByRole("button", {
      name: "impressum",
    });

    const privacyBtn = screen.getByRole("button", {
      name: "privacy",
    });

    fireEvent.click(impressumBtn);
    expect(onFooterClick).toHaveBeenCalledWith("impressum");

    fireEvent.click(privacyBtn);
    expect(onFooterClick).toHaveBeenCalledWith("privacy");
  });
});
