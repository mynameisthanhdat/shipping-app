import React from 'react';

type PlaceholderPageProps = {
  title: string;
};

/** Temporary mock page — renders only the menu item's text. */
const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="mx-auto max-w-container px-6 py-24">
      <h1 className="text-4xl font-bold text-navy">{title}</h1>
    </div>
  );
};

export default PlaceholderPage;
