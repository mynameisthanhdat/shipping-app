import React from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import { OUR_SERVICES_CONTENT } from '../../mocks/ourServices';
import { PATHS } from '../../routes/paths';

const { carbonNeutral } = OUR_SERVICES_CONTENT;

const HighlightedParagraph: React.FC<{
  text: string;
  highlightedText?: string;
}> = ({ text, highlightedText }) => {
  if (!highlightedText || !text.includes(highlightedText)) {
    return <p>{text}</p>;
  }

  const [before, after] = text.split(highlightedText);

  return (
    <p>
      {before}
      <span className="underline underline-offset-2">{highlightedText}</span>
      {after}
    </p>
  );
};

const CarbonNeutralDelivery: React.FC = () => (
  <article className="mx-auto w-full max-w-container px-6 pb-24 pt-5 text-ink sm:pt-8">
    <Breadcrumb
      items={[
        { label: 'Home', to: PATHS.home },
        { label: 'Our services', to: PATHS.services },
        { label: carbonNeutral.breadcrumb },
      ]}
    />

    <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
      <h1 className="text-center text-2xl font-bold leading-tight sm:text-[26px]">
        {carbonNeutral.title}
      </h1>

      <div className="mt-7 space-y-6 text-[13px] leading-[1.55]">
        {carbonNeutral.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-5 text-xl font-bold">{section.heading}</h2>
            <div className="space-y-5">
              {section.paragraphs.map((paragraph) => (
                <HighlightedParagraph
                  key={paragraph.text}
                  text={paragraph.text}
                  highlightedText={paragraph.highlightedText}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  </article>
);

export default CarbonNeutralDelivery;
