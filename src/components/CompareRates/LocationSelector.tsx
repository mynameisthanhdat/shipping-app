import React from 'react';
import { CITIES, CityId } from '../../mocks/compareRates';

type LocationSelectorProps = {
  value: CityId;
  onChange: (value: CityId) => void;
};

const LocationSelector: React.FC<LocationSelectorProps> = ({ value, onChange }) => (
  <div>
    <h2 className="text-sm font-bold text-navy">Where are you sending from?</h2>

    <div
      role="radiogroup"
      aria-label="Where are you sending from?"
      className="mt-3.5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
    >
      {CITIES.map((city) => {
        const selected = city.id === value;

        return (
          <button
            key={city.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(city.id)}
            className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
              selected
                ? 'border-brand bg-brand text-white'
                : 'border-black/10 text-navy hover:border-navy/30'
            }`}
          >
            {city.label}
          </button>
        );
      })}
    </div>
  </div>
);

export default LocationSelector;
