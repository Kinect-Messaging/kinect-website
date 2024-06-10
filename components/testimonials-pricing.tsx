import Image from 'next/image'
import FeaturesImage01 from '@/public/images/features-home-3-01.jpg'
import FeaturesImage02 from '@/public/images/features-home-3-02.jpg'
import FeaturesImage03 from '@/public/images/features-home-3-03.jpg'
import KidVantageLogo from '@/public/images/KidVantage_logo.jpg'

export default function TestimonialsPricing() {
  return (
    <section className="relative">

      {/* Dark background */}
      {/* <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)] h-96 md:h-auto md:mb-64" aria-hidden="true"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          {/* <div className="max-w-5xl mx-auto text-center pb-12 md:pb-22">
            <h2 className="h2 font-playfair-display text-slate-100">Kinect Messaging provides a holistic approach to enable organizations to sustain and realize value immediately.</h2>
          </div> */}

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-10 items-start">

            {/* 1st article */}
            <article data-aos="fade-up" data-aos-delay="100">
              <h3 className="h4 font-playfair-display mb-2">
                <a className="text-slate-800 hover:underline hover:decoration-blue-100" href="#0">"Wouldn't have finished without Kinect"</a>
              </h3>
              <p className="text-lg text-slate-600">
                “And most importantly they incorporated all of our feedback, requests and needs into the project. This project wouldn’t have gotten started or finished without the guidance of Kinect.”
              </p>
              <p className="text-lg text-slate-600">
                ~ Cori and Eileen
              </p>
              <p className="text-lg text-slate-600">
                Operations, KidVantage
              </p>
            </article>

            {/* 3rd article */}
            <article data-aos="fade-up" data-aos-delay="200">
              <a className="relative block group mb-4" href="#0">
                <div className="overflow-hidden">
                  <Image className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out" src={KidVantageLogo} width={300} height={200} alt="News 03" />
                </div>
              </a>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}