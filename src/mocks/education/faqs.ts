export type FaqAnswerBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'list'; items: string[] };

export type FaqItem = {
  id: string;
  question: string;
  answer: FaqAnswerBlock[];
};

export type FaqSection = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
};

export const FAQ_SECTION: FaqSection = {
  id: 'road-freight-services',
  title: 'Our Road Freight Services Work',
  description:
    'At Transdirect we strive to make the shipping process as quick and easy as possible. If you follow our simple steps your package will be on its way in no time.',
  items: [
    {
      id: 'how-to-book',
      question: 'How do I make a booking?',
      answer: [
        { type: 'list', items: [
          'Step 1: Fill in each field on the freight calculator to get an instant quote.',
          'Step 2: Select your preferred service and include Insurance if required.',
          'Step 3: Complete the required fields for all booking information.',
          'Step 4: Read carefully the terms and conditions of carriage and Insurance if applicable.',
          'Step 5: Pay for your booking by either PayPal or credit card.',
          'Step 6: An email with a receipt, instructions and a consignment note will be sent to your email address. If you book as the ‘receiver’, both supplied emails will receive the relevant information.',
          'Step 7: Print off the consignment note.',
          'Step 8: Securely fasten the consignment note to your well packaged item.',
        ]},
      ],
    },
    {
      id: 'book-as-receiver',
      question: "Can I book as the 'Receiver'?",
      answer: [
        { type: 'paragraph', content: 'Yes you can.' },
        { type: 'paragraph', content: 'As you are the person who has completed our booking process, be sure to select “receiver” as the Booking Party during the booking process (the choices are Sender, Receiver or Third Party).' },
        { type: 'paragraph', content: 'It is very important that you make sure the ‘Sender’ receives the consignment note email, and they fully understand what is required to complete a pickup.' },
        { type: 'paragraph', content: 'The consignment note must be printed off and securely attached to your freight in advance of the driver’s arrival and the pick up address must be easily accessible.' },
      ],
    },
    {
      id: 'consignment-note',
      question: 'What is a consignment note? How do I receive it?',
      answer: [
        { type: 'paragraph', content: 'A consignment or con note is the label that needs to be attached to your item/s before pickup. The consignment note has all the relevant details and also a barcode which is used for our tracking system. Once you make a booking with us, you will receive an email which contains a PDF file. All the relevant information is contained within. Please read the pages carefully as the information is very important. You will need to stick the consignment note to the item/s as instructed. Failure to apply the consignment note will result in a futile pickup charge.' },
      ],
    },
    {
      id: 'book-with-operator',
      question: 'Can I book with an operator?',
      answer: [
        { type: 'paragraph', content: 'As we are an internet based company, and require each customer to tick the ‘Terms and Conditions’ and ‘Transit Warranty Conditions’, we can only offer bookings through our website.' },
      ],
    },
    {
      id: 'change-cancel-booking',
      question: 'Can I change or cancel my booking?',
      answer: [
        { type: 'paragraph', content: 'Yes, if a booking has not been collected, you may cancel with suitable notice given. Please note that cancellations which are requested without adequate notice may result in a futile charge.' },
        { type: 'paragraph', content: 'Once a booking has been confirmed and dispatched, changes are not possible. If there are any errors or discrepancies, additional charges may be incurred.' },
      ],
    },
    {
      id: 'no-one-home-pickup',
      question: 'What happens if no one is home at the specified pick up time?',
      answer: [
        { type: 'paragraph', content: 'If no one is going to be home at the specified pick up time, you can choose to leave the item at the front door for the driver, as long as the supplied consignment note and signed manifest (if applicable) is attached. If this has not been done, and the driver arrives to pick up the parcel, this may result in futile charges being applied. The job will then need to be rebooked for a suitable pick up time.' },
      ],
    },
    {
      id: 'no-one-home-delivery',
      question: 'What happens if no one is home to receive the delivery?',
      answer: [
        { type: 'paragraph', content: 'We do advise that your delivery address is attended where possible; however you may give Authority to Leave (ATL) during booking via the following options:' },
        { type: 'list', items: [
          'Leave at – front door/backdoor/side gate/carport/other.',
          'By selecting other, you may enter a custom description, e.g., leave behind the bins.',
        ]},
        { type: 'paragraph', content: 'Please ensure that any details put in the ‘Other’ field are clearly abbreviated. The field is short so you will need to clearly abbreviate the location where you would like the item left.' },
        { type: 'paragraph', content: 'If a signature on delivery service is unattended, a redelivery fee may be charged if no one is available to receive the delivery and Authority to leave has not been given. Instead you may wish to consider booking with a delivery address where the receiver will be available to sign during business hours, i.e., workplace, etc.' },
      ],
    },
    {
      id: 'packaging-service',
      question: 'Can you package my item for me?',
      answer: [
        { type: 'paragraph', content: 'We do not offer a packaging service at Transdirect. However it is vital that your item is packaged to manufacturers specifications, or an appropriate equivalent. If you have insurance or warranty on your booking, sufficient packaging will directly affect validity of coverage. For help and guidance on packaging your own goods for transit please refer to Packaging Requirements.' },
      ],
    },
    {
      id: 'po-boxes',
      question: 'Can you deliver to P.O boxes? or Post Offices',
      answer: [
        { type: 'paragraph', content: 'We are unable to deliver to P.O boxes.' },
        { type: 'paragraph', content: 'If it is a regional location the consignment may end up at a regional post office; however the booking cannot be directly addressed to that post office — the physical address of the receiver must be entered on the booking.' },
      ],
    },
    {
      id: 'max-length',
      question: 'What can the maximum length of my parcel be?',
      answer: [
        { type: 'paragraph', content: 'The maximum length that Transdirect can carry is 5m or 500cm.' },
      ],
    },
    {
      id: 'over-25kg',
      question: 'What if my item is over 25kgs?',
      answer: [
        { type: 'paragraph', content: 'If your item is over 25kg Transdirect can still carry your goods; however your items will need to be packaged on a pallet/skid or crate, and you will need to provide lifting assistance at the sending and receiving locations. If assistance is not available, you will need to select the Hydraulic tailgate option for the applicable location.' },
      ],
    },
    {
      id: 'weight-dimensions',
      question: "What if I don't know the correct weight or dimensions of the item?",
      answer: [
        { type: 'paragraph', content: 'In order to have an accurate quote on the price of your shipping, you must have the Length x Width x Height in cm, and weight in kg of your packaged freight. If it is on a pallet, the overall dimensions must include that as part of the packaging. Please avoid estimates as inaccurate dimensions may incur additional charges.' },
      ],
    },
    {
      id: 'transit-warranty',
      question: 'Are my goods covered by a Transit Warranty?',
      answer: [
        { type: 'paragraph', content: 'Only two carriers bookable through Transdirect have cover included.' },
        { type: 'paragraph', content: 'Couriers Please = Limited liability domestic complimentary cover of up to $1000 not including the first $100 of loss, so if you claimed the max amount you get $900 max.' },
        { type: 'paragraph', content: 'Aramex = Limited liability domestic complimentary cover of up to $1500 per Base Label (so $1500 max per parcel). Please note their strict 24 hour incident notification period for damage on delivery.' },
        { type: 'paragraph', content: 'Every other carrier you need to add a Warranty when at the quote stage and the applicable fee is added on the booking. The fee is calculated when you declare the value of the goods. Please note that the Warranty coverage on the booking is a maximum of $4500 not including the first $100 of loss.' },
        { type: 'paragraph', content: 'Declared Value Cost inc GST — Domestic: $0–$1,500 $6.36; $1,501–$4,500 $11.50. International: $0–$1,500 $7.62; $1,501–$4,500 $13.06.' },
        { type: 'paragraph', content: 'We have the transit warranty terms all listed here for your ease of reference.' },
      ],
    },
    {
      id: 'track-delivery',
      question: 'Can I track my delivery online?',
      answer: [
        { type: 'paragraph', content: 'Yes, you can track your delivery online. Simply go to our website and enter the consignment number on the homepage. In some instances your consignment will only appear in the track and trace once it has arrived at a capital city depot if collected from or going to a regional location. If you need assistance please contact us.' },
      ],
    },
    {
      id: 'regional-pickup',
      question: 'I live outside of a capital city, can my parcel be picked up tomorrow?',
      answer: [
        { type: 'paragraph', content: 'If you are in a regional location, depending on how remote your location is, the route may not be serviced every day — in some cases once or twice a week may be the case. If you are having difficulty with a pick up please contact our customer support team via the contact us page.' },
      ],
    },
    {
      id: 'need-account',
      question: 'Do I need an account to use your service?',
      answer: [
        { type: 'paragraph', content: 'No, anyone can use our service with a valid PayPal account or Visa, Mastercard or American Express Card. However we recommend you sign up as a member with no obligation and benefit from a member discount and a convenient way to track your bookings all in one place.' },
      ],
    },
    {
      id: 'payment-options',
      question: 'What are my payment options?',
      answer: [
        { type: 'paragraph', content: 'We currently offer payment via Visa, Mastercard or American Express Card or PayPal. Business accounts that qualify may apply for a credit account.' },
      ],
    },
    {
      id: 'cutoff-time',
      question: 'Is there a cut-off time for bookings?',
      answer: [
        { type: 'paragraph', content: 'In metro areas the cut off is 12 midday for same day pickups. For regional areas the cut off is 12 midday for next day pickups, allowing for variances in how regularly remote locations may be serviced.' },
      ],
    },
    {
      id: 'regional-door-to-door',
      question: "Are there any regional areas that you don't service door-to-door?",
      answer: [
        { type: 'paragraph', content: 'Whilst we try to offer a door to door service throughout Australia, if your location is extremely remote, there is a possibility we will not be able to service the location to the door. The parcel may be left in a safe space or diverted to a local collection point. If you need assistance please contact us.' },
      ],
    },
    {
      id: 'depot-pickup',
      question: 'Can I pickup or drop off my item at the closest depot?',
      answer: [
        { type: 'paragraph', content: 'In some cases, yes you can. You will need to contact us to arrange the details.' },
      ],
    },
    {
      id: 'carbon-neutral',
      question: 'What does certified carbon-neutral shipping mean?',
      answer: [
        { type: 'paragraph', content: 'To become carbon neutral, Transdirect has partnered with the Carbon Reduction Institute to offset 100% of the emissions of our freight services. We were audited to identify the amount of carbon created and were able to offset our emissions through Carbon Reduction Institute’s certified program — neutralising our footprint. Regular audits ensure the number of offsets is matched to the number of carbon emissions created by our freight services. We launched this initiative September 2019, becoming one of only two Australian shipping providers to offer carbon-offset services to all of our clients.' },
        { type: 'paragraph', content: 'Learn more about carbon offsets and the NoCO2 certification.' },
      ],
    },
    {
      id: 'charged-weight',
      question: 'What is Charged Weight?',
      answer: [
        { type: 'paragraph', content: 'This is how the carrier determines the cost. The “Charged Weight” is always the bigger of two numbers: either the “dead weight” which is how much it actually weighs, or the “Cubic Weight” which is how much space it takes up.' },
        { type: 'paragraph', content: 'e.g. A package which is 10 x 10 x 10cm @ 20 kg will be charged based upon the dead weight.' },
        { type: 'paragraph', content: 'A package which is 120 x 120 x 120 cm @ 1kg will be charged based upon the cubic weight.' },
      ],
    },
    {
      id: 'measure-freight',
      question: 'How do I measure my freight?',
      answer: [
        { type: 'paragraph', content: 'Use the dimensions of your item as it has been packed. Ideally your freight will be uniform with no protrusions.' },
        { type: 'paragraph', content: 'However if your freight is not uniform or odd shaped then you must measure L x W x D in cm at the farthest point each extends to, e.g. if you buy a standard packing box and then stuff it till it bulges then the measurements will exceed what the box has printed on it. The carriers measure the cubic and dead weight and any difference in the declared weight and/or dimensions will result in additional charges.' },
        { type: 'paragraph', content: 'For additional guidance please see our packaging requirements section.' },
        { type: 'paragraph', content: 'Please note that if your packaging is not of a proper standard and becomes undone then that additional space occupied may also result in an additional charge.' },
      ],
    },
    {
      id: 'deliver-inside',
      question: 'Can they deliver inside my home/office/building level?',
      answer: [
        { type: 'paragraph', content: 'Couriers deliver “Door to Door” as applicable to the location but are not responsible for unloading and unpacking the freight at the delivery location. Suitable unloading equipment or facilities e.g. forklift, loading dock etc must be considered and available. A delivery driver will not be responsible for unpacking pallets or other similar loads and taking them into the premises.' },
      ],
    },
    {
      id: 'residential-surcharge',
      question: 'What is a Residential Surcharge?',
      answer: [
        { type: 'paragraph', content: 'Some carriers charge an additional fee to service residential locations due to the cost and difficulty in collecting or delivering with such premises — getting a HGV into tight areas or negotiating gravel driveways with bulky freight is a challenge for those providers.' },
        { type: 'paragraph', content: 'Any residential surcharge will always be reflected in the Transdirect Quote tool so long as you ensure that you have declared your building type accurately, along with accurate weight and dimensions.' },
        { type: 'paragraph', content: 'Please note that a business registered to a home does not make it a Commercial Building and residential surcharges will be applicable.' },
      ],
    },
    {
      id: 'amazon-retailer',
      question: 'I am an Amazon Retailer, can I use your service to send to an Amazon fulfilment centre?',
      answer: [
        { type: 'paragraph', content: 'Yes, you can; however, you will need to ensure that your booking complies with Amazon’s rules on delivery acceptance.' },
        { type: 'list', items: [
          'Effective September 1, 2025, Amazon fulfilment centres are no longer accepting small parcel delivery (SPD) by self-delivery. All SPD shipments must be arranged through third-party carriers, Amazon SEND or the Partnered Carrier Program. Any self-delivered shipments will be rejected at the fulfilment centres after this date.',
          'SPD with a partnered carrier has a 30-box limit per shipment.',
        ]},
        { type: 'paragraph', content: 'Please ensure you check your intended Amazon fulfilment centre rules before booking.' },
        { type: 'paragraph', content: 'To check which carriers may facilitate your booking please call us on 1300 668 229.' },
      ],
    },
    {
      id: 'auction-house-pickup',
      question: 'Can I arrange Pick up from an Auction House?',
      answer: [
        { type: 'paragraph', content: 'If as a Transdirect member you are the Auction house then you may do so; however if you are a consumer having made a purchase then collections from Auction houses are not permitted.' },
      ],
    },
    {
      id: 'retail-store-pickup',
      question: 'Can I arrange pick up from a Retail store?',
      answer: [
        { type: 'paragraph', content: 'We can; however you must ensure that the shipment is packed, labeled and readily accessible. If you need additional guidance please contact us.' },
      ],
    },
    {
      id: 'perishable-goods',
      question: 'Can I send perishable goods?',
      answer: [
        { type: 'paragraph', content: 'Perishable goods such as food or drink which is likely to spoil, or any other goods which require a temperature controlled environment are not suitable for general freight.' },
        { type: 'paragraph', content: 'Perishable goods include but may not be limited to food, meat, frozen goods, plants, animals or organic materials.' },
      ],
    },
    {
      id: 'batteries',
      question: 'Can I send batteries?',
      answer: [
        { type: 'paragraph', content: 'Some batteries can be sent, but only if they do not require Dangerous Goods handling or a Dangerous Goods declaration.' },
        { type: 'paragraph', content: 'We can accept:' },
        { type: 'list', items: [
          'Standard non-dangerous batteries, such as packaged alkaline batteries',
          'Lithium batteries installed inside equipment, such as laptops, phones, tablets, or power tools',
          'Lithium batteries by road freight only',
        ]},
        { type: 'paragraph', content: 'We cannot accept:' },
        { type: 'list', items: [
          'Loose or spare lithium batteries',
          'Lithium batteries packed separately from the equipment',
          'Lithium batteries sent by air freight',
          'Damaged, leaking, or unsafe batteries',
          'Any battery shipment requiring Dangerous Goods handling or a Dangerous Goods declaration',
        ]},
        { type: 'paragraph', content: 'Lithium batteries must be within the allowed limits, packed securely, and marked on the outside of the parcel where required.' },
      ],
    },
    {
      id: 'driver-call-ahead',
      question: 'Can the driver call ahead / on arrival?',
      answer: [
        { type: 'paragraph', content: 'We do not offer a call on arrival / ahead of collection or delivery.' },
      ],
    },
    {
      id: 'white-goods',
      question: 'Can I ship white goods (fridge/freezers/washing machines/dryers)?',
      answer: [
        { type: 'paragraph', content: 'Only brand new and packaged according to the packaging requirements.' },
      ],
    },
    {
      id: 'islands',
      question: 'Can I collect from/deliver to Islands?',
      answer: [
        { type: 'paragraph', content: 'Our carriers can only collect/deliver from islands with road access available to the public.' },
      ],
    },
    {
      id: 'plants-animals',
      question: 'Can I ship plants/animals/livestock?',
      answer: [
        { type: 'paragraph', content: 'Animals or plants living or dead cannot travel on our services. Organic materials must be non perishable and not represent any potential biohazard.' },
      ],
    },
    {
      id: 'firearms',
      question: 'Can I ship firearms?',
      answer: [
        { type: 'paragraph', content: 'Firearms of any kind are not permitted to travel on our services.' },
      ],
    },
    {
      id: 'other-carriers',
      question: 'Can I organise delivery and collection from other Carriers?',
      answer: [
        { type: 'paragraph', content: 'This can be done, though you must ensure there is an onwarding label for the receiving carrier already attached in advance of collection.' },
      ],
    },
    {
      id: 'not-collected',
      question: 'What if my shipment does not get collected?',
      answer: [
        { type: 'paragraph', content: 'If your delivery has not been collected by 5pm for Metro pickups, or 3pm for regional pickup, please contact us as soon as possible.' },
        { type: 'paragraph', content: 'Unfortunately we are not able to track missed collections and rely upon the sender to notify us if there is any problem with your collection.' },
      ],
    },
    {
      id: 'delayed-shipment',
      question: 'What if my shipment is delayed?',
      answer: [
        { type: 'paragraph', content: 'Please monitor the tracking. If your shipment has not arrived within the estimated timeframe, whilst delays can occur and we thank you for your patience and understanding, please be sure to let us know ASAP if the shipment has not arrived within the ETA, as this can affect Warranty/Insurance cover.' },
        { type: 'paragraph', content: 'Please raise an enquiry via the contact us page.' },
      ],
    },
    {
      id: 'multi-pickup',
      question: 'What is a Multi Pick Up?',
      answer: [
        { type: 'paragraph', content: 'Multipickup is a volume discount offered by Transdirect to all members booking a bulk collection from the same location. You can book Multi pick up batches of 3, 7, 10 or 21. For instructions please see our helpful multipickup step-by-step guide and How-to video.' },
      ],
    },
  ],
};
