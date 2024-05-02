export const metadata = {
  title: 'Home - Tidy',
  description: 'Page description',
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/features-blocks'
import Features from '@/components/features-home'
import Features02 from '@/components/features-home-02'
import Features03 from '@/components/features-home-03'
import Target from '@/components/target'
import TestimonialsHome from '@/components/testimonials-home'
import PricingSection from '@/components/pricing'
import Cta from '@/components/cta'
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
        <Hero />
        <FeaturesBlocks />
        {/* <Features /> */}
        {/* <Features02 /> */}
        <Features03 />
        <TestimonialsHome />
        <Target />
        {/* <PricingSection /> */}
        <Cta />
    </NextUIProvider>
  )
}
