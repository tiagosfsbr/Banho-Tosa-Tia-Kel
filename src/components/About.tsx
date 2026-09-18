import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Heart, PawPrint } from 'lucide-react'
import { useRef } from 'react'
import { siteImages } from '../config/siteImages'
import { Reveal } from './Reveal'

export function About() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', reduce ? '-8%' : '8%'])

  return (
    <section id="sobre" ref={ref} className="overflow-hidden bg-cream-50 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <Reveal className="relative order-2 md:order-1">
          <div className="overflow-hidden rounded-[2.5rem] shadow-soft">
            <motion.img
              style={{ y: imgY, scale: 1.15 }}
              src={siteImages.about.src}
              alt={siteImages.about.alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -right-4 -top-4 grid h-20 w-20 place-items-center rounded-full bg-sun-400 text-cocoa-900 shadow-card">
            <PawPrint size={34} />
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-600">Sobre a Tia Kel</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-cocoa-900 md:text-5xl">
              Seu pet tratado com <span className="text-clay-500">muito carinho</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-cocoa-600">
              A Banho e Tosa Tia Kel é um espaço pet friendly e divertido, no bairro João Costa, em
              Joinville. Aqui, cada pet é recebido com paciência e atenção, para que o banho e a tosa
              sejam uma experiência tranquila e agradável.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cocoa-600">
              Nosso objetivo é que seu pet saia limpo, cheiroso e feliz — e que você tenha a
              tranquilidade de deixá-lo em boas mãos.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-teal-100/60 p-5">
              <Heart size={26} className="shrink-0 text-teal-600" />
              <p className="font-semibold text-cocoa-800">
                Atendimento pet friendly, pensado para o bem-estar do seu pet.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}