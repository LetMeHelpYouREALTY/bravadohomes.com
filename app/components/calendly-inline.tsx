'use client'

import { useEffect, useRef, useState } from 'react'

type CalendlyInlineProps = {
  schedulingUrl: string
  minWidth?: number
  height?: number
  className?: string
}

export function CalendlyInline({
  schedulingUrl,
  minWidth = 320,
  height = 700,
  className = '',
}: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showPlaceholder, setShowPlaceholder] = useState(true)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const check = () => el.querySelector('iframe')
    if (check()) {
      setShowPlaceholder(false)
      return
    }
    const observer = new MutationObserver(() => {
      if (check()) {
        setShowPlaceholder(false)
        observer.disconnect()
      }
    })
    observer.observe(el, { childList: true, subtree: true })
    const timeout = setTimeout(() => setShowPlaceholder(false), 8000)
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [schedulingUrl])

  return (
    <div className="relative" ref={containerRef}>
      <div
        className={`calendly-inline-widget ${className}`}
        data-url={schedulingUrl}
        style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
      />
      {showPlaceholder && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-gray-50 text-sm text-gray-600"
          aria-live="polite"
          aria-busy="true"
          style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
        >
          Loading scheduler…
        </div>
      )}
    </div>
  )
}
