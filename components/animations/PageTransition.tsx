'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          },
          animate: {
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: {
              duration: 0.4,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.1,
            },
          },
          exit: {
            opacity: 0,
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            transition: {
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}