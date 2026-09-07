import React, { useState } from 'react';
import {
  TrackingLookup,
  createEmptyTrackingLookup,
} from '../../types/tracking';
import { FIELD_CLASS, FieldError } from '../Quote/fields';

type FormErrors = Record<string, string>;

const LABEL_CLASS = 'mb-1.5 block text-sm font-bold text-navy';

const validate = (lookup: TrackingLookup): FormErrors => {
  const errors: FormErrors = {};

  if (!lookup.consignmentNumber.trim()) {
    errors.consignmentNumber = 'Enter a consignment or reference number.';
  }

  return errors;
};

export type TrackingFormProps = {
  initialValue?: TrackingLookup;
  onSubmit: (value: TrackingLookup) => void;
  submitLabel?: string;
  className?: string;
};

const TrackingForm: React.FC<TrackingFormProps> = ({
  initialValue,
  onSubmit,
  submitLabel = 'Track',
  className = '',
}) => {
  const [lookup, setLookup] = useState<TrackingLookup>(
    () => initialValue ?? createEmptyTrackingLookup()
  );
  const [errors, setErrors] = useState<FormErrors>({});

  const patch = (changes: Partial<TrackingLookup>) =>
    setLookup((current) => ({ ...current, ...changes }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const found = validate(lookup);
    setErrors(found);

    if (Object.keys(found).length === 0) onSubmit(lookup);
  };

  return (
    <form
      id="tracking-lookup"
      onSubmit={handleSubmit}
      noValidate
      className={`mx-auto max-w-lg ${className}`}
    >
      <div>
        <label htmlFor="consignment-number" className={LABEL_CLASS}>
          Consignment/Reference:
        </label>
        <input
          id="consignment-number"
          type="text"
          value={lookup.consignmentNumber}
          placeholder="DATIST-09"
          onChange={(event) => patch({ consignmentNumber: event.target.value })}
          className={FIELD_CLASS}
        />
        <FieldError message={errors.consignmentNumber} />
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default TrackingForm;
