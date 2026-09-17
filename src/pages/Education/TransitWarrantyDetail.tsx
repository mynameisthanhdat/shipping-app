import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/ui/Breadcrumb';
import CtaBanner from '../../components/CtaBanner';
import WarrantyDetailBody from '../../components/Education/WarrantyDetailBody';
import { getTransitWarrantyItemById } from '../../mocks/education/transitWarranty';
import { getTransitWarrantyDetailById } from '../../mocks/education/transitWarrantyDetails';
import { PATHS } from '../../routes/paths';

/**
 * Carrier warranty detail. Slug must match a Transit Warranty Options card `id`.
 */
const TransitWarrantyDetail: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const listItem = getTransitWarrantyItemById(slug);
  const detail = getTransitWarrantyDetailById(slug);

  if (!listItem || !detail) {
    return <Navigate to={PATHS.educationTransitWarranty} replace />;
  }

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <Breadcrumb
          items={[
            { label: 'Home', to: PATHS.home },
            { label: 'Education Centre', to: PATHS.education },
            { label: 'Transit Warranty Options', to: PATHS.educationTransitWarranty },
            { label: listItem.title },
          ]}
        />

        <article className="mt-6">
          <header className="text-center">
            <h1 className="text-3xl font-bold text-ink">{detail.pageTitle}</h1>
          </header>

          <div className="mt-10">
            <WarrantyDetailBody detail={detail} />
          </div>
        </article>
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner />
      </div>
    </div>
  );
};

export default TransitWarrantyDetail;
