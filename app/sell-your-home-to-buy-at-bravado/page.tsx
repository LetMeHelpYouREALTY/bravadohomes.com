import RealScoutHomeValue from '../components/realscout-home-value'
import { CalendlyInline } from '../components/calendly-inline'
import { CalendlyWidgetScript } from '../components/calendly-widget-script'
import { listingConsultationUrl } from '../lib/calendly-url'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl

  return {
    title: 'Sell Your Home to Buy at Bravado | Dr. Jan Duffy',
    description:
      'Planning to sell your current home and purchase at Bravado? Dr. Jan Duffy coordinates listing prep, timing, and your Century Communities purchase in 89031.',
    alternates: {
      canonical: `${baseUrl}/sell-your-home-to-buy-at-bravado`,
    },
    openGraph: {
      title: 'Sell Your Home to Buy at Bravado',
      description:
        'Coordinate your sale and Bravado new-home purchase with independent buyer representation from Dr. Jan Duffy.',
      url: `${baseUrl}/sell-your-home-to-buy-at-bravado`,
      type: 'website',
    },
  }
}

export default async function SellToBuyAtBravadoPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const schedulingUrl = listingConsultationUrl('seller-page-inline')

  return (
    <section>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <CalendlyWidgetScript />

      <div className="hero-gradient text-white py-14 px-8 rounded-lg mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Sell Your Current Home to Buy at Bravado
          </h1>
          <p className="text-xl opacity-95 leading-relaxed">
            Bravado buyers often need to line up a sale before they reserve a Century Communities
            plan. Dr. Jan Duffy helps you price, prepare, and market your existing home while she
            represents you on the Bravado purchase—not the builder&apos;s sales team.
          </p>
        </div>
      </div>

      <div className="content-section mb-12 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How the move-up plan works</h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed list-disc pl-5">
            <li>
              <strong>Clarify the Bravado target:</strong> floor plan, lot preferences, and builder
              timeline at 5060 Wind Springs Street so your sale strategy matches the home you want.
            </li>
            <li>
              <strong>Price and position your listing:</strong> prep guidance, marketing outline,
              and negotiation support focused on net proceeds—not guesswork.
            </li>
            <li>
              <strong>Coordinate contingencies:</strong> align inspection, appraisal, and closing
              dates so you are not carrying two mortgages longer than necessary.
            </li>
            <li>
              <strong>Stay represented on the new build:</strong> independent advice on options,
              deposits, and walk-throughs while Century Communities constructs your Bravado home.
            </li>
          </ul>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Questions before you list? Call{' '}
            <a href="tel:+17025001955" className="text-blue-600 font-semibold">
              (702) 500-1955
            </a>{' '}
            or email{' '}
            <a href={`mailto:${email}`} className="text-blue-600 font-semibold">
              {email}
            </a>
            . Urgent timing:{' '}
            <a href="tel:+17022221964" className="text-blue-600 font-semibold">
              (702) 222-1964
            </a>
            .
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What&apos;s my home worth?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Use the Bravado-area valuation tool for a starting point. Dr. Jan will review comps and
            your Bravado plan on a listing consultation—no instant-value promises.
          </p>
          <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
        </div>
      </div>

      <div className="content-section mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Schedule a Bravado listing consultation
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          Pick a time to map your sale timeline, Bravado floor plan, and next steps. You will meet
          with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.
        </p>
        <CalendlyInline schedulingUrl={schedulingUrl} />
        <p className="text-center mt-6">
          <a
            href={listingConsultationUrl('seller-page-cta')}
            className="text-blue-600 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open scheduler in a new tab
          </a>
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 text-sm text-gray-700 leading-relaxed">
        <p className="mb-2">
          <strong>Brokerage:</strong> Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada
          Properties. Nevada real estate license S.0197614.LLC.
        </p>
        <p className="mb-2">
          <strong>MLS / listing data:</strong> MLS listings displayed on this site are provided by
          participating brokers and are deemed reliable but not guaranteed. Dr. Jan Duffy is not
          affiliated with or endorsed by Century Communities.
        </p>
        <p>Equal Housing Opportunity.</p>
      </div>
    </section>
  )
}
