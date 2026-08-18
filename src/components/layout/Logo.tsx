import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { PATHS } from '../../routes/paths';

type LogoProps = {
  /** Controls text size and color — the wordmark inherits both. */
  className?: string;
  imageClassName?: string;
};

const Logo: React.FC<LogoProps> = ({
  className = '',
  imageClassName = 'h-9 w-9',
}) => (
  <Link to={PATHS.home} className={`inline-flex items-center gap-2.5 ${className}`}>
    <img
      src={logo}
      alt="Parcelio"
      className={`${imageClassName} shrink-0 object-contain`}
    />
    <span className="font-bold">Parcelio</span>
  </Link>
);

export default Logo;
