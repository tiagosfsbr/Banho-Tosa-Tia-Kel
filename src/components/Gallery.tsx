import { motion } from 'framer-motion'
import { siteImages } from '../config/siteImages'
import { Reveal } from './Reveal'

const gallery = [
  siteImages.gallery1,
  siteImages.gallery2,
  siteImages.gallery3,
  siteImages.gallery4,
]

export function Gallery() {
  return (
    <section id="galeria" className="bg-cream-100 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-clay-500">Galeria</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-cocoa-900 md:text-5xl">
            Pets felizes por aqui
          </h2>
          <p className="mt-4 text-lg text-cocoa-600">
            Momentos de carinho e cuidado com os pets que passam por aqui.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal key={i} delay={i * 0.08} className={i % 2 === 1 ? 'md:mt-10' : ''}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-3xl shadow-card"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}