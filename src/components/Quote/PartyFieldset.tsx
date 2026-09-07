import React from 'react';
import { STREET_TYPES } from '../../mocks/collectionOptions';
import { PartyDetails, PartyFieldName } from '../../types/quote';
import { PartyFieldConfig } from './collectionFields';
import { FIELD_CLASS, FieldError, SECTION_TITLE, Select } from './fields';

export type PartyFieldsetProps = {
  title: string;
  /** Prefix keeps input ids unique across the two sides. */
  idPrefix: string;
  fields: PartyFieldConfig[];
  values: PartyDetails;
  errors: Partial<Record<PartyFieldName, string>>;
  onChange: (name: PartyFieldName, value: string) => void;
};

/**
 * Renders one side of the collection form — "Collect from" or "Delivery to" —
 * straight from its field config, so a role change is a data change.
 */
const PartyFieldset: React.FC<PartyFieldsetProps> = ({
  title,
  idPrefix,
  fields,
  values,
  errors,
  onChange,
}) => (
  <fieldset>
    <legend className={SECTION_TITLE}>
      {title}
    </legend>

    <div className="mt-5 space-y-3">
      {fields.map((field) => {
        const id = `${idPrefix}-${field.name}`;
        const value = values[field.name] ?? '';

        return (
          <div key={field.name} className="md:grid md:grid-cols-[190px_1fr] md:gap-4">
            <label
              htmlFor={field.kind === 'collection-point' ? undefined : id}
              className="mb-1.5 block text-sm font-bold text-navy md:mb-0 md:self-center"
            >
              {field.label}
              {field.required && '*'}
            </label>

            <div>
              {field.kind === 'collection-point' ? (
                <button
                  type="button"
                  className="rounded-md bg-muted-surface/40 px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-muted-surface/70"
                >
                  Select collection point
                </button>
              ) : field.kind === 'select' ? (
                <Select
                  id={id}
                  value={value}
                  placeholderShown={!value}
                  onChange={(event) => onChange(field.name, event.target.value)}
                >
                  <option value="">Select</option>
                  {STREET_TYPES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              ) : (
                <input
                  id={id}
                  type={field.kind === 'tel' ? 'tel' : field.kind === 'email' ? 'email' : 'text'}
                  value={value}
                  placeholder={field.placeholder}
                  onChange={(event) => onChange(field.name, event.target.value)}
                  className={FIELD_CLASS}
                />
              )}

              <FieldError message={errors[field.name]} />
            </div>
          </div>
        );
      })}
    </div>
  </fieldset>
);

export default PartyFieldset;
