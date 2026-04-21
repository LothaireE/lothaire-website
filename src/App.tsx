

import PortfolioLanding from './components/PortfolioLanding'
import PortfolioGridSection from './components/PortfolioGridSection'
import { SEOHead } from './components/SEOHead'

function App() {


  return (
    <>
     <SEOHead
      title="Lothaire Epee | Full-Stack Developer"
      description="Lothaire Epee's portfolio: a full-stack developer specializing in web applications, user interface design, and digital products. Explore his projects, skills, and experience."
      image="/preview.png"
      url="https://lothaire-epee.com"
    />
    <main data-testid='main-component' className="min-h-screen w-full overflow-x-hidden bg-background text-foreground flex flex-col md:flex-row lg:h-screen lg:overflow-hidden">
      <section className="min-h-screen w-full lg:h-screen lg:w-1/2">
        <PortfolioLanding />
      </section>

      <section className="min-h-screen w-full lg:h-screen lg:w-1/2">
        <PortfolioGridSection />
      </section>
    </main>
    </>
  )
}

export default App

