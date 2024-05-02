'use client'

import { SetStateAction, useEffect, useState } from 'react'
import { Slider, Tooltip } from "@nextui-org/react";

export default function PricingSliderTables() {

  const minValue = 10000;
  const maxValue = 1000000;
  const defPremCost = 50
  const [annual, setAnnual] = useState<boolean>(true)
  const [premiumCost, setPremiumCost] = useState(defPremCost);

  const SliderComponent: React.FC = () => {

    const [value, setValue] = useState(minValue);
    const [inputValue, setInputValue] = useState(minValue.toString());

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;

      if (!isNaN(Number(v))) {
        setInputValue(v);
      }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const numericValue = Number(inputValue);

        if (!isNaN(numericValue)) {
          if (numericValue < minValue) {
            setValue(minValue);
            setInputValue(minValue.toString());
          } else if (numericValue > maxValue) {
            setValue(maxValue);
            setInputValue(maxValue.toString());
          } else {
            setValue(numericValue);
          }
        }
      }
    };

    const handleChange = (value: SetStateAction<number>) => {
      setValue(value);
      setInputValue(value.toString());
    };

    // Callback to update premiumCost in the parent component
    // useEffect(() => {
    //   if (value > 10000) {
    //     setPremiumCost(value * 0.005);
    //   } else {
    //     setPremiumCost(defPremCost)
    //   }
    // }, [value]);

    return (
      <div className="flex justify-center">
        <div className="w-full max-w-lg mx-auto">
          <Slider
            label="Email Count"
            size="md"
            step={10000}
            maxValue={maxValue}
            minValue={minValue}
            color="foreground"
            classNames={{
              base: "max-w-lg",
              label: "text-medium",
            }}
            renderValue={({ children, ...props }) => (
              <output {...props}>
                <Tooltip
                  className="text-tiny text-default-500 rounded-md"
                  content="Press Enter to confirm"
                  placement="left"
                >
                  <input
                    className="px-1 py-0.5 w-20 text-right text-small text-default-700 font-medium bg-default-100 outline-none transition-colors rounded-small border-medium border-transparent hover:border-primary focus:border-primary"
                    type="text"
                    aria-label="Email Count value"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                  />
                </Tooltip>
              </output>
            )}
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  };


  return (
    <div>
      {/* Pricing toggle */}
      <div className="flex justify-center items-center space-x-4 sm:space-x-7 mb-16">
        <div className="text-sm text-slate-500 font-medium text-right min-w-[8rem]">Pay Monthly</div>
        <div className="form-switch shrink-0">
          <input type="checkbox" id="toggle" className="sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
          <label className="bg-slate-700" htmlFor="toggle">
            <span className="bg-slate-300 border-8 border-slate-500" aria-hidden="true"></span>
            <span className="sr-only">Pay annually</span>
          </label>
        </div>
        <div className="text-sm text-slate-500 font-medium min-w-[8rem]">Pay Yearly <span className="text-emerald-500">(-20%)</span></div>
      </div>

      {/* Variable Pricing Slider */}
      <div>
        <div className="flex justify-center items-center space-x-4 sm:space-x-7">
          <div className='text-xl text-slate-900'>Choose from one of our recommended plans or Build Your Own below!</div>
        </div>
        <div className='mb-16'>
          {/* <SliderComponent /> */}
        </div>
      </div>


      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">

        {/* Pricing table 1 */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-slate-900 shadow-lg" data-aos="fade-up">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-200 mb-1">Free</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-200">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-200">{annual ? '0' : '0'}</span>
              <span className="font-medium text-slate-200">/mo</span>
            </div>
            <div className="text-slate-200">Basic features to activate your Business and engage with your Customers.</div>
          </div>
          <div className="font-medium mb-3 text-slate-200">Features include:</div>
          <ul className="text-slate-200 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Delivery up to 10,000 emails / month</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Basic performance data</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Up to 3 Managed Users</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Basic Personalization</span>
            </li>
          </ul>
          <div>
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#0">
              Start free trial <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>

        {/* Pricing table 2 */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">Most Popular</div>
          </div>
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Premium</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">{annual ? premiumCost : (premiumCost + 5)}</span>
              <span className="font-medium text-slate-400">/mo</span>
            </div>
            <div className="text-slate-500">Advanced features to take your Business to the next level delighting your Customers.</div>
          </div>
          <div className="font-medium mb-3">All features of Free plus:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Delivery up to X emails / month</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Advanced data and dashboards</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Up to (X) accounts</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Advanced personalization</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Customer Journey mapping</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#0">
              Start free trial <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>

        {/* Pricing table 3 */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Advanced</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">{annual ? '129' : '135'}</span>
              <span className="font-medium text-slate-400">/mo</span>
            </div>
            <div className="text-slate-500">Better insights for growing businesses that want more customers.</div>
          </div>
          <div className="font-medium mb-3">All features of Essential plus:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>200 placeholder text commonly</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Consectetur adipiscing elit</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Excepteur sint occaecat cupidatat</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Officia deserunt mollit anim</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Voluptate velit esse cillum</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Placeholder text commonly used</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#0">
              Start free trial <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}