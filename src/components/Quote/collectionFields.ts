import {
  CollectionDetails,
  PartyFieldName,
  PartyRole,
  PartySide,
} from '../../types/quote';

export type PartyFieldKind = 'text' | 'tel' | 'email' | 'select' | 'collection-point';

export type PartyFieldConfig = {
  name: PartyFieldName;
  label: string;
  required?: boolean;
  placeholder?: string;
  kind?: PartyFieldKind;
};

export const PARTY_ROLES: Array<{ id: PartyRole; label: string }> = [
  { id: 'sender', label: 'Sender' },
  { id: 'receiver', label: 'Receiver' },
  { id: 'third-party', label: 'Third party' },
];

/** Address block shared by every role and both sides. */
const addressFields = (companyLabel = 'Company'): PartyFieldConfig[] => [
  { name: 'addressSearch', label: 'Address search' },
  { name: 'company', label: companyLabel, required: true },
  { name: 'unitStreetNumber', label: 'Unit/Street number', required: true },
  { name: 'streetName', label: 'Street name', required: true },
  { name: 'streetType', label: 'Street type', required: true, kind: 'select' },
];

const SMS_HINT = 'Mobile number required for SMS alerts';

const contactFields = (
  phonePlaceholder: string,
  emailPlaceholder?: string
): PartyFieldConfig[] => [
  { name: 'contactName', label: 'Name', required: true },
  {
    name: 'contactPhone',
    label: 'Phone number',
    required: true,
    kind: 'tel',
    placeholder: phonePlaceholder,
  },
  {
    name: 'contactEmail',
    label: 'Email',
    required: true,
    kind: 'email',
    placeholder: emailPlaceholder,
  },
];

/**
 * Which fields each role sees on each side. Sender and receiver share a field
 * set and differ only in whose contact details may be inherited; third party
 * adds its own contact block on the collection side.
 */
export const PARTY_FIELDS: Record<PartyRole, Record<PartySide, PartyFieldConfig[]>> = {
  sender: {
    collectFrom: [...contactFields(SMS_HINT), ...addressFields()],
    deliveryTo: [
      ...contactFields(
        'Use sender phone number if not available',
        'Use sender email if not available'
      ),
      ...addressFields(),
    ],
  },
  receiver: {
    collectFrom: [...contactFields(SMS_HINT), ...addressFields()],
    deliveryTo: [...contactFields(SMS_HINT), ...addressFields()],
  },
  'third-party': {
    collectFrom: [
      { name: 'thirdPartyName', label: 'Third party name', required: true },
      {
        name: 'thirdPartyPhone',
        label: 'Third party phone number',
        required: true,
        kind: 'tel',
      },
      { name: 'thirdPartyCompany', label: 'Third party company' },
      { name: 'thirdPartyEmail', label: 'Third party email', required: true, kind: 'email' },
      { name: 'contactName', label: 'Sender name', required: true },
      { name: 'contactPhone', label: 'Sender phone number', required: true, kind: 'tel' },
      { name: 'contactEmail', label: 'Sender email', required: true, kind: 'email' },
      ...addressFields('Sender company'),
    ],
    deliveryTo: [
      ...contactFields(''),
      { name: 'deliveryOption', label: 'Delivery Option', kind: 'collection-point' },
      ...addressFields(),
    ],
  },
};

export const getPartyFields = (role: PartyRole, side: PartySide): PartyFieldConfig[] =>
  PARTY_FIELDS[role][side];

/** Fields that hold no value of their own and so are never validated. */
const isValueField = (field: PartyFieldConfig) => field.kind !== 'collection-point';

/** True once step 3 holds every field required for the selected role. */
export const isCollectionDetailsComplete = (details: CollectionDetails): boolean => {
  if (!details.dangerousGoodsAccepted) return false;
  if (!details.productDescription.trim()) return false;
  if (!details.collectionDate) return false;

  const sides: PartySide[] = ['collectFrom', 'deliveryTo'];

  return sides.every((side) =>
    getPartyFields(details.role, side)
      .filter((field) => field.required && isValueField(field))
      .every((field) => Boolean(details[side][field.name]?.trim()))
  );
};
