'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const quote = "Coffee is not a drink. It is a language spoken between craft and patience."

export default function StatementSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const words = quote.split(' ')

  return (
    <section ref={ref} className="bg-cc-espresso py-32 md:py-48 relative">
      <div className="container-custom">
        {/* Decorative Lines */}
        <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 hidden md:block">
          <div className="w-40 h-px bg-cc-copper" />
        </div>
        <div className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2 hidden md:block">
          <div className="w-40 h-px bg-cc-copper" />
        </div>

        {/* Quote */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.blockquote
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.1,
                },
              },
            }}
            className="font-display font-light italic text-3xl md:text-5xl lg:text-6xl text-cc-cream leading-tight mb-8"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  },
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.blockquote>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center space-x-4"
          >
            <div className="w-12 h-px bg-cc-copper/50" />
            <span className="font-sub-display text-cc-copper text-sm uppercase tracking-widest">
              — CoffeeCraft
            </span>
            <div className="w-12 h-px bg-cc-copper/50" />
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cc-copper/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-cc-copper/20 rounded-full" />
      </div>
    </section>
  )
}