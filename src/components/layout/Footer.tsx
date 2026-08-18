import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_SERVICES, FOOTER_SOLUTIONS, NavItem, PATHS } from '../../routes/paths';

const FooterColumn: React.FC<{ title: string; items: NavItem[] }> = ({ title, items }) => (
  <div>
    <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white">{title}</h3>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.to}>
          <Link to={item.to} className="text-sm text-white/70 transition-colors hover:text-white">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-container px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to={PATHS.home} className="text-2xl font-bold text-white">
              Parcelio
            </Link>
            <p className="mt-6 text-sm text-white/70">Affordable shipping for everyone.</p>
          </div>

          <FooterColumn title="Services" items={FOOTER_SERVICES} />
          <FooterColumn title="Solutions" items={FOOTER_SOLUTIONS} />
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          © Parcelio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
