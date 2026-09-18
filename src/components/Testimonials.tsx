import { ExternalLink, Star, UserRound } from 'lucide-react'
import { rating } from '../data/testimonials'
import { siteConfig } from '../config/siteConfig'
import { Reveal } from './Reveal'

export function Testimonials() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-600">Prova social</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-cocoa-900 md:text-5xl">
            Quem confia, recomenda
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-white p-8 shadow-card">
            <div className="flex items-center justify-center gap-1 text-sun-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} fill="currentColor" />
              ))}
            </div>
            <p className="mt-4 font-display text-6xl font-extrabold text-cocoa-900">
              {rating.score}
              <span className="text-2xl text-cocoa-500">/5</span>
            </p>
            <p className="mt-2 text-lg font-semibold text-cocoa-600">
              {rating.total} {rating.label}
            </p>
            
            {/* Thiago's review */}
            <div className="mt-8 rounded-3xl bg-white p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    aria-label="Avatar de Thiago Cavalheiro"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-clay-300 bg-clay-100 text-clay-600"
                  >
                    <UserRound size={23} />
                  </span>
                  <div className="text-sm font-semibold text-cocoa-800">
                    Thiago Cavalheiro
                  </div>
                  <div className="text-xs text-cocoa-600">
                    Local Guide · 35 avaliações · 14 fotos
                  </div>
                </div>
                <time className="text-xs text-cocoa-500">
                  editado 3 anos atrás
                </time>
              </div>
              <p className="mt-4 text-lg text-cocoa-600">
                Ótimo lugar, sempre levo meus 5 cães ali, todos eles sempre bem tratados e muito bem cuidados! Sem contar os produtos de qualidade que são usados... Recomendo! 👏🏻👏🏻👏🏻 Sem contar serviço de extrema qualidade e preço muito justo! …
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <a href="#" className="text-cocoa-500 hover:text-cocoa-700">
                  Compartilhar
                </a>
                <a href="#" className="text-cocoa-500 hover:text-cocoa-700">
                  Curtir
                </a>
              </div>
            </div>
            
            <div className="mt-12">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-teal-500 px-6 py-3 text-sm font-bold text-teal-600 transition-colors hover:bg-teal-500 hover:text-cream-50"
              >
                Ver avaliações no Google
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}