import { ChevronUp } from "lucide-react";
import { useIsInView } from "@/hooks/useIsInView";
import { scrollToSection } from "@/utils/utils";
import { topSentinelId } from "./PortfolioGridSection";

const BackToTopButton = () => {
  const isInView = useIsInView(topSentinelId);

  const HandleClick = () => scrollToSection(topSentinelId);

  const buttonClassname = `hover:cursor-pointer fixed bottom-25 right-6 z-50 rounded-full px-2 py-2 text-sm font-medium shadow-lg transition-all duration-300 ${isInView ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}`;

  return (
    <button data-testid="back-to-top-button" onClick={HandleClick} className={buttonClassname}>
      <span className="text-[1.4rem] text-foreground transition-transform duration-300 group-hover:-translate-y-1">
        <ChevronUp />
      </span>
    </button>
  );
};

export default BackToTopButton;
