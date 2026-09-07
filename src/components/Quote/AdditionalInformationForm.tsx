import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PACKING_NOTES } from '../../mocks/additionalInformationContent';
import { PATHS } from '../../routes/paths';
import { AdditionalInformation } from '../../types/quote';
import { Checkbox, FieldError, SECTION_TITLE } from './fields';

const LINK = 'underline transition-colors hover:text-brand';

type ConsentKey = keyof AdditionalInformation;

/** The three consents, in the order the design lists them. */
const CONSENTS: Array<{ key: ConsentKey; label: React.ReactNode }> = [
  {
    key: 'transitWarrantyAccepted',
    label: (
      <>
        {'YES - I have read, understood & agree to the '}
        <Link to={PATHS.educationTransitWarranty} className={LINK}>
          road express transit warranty
        </Link>
        {' conditions.'}
      </>
    ),
  },
  {
    key: 'termsAccepted',
    label: (
      <>
        {'YES - I have read, understood & agree to the '}
        <Link to={PATHS.terms} className={LINK}>
          Terms &amp; Conditions.
        </Link>
      </>
    ),
  },
  {
    key: 'consignmentNoteAccepted',
    label:
      'YES - I understand that the consignment note supplied via email after booking, must be attached to the item/s as instructed before pickup.',
  },
];

export type AdditionalInformationFormProps = {
  initialValue: AdditionalInformation;
  /** Names the warranty section, e.g. "Aramex transit warranty". */
  carrier?: string;
  onBack: () => void;
  onSubmit: (value: AdditionalInformation) => void;
};

const AdditionalInformationForm: React.FC<AdditionalInformationFormProps> = ({
  initialValue,
  carrier,
  onBack,
  onSubmit,
}) => {
  const [consents, setConsents] = useState<AdditionalInformation>(initialValue);
  const [error, setError] = useState<string>();

  const allChecked = CONSENTS.every((consent) => consents[consent.key]);

  const toggle = (key: ConsentKey, checked: boolean) =>
    setConsents((current) => ({ ...current, [key]: checked }));

  const toggleAll = (checked: boolean) =>
    setConsents({
      transitWarrantyAccepted: checked,
      termsAccepted: checked,
      consignmentNoteAccepted: checked,
    });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!allChecked) {
      setError('Please accept all three conditions before continuing.');
      return;
    }

    setError(undefined);
    onSubmit(consents);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <section className="border-t border-black/10 pt-8">
        <h2 className={SECTION_TITLE}>Additional information</h2>

        <ul className="mt-5 list-disc space-y-4 pl-5">
          {PACKING_NOTES.map((note) => (
            <li key={note} className="text-sm leading-relaxed text-navy">
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-black/10 pt-8">
        <h2 className={SECTION_TITLE}>
          {carrier ? `${carrier} transit warranty` : 'Transit warranty'}
        </h2>

        <div className="mt-5 space-y-4">
          {CONSENTS.map((consent) => (
            <Checkbox
              key={consent.key}
              label={consent.label}
              checked={consents[consent.key]}
              onChange={(event) => toggle(consent.key, event.target.checked)}
            />
          ))}

          <Checkbox
            label="YES - Check all"
            checked={allChecked}
            onChange={(event) => toggleAll(event.target.checked)}
          />
        </div>

        <FieldError message={error} />
      </section>

      <div className="flex items-center justify-between border-t border-black/10 pt-8">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md bg-muted-surface/40 px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-muted-surface/70"
        >
          Back
        </button>
        <button
          type="submit"
          className="rounded-md bg-brand px-8 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-hover"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default AdditionalInformationForm;
