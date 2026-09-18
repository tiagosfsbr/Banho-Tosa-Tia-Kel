import { Droplets, Heart, MapPin, Scissors, Sparkles } from 'lucide-react'
import { benefits, services } from '../data/services'
import { Reveal } from './Reveal'
import { whatsappLink } from '../config/siteConfig'

const iconMap: Record<string, typeof Droplets> = {
  droplets: Droplets,
  scissors: Scissors,
  sparkles: Sparkles,
  heart: Heart,
  'hand-heart': Heart,
  'map-pin': MapPin,
}

export function Services() {
  return (
    <section id="servicos" className="bg-cream-100 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-clay-500">Nossos serviços</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-cocoa-900 md:text-5xl">
            Cuidado completo para o seu pet
          </h2>
          <p className="mt-4 text-lg text-cocoa-600">
            Banho e tosa feitos com paciência, produtos adequados e muito carinho.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles
            return (
              <Reveal key={service.id} delay={i * 0.1}>
                <div className="group h-full rounded-3xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-clay-100 text-clay-500 transition-colors group-hover:bg-clay-500 group-hover:text-cream-50">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-cocoa-900">
                    {service.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-cocoa-600">{service.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-clay-500 px-8 py-4 text-base font-bold text-cream-50 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-clay-600"
          >
            Agendar pelo WhatsApp
          </a>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] ?? Heart
            return (
              <Reveal key={benefit.title} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-cocoa-900">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cocoa-600">{benefit.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}