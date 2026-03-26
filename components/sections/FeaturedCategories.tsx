'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 1,
    number: '01',
    title: 'Espresso Creations',
    description: '7 expressions',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    number: '02',
    title: 'Pour-Over Rituals',
    description: '5 single origins',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    number: '03',
    title: 'Cold Craft Series',
    description: '4 seasonal blends',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
  },
]

export default function FeaturedCategories() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="eyebrow-label mb-4"
          >
            FEATURED CATEGORIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-normal text-h2 text-cc-cream mb-6"
          >
            The Craft in Every Cup
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <Link href={`/menu#${category.title.toLowerCase().replace(' ', '-')}`}>
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-card card-gradient h-[500px] card-hover">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-slow group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${category.image})`,
                      filter: 'brightness(0.4)',
                    }}
                  />

                  {/* Copper Bracket */}
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-slow">
                    <div className="relative">
                      <div className="w-6 h-px bg-cc-copper" />
                      <div className="w-px h-6 bg-cc-copper absolute top-0" />
                    </div>
                  </div>

                  {/* Category Number */}
                  <div className="absolute top-6 right-6">
                    <span className="font-mono text-cc-copper text-xs">
                      {category.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-cc-void/90 to-transparent">
                    <motion.div
                      initial={{ y: 0 }}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      <h3 className="font-display font-normal text-2xl text-cc-cream">
                        {category.title}
                      </h3>
                      <p className="font-body text-cc-fog text-sm">
                        {category.description}
                      </p>
                    </motion.div>

                    {/* Bottom Border Animation */}
                    <div className="mt-6 overflow-hidden">
                      <div className="w-0 h-px bg-cc-copper transition-all duration-slow group-hover:w-full" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-flex items-center text-cc-copper hover:text-cc-gold transition-colors group"
          >
            <span className="font-sub-display text-sm uppercase tracking-wider">
              View Full Menu
            </span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}