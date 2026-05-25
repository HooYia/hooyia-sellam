// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bell, Menu, MessageCircle, Search, ShoppingCart, X } from "lucide-react";
import logo from "../assets/images/Logo HooYia_Sellam.png";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Contributors", path: "/contributors" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background-primary px-4 py-4 shadow-[0_14px_40px_rgba(2,6,23,0.06)] md:px-8">
      <div className="flex w-full items-center justify-between gap-6">
        <div className="flex items-center gap-35">
          <NavLink
            to="/"
            className="flex items-center gap-3 transition hover:opacity-80"
            aria-label="HooYia Sellam Home"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logo}
              alt="HooYia Sellam logo"
              className="h-10 w-10 rounded-xl object-contain shadow-[0_10px_24px_rgba(8,145,178,0.16)]"
            />
            <span className="text-xl font-black text-secondary">Sellam</span>
          </NavLink>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-black transition ${
                      isActive
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <label className="hidden h-12 w-[18rem] items-center gap-3 rounded-full border border-border bg-background px-5 text-muted shadow-[0_10px_30px_rgba(2,6,23,0.04)] lg:flex">
            <Search className="h-5 w-5" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-transparent text-sm font-semibold text-secondary outline-none placeholder:text-muted"
            />
          </label>

          <button
            type="button"
            className="hidden h-11 w-11 place-items-center rounded-full text-secondary transition hover:bg-background hover:text-primary md:grid"
            aria-label="Messages"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="relative hidden h-11 w-11 place-items-center rounded-full text-secondary transition hover:bg-background hover:text-primary md:grid"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" aria-hidden="true" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-feedback-error" />
          </button>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-secondary transition hover:border-primary hover:text-primary md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative grid h-12 w-12 place-items-center rounded-full border transition ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-secondary hover:border-primary hover:text-primary"
              }`
            }
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-feedback-error text-[10px] font-black text-primary-foreground">
              3
            </span>
          </NavLink>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="mt-4 grid gap-2 border-t border-border pt-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-full px-4 py-3 text-sm font-black transition ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-secondary hover:bg-background hover:text-primary"
                  }`
                }
                aria-current={({ isActive }) =>
                  isActive ? "page" : undefined
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
