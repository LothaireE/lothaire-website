import { useState, useEffect, type RefObject } from "react";
import { ChevronUp } from "lucide-react"
import { gridSectionId } from "./PortfolioGridSection";

type BackToTopButtonProps = {
  targetRef: RefObject<HTMLElement | null>
}
const BackToTopButton = ({ targetRef }: BackToTopButtonProps) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById(gridSectionId)

    if (!scrollContainer) return

    const onScroll = () => {
      setVisible(scrollContainer.scrollTop > 124)
    }

    onScroll()
    scrollContainer.addEventListener("scroll", onScroll)

    return () => scrollContainer.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => targetRef.current?.scrollTo({ top: 0, behavior: "smooth" })
  


  return (
    <button
      onClick={scrollToTop}
      className={`hover:cursor-pointer fixed bottom-6 right-6 z-50 bg-foreground rounded-full px-2 py-2 text-sm font-medium shadow-lg transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >

      <span className="text-[1.4rem] text-foreground transition-transform duration-300 group-hover:-translate-y-1">
        <ChevronUp/>
      </span>
    </button>
  );
}

export default BackToTopButton;