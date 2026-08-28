import React, { useMemo, useState } from 'react';
import {
  AUTHORITY_TO_LEAVE_LOCATIONS,
  getCollectionDateOptions,
} from '../../mocks/collectionOptions';
import {
  CarrierQuote,
  CollectionDetails,
  PartyFieldName,
  PartyRole,
  PartySide,
} from '../../types/quote';
import DangerousGoodsNotice from './DangerousGoodsNotice';
import PartyFieldset from './PartyFieldset';
import { PARTY_ROLES, getPartyFields } from './collectionFields';
import { Checkbox, FieldError, LABEL_CLASS, Radio, Select, TEXTAREA_CLASS } from './fields';

const SECTION_TITLE = 'text-[15px] font-bold uppercase tracking-wide text-navy';

type SideErrors = Partial<Record<PartyFieldName, string>>;

type FormErrors = {
  dangerousGoodsAccepted?: string;
  productDescription?: string;
  collectionDate?: string;
  collectFrom: SideErrors;
  deliveryTo: SideErrors;
};

const emptyErrors = (): FormErrors => ({ collectFrom: {}, deliveryTo: {} });

const validate = (details: CollectionDetails): FormErrors => {
  const errors = emptyErrors();

  if (!details.dangerousGoodsAccepted) {
    errors.dangerousGoodsAccepted =
      'You must confirm your shipment contains no dangerous goods.';
  }
  if (!details.productDescription.trim()) {
    errors.productDescription = 'Describe what you are sending.';
  }
  if (!details.collectionDate) errors.collectionDate = 'Choose a collection date.';

  (['collectFrom', 'deliveryTo'] as PartySide[]).forEach((side) => {
    getPartyFields(details.role, side).forEach((field) => {
      if (!field.required || field.kind === 'collection-point') return;
      if (!details[side][field.name]?.trim()) errors[side][field.name] = 'Required.';
    });
  });

  return errors;
};

const hasErrors = (errors: FormErrors) =>
  Boolean(errors.dangerousGoodsAccepted) ||
  Boolean(errors.productDescription) ||
  Boolean(errors.collectionDate) ||
  Object.keys(errors.collectFrom).length > 0 ||
  Object.keys(errors.deliveryTo).length > 0;

/** Formats the chosen carrier's window, e.g. "2pm - 6pm". */
const formatPickupWindow = (quote?: CarrierQuote) => {
  if (!quote) return '';

  const label = (hour: number) =>
    `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? 'am' : 'pm'}`;

  return `${label(quote.collectionWindow[0])} - ${label(quote.collectionWindow[1])}`;
};

export type CollectionDetailsFormProps = {
  initialValue: CollectionDetails;
  /** Selected courier — supplies the read-only pickup window. */
  quote?: CarrierQuote;
  onBack: () => void;
  onSubmit: (value: CollectionDetails) => void;
};

