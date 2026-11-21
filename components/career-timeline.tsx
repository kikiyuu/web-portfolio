export type CareerItem = {
  year: string;
  title: string;
  body: string;
};

export function CareerTimeline({ items }: { items: readonly CareerItem[] }) {
  const count = items.length;

  return (
    <ol className="mx-auto mt-14 max-w-3xl">
      {items.map((item, i) => (
        <li
          key={item.year}
          className="grid grid-cols-[4.75rem_0.75rem_minmax(0,1fr)] gap-x-3 pb-10 last:pb-0 sm:grid-cols-[6.5rem_1rem_minmax(0,1fr)] sm:gap-x-6 sm:pb-12"
        >
          <p className="pt-0.5 text-right font-heading text-[11px] tracking-[0.12em] text-ink/65 sm:text-sm sm:tracking-[0.16em]">
            {item.year}
          </p>

          <div className="relative flex justify-center">
            {i < count - 1 ? (
              <span
                className="absolute top-2 bottom-[-2.5rem] w-px bg-ink/20 sm:bottom-[-3rem]"
                aria-hidden
              />
            ) : null}
            <span
              className="relative z-10 mt-1.5 size-2.5 shrink-0 rounded-full bg-orange sm:size-3"
              aria-hidden
            />
          </div>

          <div className="min-w-0 text-left">
            <h3 className="text-sm leading-snug text-ink sm:text-base">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-ink/70">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
