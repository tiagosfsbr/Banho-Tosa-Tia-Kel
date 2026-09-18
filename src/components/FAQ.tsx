import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { whatsappLink } from '../config/siteConfig'
import { Reveal } from './Reveal'

const faqs = [
  {
    q: 'Como agendo um banho e tosa?',
    a: 'É simples: é só chamar no WhatsApp e combinar o melhor horário para o seu pet.',
  },
  {
    q: 'Onde fica o pet shop?',
    a: 'Ficamos na R. Santa Izabel, 354 - João Costa, Joinville - SC. É só chamar no WhatsApp para confirmar o endereço e o horário.',
  },
  {
    q: 'Quais serviços são oferecidos?',
    a: 'Oferecemos banho, tosa e o combo banho + tosa. Para serviços complementares, entre em contato e confirmamos a disponibilidade.',
  },
  {
    q: 'O atendimento é pet friendly?',
    a: 'Sim! Nosso espaço é pet friendly e divertido, pensado para que o seu pet se sinta confortável e acolhido.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-cream-100 py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-clay-500">Dúvidas</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-cocoa-900 md:text-5xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-card">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-bold text-cocoa-900">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-clay-500"
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-5 leading-relaxed text-cocoa-600">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-cocoa-600">Ainda tem dúvidas?</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-bold text-clay-500 underline underline-offset-4 hover:text-clay-600"
          >
            Fale com a gente no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}