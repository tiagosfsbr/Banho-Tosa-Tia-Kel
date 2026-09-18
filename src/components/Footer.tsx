import { MapPin, PawPrint, Phone } from 'lucide-react'
import { siteConfig, whatsappLink } from '../config/siteConfig'

export function Footer() {
  return (
    <footer className="bg-cocoa-900 text-cream-100">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#topo" className="flex items-center gap-2 font-display text-2xl font-bold text-cream-50">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-clay-500 text-cream-50">
                <PawPrint size={18} />
              </span>
              TIA KEL<span className="text-clay-400">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/80">
              {siteConfig.tagline} Banho e tosa com carinho para o seu pet, no João Costa, Joinville.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-cream-50">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream-200/80 transition-colors hover:text-clay-300"
                >
                  <Phone size={16} className="text-clay-400" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-cream-200/80 transition-colors hover:text-clay-300"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0 text-clay-400" />
                  {siteConfig.address}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-cream-50">Atendimento</h3>
            <p className="mt-4 text-sm text-cream-200/80">
              {siteConfig.hours
                ? siteConfig.hours
                : 'Horário de funcionamento a confirmar. Chame no WhatsApp para agendar.'}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-clay-500 px-6 py-3 text-sm font-bold text-cream-50 transition-all hover:-translate-y-0.5 hover:bg-clay-600"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cocoa-700 pt-6 text-xs text-cream-200/60 md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Nota {siteConfig.rating.score}/5 · {siteConfig.rating.total} avaliações no Google</p>
        </div>
      </div>
    </footer>
  )
}