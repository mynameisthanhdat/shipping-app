import React from 'react';
import { RateHighlight } from '../../mocks/home';

type RateHighlightCardProps = {
  item: RateHighlight;
};

const RateHighlightCard: React.FC<RateHighlightCardProps> = ({ item }) => (
  <article className="rounded-xl bg-muted-surface/30 p-6">
    <p className="text-3xl font-bold text-navy">{item.price}</p>
    <h3 className="mt-2 text-sm font-bold text-navy">{item.label}</h3>
    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
  </article>
);

export default RateHighlightCard;
