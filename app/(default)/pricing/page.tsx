export const metadata = {
  title: 'Pricing - Tidy',
  description: 'Page description',
}

import Hero from '@/components/hero-pricing'
import CtaPricing from '@/components/cta-pricing'
import Features from '@/components/features-pricing'
import FeaturesTable from '@/components/features-table'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta-dark'
import Features03 from '@/components/features-home-03'
import TestimonialsPricing from '@/components/testimonials-pricing'

export default function Pricing() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      {/* <FeaturesTable /> */}
      <Faqs />
      <Features03 />
      <CtaPricing />
      <TestimonialsPricing/>
      {/* <Cta /> */}
    </>
  )
}
