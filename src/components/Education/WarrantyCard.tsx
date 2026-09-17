import React from 'react';
import { Link } from 'react-router-dom';
import {
  TransitWarrantyItem,
  getTransitWarrantyDetailPath,
} from '../../mocks/education/transitWarranty';
import { hasTransitWarrantyDetail } from '../../mocks/education/transitWarrantyDetails';

type WarrantyCardProps = {
  item: TransitWarrantyItem;
};

const linkClass =
  'mt-3 inline-block text-xs text-brand-deep transition-colors hover:text-brand-deep-hover';

const WarrantyCard: React.FC<WarrantyCardProps> = ({ item }) => {
  const hasDetail = hasTransitWarrantyDetail(item.id);

  return (
    <article className="rounded-lg border border-muted-surface/60 bg-white px-7 py-6">
      <h3 className="text-base font-bold text-ink">{item.title}</h3>
      {hasDetail ? (
        <Link to={getTransitWarrantyDetailPath(item.id)} className={linkClass}>
          {item.linkLabel}
        </Link>
      ) : (
        <span className={`${linkClass} cursor-default opacity-50`}>{item.linkLabel}</span>
      )}
    </article>
  );
};

export default WarrantyCard;