const CollectionDetailsForm: React.FC<CollectionDetailsFormProps> = ({
  initialValue,
  quote,
  onBack,
  onSubmit,
}) => {
  const [details, setDetails] = useState<CollectionDetails>(initialValue);
  const [errors, setErrors] = useState<FormErrors>(emptyErrors);

  const dateOptions = useMemo(() => getCollectionDateOptions(), []);
  const pickupWindow = formatPickupWindow(quote);

  const patch = (changes: Partial<CollectionDetails>) =>
    setDetails((current) => ({ ...current, ...changes }));

  const patchSide = (side: PartySide, name: PartyFieldName, value: string) =>
    setDetails((current) => ({ ...current, [side]: { ...current[side], [name]: value } }));

  // Switching role swaps the field sets, so stale errors would point at fields
  // that no longer exist.
  const changeRole = (role: PartyRole) => {
    patch({ role });
    setErrors(emptyErrors());
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const found = validate(details);
    setErrors(found);

    if (!hasErrors(found)) onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="border-t border-black/10"></div>
      <DangerousGoodsNotice
        accepted={details.dangerousGoodsAccepted}
        onAcceptedChange={(dangerousGoodsAccepted) => patch({ dangerousGoodsAccepted })}
        error={errors.dangerousGoodsAccepted}
      />

      <div className="border-t border-black/10 pt-8">
        <label htmlFor="product-description" className="text-sm font-bold text-navy">
          Product description*
        </label>
        <textarea
          id="product-description"
          value={details.productDescription}
          placeholder="Description of the product..."
          onChange={(event) => patch({ productDescription: event.target.value })}
          className={`${TEXTAREA_CLASS} mt-2`}
        />
        <FieldError message={errors.productDescription} />
      </div>

      <fieldset className="flex flex-wrap items-center gap-x-8 gap-y-3">
        <legend className="float-left mr-8 text-sm font-bold text-navy">Are you?</legend>
        {PARTY_ROLES.map((role) => (
          <Radio
            key={role.id}
            label={role.label}
            name="party-role"
            value={role.id}
            checked={details.role === role.id}
            onChange={() => changeRole(role.id)}
          />
        ))}
      </fieldset>

      <div className="grid gap-10 md:grid-cols-2">
        <PartyFieldset
          title="Collect from"
          idPrefix="collect-from"
          fields={getPartyFields(details.role, 'collectFrom')}
          values={details.collectFrom}
          errors={errors.collectFrom}
          onChange={(name, value) => patchSide('collectFrom', name, value)}
        />
        <div className="md:border-l md:border-black/10 md:pl-10">
          <PartyFieldset
            title="Delivery to"
            idPrefix="delivery-to"
            fields={getPartyFields(details.role, 'deliveryTo')}
            values={details.deliveryTo}
            errors={errors.deliveryTo}
            onChange={(name, value) => patchSide('deliveryTo', name, value)}
          />
        </div>
      </div>

      <section className="border-t border-black/10 pt-8">
        <h2 className={SECTION_TITLE}>Collection date &amp; time</h2>

        <div className="mt-5 space-y-3 md:max-w-md">
          <div className="md:grid md:grid-cols-[190px_1fr] md:gap-4">
            <label
              htmlFor="collection-date"
              className="mb-1.5 block text-sm font-bold text-navy md:mb-0 md:self-center"
            >
              Date*
            </label>
            <div>
              <Select
                id="collection-date"
                value={details.collectionDate}
                placeholderShown={!details.collectionDate}
                onChange={(event) => patch({ collectionDate: event.target.value })}
              >
                <option value="">Select a date</option>
                {dateOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
              <FieldError message={errors.collectionDate} />
            </div>
          </div>

          <div className="md:grid md:grid-cols-[190px_1fr] md:gap-4">
            <label
              htmlFor="pickup-window"
              className="mb-1.5 block text-sm font-bold text-navy md:mb-0 md:self-center"
            >
              Pickup time window
            </label>
            {/* Set by the carrier chosen in step 2, so it is display-only. */}
            <input
              id="pickup-window"
              type="text"
              value={pickupWindow}
              readOnly
              className="w-full cursor-default rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-navy"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 pt-8">
        <h2 className={SECTION_TITLE}>Special instructions</h2>

        <div className="mt-5 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-bold text-navy">Pickup</h3>

            <Checkbox
              className="mt-3"
              label="Pickup from front door if unattended"
              checked={details.pickupFrontDoorIfUnattended}
              onChange={(event) =>
                patch({ pickupFrontDoorIfUnattended: event.target.checked })
              }
            />

            <label htmlFor="pickup-instructions" className={`${LABEL_CLASS} mt-4 normal-case`}>
              Other (please specify)
            </label>
            <textarea
              id="pickup-instructions"
              value={details.pickupInstructions}
              placeholder="Please note..."
              onChange={(event) => patch({ pickupInstructions: event.target.value })}
              className={TEXTAREA_CLASS}
            />
          </div>

          <div className="md:border-l md:border-black/10 md:pl-10">
            <h3 className="text-sm font-bold text-navy">Delivery</h3>

            <Checkbox
              className="mt-3"
              label="Authority to leave at"
              checked={details.authorityToLeave}
              onChange={(event) => patch({ authorityToLeave: event.target.checked })}
            />

            <div className="mt-3">
              <Select
                aria-label="Authority to leave location"
                value={details.authorityToLeaveLocation}
                placeholderShown={!details.authorityToLeaveLocation}
                disabled={!details.authorityToLeave}
                onChange={(event) => patch({ authorityToLeaveLocation: event.target.value })}
              >
                <option value="">Select a location</option>
                {AUTHORITY_TO_LEAVE_LOCATIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>

            <label
              htmlFor="delivery-instructions"
              className={`${LABEL_CLASS} mt-4 normal-case`}
            >
              Other (please specify)
            </label>
            <textarea
              id="delivery-instructions"
              value={details.deliveryInstructions}
              placeholder="Please note..."
              onChange={(event) => patch({ deliveryInstructions: event.target.value })}
              className={TEXTAREA_CLASS}
            />
          </div>
        </div>
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

export default CollectionDetailsForm;
