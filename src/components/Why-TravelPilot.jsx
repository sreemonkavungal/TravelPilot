import React from 'react';
import { Shield, Zap, DollarSign } from 'lucide-react';

const tiers = [
  {
    name: 'Professional & Trustworthy',
    id: 'tier-hobby',
    href: '#',
    icon: Shield,
    description: 'At TravelPilot, we take pride in delivering a level of professionalism that sets us apart. Our experienced team is carefully chosen for their expertise, attention to detail, and commitment to your satisfaction. From your first inquiry to your return home, every part of your trip is handled with care, clarity, and precision. We listen to your needs, respect your time, and craft travel experiences that feel effortless yet extraordinary. Built on trust, accountability, and a passion for excellence, we are here to ensure your journey is seamless—and truly unforgettable.',
  },
  {
    name: 'Simple & Impactful',
    id: 'tier-enterprise',
    href: '#',
    icon: Zap,
    description: 'We believe that planning a trip should be as enjoyable as taking one. That is why TravelPilot focuses on simplicity without compromising impact. Our user-friendly process, quick assistance, and responsive team remove the stress from travel planning, allowing you to focus on the experience. Whether it is a weekend escape or an international adventure, we tailor every detail to match your goals and style. The result? Hassle-free, thoughtful travel that leaves a lasting impression and memories that stay with you forever.',
  },
  {
    name: 'Affordable & Reliable',
    id: 'tier-business',
    href: '#',
    icon: DollarSign,
    description: 'At TravelPilot, we make your dream vacations possible—without breaking the bank. Thanks to our strong relationships with global partners, we are able to provide exceptional experiences at competitive prices. Our best-rate promise means you never have to sacrifice quality for affordability. We combine dependable service with budget-conscious planning, offering you incredible value at every turn. Whether you are exploring hidden gems or iconic destinations, you will travel with the confidence of knowing you are in capable, cost-effective hands.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function WhyPilot() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-5 lg:px-8">




      <div className="mx-auto max-w-4xl text-center">
        {/* <h2 className="text-base/7 font-semibold text-green-800">Pricing</h2> */}
        <p className="mt-2 text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Why Choose TravelPilot?
        </p>
      </div>
      
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        We turn travel dreams into real adventures with care, clarity, and a personal touch.
      </p>

      <div className="mx-auto mt-16 grid max-w-7xl h-auto grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">

        {tiers.map((tier, tierIdx) => (

          <div
            key={tier.id}
            className={classNames(
              'bg-white shadow-2xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
            )}
          >

            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <tier.icon className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-green-800' : 'text-green-800', 'text-base/7 font-semibold text-center')}
            >
              {tier.name}
            </h3>
            <p className={classNames(tier.featured ? 'text-gray-600' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>


            {/* <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
              "mt-8 block rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition sm:mt-10"
              )}
            >
              Explore
            </a> */}


          </div>
        ))}
      </div>
    </div>
  )
}
export default WhyPilot;