import React from 'react';
import { Link } from 'react-router-dom';

export type Crumb = {
  label: string;
  /** Omit on the final crumb — the current page is not a link. */
  to?: string;
};

export type BreadcrumbProps = {
  items: Crumb[];
  className?: string;
};

/**
 * The single breadcrumb trail for the whole app.
 *
 * Every page used to hand-roll its own, which is how three different hover
 * colours and two different muted greys crept in. Route all trails through
 * here so the styling can only be changed in one place.
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => (
  <nav aria-label="Breadcrumb" className={`text-sm text-muted ${className}`}>
    {/* An ordered list: a breadcrumb is a path, and its order carries meaning. */}
    <ol className="flex flex-wrap items-center">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <li key={`${item.label}-${index}`} className="flex items-center">
            {item.to && !isLast ? (
              <Link to={item.to} className="transition-colors hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
            )}

            {/* Hidden from screen readers, which announce list position already. */}
            {!isLast && (
              <span aria-hidden="true" className="px-1.5">
                /
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumb;
