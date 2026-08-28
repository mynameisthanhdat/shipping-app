import React from 'react';
import { TransitWarrantyItem } from '../../mocks/education/transitWarranty';

type WarrantyCardProps = {
  item: TransitWarrantyItem;
};

const WarrantyCard: React.FC<WarrantyCardProps> = ({ item }) => (
  <article className="rounded-lg border border-muted-surface/60 bg-white px-7 py-6">
    <h3 className="text-base font-bold text-navy">{item.title}</h3>
    <a
      href={item.href}
      className="mt-3 inline-block text-xs text-brand transition-colors hover:text-brand-hover"
    >
      {item.linkLabel}
    </a>
  </article>
);

export default WarrantyCard;
