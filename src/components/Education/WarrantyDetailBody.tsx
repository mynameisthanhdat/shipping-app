import React from 'react';
import { Link } from 'react-router-dom';
import {
  TransitWarrantyDetail as TransitWarrantyDetailData,
  WarrantyContentBlock,
  WarrantyListItem,
} from '../../mocks/education/transitWarrantyDetails';

type WarrantyDetailBodyProps = {
  detail: TransitWarrantyDetailData;
};

const listItemKey = (item: WarrantyListItem, index: number): string =>
  typeof item === 'string' ? `${index}-${item.slice(0, 24)}` : `${index}-${item.text.slice(0, 24)}`;

const WarrantyNestedList: React.FC<{
  items: WarrantyListItem[];
  ordered?: boolean;
}> = ({ items, ordered = false }) => {
  const ListTag = ordered ? 'ol' : 'ul';
  const listClass = ordered
    ? 'mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted'
    : 'mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted';

  return (
    <ListTag className={listClass}>
      {items.map((item, index) => {
        if (typeof item === 'string') {
          return <li key={listItemKey(item, index)}>{item}</li>;
        }

        return (
          <li key={listItemKey(item, index)}>
            {item.text}
            {item.children && item.children.length > 0 ? (
              <WarrantyNestedList items={item.children} ordered={ordered} />
            ) : null}
          </li>
        );
      })}
    </ListTag>
  );
};

const WarrantyBlock: React.FC<{ block: WarrantyContentBlock }> = ({ block }) => {
  if (block.type === 'paragraph') {
    return <p className="text-sm leading-relaxed text-muted">{block.content}</p>;
  }

  if (block.type === 'ordered') {
    return <WarrantyNestedList items={block.items} ordered />;
  }

  return <WarrantyNestedList items={block.items} />;
};

/** Renders structured warranty terms from mock detail data. */
const WarrantyDetailBody: React.FC<WarrantyDetailBodyProps> = ({ detail }) => (
  <div className="mx-auto max-w-3xl">
    <p className="text-sm leading-relaxed text-muted">{detail.intro}</p>

    <div className="mt-10 space-y-10">
      {detail.sections.map((section) => (
        <section key={section.id}>
          <h2 className="text-2xl font-bold text-navy">{section.title}</h2>
          <div className="mt-4 space-y-4">
            {section.blocks.map((block, index) => (
              <WarrantyBlock key={`${section.id}-${block.type}-${index}`} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>

    <section className="mt-10">
      <h2 className="text-2xl font-bold text-navy">{detail.additionalCover.title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {detail.additionalCover.body}{' '}
        <Link
          to={detail.additionalCover.contactTo}
          className="font-semibold text-brand transition-colors hover:text-brand-hover"
        >
          {detail.additionalCover.contactLabel}
        </Link>
        .
      </p>
    </section>
  </div>
);

export default WarrantyDetailBody;
