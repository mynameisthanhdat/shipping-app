import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MAIN_NAV, NavItem, PATHS } from '../../routes/paths';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors hover:text-brand ${isActive ? 'text-brand' : 'text-navy'}`;

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
                  `block px-5 py-2.5 text-sm transition-colors hover:bg-navy/5 hover:text-brand ${
                    isActive ? 'text-brand' : 'text-navy'
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

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-[84px] max-w-container items-center gap-8 px-6">
        <Link to={PATHS.home} className="text-xl font-bold text-navy">
          Parcelio
        </Link>

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

        <div className="ml-auto flex items-center gap-6">
          <NavLink
            to={PATHS.openAccount}
            className="hidden text-sm text-navy transition-colors hover:text-brand md:block"
          >
            Open account
          </NavLink>
          <NavLink
            to={PATHS.signIn}
            className="hidden text-sm text-navy transition-colors hover:text-brand md:block"
          >
            Sign in
          </NavLink>
          <Link
            to={PATHS.quote}
            className="rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
