import React from "react";
import { Disclosure,  } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ajf_logo from '../../Assets/logo_ajf.svg'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Competition', href: '/competition' },
    { name: 'About Us', href: '/aboutus' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" className='absolute right-0 left-0 top-0'>
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to='/'>
                <img
                  className="h-8 w-auto"
                  src={ajf_logo}
                  alt="AJF"
                />
                </Link>
                
              </div>
              <div className="hidden sm:ml-6 sm:block absolute right-0 left-0">
                <div className=" flex space-x-4 justify-center">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({isActive}) => {
                        return '' + 
                        (!isActive 
                          ? 'hover:opacity-100 opacity-70 font-medium' 
                          : 'opacity-100 font-bold')
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full  text-xs md:text-sm px-3 py-2 border-2  font-medium border-[#4E9F3D] text-[#4E9F3D]  hover:text-white hover:bg-gradient-to-r hover:from-[#4E9F3D] hover:to-[#4E9F3D]"
              >
                <Link to='/contactus'>Contact Us</Link>
              </button>

            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden absolute left-2 right-2 z-10 bg-[#1E1F1E] rounded-sm">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-[#1E5128] text-white' : 'text-gray-300 hover:bg-[#1E5128] hover:text-white text-center',
                  'block rounded-md px-3 py-3 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  );
};

export default Navbar;
