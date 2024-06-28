'use client'
import Accordion from '@/components/utils/accordion'
import { SetStateAction, useEffect, useState } from 'react'
import Tooltip from '@/components/utils/tooltip'

export default function Faqs() {

  const [mapping, setMapping] = useState<boolean>(false)
  const [emailMap, setEmailMap] = useState<boolean>(false)
  const [audSeg, setAudSeg] = useState<boolean>(false)
  const [dataDash, setDataDash] = useState<boolean>(false)

  const [emailFrequency, setEmailFrequency] = useState<number>(10000);
  const [estimatedCost, setEstimatedCost] = useState<number>(0);

  // Toggle handlers that also update the estimated cost
  const handleMappingToggle = () => {
    setMapping(prevState => {
      const newState = !prevState;
      setEstimatedCost(calculateCost(newState, emailMap, audSeg, dataDash, emailFrequency));
      return newState;
    });
  };

  const handleEmailMappingToggle = () => {
    setEmailMap(prevState => {
      const newState = !prevState;
      setEstimatedCost(calculateCost(mapping, newState, audSeg, dataDash, emailFrequency));
      return newState;
    });
  };

  const handleAudSegToggle = () => {
    setAudSeg(prevState => {
      const newState = !prevState;
      setEstimatedCost(calculateCost(mapping, emailMap, newState, dataDash, emailFrequency));
      return newState;
    });
  };

  const handleDataDashToggle = () => {
    setDataDash(prevState => {
      const newState = !prevState;
      setEstimatedCost(calculateCost(mapping, emailMap, audSeg, newState, emailFrequency));
      return newState;
    });
  };

  // Handler to update email frequency and estimated cost
  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newFrequency = parseInt(e.target.value, 10);
    // Check and adjust the frequency to ensure it does not exceed 1000000
    if (newFrequency > 1000000) {
      newFrequency = 1000000;
    }
    setEmailFrequency(newFrequency);
    setEstimatedCost(calculateCost(mapping, emailMap, audSeg, dataDash, newFrequency));
  };

  // Updated calculateCost to accept the new email frequency as a parameter
  const calculateCost = (mapping: boolean, emailMap: boolean, audSeg: boolean, dataDash: boolean, emailFreq: number) => {
    let cost = 0; // base cost
    if (emailFreq > 10000) {
      cost += 0.005 * (emailFreq - 10000);
    }
    if (mapping) cost += 10;
    if (emailMap) cost += 10;
    if (dataDash) cost += 10;
    if (audSeg) cost += 10;
    return cost;
  };
  return (
    <section className="bg-slate-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-50">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">Tailor your Perfect Plan!</h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
            <Accordion title="Design & Dev" active>
              {/* Design & Dev Table */}
              <table className="table-auto w-full border-b border-slate-200">
                <thead>
                  <tr className="text-base sm:text-lg text-slate-800">
                    <th className="text-xl md:text-2xl whitespace-nowrap font-bold font-playfair-display text-left pr-2 py-4 min-w-[10rem] md:min-w-[24rem]"></th>
                    <th className="text-bold text-center px-2 py-4"></th>
                    <th className="text-bold text-center px-2 py-4"></th>
                    {/* <th className="text-bold text-center px-2 py-4">Advanced</th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1*/}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Customer Journey Builder</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100 max-w-md rounded-md">Create holistic end to end Customer Journeys at every touchpoint, identify pain points, and optimize interactions for a smoother, more personalized experience.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">
                      <div className='relative ml-2'>
                        <div className="form-switch">
                          <input type="checkbox" id="mapToggle" className="sr-only" checked={mapping} onChange={handleMappingToggle} />
                          <label className="bg-slate-700" htmlFor="mapToggle">
                            <span className="bg-slate-300 border-8 border-slate-500" aria-hidden="true"></span>
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">$10/mo</td>
                  </tr>
                  {/* Row 2*/}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Email Customer Messaging Builder</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100 max-w-md rounded-md">Create holistic end to end Customer Journeys at every touchpoint, identify pain points, and optimize interactions for a smoother, more personalized experience.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">
                      <div className='relative ml-2'>
                        <div className="form-switch">
                          <input type="checkbox" id="emailMapToggle" className="sr-only" checked={emailMap} onChange={handleEmailMappingToggle} />
                          <label className="bg-slate-700" htmlFor="emailMapToggle">
                            <span className="bg-slate-300 border-8 border-slate-500" aria-hidden="true"></span>
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">$10/mo</td>
                  </tr>
                  {/* Row 3*/}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Audience Segmentation</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100 max-w-md rounded-md">Create holistic end to end Customer Journeys at every touchpoint, identify pain points, and optimize interactions for a smoother, more personalized experience.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">
                      <div className='relative ml-2'>
                        <div className="form-switch">
                          <input type="checkbox" id="audSegToggle" className="sr-only" checked={audSeg} onChange={handleAudSegToggle} />
                          <label className="bg-slate-700" htmlFor="audSegToggle">
                            <span className="bg-slate-300 border-8 border-slate-500" aria-hidden="true"></span>
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">$10/mo</td>
                  </tr>
                </tbody>
              </table>
            </Accordion>

            <Accordion title="Data & Dashboards">
              {/* Data & Dashboards Table */}
              <table className="table-auto w-full border-b border-slate-200">
                <thead>
                  <tr className="text-base sm:text-lg text-slate-800">
                    <th className="text-xl md:text-2xl whitespace-nowrap font-bold font-playfair-display text-left pr-2 py-4 min-w-[10rem] md:min-w-[24rem]"></th>
                    <th className="text-bold text-center px-2 py-4"></th>
                    <th className="text-bold text-center px-2 py-4"></th>
                    {/* <th className="text-bold text-center px-2 py-4">Advanced</th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* Row */}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Advanced Data & Dashboards</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100 max-w-md rounded-md">Powerful data analytics and visualizations to dive deep into message trends,
                            engagement metrics, and user behavior.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">
                      <div className='relative ml-2'>
                        <div className="form-switch">
                          <input type="checkbox" id="dataToggle" className="sr-only" checked={dataDash} onChange={handleDataDashToggle} />
                          <label className="bg-slate-700" htmlFor="dataToggle">
                            <span className="bg-slate-300 border-8 border-slate-500" aria-hidden="true"></span>
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">$10/mo</td>
                  </tr>
                </tbody>
              </table>
              {/* Dashboards */}
              {/* <div className="relative" data-aos="fade-up" data-aos-delay="200">
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <filter x="-35%" y="-25%" width="170%" height="170%" filterUnits="objectBoundingBox" id="fbp3-a">
                      <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                      <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                      <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                      <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                    </filter>
                    <filter x="-29.2%" y="-20.8%" width="158.3%" height="158.3%" filterUnits="objectBoundingBox" id="fbp3-c">
                      <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                      <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                      <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                    </filter>
                    <filter x="-35%" y="-25%" width="170%" height="170%" filterUnits="objectBoundingBox" id="fbp3-f">
                      <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                      <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                      <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                      <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                    </filter>
                    <filter x="-35%" y="-25%" width="170%" height="170%" filterUnits="objectBoundingBox" id="fbp3-h">
                      <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                      <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                      <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                      <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                    </filter>
                    <rect id="fbp3-b" x="21" y="21.998" width="10" height="10" rx="2" />
                    <rect id="fbp3-g" x="33" y="33.998" width="10" height="10" rx="2" />
                    <rect id="fbp3-i" x="21" y="33.998" width="10" height="10" rx="2" />
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fbp3-e">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#DBEAFE" offset="100%" />
                    </linearGradient>
                    <path d="m43.428 25.616-4.047-4.046a1.957 1.957 0 0 0-2.762 0l-4.047 4.046c-.76.765-.76 2 0 2.764l4.047 4.047c.764.76 1.998.76 2.762 0l4.047-4.046c.761-.764.761-2 0-2.765Z" id="fbp3-d" />
                  </defs>
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <use fill="#000" filter="url(#fbp3-a)" xlinkHref="#fbp3-b" />
                  <use fillOpacity=".64" fill="#BFDBFE" xlinkHref="#fbp3-b" />
                  <use fill="#000" filter="url(#fbp3-c)" xlinkHref="#fbp3-d" />
                  <use fill="url(#fbp3-e)" xlinkHref="#fbp3-d" />
                  <use fill="#000" filter="url(#fbp3-f)" xlinkHref="#fbp3-g" />
                  <use fillOpacity=".64" fill="#BFDBFE" xlinkHref="#fbp3-g" />
                  <use fill="#000" filter="url(#fbp3-h)" xlinkHref="#fbp3-i" />
                  <use fillOpacity=".64" fill="#BFDBFE" xlinkHref="#fbp3-i" />
                </svg>
                <h3 className="h4 font-playfair-display mb-2">Advanced Data & Dashboards</h3>
                <p className="text-lg text-slate-500 mb-3">
                  Powerful data analytics and visualizations to dive deep into message trends,
                  engagement metrics, and user behavior.
                </p>
                <div className="font-bold text-slate-800">$10/mo</div>
                <div className='relative ml-2'>
                  <div className="form-switch">
                    <input type="checkbox" id="dataToggle" className="sr-only" checked={dataDash} onChange={handleDataDashToggle} />
                    <label className="bg-slate-700" htmlFor="dataToggle">
                      <span className="bg-slate-300 border-8 border-slate-500" aria-hidden="true"></span>
                    </label>
                  </div>
                </div>
              </div> */}
            </Accordion>

            <Accordion title="Delivery">
              {/* Delivery Table */}
              <table className="table-auto w-full border-b border-slate-200">
                <thead>
                  <tr className="text-base sm:text-lg text-slate-800">
                    <th className="text-xl md:text-2xl whitespace-nowrap font-bold font-playfair-display text-left pr-2 py-4 min-w-[10rem] md:min-w-[24rem]"></th>
                    <th className="text-bold text-center px-2 py-4"></th>
                    <th className="text-bold text-center px-2 py-4"></th>
                    {/* <th className="text-bold text-center px-2 py-4">Advanced</th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* Row */}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Email Frequency</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100 max-w-md rounded-md">Select the number of Emails you intend to send per month.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">
                      <div>
                        <div>
                          <input
                            type="number"
                            className="form-input border border-gray-300 rounded-md"
                            value={emailFrequency}
                            onChange={handleFrequencyChange}  // Updated to use the new handler
                            min={10000}
                            max={1000000}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">$0.005/mo</td>
                  </tr>
                </tbody>
              </table>
            </Accordion>

            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul >
          <section className="relative">

            {/* Gray background */}
            <div className="absolute inset-0 top-auto bg-slate-100 pointer-events-none -z-10 h-1/2" aria-hidden="true"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
              <div className="mt-12 md:mt-16">

                <div className="relative flex flex-col lg:flex-row justify-between items-center bg-white shadow-lg p-6">
                  {/* <div className="absolute top-0 left-0 ml-6 -mt-4">
                    <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">For Young Startups</div>
                  </div> */}
                  {/* <div className="h4 font-playfair-display text-center lg:text-left mb-4 lg:mb-0">Your Plan's Estimated Cost: $30</div> */}
                  <div className="h4 font-playfair-display text-center lg:text-left mb-4 lg:mb-0">Your Plan's Estimated Cost: ${estimatedCost.toFixed(2)}</div>
                  <div className="p-3 rounded bg-slate-50">
                    <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 group" href="#0">
                      Get Started <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    </section>
  )
}