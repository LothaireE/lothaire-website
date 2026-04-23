export const InlineInfoTip = ({
  hoverLabel,
  activeLabel,
  active,
}: {
  hoverLabel: string;
  activeLabel: string;
  active: boolean;
}) => {
  const baseClass =
    "pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap border border-foreground/20  px-2 py-1 text-[11px] uppercase tracking-[0.04em] transition-all bg-foreground/90 text-background backdrop-blur-sm border border-foreground/10";

  const onHoverClassName = `${baseClass} duration-200 ${
    active
      ? "translate-y-1 opacity-0"
      : "translate-y-0 opacity-0 group-hover:opacity-100"
  }`;

  const activeClassName = `${baseClass} duration-300 ${
    active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
  }`;

  return (
    <>
      <span className={onHoverClassName}>{hoverLabel}</span>
      <span aria-live="polite" className={activeClassName}>
        {activeLabel}
      </span>
    </>
  );
};
