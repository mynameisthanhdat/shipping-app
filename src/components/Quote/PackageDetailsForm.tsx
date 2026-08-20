import React, { useState } from 'react';
import { ITEM_TYPES, POSTCODES } from '../../mocks/quoteOptions';
import { FIELD_CLASS, FieldError, LABEL_CLASS, Select } from './fields';
import {
  AddressType,
  ItemTypeId,
  PackageDetails,
  QuoteItem,
  createEmptyPackageDetails,
  createQuoteItem,
} from '../../types/quote';

/** Error keys are field paths, e.g. `originPostcode` or `items.item-1.weight`. */
type FormErrors = Record<string, string>;

const MEASUREMENTS: Array<{ key: keyof QuoteItem; label: string; placeholder: string }> = [
  { key: 'weight', label: 'Weight', placeholder: '5 kg' },
  { key: 'length', label: 'Length (cm)', placeholder: '30 cm' },
  { key: 'width', label: 'Width (cm)', placeholder: '20 cm' },
  { key: 'height', label: 'Height (cm)', placeholder: '15 cm' },
];

const validate = (details: PackageDetails): FormErrors => {
  const errors: FormErrors = {};

  if (!details.originPostcode) errors.originPostcode = 'Select a pickup postcode.';
  if (!details.destinationPostcode) {
    errors.destinationPostcode = 'Select a delivery postcode.';
  }

  details.items.forEach((item) => {
    if (item.quantity < 1) errors[`items.${item.id}.quantity`] = 'Min 1.';

    MEASUREMENTS.forEach(({ key }) => {
      const value = item[key] as string;
      if (value === '' || Number.isNaN(Number(value)) || Number(value) <= 0) {
        errors[`items.${item.id}.${key}`] = 'Required.';
      }
    });
  });

  return errors;
};

type PostcodeFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  postcode: string;
  addressType: AddressType;
  error?: string;
  onPostcodeChange: (value: string) => void;
  onAddressTypeChange: (value: AddressType) => void;
};

const PostcodeField: React.FC<PostcodeFieldProps> = ({
  id,
  label,
  placeholder,
  postcode,
  addressType,
  error,
  onPostcodeChange,
  onAddressTypeChange,
}) => (
  <div>
    <label htmlFor={id} className={LABEL_CLASS}>
      {label}
    </label>
    <Select
      id={id}
      value={postcode}
      placeholderShown={!postcode}
      onChange={(event) => onPostcodeChange(event.target.value)}
    >
      <option value="">{placeholder}</option>
      {POSTCODES.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
    <FieldError message={error} />

    <div className="mt-2 flex items-center gap-5">
      {(['commercial', 'residential'] as AddressType[]).map((type) => (
        <label key={type} className="flex items-center gap-1.5 text-sm text-navy">
          <input
            type="radio"
            name={`${id}-address-type`}
            value={type}
            checked={addressType === type}
            onChange={() => onAddressTypeChange(type)}
            className="h-3 w-3 accent-brand"
          />
          <span className="capitalize">{type}</span>
        </label>
      ))}
    </div>
  </div>
);

export type PackageDetailsFormProps = {
  /** Seeds the form; the component keeps its own state from there on. */
  initialValue?: PackageDetails;
  onSubmit: (value: PackageDetails) => void;
  submitLabel?: string;
  className?: string;
};

/**
 * Step 1 of the quote wizard, self-contained so it can be dropped anywhere —
 * the Get a Quote page, the home page, a location landing page. It owns its
 * state and hands the finished PackageDetails back through `onSubmit`.
 */
const PackageDetailsForm: React.FC<PackageDetailsFormProps> = ({
  initialValue,
  onSubmit,
  submitLabel = 'Get a Quote',
  className = '',
}) => {
  const [details, setDetails] = useState<PackageDetails>(
    () => initialValue ?? createEmptyPackageDetails()
  );
  const [errors, setErrors] = useState<FormErrors>({});

  const patch = (changes: Partial<PackageDetails>) =>
    setDetails((current) => ({ ...current, ...changes }));

  const patchItem = (id: string, changes: Partial<QuoteItem>) =>
    setDetails((current) => ({
      ...current,
      items: current.items.map((item) => (item.id === id ? { ...item, ...changes } : item)),
    }));

  const addItem = () =>
    setDetails((current) => ({ ...current, items: [...current.items, createQuoteItem()] }));

  const removeItem = (id: string) =>
    setDetails((current) => ({
      ...current,
      items: current.items.filter((item) => item.id !== id),
    }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const found = validate(details);
    setErrors(found);

    if (Object.keys(found).length === 0) onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={className}>
      <div className="grid gap-6 md:grid-cols-2">
        <PostcodeField
          id="origin-postcode"
          label="Origin Postcode"
          placeholder="e.g. 2000, SYDNEY"
          postcode={details.originPostcode}
          addressType={details.originAddressType}
          error={errors.originPostcode}
          onPostcodeChange={(originPostcode) => patch({ originPostcode })}
          onAddressTypeChange={(originAddressType) => patch({ originAddressType })}
        />
        <PostcodeField
          id="destination-postcode"
          label="Destination Postcode"
          placeholder="e.g. 3000, MELBOURNE"
          postcode={details.destinationPostcode}
          addressType={details.destinationAddressType}
          error={errors.destinationPostcode}
          onPostcodeChange={(destinationPostcode) => patch({ destinationPostcode })}
          onAddressTypeChange={(destinationAddressType) => patch({ destinationAddressType })}
        />
      </div>

      <div className="mt-6 space-y-4">
        {details.items.map((item, index) => {
          // Labels head the first row only; later rows repeat them for screen
          // readers without stuttering visually.
          const labelClass = index === 0 ? LABEL_CLASS : 'sr-only';

          return (
            <div
              key={item.id}
              className="grid gap-3 sm:grid-cols-2 md:grid-cols-[76px_1.6fr_repeat(4,1fr)]"
            >
              <div>
                <label htmlFor={`${item.id}-quantity`} className={labelClass}>
                  Qty
                </label>
                <input
                  id={`${item.id}-quantity`}
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(event) =>
                    patchItem(item.id, { quantity: Number(event.target.value) })
                  }
                  className={FIELD_CLASS}
                />
                <FieldError message={errors[`items.${item.id}.quantity`]} />
              </div>

              <div>
                <label htmlFor={`${item.id}-type`} className={labelClass}>
                  Item Type
                </label>
                <Select
                  id={`${item.id}-type`}
                  value={item.itemType}
                  onChange={(event) =>
                    patchItem(item.id, { itemType: event.target.value as ItemTypeId })
                  }
                >
                  {ITEM_TYPES.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>

              {MEASUREMENTS.map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label htmlFor={`${item.id}-${key}`} className={labelClass}>
                    {label}
                  </label>
                  <input
                    id={`${item.id}-${key}`}
                    type="text"
                    inputMode="decimal"
                    value={item[key] as string}
                    placeholder={placeholder}
                    onChange={(event) => patchItem(item.id, { [key]: event.target.value })}
                    className={FIELD_CLASS}
                  />
                  <FieldError message={errors[`items.${item.id}.${key}`]} />
                </div>
              ))}

              {details.items.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="justify-self-start text-xs text-muted underline transition-colors hover:text-navy sm:col-span-2 md:col-span-6"
                >
                  Remove item {index + 1}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={addItem}
        className="mt-4 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
      >
        + Add Item
      </button>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-brand px-9 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-hover"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default PackageDetailsForm;
