import React from 'react';
import { NavLink } from 'react-router-dom';
import { MAIN_NAV, NavItem, PATHS } from '../../routes/paths';

const categoryLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex min-h-24 items-center justify-center px-4 text-center text-base font-bold transition-colors md:text-lg ${
    isActive
      ? 'bg-brand text-white'
      : 'bg-muted-surface text-navy hover:bg-brand hover:text-white'
  }`;

type CategoryGridProps = {
  categories?: NavItem[];
};

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories = MAIN_NAV.find((item) => item.to === PATHS.education)?.children ?? [],
}) => {
  const topCategories = categories.slice(0, 4);
  const bottomCategories = categories.slice(4);

  return (
    <div className="overflow-hidden rounded-lg bg-navy/10">
      <div className="grid grid-cols-1 gap-px sm:grid-cols-2 md:grid-cols-4">
        {topCategories.map((category) => (
          <NavLink key={category.to} to={category.to} className={categoryLinkClass}>
            {category.label}
          </NavLink>
        ))}
      </div>
      <div className="mt-px grid grid-cols-1 gap-px sm:grid-cols-3">
        {bottomCategories.map((category) => (
          <NavLink key={category.to} to={category.to} className={categoryLinkClass}>
            {category.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
