import React, { useCallback, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ACCOUNT_SIGNUP_LINK, MAIN_NAV, NavItem, PATHS } from '../../routes/paths';
import Logo from './Logo';
import MobileNav from './MobileNav';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors hover:text-brand-deep ${isActive ? 'text-brand-deep' : 'text-ink'}`;

const ChevronDown: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
      open ? '-rotate-180' : ''
    }`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const NavDropdown: React.FC<{ item: NavItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setOpen(false);
      }}
    >
      <NavLink
        to={item.to}
        aria-expanded={open}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `inline-flex items-center gap-1.5 ${navLinkClass({ isActive })}`
        }
      >
        {item.label}
        <ChevronDown open={open} />
      </NavLink>

      <div
        className={`absolute left-0 top-full z-20 pt-4 transition-opacity duration-150 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="min-w-[240px] rounded-md border border-black/5 bg-white py-2 shadow-xl">
          {item.children?.map((child) => (
            <li key={child.to}>
              <NavLink
                to={child.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-2.5 text-sm transition-colors hover:bg-ink/5 hover:text-brand-deep ${
                    isActive ? 'text-brand-deep' : 'text-ink'
                  }`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MenuIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-6 w-6"
  >
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Stable identity: MobileNav closes itself from an effect that depends on it.
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-[84px] max-w-container items-center gap-8 px-6">
        <Logo className="text-xl text-ink" />

        <nav className="hidden flex-1 items-center gap-8 lg:flex">
          {MAIN_NAV.map((item) =>
            item.children?.length ? (
              <NavDropdown key={item.to} item={item} />
            ) : (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="ml-auto flex items-center gap-3 sm:gap-6">
          <NavLink
            to={ACCOUNT_SIGNUP_LINK}
            className="hidden text-sm text-ink transition-colors hover:text-brand-deep md:block"
          >
            Open account
          </NavLink>
          <NavLink
            to={PATHS.signIn}
            className="hidden text-sm text-ink transition-colors hover:text-brand-deep md:block"
          >
            Sign in
          </NavLink>
          <Link
            to={PATHS.quote}
            className="rounded bg-brand px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-hover"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="-mr-1.5 rounded-md p-1.5 text-ink transition-colors hover:bg-brand-soft lg:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <MobileNav open={menuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;
