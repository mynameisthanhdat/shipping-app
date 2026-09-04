import React from 'react';
import { TransitWarrantySection } from '../../mocks/education/transitWarranty';
import WarrantyCard from './WarrantyCard';

type WarrantySectionProps = {
  section: TransitWarrantySection;
};

const WarrantySection: React.FC<WarrantySectionProps> = ({ section }) => (
  <section>
    <h2 className="text-2xl font-bold text-navy">{section.title}</h2>
    <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
      {section.items.map((item) => (
        <WarrantyCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default WarrantySection;
