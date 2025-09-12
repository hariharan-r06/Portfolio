"use client"

import { useState, useEffect, useRef } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)
  const ticking = useRef(false)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY

      if (scrollY > lastScrollY && scrollY > 100) {
        setScrollDirection('down')
      } else if (scrollY < lastScrollY) {
        setScrollDirection('up')
      }

      setLastScrollY(scrollY)
      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollDirection)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollY])

  return scrollDirection
}

export function useDirectionalInView(ref: React.RefObject<HTMLElement>, margin = '-100px') {
  const [isInView, setIsInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const scrollDirection = useScrollDirection()
  const ticking = useRef(false)

  useEffect(() => {
    const updateInView = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const marginValue = parseInt(margin.replace('-', '').replace('px', ''))
      
      const inView = rect.top <= windowHeight - marginValue && rect.bottom >= 0

      if (inView && !hasAnimated && scrollDirection === 'down') {
        setIsInView(true)
        setHasAnimated(true)
      } else if (inView && hasAnimated) {
        setIsInView(true)
      } else if (!inView) {
        setIsInView(false)
      }

      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateInView)
        ticking.current = true
      }
    }

    // Initial check
    updateInView()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ref, margin, hasAnimated, scrollDirection])

  return isInView
}
