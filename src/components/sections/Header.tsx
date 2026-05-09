"use client";
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  IconMenu2,
  IconX,
} from '@tabler/icons-react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="m-auto h-1/6">
      <nav className="w-4/5 m-auto flex max-w-7xl items-center justify-between p-1 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <img className="xw-auto w-20 h-full mr-2" src="/logo.png" alt="Programme FUTUR" />
            <h1 className='font-bold text-xl text-[#24324d]'>Programme FUTUR</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <IconMenu2 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-lg font-semibold leading-6 items-center hover:text-[#65b3d9] active:bg-[#65b3d9]">
            Accueil
          </a>
          <a href="/about" className="text-lg font-semibold leading-6 items-center hover:text-[#65b3d9] active:bg-[#65b3d9]">
            A Propos
          </a>
          <a href="/realisations" className="text-lg font-semibold leading-6 items-center hover:text-[#65b3d9] active:bg-[#65b3d9]">
            Réalisations
          </a>
          <a href="/formations" className="text-lg font-semibold leading-6 items-center hover:text-[#65b3d9] active:bg-[#65b3d9]">
            Formations
          </a>
          <a href="/contact" className="text-lg font-semibold leading-6 items-center hover:text-[#65b3d9] active:bg-[#65b3d9]">
            Contacts
          </a>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                <img className="xw-auto w-20 h-full" src="/public/images/logo.png" alt="Programme FUTUR" />
                <h1 className='font-bold text-xl text-[#24324d]'>Programme FUTUR</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IconX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#65b3d9]"
                >
                  Accueil
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#65b3d9]"
                >
                  A Propos
                </Link>
                <Link
                  href="/realisations"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#65b3d9]"
                >
                  Réalisations
                </Link>
                <Link
                  href="/formations"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#65b3d9]"
                >
                  Formations
                </Link>
                <Link
                  href="/contacts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#65b3d9]"
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
