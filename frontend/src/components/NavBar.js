import { Disclosure } from "@headlessui/react";

import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "http://localhost:3000/" },
  { name: "Car Value", href: "http://localhost:3000/car_value"},
  { name: "Risk Rate", href: "http://localhost:3000/risk_rating"},
  { name: "Quote", href: "http://localhost:3000/final_quote"},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center">
              <Link to="http://localhost:3000/">
                <div className="flex flex-shrink-0 items-center font-sans">
                  <span className="text-3xl text-cyan-700">Turners</span>
                  <span className="text-3xl text-neutral-400">Cars</span>
                </div>
              </Link>
              <div className="sm:ml-6 sm:block">
                <div className="flex space-x-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
