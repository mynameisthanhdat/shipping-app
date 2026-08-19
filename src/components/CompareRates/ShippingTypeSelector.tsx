import React from 'react';
import { SHIPPING_TYPES, ShippingTypeId } from '../../mocks/compareRates';

type ShippingTypeSelectorProps = {
  value: ShippingTypeId;
  onChange: (value: ShippingTypeId) => void;
};

const ShippingTypeSelector: React.FC<ShippingTypeSelectorProps> = ({ value, onChange }) => (
  <div>
    <h2 className="text-sm font-bold text-navy">What are you shipping?</h2>

    <div
      role="radiogroup"
      aria-label="What are you shipping?"
      className="mt-3.5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {SHIPPING_TYPES.map((type) => {
        const selected = type.id === value;

        return (
          <button
            key={type.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(type.id)}
            className={`rounded-lg border px-4 py-5 text-center transition-colors ${
              selected
                ? 'border-brand bg-brand/[0.03]'
                : 'border-black/10 hover:border-navy/30'
            }`}
          >
            <span className="block text-sm font-bold text-navy">{type.label}</span>
            <span className="mt-1 block text-xs text-muted">{type.description}</span>
          </button>
        );
      })}
    </div>
  </div>
);

export default ShippingTypeSelector;
