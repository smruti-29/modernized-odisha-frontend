import React, { useState } from 'react'; 
import { Link as RouterLink } from 'react-router-dom'; // For routing

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <RouterLink to="/" className="cursor-pointer text-2xl font-bold text-sky-500">
              Modernized Odisha
            </RouterLink>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Route-based navigation only */}
              <RouterLink to="/notes" className="cursor-pointer text-gray-500 hover:text-sky-500">
                Notes
              </RouterLink>
              <RouterLink to="/checkout" className="cursor-pointer text-gray-500 hover:text-sky-500">
                Checkout
              </RouterLink>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <RouterLink to="/notes" className="cursor-pointer text-gray-500 hover:text-sky-500 block px-3 py-2 rounded-md text-base font-medium">
            Notes
          </RouterLink>
          <RouterLink to="/checkout" className="cursor-pointer text-gray-500 hover:text-sky-500 block px-3 py-2 rounded-md text-base font-medium">
            Checkout
          </RouterLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
