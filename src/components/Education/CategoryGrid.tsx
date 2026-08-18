import React from 'react';
import { NavLink } from 'react-router-dom';
import { EDUCATION_CATEGORIES, NavItem } from '../../routes/paths';

const categoryLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex min-h-24 items-center justify-center bg-muted-surface px-4 text-center text-base font-bold transition-colors md:text-lg ${
    isActive ? 'text-brand' : 'text-navy hover:bg-brand hover:text-white'
  }`;

type CategoryGridProps = {
  categories?: NavItem[];
};

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories = EDUCATION_CATEGORIES,
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
