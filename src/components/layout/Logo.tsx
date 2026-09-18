import React from 'react';
import { Link } from 'react-router-dom';
import BeeMark from './BeeMark';
import { PATHS } from '../../routes/paths';

type LogoProps = {
  /** Controls text size and colour — the wordmark inherits both. */
  className?: string;
  /** The mark is wider than it is tall, so size it by height only. */
  markClassName?: string;
};

const Logo: React.FC<LogoProps> = ({ className = '', markClassName = 'h-7' }) => (
  <Link
    to={PATHS.home}
    aria-label="BEE DIRECT home"
    className={`inline-flex items-center gap-2.5 ${className}`}
  >
    <BeeMark className={`${markClassName} w-auto shrink-0`} />
    <span className="font-bold tracking-tight">BEE DIRECT</span>
  </Link>
);

export default Logo;
