import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { PawPrint, Star } from 'lucide-react'
import { useRef } from 'react'
import { siteConfig, whatsappLink } from '../config/siteConfig'
import { siteImages } from '../config/siteImages'

const line = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: '0%',
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '16%'])
  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-10%'])

  return (
    <section id="topo" ref={ref} className="relative min-h-screen overflow-hidden bg-cream-50">
      {/* Elementos decorativos */}
      <motion.div
        style={{ y: blobY }}
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-blob bg-clay-300/30 blur-2xl"
      />
      <motion.div
        style={{ y: blobY }}
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-blob bg-teal-300/30 blur-2xl"
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pb-16 pt-28 md:grid-cols-2 md:px-8">
        {/* Texto */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-card"
          >
            <span className="flex items-center gap-0.5 text-sun-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </span>
            <span className="text-sm font-bold text-cocoa-700">
              {siteConfig.rating.score}/5 · {siteConfig.rating.total} avaliações no Google
            </span>
          </motion.div>

          <h1 className="font-display leading-[0.95] text-cocoa-900">
            <span className="block overflow-hidden">
              <motion.span
                custom={0}
                variants={line}
                initial="hidden"
                animate="show"
                className="block text-5xl font-extrabold md:text-7xl"
              >
                BANHO E TOSA
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                custom={1}
                variants={line}
                initial="hidden"
                animate="show"
                className="block text-5xl font-extrabold text-clay-500 md:text-7xl"
              >
                COM CARINHO
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                custom={2}
                variants={line}
                initial="hidden"
                animate="show"
                className="block text-5xl font-extrabold md:text-7xl"
              >
                PRA SEU PET<span className="text-teal-500">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-cocoa-600"
          >
            {siteConfig.tagline} Atendimento acolhedor e pet friendly no João Costa, em Joinville. Seu pet sai limpo, cheiroso e feliz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-7 py-4 text-base font-bold text-cream-50 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-clay-600"
            >
              <PawPrint size={20} />
              Agendar banho e tosa
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa-800 px-7 py-4 text-base font-bold text-cocoa-800 transition-colors hover:bg-cocoa-800 hover:text-cream-50"
            >
              Ver serviços
            </a>
          </motion.div>
        </div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div style={{ y: imgY }} className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-soft">
              <img
                src={siteImages.hero.src}
                alt={siteImages.hero.alt}
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-card">
              <p className="font-display text-2xl font-extrabold text-clay-500">Pet friendly</p>
              <p className="text-sm font-semibold text-cocoa-600">e divertido</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}