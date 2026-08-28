import React from 'react';
import { Link } from 'react-router-dom';
import { DANGEROUS_GOODS } from '../../mocks/collectionOptions';
import { PATHS } from '../../routes/paths';
import { Checkbox, FieldError } from './fields';

const WarningIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

/** Circle-slash, so each tile reads as forbidden rather than selectable. */
const ProhibitedIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M5.6 18.4 18.4 5.6" />
  </svg>
);

export type DangerousGoodsNoticeProps = {
  accepted: boolean;
  onAcceptedChange: (accepted: boolean) => void;
  error?: string;
};

const DangerousGoodsNotice: React.FC<DangerousGoodsNoticeProps> = ({
  accepted,
  onAcceptedChange,
  error,
}) => (
  <section
    aria-labelledby="dangerous-goods-heading"
    className="rounded-lg border border-danger-border border-l-4 border-l-danger bg-danger-surface p-6"
  >
    <h2
      id="dangerous-goods-heading"
      className="flex items-center gap-2.5 text-[15px] font-bold text-danger"
    >
      <WarningIcon />
      Dangerous goods declaration
    </h2>

    <p className="mt-2 text-sm text-navy">
      Please see some examples of Dangerous Goods which are restricted throughout our network.
    </p>

    <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
      {DANGEROUS_GOODS.map((item) => (
        <li
          key={item}
          className="flex min-h-[84px] flex-col items-center justify-center gap-1.5 rounded-md bg-danger px-2 py-3 text-center text-sm font-bold leading-tight text-white"
        >
          <ProhibitedIcon />
          {item}
        </li>
      ))}
    </ul>

    <p className="mt-4 text-sm">
      <Link
        to={PATHS.educationPackaging}
        className="font-semibold text-danger underline transition-opacity hover:opacity-80"
      >
        See the full list of restricted items
      </Link>
    </p>

    <div className="mt-5 border-t border-danger-border pt-5">
      <Checkbox
        label="I confirm my shipment does not contain any of the items listed above.*"
        checked={accepted}
        onChange={(event) => onAcceptedChange(event.target.checked)}
      />
      <FieldError message={error} />
    </div>
  </section>
);

export default DangerousGoodsNotice;
