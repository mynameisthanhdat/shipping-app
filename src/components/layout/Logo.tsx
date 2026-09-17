import React from 'react';
import { Link } from 'react-router-dom';
import BeeMark from './BeeMark';
import { PATHS } from '../../routes/paths';

type LogoProps = {
  /** Controls text size and color — the wordmark inherits both. */
  className?: string;
  markClassName?: string;
};

const Logo: React.FC<LogoProps> = ({ className = '', markClassName = 'h-9 w-9' }) => (
  <Link
    to={PATHS.home}
    aria-label="Bee Direct home"
    className={`inline-flex items-center gap-2.5 ${className}`}
  >
    <BeeMark className={`${markClassName} shrink-0`} />
    <span className="font-bold">Bee Direct</span>
  </Link>
);

export default Logo;
