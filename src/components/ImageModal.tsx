import { useEffect } from "react"
import type { ProjectImage } from "@/types/portfolioTypes"
import { ChevronLeft, ChevronRight  } from "lucide-react"


type ImageModalProps = {
  images: ProjectImage[]
  activeIndex: number
  open: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const ImageModal = ({
  images,
  activeIndex,
  open,
  onClose,
  onPrev,
  onNext,
}: ImageModalProps) => {
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowLeft") onPrev()
      if (event.key === "ArrowRight") onNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, onClose, onPrev, onNext])

  if (!open) return null

  const activeImage = images[activeIndex]

  const currentRange = String(activeIndex + 1).padStart(2, "0") + "/" + String(images.length).padStart(2, "0")

  return (
    <div 
    className="h-full fixed inset-0 z-100 bg-background/80 backdrop-blur-[1px] text-foreground"
    >
      <button
        type="button"
        aria-label="Close lightbox"
        onClick={onClose}
        className="absolute inset-0 z-0 cursor-zoom-out hover:cursor-pointer"
      />
      <div className="relative z-10 flex h-full w-full flex-col">
        <div className="flex items-center justify-between px-6 py-4 sm:px-8 md:px-10">
          <p className="text-[13px] uppercase tracking-[0.04em] text-foreground/60">
            {currentRange}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-[15px] tracking-[-0.03em] text-foreground/80 transition-opacity duration-200 hover:opacity-60  hover:cursor-pointer"
          >
            Close
          </button>
        </div>
        <div className="relative flex min-h-0 flex-1 items-center justify-center px-6 pb-6 sm:px-8 md:px-10">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous image"
            className="absolute left-6 z-100 text-[2rem] leading-none tracking-[-0.08em] text-foreground/70 transition-opacity duration-200 hover:opacity-60 sm:left-8 md:left-10"
          >
            <ChevronLeft className="h-10 w-10 hover:cursor-pointer"/>
          </button>
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-6 z-100 text-[2rem] leading-none tracking-[-0.08em] text-foreground/70 transition-opacity duration-200 hover:opacity-60 sm:right-8 md:right-10"
          >
            <ChevronRight className="h-10 w-10 hover:cursor-pointer" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 px-6 pb-4 sm:px-8 md:px-10">
          {images.map((image, index) => {
            const isActive = index === activeIndex
            const activeClassName = `h-0.5 w-10 transition-opacity duration-200 ${isActive ? "bg-foreground" : "bg-foreground/20"}`
            return (
              <div
                key={image.id}
                className={activeClassName}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ImageModal