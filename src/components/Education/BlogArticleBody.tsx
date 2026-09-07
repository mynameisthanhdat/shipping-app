import React from 'react';
import { BlogContentBlock } from '../../mocks/education/blog';

type BlogArticleBodyProps = {
  blocks: BlogContentBlock[];
  closingTitle: string;
  closingBody: string;
};

const BlogArticleBody: React.FC<BlogArticleBodyProps> = ({
  blocks,
  closingTitle,
  closingBody,
}) => (
  <div className="mx-auto max-w-3xl space-y-6">
    {blocks.map((block, index) => {
      if (block.type === 'heading') {
        return (
          <h2 key={`${block.type}-${index}`} className="text-xl font-bold text-navy">
            {block.number}. {block.content}
          </h2>
        );
      }

      if (block.type === 'tip') {
        return (
          <aside
            key={`${block.type}-${index}`}
            className="rounded-lg bg-brand/10 px-5 py-4 text-sm leading-relaxed text-muted"
          >
            {block.content}
          </aside>
        );
      }

      return (
        <p
          key={`${block.type}-${index}`}
          className="text-sm leading-relaxed text-muted md:text-base"
        >
          {block.content}
        </p>
      );
    })}

    <h2 className="pt-2 text-xl font-bold text-navy">{closingTitle}</h2>
    <p className="text-sm leading-relaxed text-muted md:text-base">{closingBody}</p>
  </div>
);

export default BlogArticleBody;
