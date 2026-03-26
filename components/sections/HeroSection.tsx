'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const heroWords = ['Crafted for', 'Those Who Know', 'the Difference.']

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const progress = Math.min(scrollY / windowHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollProgress * 40}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
          style={{
            filter: 'brightness(0.35) saturate(1.2)',
            transform: `scale(${1 + scrollProgress * 0.1})`,
          }}
        />
        <div className="absolute inset-0 bg-grain-texture opacity-5" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <span className="eyebrow-label">
            DHA LAHORE · EST. 2024
          </span>
        </motion.div>

        {/* Hero Title */}
        <div className="mb-12">
          {heroWords.map((word, index) => (
            <motion.h1
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.15,
                ease: 'easeOut',
              }}
              className="font-display font-light text-hero leading-[0.9] tracking-[-0.02em] text-cc-cream mb-2"
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-cc-parchment text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Specialty coffee sourced from single origins, brewed with ritual precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/menu"
            className="btn-primary group"
          >
            Explore the Menu
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/craft"
            className="btn-secondary group"
          >
            Our Story
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="font-mono text-cc-fog text-xs mb-2">SCROLL</span>
          <div className="relative h-16">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-px h-8 bg-cc-copper"
            />
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-cc-copper/20"
              style={{
                height: `${scrollProgress * 100}%`,
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Copper Line Growth Animation on Scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-cc-copper/30 overflow-hidden">
        <motion.div
          className="h-full bg-cc-copper"
          initial={{ width: '0%' }}
          animate={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </section>
  )
}