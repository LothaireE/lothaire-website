import { useEffect } from "react"

interface SEOHeadProps {
  title: string
  description: string
  image?: string
  url?: string
}

export function SEOHead({ title, description, image, url }: SEOHeadProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null

      if (!element) {
        element = document.createElement("meta")

        if (selector.includes("property")) {
          element.setAttribute("property", selector.split('"')[1])
        } else {
          element.name = selector.split('"')[1]
        }

        document.head.appendChild(element)
      }

      element.content = content
    }

    setMeta('meta[name="description"]', description)

    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    if (image) setMeta('meta[property="og:image"]', image)
    if (url) setMeta('meta[property="og:url"]', url)

    setMeta('meta[name="twitter:card"]', "summary_large_image")
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
    if (image) setMeta('meta[name="twitter:image"]', image)

  }, [title, description, image, url])

  return null
}