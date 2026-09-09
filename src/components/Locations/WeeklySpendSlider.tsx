import React from 'react';

export const WEEKLY_SPEND_MIN = 0;
export const WEEKLY_SPEND_MAX = 1000;
export const WEEKLY_SPEND_STEP = 50;
export const DEFAULT_WEEKLY_SPEND = 200;

const BRAND = '#e2683c';

type WeeklySpendSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

const WeeklySpendSlider: React.FC<WeeklySpendSliderProps> = ({ value, onChange }) => {
  const label =
    value >= WEEKLY_SPEND_MAX ? `$${WEEKLY_SPEND_MAX}+` : `$${value}`;
  const percent =
    ((value - WEEKLY_SPEND_MIN) / (WEEKLY_SPEND_MAX - WEEKLY_SPEND_MIN)) * 100;

  return (
    <div className="rounded-lg border border-black/10 px-5 py-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <label htmlFor="weekly-spend" className="text-sm font-bold text-navy">
          Your weekly spend
        </label>
        <span className="text-sm font-bold text-brand">{label}</span>
      </div>

      <input
        id="weekly-spend"
        type="range"
        min={WEEKLY_SPEND_MIN}
        max={WEEKLY_SPEND_MAX}
        step={WEEKLY_SPEND_STEP}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{
          background: `linear-gradient(to right, ${BRAND} 0%, ${BRAND} ${percent}%, #ffffff ${percent}%, #ffffff 100%)`,
        }}
        className="weekly-spend-range mt-3 w-full cursor-pointer border border-black/10"
        aria-valuemin={WEEKLY_SPEND_MIN}
        aria-valuemax={WEEKLY_SPEND_MAX}
        aria-valuenow={value}
        aria-valuetext={label}
      />

      <div className="mt-1 flex justify-between text-xs text-muted">
        <span>${WEEKLY_SPEND_MIN}</span>
        <span>${WEEKLY_SPEND_MAX}+</span>
      </div>

      <p className="mt-3 text-sm text-muted">
        Showing member rates. Open an account to see volume-discounted pricing.
      </p>
    </div>
  );
};

/** Member price multiplier: more weekly spend → stronger discount (down to 70%). */
export const getWeeklySpendMultiplier = (weeklySpend: number): number => {
  const ratio = Math.min(weeklySpend, WEEKLY_SPEND_MAX) / WEEKLY_SPEND_MAX;
  return Math.max(0.7, 1 - ratio * 0.3);
};

export default WeeklySpendSlider;
