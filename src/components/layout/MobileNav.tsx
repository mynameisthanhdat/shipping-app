import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ACCOUNT_SIGNUP_LINK, MAIN_NAV, PATHS } from '../../routes/paths';

const FOCUSABLE = 'a[href], button:not([disabled])';

const CloseIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M6 6 18 18M18 6 6 18" />
  </svg>
);

const Chevron: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? '-rotate-180' : ''}`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-brand-soft ${
    isActive ? 'font-bold text-brand-deep' : 'text-ink'
  }`;

export type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Slide-over navigation for viewports below `lg`, where the horizontal nav is
 * hidden. Submenus become accordions rather than hover dropdowns — there is no
 * hover on touch.
 */
const MobileNav: React.FC<MobileNavProps> = ({ open, onClose }) => {
  const [expanded, setExpanded] = useState<string>();
  const panelRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Any navigation closes the drawer, including same-path hash links that an
  // onClick-per-link approach would miss.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  useEffect(() => {
    if (!open) return;

    // Freeze the page behind the drawer so touch scrolling stays in the panel.
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const opener = document.activeElement as HTMLElement | null;
    panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      // Keep Tab inside the drawer; without this it walks the page behind.
      const items = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!items?.length) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
      opener?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-ink/50"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className="absolute right-0 top-0 flex h-full w-[min(88vw,360px)] flex-col bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <span className="text-sm font-bold text-ink">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-1.5 text-ink transition-colors hover:bg-brand-soft"
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Main" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {MAIN_NAV.map((item) => {
              const isOpen = expanded === item.to;

              if (!item.children?.length) {
                return (
                  <li key={item.to}>
                    <NavLink to={item.to} className={linkClass}>
                      {item.label}
                    </NavLink>
                  </li>
                );
              }

              return (
                <li key={item.to}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? undefined : item.to)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm text-ink transition-colors hover:bg-brand-soft"
                  >
                    {item.label}
                    <Chevron open={isOpen} />
                  </button>

                  {isOpen && (
                    <ul className="mb-1 ml-3 space-y-0.5 border-l border-black/10 pl-2">
                      <li>
                        <NavLink to={item.to} end className={linkClass}>
                          {`All ${item.label}`}
                        </NavLink>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink to={child.to} className={linkClass}>
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-1 border-t border-black/10 px-3 py-4">
          <NavLink to={ACCOUNT_SIGNUP_LINK} className={linkClass}>
            Open account
          </NavLink>
          <NavLink to={PATHS.signIn} className={linkClass}>
            Sign in
          </NavLink>
          <Link
            to={PATHS.quote}
            className="mt-2 block rounded-md bg-brand px-3 py-3 text-center text-sm font-bold text-ink transition-colors hover:bg-brand-hover"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
