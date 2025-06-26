
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Tour Package', href: '/tour-package' },
  { name: 'Flight Booking', href: '/flight-booking' },
  { name: 'Hotel & Resort', href: '/hotel-resort' },
  { name: 'Contact', href: '/contact' },

]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="fixed bg-white inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
             <span  className="sr-only">TravelPilot</span> 
             
              <img
                alt="TravelPilot-logo"
                src={logo}
                className="h-14 w-auto"
              />

            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>



          <div className="hidden lg:flex lg:gap-x-12">


            {/* {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))} */}

              {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? 'text-green-800  pb-1 font-semibold text-sm'
                    : 'text-gray-900 hover:text-gray-500 font-semibold text-sm'
                }
              >
                {item.name}
              </NavLink>
            ))}




          </div>





        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">TravelPilot</span>
                <img
                  alt="TravelPilot-logo"
                  src={logo}
                  className="h-14 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    // <a
                    //   key={item.name}
                    //   href={item.href}
                    //   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    // >
                    //   {item.name}
                    // </a>

                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? 'block rounded-lg px-3 py-2 text-base font-semibold text-primary bg-green-100'
                          : 'block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50'
                      }
                    >
                      {item.name}
                    </NavLink>

                  ))}
                </div>


              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
