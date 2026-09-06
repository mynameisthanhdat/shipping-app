import React from 'react';
import { BlogTopic } from '../../mocks/education/blog';

type BlogTopicFilterProps = {
  topics: BlogTopic[];
  activeId: string;
  onChange: (topicId: string) => void;
};

const BlogTopicFilter: React.FC<BlogTopicFilterProps> = ({
  topics,
  activeId,
  onChange,
}) => (
  <div
    role="tablist"
    aria-label="Browse by topic"
    className="flex flex-wrap justify-center gap-3"
  >
    {topics.map((topic) => {
      const isActive = topic.id === activeId;

      return (
        <button
          key={topic.id}
          type="button"
          role="tab"
          aria-selected={isActive}
          onClick={() => onChange(topic.id)}
          className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
            isActive
              ? 'bg-brand text-white'
              : 'bg-muted-surface/40 text-navy hover:bg-brand hover:text-white'
          }`}
        >
          {topic.label}
        </button>
      );
    })}
  </div>
);

export default BlogTopicFilter;
