import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const routes = [
    {
      index: true,
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    }
  ];

  return (
    <header id="header">
      <div className="mx-auto hidden sm:block">
        <nav className="links">
          <ul className="flex items-center py-4 justify-center gap-2 md:gap-4 lg:gap-8 xl:gap-16 font-semibold">
            {/* Routes */}
            {routes.map((route, index) => (
              <li
                key={route.label}
                className={route.label === "Home" ? "order-1" : "order-4"}
              >
                <Link
                  to={route.path}
                  className={
                    location.pathname === route.path
                      ? "text-linkBlue underline decoration-2 underline-offset-8"
                      : ""
                  }
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}