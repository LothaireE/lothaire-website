import { useEffect, useState } from "react"

type ScrollProgressProps = {
  containerId: string
}

const ScrollProgress = ({ containerId }: ScrollProgressProps) => {

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = document.getElementById(containerId)

    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight - container.clientHeight
      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      setProgress(ratio)
    }

    container.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [containerId])

  return (
    <div className="pointer-events-none fixed right-4 top-0 h-full w-2 bg-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div
        className="w-full bg-foreground/60 transition-all duration-150"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  )
}

export default ScrollProgress