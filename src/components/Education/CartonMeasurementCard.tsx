import React from 'react';

type CartonMeasurementCardProps = {
  title: string;
  caption: string;
};

const CartonMeasurementCard: React.FC<CartonMeasurementCardProps> = ({
  title,
  caption,
}) => (
  <div className="flex min-h-52 max-w-xl flex-col items-center justify-center rounded-lg border border-dashed border-black/10 bg-muted-surface/30 px-6 py-12 text-center">
    <p className="text-lg font-bold text-navy">{title}</p>
    <p className="mt-3 text-sm leading-relaxed text-muted">{caption}</p>
  </div>
);

export default CartonMeasurementCard;
