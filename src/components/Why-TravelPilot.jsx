import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Professional & Trustworthy',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "Because your journey deserves expert planning.",
    features: ['1', '2', '3', '4'],
    featured: false,
  },
  {
    name: 'Simple & Impactful',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Smart planning. Hassle-free trips. Memories that last.',
    features: ['1', '2', '3', '4'],
    featured: true,
  },
{
    name: 'Affordable & Reliable',
    id: 'tier-business',
    href: '#',
    priceMonthly: '$49',
    description: 'Travel made easy. Enjoy the journey, we handle the details.',
    features: ['1', '2', '3', '4'],
    featured: false,
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
      {/* <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3"> */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">

        {tiers.map((tier, tierIdx) => (

     <div
  key={tier.id}
  className={classNames(
    'bg-white shadow-2xl',
    'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
  )}
>

            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-green-800' : 'text-green-800', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-gray-900' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-600' : 'text-gray-600', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-600' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-600' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-green-800' : 'text-green-800', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-green-600 text-white shadow-xs hover:bg-green-800 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Explore
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default WhyPilot;