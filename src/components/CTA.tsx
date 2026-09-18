import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { PawPrint } from 'lucide-react'
import { useRef } from 'react'
import { siteImages } from '../config/siteImages'
import { whatsappLink } from '../config/siteConfig'
import { Reveal } from './Reveal'

export function CTA() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', reduce ? '-12%' : '12%'])

  return (
    <section ref={ref} className="relative overflow-hidden py-28">
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <img
          src={siteImages.cta.src}
          alt={siteImages.cta.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-cocoa-900/70" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sun-400 text-cocoa-900 shadow-card">
            <PawPrint size={30} />
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold text-cream-50 md:text-6xl">
            Seu pet merece esse cuidado
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream-100/90">
            Agende o banho e tosa pelo WhatsApp e deixe seu pet limpo, cheiroso e feliz.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-clay-500 px-9 py-4 text-lg font-bold text-cream-50 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-clay-600"
          >
            Agendar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}