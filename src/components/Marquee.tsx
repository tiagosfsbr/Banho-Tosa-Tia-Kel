import { motion } from 'framer-motion'

const items = ['Banho', 'Tosa', 'Pet friendly', 'Com carinho', 'Banho + Tosa', 'Seu pet feliz']

export function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-cream-200 bg-clay-500 py-4">
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap font-display text-xl font-bold uppercase tracking-wide text-cream-50"
          >
            {item}
            <span className="text-cream-200/70">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}