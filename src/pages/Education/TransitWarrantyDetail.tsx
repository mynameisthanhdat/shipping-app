import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
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
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={PATHS.home} className="transition-colors hover:text-navy">
            Home
          </Link>
          <span> / </span>
          <Link to={PATHS.education} className="transition-colors hover:text-navy">
            Education Centre
          </Link>
          <span> / </span>
          <Link
            to={PATHS.educationTransitWarranty}
            className="transition-colors hover:text-navy"
          >
            Transit Warranty Options
          </Link>
          <span> / {listItem.title}</span>
        </nav>

        <article className="mt-6">
          <header className="text-center">
            <h1 className="text-3xl font-bold text-navy">{detail.pageTitle}</h1>
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
