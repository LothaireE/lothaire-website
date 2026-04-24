import { useState } from "react";
import { useTheme } from "next-themes";
import { useLanguageContext } from "@/context/appContext";

type DropdownProps = {
  label: string;
  value: string;
  options: { label: string; value: string; onSelect: () => void }[];
};

const ItemDropdown = ({ label, value, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const arrowClassName = `text-[1rem] transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`;
  const itemClassName = `grid overflow-hidden transition-all duration-200 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`;

  return (
    <div
      className="relative w-full border-b border-foreground/20"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-2 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-[0.85rem] uppercase tracking-[0.04em] text-foreground/55">
          {label}
        </span>

        <span className="flex items-center gap-3">
          <span className="text-[1rem] tracking-[-0.04em] text-foreground">{value}</span>
          <span className={arrowClassName}>↓</span>
        </span>
      </button>

      <div className={itemClassName}>
        <div className="overflow-hidden">
          <div className="pb-2 pt-1">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={option.onSelect}
                className="hover:cursor-pointer block py-1 text-left text-[0.95rem] tracking-[-0.03em] text-foreground/72 transition-opacity duration-150 hover:opacity-60"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsMenu = () => {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useLanguageContext();

  const currentLanguageLabel = locale === "fr" ? "Français" : "English";
  const currentThemeLabel = theme === "dark" ? "Dark" : "Light";

  return (
    <div className="w-full max-w-55 space-y-2">
      <ItemDropdown
        label="Language"
        value={currentLanguageLabel}
        options={[
          {
            label: "Français",
            value: "fr",
            onSelect: () => setLocale("fr"),
          },
          {
            label: "English",
            value: "en",
            onSelect: () => setLocale("en"),
          },
        ]}
      />

      <ItemDropdown
        label="Theme"
        value={currentThemeLabel}
        options={[
          {
            label: "Light",
            value: "light",
            onSelect: () => setTheme("light"),
          },
          {
            label: "Dark",
            value: "dark",
            onSelect: () => setTheme("dark"),
          },
        ]}
      />
    </div>
  );
};

export default SettingsMenu;
