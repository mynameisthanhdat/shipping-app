/**
 * Mock consignments for the tracking detail page.
 *
 * Timestamps are generated relative to now, so the demo never shows a delivery
 * that was "estimated" last year. Replace with a carrier tracking API call.
 *
 * Four consignments cover every state the page can render:
 *   BD-100001  in transit
 *   BD-100002  out for delivery
 *   BD-100003  delivered
 *   BD-100004  held up (exception callout)
 */

import { TrackedShipment, TrackingEvent } from '../types/tracking';

const HOUR = 60 * 60 * 1000;

/** ISO timestamp `hours` before now — negative values look ahead. */
const hoursAgo = (hours: number) => new Date(Date.now() - hours * HOUR).toISOString();

const event = (
  id: string,
  hours: number,
  status: string,
  location: string,
  description?: string
): TrackingEvent => ({ id, timestamp: hoursAgo(hours), status, location, description });

export const TRACKED_SHIPMENTS: TrackedShipment[] = [
  {
    consignmentNumber: 'BD-100001',
    carrier: 'Couriers Please',
    service: 'Road Express',
    stage: 'in-transit',
    currentLocation: 'Sydney Distribution Centre, NSW',
    estimatedDelivery: hoursAgo(-30),
    deliveryWindow: '9:00am – 5:00pm',
    sender: {
      name: 'Dat Pham',
      company: 'BEE DIRECT Demo Store',
      suburb: 'Melbourne',
      state: 'VIC',
      postcode: '3000',
    },
    receiver: { name: 'Alex Nguyen', suburb: 'Newcastle', state: 'NSW', postcode: '2300' },
    itemType: 'Carton / Box',
    quantity: 1,
    weightKg: 5,
    dimensionsCm: '(L) 30 x (W) 20 x (H) 15',
    events: [
      event('e1', 4, 'Departed facility', 'Sydney, NSW', 'On board for Newcastle, NSW.'),
      event('e2', 9, 'Arrived at facility', 'Sydney, NSW'),
      event('e3', 22, 'Departed facility', 'Melbourne, VIC'),
      event('e4', 27, 'Picked up from sender', 'Melbourne, VIC'),
      event('e5', 31, 'Consignment booked', 'Melbourne, VIC', 'Label created and awaiting pickup.'),
    ],
  },
  {
    consignmentNumber: 'BD-100002',
    carrier: 'Allied Express',
    service: 'Same Day Courier',
    stage: 'out-for-delivery',
    currentLocation: 'With driver — Brisbane, QLD',
    estimatedDelivery: hoursAgo(-5),
    deliveryWindow: '1:00pm – 6:00pm',
    sender: { name: 'Mai Tran', suburb: 'Gold Coast', state: 'QLD', postcode: '4217' },
    receiver: {
      name: 'Sam Carter',
      company: 'Carter & Co',
      suburb: 'Brisbane',
      state: 'QLD',
      postcode: '4000',
    },
    itemType: 'Satchel',
    quantity: 2,
    weightKg: 1.2,
    dimensionsCm: '(L) 35 x (W) 25 x (H) 5',
    events: [
      event('e1', 1, 'Out for delivery', 'Brisbane, QLD', 'Expected before 6:00pm today.'),
      event('e2', 3, 'Arrived at delivery depot', 'Brisbane, QLD'),
      event('e3', 6, 'Departed facility', 'Gold Coast, QLD'),
      event('e4', 8, 'Picked up from sender', 'Gold Coast, QLD'),
      event('e5', 10, 'Consignment booked', 'Gold Coast, QLD'),
    ],
  },
  {
    consignmentNumber: 'BD-100003',
    carrier: 'TNT Express',
    service: 'Overnight Express',
    stage: 'delivered',
    currentLocation: 'Perth, WA',
    estimatedDelivery: hoursAgo(26),
    deliveryWindow: '9:00am – 5:00pm',
    deliveredAt: hoursAgo(20),
    signedBy: 'J. Walker',
    sender: { name: 'BEE DIRECT Warehouse', suburb: 'Adelaide', state: 'SA', postcode: '5000' },
    receiver: { name: 'Jordan Walker', suburb: 'Perth', state: 'WA', postcode: '6000' },
    itemType: 'Carton / Box',
    quantity: 1,
    weightKg: 12,
    dimensionsCm: '(L) 45 x (W) 35 x (H) 30',
    events: [
      event('e1', 20, 'Delivered', 'Perth, WA', 'Signed for by J. Walker.'),
      event('e2', 23, 'Out for delivery', 'Perth, WA'),
      event('e3', 30, 'Arrived at delivery depot', 'Perth, WA'),
      event('e4', 44, 'Departed facility', 'Adelaide, SA'),
      event('e5', 49, 'Picked up from sender', 'Adelaide, SA'),
      event('e6', 53, 'Consignment booked', 'Adelaide, SA'),
    ],
  },
  {
    consignmentNumber: 'BD-100004',
    carrier: 'Northline',
    service: 'Road Economy',
    stage: 'in-transit',
    exception:
      'Held at the Darwin depot — the delivery address needs a contact number before the driver can attempt delivery.',
    currentLocation: 'Darwin Depot, NT',
    estimatedDelivery: hoursAgo(-54),
    deliveryWindow: '9:00am – 5:00pm',
    sender: { name: 'Linh Vo', suburb: 'Darwin', state: 'NT', postcode: '0800' },
    receiver: { name: 'Riley Chen', suburb: 'Alice Springs', state: 'NT', postcode: '0870' },
    itemType: 'Pallet',
    quantity: 1,
    weightKg: 320,
    dimensionsCm: '(L) 120 x (W) 100 x (H) 110',
    events: [
      event('e1', 7, 'Delivery on hold', 'Darwin, NT', 'Contact number missing for the receiver.'),
      event('e2', 18, 'Arrived at facility', 'Darwin, NT'),
      event('e3', 25, 'Picked up from sender', 'Darwin, NT'),
      event('e4', 30, 'Consignment booked', 'Darwin, NT'),
    ],
  },
];

/** Case- and whitespace-insensitive, so a pasted number still resolves. */
export const findShipment = (consignmentNumber: string): TrackedShipment | undefined => {
  const needle = consignmentNumber.trim().toLowerCase();

  return TRACKED_SHIPMENTS.find(
    (shipment) => shipment.consignmentNumber.toLowerCase() === needle
  );
};
