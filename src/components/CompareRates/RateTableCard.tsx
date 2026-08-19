import React from 'react';
import { RateCard } from '../../mocks/compareRates';

const formatPrice = (value: number) => `$${value.toFixed(2)}`;

const RateTableCard: React.FC<{ card: RateCard }> = ({ card }) => (
  <section className="rounded-xl border border-black/10 px-5 py-5">
    <h3 className="text-center text-base font-bold text-navy">{card.title}</h3>

    <table className="mt-4 w-full border-collapse">
      <thead>
        <tr className="border-b border-black/10">
          <th
            colSpan={2}
            scope="col"
            className="pb-2 text-left text-[10px] font-normal uppercase tracking-wider text-muted"
          >
            Weight
          </th>
          <th
            scope="col"
            className="pb-2 text-right text-[10px] font-normal uppercase tracking-wider text-muted"
          >
            Member
          </th>
          <th
            scope="col"
            className="pb-2 text-right text-[10px] font-normal uppercase tracking-wider text-muted"
          >
            Frequent User
          </th>
        </tr>
      </thead>

      <tbody>
        {card.rows.map((row) => (
          <tr key={row.weight}>
            <th scope="row" className="py-1.5 pr-2 text-left">
              <span className="inline-block rounded bg-muted-surface/40 px-2 py-1 text-xs font-semibold text-navy">
                {row.weight}
              </span>
            </th>
            <td className="py-1.5 text-left text-xs text-muted">{row.itemType}</td>
            <td className="py-1.5 text-right text-sm font-semibold text-navy-light">
              {formatPrice(row.member)}
            </td>
            <td className="py-1.5 text-right text-sm font-semibold text-navy-light">
              {formatPrice(row.frequentUser)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default RateTableCard;
