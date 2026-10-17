import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl

  return {
    title: 'Century Connect Automation Guide | Smart Home Features in Las Vegas',
    description:
      'Explore Century Connect automation features including energy savings, voice control, and smart routines for North Las Vegas new construction homes.',
    alternates: {
      canonical: `${baseUrl}/smart-home-technology/automation-guide`,
    },
    openGraph: {
      title: 'Century Connect Automation Guide',
      description:
        'A focused guide to smart energy control, voice integration, and automation routines in Century Connect homes.',
      url: `${baseUrl}/smart-home-technology/automation-guide`,
      type: 'article',
    },
  }
}

export default async function AutomationGuidePage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const agentName = config.realEstateAgent?.name || 'Dr. Jan Duffy'

  return (
    <section>
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Century Connect Automation Guide</h1>
          <p className="text-2xl mb-4">
            Smart energy controls, voice assistants, and daily home routines.
          </p>
          <p className="text-xl opacity-90">{agentName} | Smart Home Guidance</p>
        </div>
      </div>

      <div className="content-section mb-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Energy Efficiency and Cost Control</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Smart thermostat scheduling, lighting automation, and usage monitoring can reduce energy waste while
              keeping comfort consistent throughout the day.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>- Remote climate control and schedule tuning</li>
              <li>- Lighting scenes for occupancy and time-of-day</li>
              <li>- Usage tracking for practical monthly savings</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Voice Control and Smart Routines</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Voice assistants and automation routines simplify daily tasks and create predictable home behavior.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>- Voice-triggered lighting and temperature commands</li>
              <li>- Morning and evening routine presets</li>
              <li>- Custom automation scenes for security and convenience</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Implementation Tip for Buyers</h2>
          <p className="text-gray-700 leading-relaxed">
            Ask for a walkthrough of the automation app during your tour and request example routines before close.
            That reduces setup friction and helps you use the system effectively from day one.
          </p>
        </div>
      </div>
    </section>
  )
}
