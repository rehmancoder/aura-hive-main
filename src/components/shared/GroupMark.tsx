/** Small bars like the logo, with the current group's bar lit. One bar per group (three or four). */
export function GroupMark({
  index,
  total,
  className = "h-4",
  barClassName = "w-[3px]",
  dim = "bg-honey/35",
}: {
  index: number;
  total: number;
  className?: string;
  barClassName?: string;
  dim?: string;
}) {
  const heights = total === 4 ? [0.5, 0.85, 1, 0.65] : [0.55, 1, 0.55];
  return (
    <span aria-hidden className={`flex items-end gap-[3px] ${className}`}>
      {heights.map((h, i) => (
        <span key={i} className={`rounded-full ${barClassName} ${i === index ? "bg-honey" : dim}`} style={{ height: `${h * 100}%` }} />
      ))}
    </span>
  );
}
