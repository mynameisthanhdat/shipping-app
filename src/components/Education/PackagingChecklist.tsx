import React from 'react';

type PackagingChecklistProps = {
  items: string[];
};

const PackagingChecklist: React.FC<PackagingChecklistProps> = ({ items }) => (
  <ul className="list-disc space-y-1.5 pl-6 text-base text-navy marker:text-navy">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default PackagingChecklist;
