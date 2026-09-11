export type TermsAndConditionsContent = {
  breadcrumb: string;
  title: string;
  lastUpdated: string;
  introduction: string;
  definitionsHeading: string;
  definitions: string[];
};

export const TERMS_AND_CONDITIONS_CONTENT: TermsAndConditionsContent = {
  breadcrumb: 'Term & Conditions',
  title: 'TERM & CONDITIONS',
  lastUpdated: 'Last updated on 05/08/2026',
  introduction:
    'By instructing the Company to supply the Services, the Customer agrees to accept and be bound by the Company’s trading terms and conditions. All and any business undertaken by the Company shall be subject to the Company’s trading terms and conditions of contract which are as follows:',
  definitionsHeading: 'Definitions',
  definitions: [
    '1. “Company” shall mean Transdirect Pty Ltd (ACN 50 111 218 627), its employees, servants, agents, subsidiaries, associated entities, successor and/or assigns.',
    '“Customer” shall mean the shipper (consignor), the receiver (consignee), the owner of the Goods, the bailor of the Goods or the person for whom any of the Services are arranged and/or performed.',
    '“Goods” shall mean the chattels, articles or things tendered for by the Customer for the Services and shall include the container(s), unit load device(s) or other packaging containing the same and any other pallet(s) delivered with the same to the Company or Subcontractor by the Customer or for or on its behalf.',
    '“Government Authority” means, without limitation, all Government Departments with responsibility for the import and export of goods, the collection of revenue on the import and export of goods and the transport of those goods to include, without limitation, Australian Customs Service (ACS), Australian Quarantine Inspection Service (AQIS) and Australian Taxation Office (ATO).',
    '“Services” shall mean the carriage, transport, movement, packing, handling, storage/warehousing, and/or any other service arranged or performed by the Company, pursuant to, or ancillary to, this contract with the Customer.',
    '“Dangerous goods” shall mean such of the Goods as shall be, or become, in fact or at law noxious, dangerous, hazardous, explosive, radioactive, inflammable or capable by their nature of causing damage or injury to other goods, persons, plants or animals or to any thing including that in which the Goods are carried, handled or stored.',
    '“Valuables” shall mean bullion, coins, precious stones, jewellery, antiques, or works of art.',
    '“Perishable goods” shall mean such of the Goods as shall be in fact or law liable to deteriorate in quality and/or value and shall include, but not be limited to, fruits, vegetables, dairy products, meat, etc.',
    '“Subcontractor” shall mean and include any person, firm or company (other than the Company) that arranges or performs the Services (or a part thereof).',
  ],
};
