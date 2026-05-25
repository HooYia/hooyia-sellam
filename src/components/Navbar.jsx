// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Contributors", path: "/contributors" }, // ← This link works!
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center bg-white shadow-sm px-6 py-4">
      {/* Logo */}
      <NavLink 
        to="/" 
        className="text-xl font-bold text-gray-900 hover:text-blue-600 transition"
        aria-label="Sellam Home"
      >
        Sellam
      </NavLink>

      {/* Links */}
      <ul className="hidden md:flex gap-6 items-center">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive 
                    ? "text-blue-600 border-b-2 border-blue-600" 
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
              aria-current={({ isActive }) => isActive ? "page" : undefined}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Cart */}
      <NavLink to="/cart" className="relative" aria-label="Shopping Cart">
        <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
          3
        </span>
      </NavLink>
    </nav>
  );
}