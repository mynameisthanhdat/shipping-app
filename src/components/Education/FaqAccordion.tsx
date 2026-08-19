import React, { useState } from 'react';
import { FaqAnswerBlock, FaqItem } from '../../mocks/education/faqs';

type FaqAccordionProps = {
  items: FaqItem[];
};

const FaqAnswer: React.FC<{ blocks: FaqAnswerBlock[] }> = ({ blocks }) => (
  <div className="space-y-3 text-sm leading-normal text-navy">
    {blocks.map((block, index) =>
      block.type === 'paragraph' ? (
        <p key={index}>{block.content}</p>
      ) : (
        <ul key={index} className="list-none space-y-1">
          {block.items.map((item, itemIndex) => (
            <li key={`${index}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      )
    )}
  </div>
);

type FaqAccordionItemProps = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
};

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({ item, isOpen, onToggle }) => (
  <div
    className={`overflow-hidden rounded-lg transition-colors duration-300 ease-in-out motion-reduce:transition-none ${
      isOpen ? 'bg-muted-surface/20' : 'border border-muted-surface/60 bg-white'
    }`}
  >
    <button
      type="button"
      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <span className="text-base font-bold text-navy">{item.question}</span>
      <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center text-base font-bold text-navy">
        <span
          aria-hidden
          className={`absolute transition-all duration-300 ease-in-out motion-reduce:transition-none ${
            isOpen ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
          }`}
        >
          +
        </span>
        <span
          aria-hidden
          className={`absolute transition-all duration-300 ease-in-out motion-reduce:transition-none ${
            isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0'
          }`}
        >
          −
        </span>
      </span>
    </button>

    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
    >
      <div className="overflow-hidden">
        <div className="px-6 pb-6 pt-0">
          <FaqAnswer blocks={item.answer} />
        </div>
      </div>
    </div>
  </div>
);

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <FaqAccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
};

export default FaqAccordion;
