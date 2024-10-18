"use client";
import { useState } from "react";
import { ActiveMenu } from "../active-menu/ActiveMenu";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  const navItems = [
    { path: "/", text: "Home" },
    { path: "/users", text: "Usuarios" },
    { path: "/posts", text: "Publicaciones" },
  ];

  const toggleMenu = () => {
    setHidden((value) => !value);
  };
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Contentful POC
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${hidden ? "hidden" : ""} w-full`}
          id="navbar-hamburger"
        >
          <ul className="font-medium mt-4 rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700 z-10 absolute w-72 right-10">
            {navItems.map(({ path, text }) => (
              <ActiveMenu
                key={text}
                path={path}
                text={text}
                toggleMenu={toggleMenu}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
