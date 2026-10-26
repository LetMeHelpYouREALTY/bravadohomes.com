'use client'

import Script from 'next/script'

/** Loads Calendly widget.js for inline embeds and popup links. */
export function CalendlyWidgetScript() {
  return (
    <Script
      id="calendly-widget-js"
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
    />
  )
}
