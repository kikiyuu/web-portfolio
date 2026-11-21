/**
 * 将来 Instagram / X / note と連携する想定のアイコン列。
 * いまは遷移なし（リンク未設定）。URLが決まったら href を足す。
 */
const networks = [
  {
    id: "instagram",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="size-5 fill-none stroke-current">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "x",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="size-5 fill-current">
        <path d="M13.6 10.5 19.4 4h-1.6l-4.7 5.3L9.3 4H4.8l6.1 8.6L4.8 20h1.6l5-5.7L14.7 20h4.5l-5.6-9.5Zm-1.9 2.1-.6-.86-4.5-6.34h1.9l3.7 5.2.6.86 4.7 6.64h-1.9l-3.9-5.5Z" />
      </svg>
    ),
  },
  {
    id: "note",
    label: "note",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="size-5 fill-current">
        <path d="M6.2 4.5h8.3c2.9 0 4.7 1.7 4.7 4.4v6.2c0 2.7-1.8 4.4-4.7 4.4H6.2V4.5Zm2.3 2.1v10.8h5.8c1.6 0 2.5-.9 2.5-2.4V8.9c0-1.5-.9-2.3-2.5-2.3H8.5Z" />
      </svg>
    ),
  },
] as const;

export function BlogSocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex items-center gap-3 ${className}`}
      aria-label="SNS（準備中）"
    >
      {networks.map((network) => (
        <li key={network.id}>
          <span
            role="img"
            aria-label={`${network.label}（準備中）`}
            title={`${network.label}（準備中）`}
            className="inline-flex size-10 items-center justify-center rounded-full border border-ink/20 text-ink/70"
          >
            {network.icon}
          </span>
        </li>
      ))}
    </ul>
  );
}
