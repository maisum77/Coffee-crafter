'use client'

import { useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isVisible, setIsVisible] = useState(false)

  const springConfig = { damping: 28, stiffness: 150 }
  const cursorX = useSpring(mousePosition.x, springConfig)
  const cursorY = useSpring(mousePosition.y, springConfig)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const mouseEnter = () => setIsVisible(true)
    const mouseLeave = () => setIsVisible(false)

    // Check for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setCursorVariant('link')
      } else if (target.tagName === 'IMG' || target.closest('img')) {
        setCursorVariant('image')
      } else {
        setCursorVariant('default')
      }
    }

    const handleMouseDown = () => setCursorVariant('click')
    const handleMouseUp = () => {
      // Return to previous state after click
      const target = document.elementFromPoint(mousePosition.x, mousePosition.y) as HTMLElement
      if (target?.tagName === 'A' || target?.tagName === 'BUTTON' || target?.closest('a') || target?.closest('button')) {
        setCursorVariant('link')
      } else if (target?.tagName === 'IMG' || target?.closest('img')) {
        setCursorVariant('image')
      } else {
        setCursorVariant('default')
      }
    }

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', mouseEnter)
    document.addEventListener('mouseleave', mouseLeave)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', mouseEnter)
      document.removeEventListener('mouseleave', mouseLeave)
    }
  }, [mousePosition.x, mousePosition.y])

  const variants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: 'transparent',
      borderWidth: '1px',
      borderColor: 'rgba(196, 120, 48, 0.6)',
    },
    link: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(196, 120, 48, 0.15)',
      borderWidth: '1.5px',
      borderColor: 'rgba(196, 120, 48, 0.8)',
    },
    image: {
      width: 32,
      height: 32,
      backgroundColor: 'transparent',
      borderWidth: '1px',
      borderColor: 'rgba(196, 120, 48, 0.8)',
    },
    click: {
      width: 8,
      height: 8,
      backgroundColor: 'rgba(196, 120, 48, 0.3)',
      borderWidth: '2px',
      borderColor: 'rgba(196, 120, 48, 1)',
    },
  }

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={cursorVariant}
        variants={variants}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 150,
        }}
      />
      
      {/* Text label for image cursor */}
      {cursorVariant === 'image' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            x: mousePosition.x + 24,
            y: mousePosition.y + 24,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <span className="font-mono text-xs text-cc-copper bg-cc-void/80 px-2 py-1 rounded">
            VIEW
          </span>
        </motion.div>
      )}
    </>
  )
}