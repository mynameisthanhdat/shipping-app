import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/ui/Breadcrumb';
import CtaBanner from '../../components/CtaBanner';
import TrackingHelpLinks from '../../components/Education/TrackingHelpLinks';
import TrackingDemoHint from '../../components/Tracking/TrackingDemoHint';
import TrackingStatusCard from '../../components/Tracking/TrackingStatusCard';
import TrackingSummary from '../../components/Tracking/TrackingSummary';
import TrackingTimeline from '../../components/Tracking/TrackingTimeline';
import { findShipment } from '../../mocks/tracking';
import { PATHS } from '../../routes/paths';

const NotFound: React.FC<{ consignmentNumber: string }> = ({ consignmentNumber }) => (
  <div className="mx-auto max-w-xl rounded-2xl border border-black/10 bg-white p-8 text-center shadow-card">
    <h2 className="text-[15px] font-bold text-ink">
      No consignment found for {consignmentNumber}
    </h2>
    <p className="mt-2 text-sm text-muted">
      Check the number and try again. Consignments can take up to an hour to appear after
      booking.
    </p>

    <Link
      to={PATHS.educationTracking}
      className="mt-6 inline-block rounded-lg bg-brand px-6 py-3 text-sm font-bold text-ink shadow-brand transition-colors hover:bg-brand-hover"
    >
      Track another consignment
    </Link>

    <TrackingDemoHint className="mt-6 text-left" />
  </div>
);

const TrackingDetail: React.FC = () => {
  const { consignmentNumber = '' } = useParams();
  const shipment = findShipment(consignmentNumber);

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto w-full max-w-container px-6 pt-8">
        <Breadcrumb
          items={[
            { label: 'Home', to: PATHS.home },
            { label: 'Education Centre', to: PATHS.education },
            { label: 'Tracking', to: PATHS.educationTracking },
            { label: consignmentNumber || 'Consignment' },
          ]}
        />

        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold text-ink">Track your consignment</h1>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Live scan history and the latest position of your delivery.
          </p>
        </div>

        <div className="mt-10">
          {shipment ? (
            <>
              <TrackingStatusCard shipment={shipment} />

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-card">
                  <h2 className="text-[15px] font-bold uppercase tracking-wide text-ink">
                    Tracking history
                  </h2>
                  <div className="mt-5">
                    <TrackingTimeline events={shipment.events} />
                  </div>
                </section>

                <TrackingSummary shipment={shipment} />
              </div>

              <p className="mt-6 text-center text-sm text-muted">
                Tracking a different parcel?{' '}
                <Link
                  to={PATHS.educationTracking}
                  className="font-bold text-brand-deep transition-colors hover:text-brand-deep-hover"
                >
                  Look up another consignment
                </Link>
              </p>
            </>
          ) : (
            <NotFound consignmentNumber={consignmentNumber} />
          )}

          <div className="mt-12">
            <TrackingHelpLinks />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-container px-6 pb-8">
        <CtaBanner />
      </div>
    </div>
  );
};

export default TrackingDetail;
