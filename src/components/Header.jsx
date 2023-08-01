import React from "react";
import TopBar from "./TopBar";
function Header() {
  return (
    <header className="bg-dark-green border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800 ">
      <a href="" className="flex items-center justify-center">
        <img
          src="/img/logofamily.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Lindströms
        </span>
      </a>
      <span className="justify-center text-xl  whitespace-nowrap dark:text-white">
        welcome
      </span>
    </header>
  );
}
export default Header;
