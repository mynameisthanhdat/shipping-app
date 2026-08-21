import React from 'react';

const CartonMeasurementCard: React.FC = () => (
  <div className="rounded-lg border border-dashed border-muted-surface/70 bg-[#f7f8fa] px-6 py-20 text-center">
    <p className="text-xl font-bold text-navy">Carton Diagram (L x W x H)</p>
    <p className="mt-6 text-sm text-muted">Measure Length x Width x Height for accurate quoting</p>
  </div>
);

export default CartonMeasurementCard;
