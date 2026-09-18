import { MapPin, Navigation } from 'lucide-react'
import { siteConfig, whatsappLink } from '../config/siteConfig'
import { Reveal } from './Reveal'

export function Location() {
  return (
    <section id="onde" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-600">Onde ficamos</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-cocoa-900 md:text-5xl">
            Fácil de chegar, no João Costa
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-center rounded-3xl bg-white p-8 shadow-card">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-100 text-teal-600">
                <MapPin size={26} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-cocoa-900">Endereço</h3>
              <p className="mt-3 text-lg text-cocoa-600">{siteConfig.address}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-bold text-cream-50 transition-colors hover:bg-teal-600"
                >
                  <Navigation size={16} />
                  Como chegar
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa-800 px-6 py-3 text-sm font-bold text-cocoa-800 transition-colors hover:bg-cocoa-800 hover:text-cream-50"
                >
                  Confirmar horário
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-card">
              <iframe
                title="Mapa — Banho e Tosa Tia Kel"
                src="https://www.google.com/maps?q=R.%20Santa%20Izabel%2C%20354%20-%20Jo%C3%A3o%20Costa%2C%20Joinville%20-%20SC&output=embed"
                className="h-full min-h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}