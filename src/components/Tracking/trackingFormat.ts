/** Shared date formatting for the tracking views. */

const DATE = new Intl.DateTimeFormat('en-AU', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
});

const TIME = new Intl.DateTimeFormat('en-AU', {
  hour: 'numeric',
  minute: '2-digit',
});

export const formatDate = (iso: string) => DATE.format(new Date(iso));
export const formatTime = (iso: string) => TIME.format(new Date(iso));
export const formatDateTime = (iso: string) => `${formatDate(iso)}, ${formatTime(iso)}`;

/** "Today" / "Yesterday" read faster than a date when grouping recent scans. */
export const formatDayHeading = (iso: string) => {
  const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const days = Math.round((startOfDay(new Date()) - startOfDay(new Date(iso))) / 86400000);

  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';

  return formatDate(iso);
};
