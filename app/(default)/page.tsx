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
import OurModel from '@/components/our-model'
import { NextUIProvider } from '@nextui-org/react';
import WhyKinect from '@/components/whyKinect'

export default function Home() {
  return (
    <NextUIProvider>
        <Hero />
        <FeaturesBlocks />
        {/* <Features /> */}
        {/* <Features02 /> */}
        {/* <Features03 /> */}
        <Target />
        <WhyKinect />
        <TestimonialsHome />
        {/* <PricingSection /> */}
        <OurModel />
    </NextUIProvider>
  )
}
