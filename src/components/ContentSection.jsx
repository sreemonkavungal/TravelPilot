// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import HomeIMG from '../assets/images/HomeImage.png';


//     const features = [
//       {
//         name: 'Push to deploy.',
//         description:
//           'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//         icon: CloudArrowUpIcon,
//       },
//       {
//         name: 'SSL certificates.',
//         description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
//         icon: LockClosedIcon,
//       },
//       {
//         name: 'Database backups.',
//         description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//         icon: ServerIcon,
//       },
//     ]
    
//     export default function ContentSection() {
//       return (
//         <div className="overflow-hidden bg-white py-24 sm:py-32">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
//               <div className="lg:pt-4 lg:pr-8">
//                 <div className="lg:max-w-lg">
//                   <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
//                   <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
//                     A better workflow
//                   </p>
//                   <p className="mt-6 text-lg/8 text-gray-600">
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
//                     iste dolor cupiditate blanditiis ratione.
//                   </p>
//                   <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
//                     {features.map((feature) => (
//                       <div key={feature.name} className="relative pl-9">
//                         <dt className="inline font-semibold text-gray-900">
//                           <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
//                           {feature.name}
//                         </dt>{' '}
//                         <dd className="inline">{feature.description}</dd>
//                       </div>
//                     ))}
//                   </dl>
//                 </div>
//               </div>
//               {/* <img
//                 alt="Product screenshot"
//                 src={HomeIMG}
//                 width={2000} 
//                 height={1400}
//                 className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white sm:w-[57rem] md:-ml-4 lg:-ml-0"
//               /> */}

//           {/* Right: Image */}
//           <div className="flex justify-end">
//             <img
//               src={HomeIMG}
//               alt="Product screenshot"
//               className="w-full max-w-10xl"
//             />
//           </div>


//             </div>
//           </div>
//         </div>
//       )
//     }















export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-8xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-green-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              {/* <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs> */}
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-black sm:text-4xl">
                Boost your productivity. Start using our app today.
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-600">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                {/* <a href="#" className="rounded-md text-sm/6 bg-green-800 font-semibold text-white hover:bg-green-500"> */}
                <a href="#" className="rounded-md bg-green-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src={HomeIMG}
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-[40rem] max-w-none rounded-md bg-green-100 ring-1 ring-white"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  