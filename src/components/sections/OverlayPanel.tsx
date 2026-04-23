import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type OverlayPanelProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

const OverlayPanel = ({
  isOpen,
  title,
  onClose,
  children,
}: OverlayPanelProps) => {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`absolute inset-0 z-20 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-full z-25 flex justify-center px-4 md:px-6 ">
        <div
          id="legal-overlay-panel"
          className={`pointer-events-auto w-full max-w-5xl transform transition-all duration-500 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-t-[28px] border border-(--border) bg-(--card) text-(--foreground) shadow-2xl">
            <div className="flex items-center justify-between border-b border-(--border) bg-(--card) px-5 py-4 md:px-6">
              <button
                type="button"
                onClick={onClose}
                aria-label={`Close ${title}`}
                className="group flex items-center gap-2 transition-opacity hover:cursor-pointer hover:opacity-70"
              >
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5 md:h-6 md:w-6" />
                <span className="text-[0.78rem] uppercase tracking-[0.08em] text-(--foreground)/70">
                  {title}
                </span>
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto bg-(--card) px-5 py-5 md:px-6 md:py-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayPanel;
