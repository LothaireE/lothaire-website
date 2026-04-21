import { ChevronDown } from "lucide-react"

type ScrollCTAProps = {
  targetId?: string
  label?: string
}

const ScrollCTA = ({ targetId, label }: ScrollCTAProps) => {

  const handleScroll = () => {
    const el = document.getElementById(targetId)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <button
      type="button"
      onClick={handleScroll}
      className="group flex items-end gap-4 transition-opacity duration-200 hover:opacity-70 hover:cursor-pointer"
    >
      {label && <span className="text-[1.1rem] tracking-[-0.04em]">
        {label}
      </span>}
      <ChevronDown className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1" />
    </button>
  )
}

export default ScrollCTA

