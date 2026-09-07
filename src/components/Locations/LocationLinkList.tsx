import React from 'react';
import { Link } from 'react-router-dom';
import { LocationLink } from '../../types/locations';

type LocationLinkListProps = {
  items: LocationLink[];
};

const LocationLinkList: React.FC<LocationLinkListProps> = ({ items }) => (
  <ul className="my-0 list-disc pl-5 text-sm leading-relaxed text-navy">
    {items.map((item) => (
      <li key={item.to}>
        <Link
          to={item.to}
          className="underline underline-offset-2 transition-colors hover:text-brand"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default LocationLinkList;
