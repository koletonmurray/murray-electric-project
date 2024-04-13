import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar({routes}) {
  const location = useLocation();

  return (
    <header id="header">
      <div className="mx-auto hidden sm:block px-2 md:px-8 bg-midBlue text-white">
        <nav className="links">
          <ul className="flex items-center py-4 justify-left gap-3 md:gap-5 lg:gap-8 font-semibold">
            {routes.map((route) => (
              <li
                key={route.label}
                className={`${location.pathname === route.path ? 'underline decoration-2 underline-offset-8 text-yellow' : 'text-white hover:text-yellow'} transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4 list-none`}
              >
                <Link to={route.path} className="relative inline-block">
                  {route.label}
                  <span className="absolute inset-0 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto block sm:hidden px-2 md:px-8 bg-midBlue text-white h-10"/>
    </header>
  );
}