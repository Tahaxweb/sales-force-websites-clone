"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  SquaresPlusIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

import Logo from "/public/images/logo/salesforce_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const menuItems = [
  { name: "Product", href: "#" },
  { name: "Industries", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Learning", href: "#" },
  { name: "Support", href: "#" },
  { name: "Support", href: "#" },
  { name: "Company", href: "#" },
  { name: "SalesForce+", href: "#" },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className=" flex    items-center w-full  justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex  items-center justify-center h-auto  gap-5">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <Image
                className="h-10 w-auto"
                src={Logo}
                alt="sales force logo "
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <ul className="flex gap-8 ">
              {menuItems.map((item) => (
                <li className=" text-salesforce-950  font-medium">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </Popover.Group>
        </div>
        <div className="flex  items-center gap-4 md:gap-6">
          <div className="  hidden lg:block  ">
            <div className="flex flex-col items-center gap-y-1">
              <Link
                href={"/"}
                className="  text-salesforce-950 border-b border-salesforce-950"
              >
                Contact Us
              </Link>
              <p>00800 7253 3333</p>
            </div>
          </div>
          <MagnifyingGlassIcon className="h-6 w-6 text-salesforce-950" />
          <GlobeAltIcon className="h-6 w-6 text-salesforce-950" />
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <div className="flex gap-2 text-salesforce-950 items-center">
                <UserIcon className="h-6 w-6 text-salesforce-950 " />
                <p className="  hidden md:block  font-semibold">Search</p>
              </div>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute  top-full z-10 mt-3  w-80  max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-6">
                  <h1 className=" font-bold text-xl">Login</h1>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Button variant="green">Try for free</Button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <Image
                className="h-10 w-auto"
                src={Logo}
                alt="sales force logo "
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => <></>}
                </Disclosure>

                <ul className="flex gap-8 flex-col ">
                  {menuItems.map((item) => (
                    <li className=" text-salesforce-950  font-medium">
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex  pt-4 items-center gap-4 md:gap-6">
                <div className="  hidden  lg:block  ">
                  <div className="flex flex-col items-center gap-y-1">
                    <Link
                      href={"/"}
                      className="  text-salesforce-950 border-b border-salesforce-950"
                    >
                      Contact Us
                    </Link>
                    <p>00800 7253 3333</p>
                  </div>
                </div>
                <MagnifyingGlassIcon className="h-6 w-6 text-salesforce-950" />
                <GlobeAltIcon className="h-6 w-6 text-salesforce-950" />
                <div className="flex gap-2 text-salesforce-950 items-center">
                  <UserIcon className="h-6 w-6 text-salesforce-950 " />
                  <p className="  hidden md:block  font-semibold">Search</p>
                </div>
                <Button variant="green">Try for free</Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
