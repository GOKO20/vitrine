import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

type NavItem = {
  label: string;
  href: string;
};

interface NavBarProps {
  title?: string;
  items: NavItem[];
}

const NavBar = ({ items }: NavBarProps) => {

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 ">
      <div className="flex items-center justify-start">
        {/* Logo / Title */}
        <div className="mr-10 underline underline-offset-5">
          <h2>Liste des events 2026</h2>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center justify-start">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-blue-400 "
              >
                {item.label}
              </a>
            </li>           
          ))}

        </ul>
                <div className="ml-auto">
            <ThemeToggle />
        </div>
      </div>     
    </nav>
  );
};

export default NavBar;
