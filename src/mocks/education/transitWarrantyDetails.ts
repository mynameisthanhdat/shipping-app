import { PATHS } from '../../routes/paths';

/** Nested list node used inside ordered/unordered warranty blocks. */
export type WarrantyListItem =
  | string
  | {
      text: string;
      children?: WarrantyListItem[];
    };

export type WarrantyContentBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'ordered'; items: WarrantyListItem[] }
  | { type: 'unordered'; items: WarrantyListItem[] };

export type TransitWarrantyDetailSection = {
  id: string;
  title: string;
  blocks: WarrantyContentBlock[];
};

/**
 * Full warranty terms for one carrier card.
 * `id` must match a `TransitWarrantyItem.id` from the Options list.
 */
export type TransitWarrantyDetail = {
  id: string;
  pageTitle: string;
  intro: string;
  sections: TransitWarrantyDetailSection[];
  additionalCover: {
    title: string;
    body: string;
    contactTo: string;
    contactLabel: string;
  };
};

/**
 * Detail pages keyed by list item `id`.
 * Only carriers with an entry here are clickable on the Options grid.
 */
export const TRANSIT_WARRANTY_DETAILS: Record<string, TransitWarrantyDetail> = {
  'allied-express': {
    id: 'allied-express',
    pageTitle: 'Allied Express Road Express Transit Warranty Cover',
    intro:
      'By requesting BEE DIRECT Pty Ltd (“the Company”) provide one or other of the warranties it offers in respect of loss or damage to goods defined hereunder, the Customer agrees to these warranty terms and conditions (WTCs) which are supplementary to the trading terms and conditions (TTCs) of the Company. Accordingly, the Customer agrees that it has received and read the TTCs which are deemed incorporated herein. To the extent of any inconsistency between the interpretation, meaning or application of these WTCs and the TTCs, the WTCs shall prevail.',
    sections: [
      {
        id: 'definitions',
        title: 'Definitions & Interpretation',
        blocks: [
          {
            type: 'ordered',
            items: [
              {
                text: 'Words and terms used in these WTCs will have the same meanings as defined in the TTCs. The following words and terms used in these WTCs have the following meanings except where the context of application clearly indicates otherwise:',
                children: [
                  'Claim Payment means the amount of $100 payable by the Customer in respect of each Claim brought by the Customer for loss or damage to the Goods covered by the Warranty arising from each separate incident or occurrence not otherwise excluded by these WTCs.',
                  'Declared Value means the value of the Goods declared by the Customer when choosing the Warranty service during the booking process and shown in the booking receipt.',
                  'Depreciation means the reduction in value of an item over time, calculated at 20% per annum from the date of original purchase.',
                  'Warranty Limit means the Declared Value of the Goods as declared by the Customer during the booking process.',
                  'Loss or Damage means actual physical loss or damage to the Customer’s Goods subject of the Warranty and these WTCs and does not include any other loss or damage of any kind including but not limited to indirect or consequential losses.',
                  'Warranty means the warranty that the Company agrees to provide in respect of Loss or Damage to the Goods subject and pursuant to these WTCs.',
                  'Warranty Confirmation means the written confirmation of the particulars relevant to the Warranty provided by the Company and recorded in the booking receipt and these WTCs.',
                  {
                    text: 'Warranty Payment is the amount the Customer pays to the Company for the Warranty depending on the Declared Value Bracket within which the Customer’s Declared Value falls as follows:',
                    children: [
                      'for domestic transits within Australia where the Customer’s Goods have a Declared Value within the range from $0 to $1,500, the Warranty Payment is $6.36 incl GST;',
                      'for domestic transits within Australia, where the Customer’s Goods have a Declared Value within the range from $1,501 to $4,500, the Warranty Payment is $11.50 incl GST;',
                      'for international transit beyond Australia where the Customer’s Goods have a Declared Value within the range from $0 to $1,500, the Warranty Payment is $7.62;',
                      'for international transit beyond Australia where the Customer’s Goods have a Declared Value within the range from $1,501 to $4,500, the Warranty Payment is $13.06.',
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'not-insurance',
        title: 'Warranty not Insurance',
        blocks: [
          {
            type: 'ordered',
            items: [
              'The parties agree that these WTCs are not provisions which amount to an undertaking or liability in respect of insurance but provisions that warrant that the Company will indemnify the Customer for Loss or Damage even in circumstances where the Company has less or no liability to the Customer at law.',
            ],
          },
        ],
      },
      {
        id: 'warranty',
        title: 'Warranty',
        blocks: [
          {
            type: 'ordered',
            items: [
              'In consideration of the Warranty Payment, the Claim Payment and subject to these WTCs, the Company warrants to pay the Customer for Loss or Damage that occurs during the performance of the Services by the Company, its employees or Subcontractors.',
            ],
          },
        ],
      },
      {
        id: 'cover',
        title: 'The Warranty Cover',
        blocks: [
          {
            type: 'ordered',
            items: [
              {
                text: 'If the Customer submits a claim for Warranty in respect of Loss or Damage to Goods which are subject to these WTCs, the Company agrees to pay the lesser of:',
                children: [
                  'the cost of repair to the Goods; or,',
                  'the cost of replacement of like goods to the Goods in the market not exceeding the original price that the Customer paid for the Goods less any reasonable salvage value obtained in respect of the Goods up to the Warranty Limit.',
                ],
              },
              'If there is no market for like goods, then the cost of replacement referred above shall be the original price the Customer paid for the Goods less Depreciation since the date of their original purchase as best can be determined.',
              'If the Customer fails to reasonably salvage the Goods, the parties agree that the Company will deduct a value that reasonably reflects the market value of the Goods following damage.',
            ],
          },
        ],
      },
      {
        id: 'exclusions',
        title: 'Warranty Cover Exclusions',
        blocks: [
          {
            type: 'ordered',
            items: [
              {
                text: 'The following Goods are excluded from Warranty cover:',
                children: [
                  'perishable goods including but not limited to meat, seafood, vegetables, fruits, beverages, confectionary, foodstuff or other temperature controlled goods;',
                  'live goods, including but not limited to living plants, animals, fish, reptiles or birds;',
                  'money (which means anything having the value of money), bullion (of any precious metal), cheques, credit or other card sales vouchers, securities, shares, bonds, deed, bills of exchange, negotiable instruments in bearer form or any documents that represent money, property or title;',
                  'loose precious and semi-precious stones;',
                  'human remains or ashes;',
                  'dangerous, illegal or prohibited items, firearms, air guns, toy guns, ammunition, including explosives, radioactive or explosive goods/devices, weapons, weapon parts;',
                  'alcoholic beverages;',
                  'cigarettes, e-cigarettes or tobacco products;',
                  'glass objects and items containing glass;',
                  'china, crockery, marble, quartz, Caesar stone and other stone or imitation stone products, pottery, ceramic, porcelain, bathroom vanity units and toilet suites;',
                  'framed items containing glass, including but not limited to mirrors;',
                  'furs and ivory;',
                  'jewellery, all watches, precious metals;',
                  'batteries excluding mobile phones, laptops or tablets;',
                  'narcotics and psychotropic substances;',
                  'goods that are deemed to be illegal to import in the destination country;',
                  'personal effects, being privately owned items, which are used/second-hand and usually worn/carried on the person, such as clothing and jewellery; and objects imbued with sentimental significance such as heir and family photo albums;',
                  'motor vehicles including motor bikes/trikes/quad bikes and any other road/offroad vehicles;',
                  'waterborne vessels, jet skis, boats or similar (whether trailed or not);',
                  'items with existing damage or in poor condition;',
                  'furniture (indoors/outdoors) including but not limited to tables, chairs, lounge suites, mattresses, flat pack furniture, antiques, picture and photos frames, prints, paintings and other works of art;',
                  'household goods removals.',
                ],
              },
              {
                text: 'Loss or Damage to the Goods arising from the following risks are excluded from Warranty cover:',
                children: [
                  'rust, oxidization, discolouration;',
                  'rejection, detention, condemnation or confiscation of the Goods by any government or their agencies or departments or by any public or local authority;',
                  'dismantling, assembly, testing or fabrication of the Goods other than as required during ordinary course of provision of the Services.',
                ],
              },
              {
                text: 'The Company is not liable to pay Warranty cover when Loss or Damage to the Goods results from:',
                children: [
                  'ordinary wear and tear of the Customer’s Goods;',
                  'faulty manufacture or inherent defects of the Customer’s Goods;',
                  'wars or strikes, actions of government or customs authorities (including rejection or refusal of importation permission for the Goods), nuclear or radioactive contamination;',
                  'mould;',
                  'insufficiency, deficiency or unsuitability of packing of the Goods particularly when not packed at or above the standard set by original manufacturers for the type or mode of transit(s) used;',
                  'mechanical or electrical breakdown or malfunction where no external evidence of damage can be shown;',
                  'loss of data;',
                  'Goods destroyed by foreign government or customs authorities due to non-compliance with foreign laws/regulation or delay in collection.',
                ],
              },
              {
                text: 'Transit of the Goods to, from or within the following countries is excluded from Warranty cover:',
                children: [
                  'Afghanistan, Algeria, Armenia, Azerbaijan, Bangladesh, Belarus, Bolivia, Burkina Faso, Burma (Myanmar), Burundi, Cameroon, Central African Republic, Chad, Columbia, Cuba, Democratic Republic of Congo, Ecuador, Equatorial Guinea, Eritrea, Ethiopia, Georgia, Georgian Guinea, Guinea-Bissau, Guinea, Iran, Iraq, Israel, Cote D’voire (Ivory Coast), Kenya, Lebanon, Libya, Liberia, Madagascar, Mali, Mauritania, Moldova, Nagorno-Karabakh, Nepal, Niger, Nigeria, North Korea, Pakistan, Palestine, Russia, Rwanda, Sierra Leone, Somalia, Sudan, Syria, Tajikistan, Turkmenistan, Uzbekistan, Uganda, Ukraine, Yemen, Zimbabwe. Other: Any country where local legislation precludes the insurance from being placed outside of that country or requires insurance to be placed in the locality of that country.',
                  'Countries subject of trade or economic sanctions from UN resolutions, laws or regulations of Australia, European Union, United Kingdom or United States of America.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'claims',
        title: 'Claims Processing',
        blocks: [
          {
            type: 'ordered',
            items: [
              'Any claim by the Customer for Warranty in respect of damage to Goods must be lodged in writing to the Company within 7 business days of delivery of the Goods or the date Services are completed, whichever date occurs first.',
              'Any claim by the Customer for Warranty loss/non-delivery of Goods must be notified in writing to the Company within 7 business days from the date the Goods should have been delivered or the Services should have been completed, whichever date occurs first.',
              'In respect of all Warranty claims, the Customer in addition to completing a claim form with particulars regarding the Goods and circumstances of the Loss or Damage must supply all relevant supporting documentation or other evidence and information as may be reasonably required by the Company to assess the claim.',
              {
                text: 'The Customer agrees that it will:',
                children: [
                  'take all reasonable measures to avoid or minimise the extent of loss or damage to the Goods or any further loss, damage, liability or expense;',
                  'note any relevant details regarding loss or damage on the consignment note, inventory or other document(s) used in the respect of the Service and provide same to the Company;',
                  'preserve any damaged or defective items which may be required as evidence for the Company’s assessment;',
                  'not authorise the repair or replacement of the lost or damaged Goods without the Company’s express written consent;',
                  'not make any settlement, admission of liability, payment, or promise of payment to a third party without written consent of the Company.',
                ],
              },
              'The Company may reduce the amount paid under the Warranty by the amount equal to the prejudice caused to it as a result of the failure to comply with one or more of the subclauses of the above provision.',
              'Only the Customer may claim under the Warranty.',
              'A claim for Warranty will not be accepted unless it is made in accordance with the claims clauses above.',
              'If the Customer is an Australian registered business making a warranty claim, then it must provide its ABN number and the Company will settle its claim exclusive of GST given that a GST registered business entity can claim an input tax concession as part of its normal GST administration.',
              'If the Customer is an individual or non-GST registered entity making a warranty claim, then the Company will settle the claim inclusive of GST given that these parties cannot claim an input tax concession.',
            ],
          },
        ],
      },
    ],
    additionalCover: {
      title: 'Additional Cover for Excluded Items',
      body: 'Upon negotiation with the Customer in writing, the Company may agree to greater responsibility and liability than set out in this BEE DIRECT Warranty document upon payment of additional charges by the Customer as required. Applicable rates for greater responsibility and liability are subject of discussion and negotiation between the parties. If you wish to negotiate a greater level of liability with the company please contact us.',
      contactTo: PATHS.contactUs,
      contactLabel: 'Contact us',
    },
  },
};

export const getTransitWarrantyDetailById = (
  id: string
): TransitWarrantyDetail | undefined => TRANSIT_WARRANTY_DETAILS[id];

export const hasTransitWarrantyDetail = (id: string): boolean =>
  id in TRANSIT_WARRANTY_DETAILS;
