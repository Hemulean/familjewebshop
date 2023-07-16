import React from "react";
import NavBar from "./NavBar";
function Header() {
  return (
    <header className="bg-dark-green border-gray-200 px-4 lg:px-6  dark:bg-gray-800 py-10">
      <a
        href="https://flowbite.com"
        className="flex items-center justify-center"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Lindströms
        </span>
      </a>
      <p>blabla</p>
    </header>
  );
}
export default Header;
