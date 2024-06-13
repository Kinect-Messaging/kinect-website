import Link from 'next/link'
import Image from 'next/image'
import ModelImage from '@/public/images/our-model.jpg'

export default function OurModel() {
  return (
    <section className="bg-slate-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="relative max-w-full mx-auto text-center">

            <div className="relative">
              <h2 className="h2 font-playfair-display text-slate-800 mb-4">Our <span className="text-emerald-500">Model</span></h2>
            </div>
          </div>

          <div data-aos="fade-left">
            <Image className="mx-auto md:max-w-none" src={ModelImage} width={1000} height={1000} alt="Target" />
          </div>
          <div className="relative max-w-full mx-auto text-center">
            <p className="text-sm text-slate-500 mb-8">Design by PresentationGO (www.presentationgo.com)</p>
          </div>

        </div>
      </div>
    </section>
  )
}