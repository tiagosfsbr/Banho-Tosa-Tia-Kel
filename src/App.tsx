import { About } from './components/About'
import { CTA } from './components/CTA'
import { FAQ } from './components/FAQ'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}