import React from 'react';
import { TrackingEvent } from '../../types/tracking';
import { formatDayHeading, formatTime } from './trackingFormat';

/** Groups consecutive scans that fall on the same calendar day. */
const groupByDay = (events: TrackingEvent[]) =>
  events.reduce<Array<{ day: string; items: TrackingEvent[] }>>((groups, item) => {
    const day = formatDayHeading(item.timestamp);
    const last = groups[groups.length - 1];

    if (last && last.day === day) last.items.push(item);
    else groups.push({ day, items: [item] });

    return groups;
  }, []);

const TrackingTimeline: React.FC<{ events: TrackingEvent[] }> = ({ events }) => (
  <div className="space-y-6">
    {groupByDay(events).map((group) => (
      <section key={group.day}>
        <h3 className="text-sm font-bold uppercase tracking-wide text-muted">{group.day}</h3>

        <ol className="mt-3">
          {group.items.map((item, index) => (
            <li key={item.id} className="relative flex gap-4 pb-5 last:pb-0">
              {/* Rail joining the dots, stopped short on the final entry. */}
              {index < group.items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[5px] top-3 h-full w-px bg-black/10"
                />
              )}

              <span
                aria-hidden="true"
                className={`relative mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                  index === 0 ? 'bg-brand ring-4 ring-brand/25' : 'bg-muted-surface'
                }`}
              />

              <div className="min-w-0">
                <p className="text-sm font-bold text-ink">{item.status}</p>
                <p className="text-sm text-muted">
                  {formatTime(item.timestamp)} · {item.location}
                </p>
                {item.description && (
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    ))}
  </div>
);

export default TrackingTimeline;
