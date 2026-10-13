import { contactLinks, type ContactLink } from "@/data/site";

const linkClass =
  "inline-flex min-h-11 items-center text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent focus-visible:outline-none";

function ProfileAnchor({ item }: { item: ContactLink }) {
  if (!item.href) {
    return (
      <span className="inline-flex min-h-11 cursor-default items-center text-sm text-ink">{item.label}</span>
    );
  }

  if (item.href.startsWith("http") || item.href.endsWith(".pdf")) {
    return (
      <a className={linkClass} href={item.href} target="_blank" rel="noopener noreferrer">
        {item.label}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <a className={linkClass} href={item.href}>
      {item.label}
    </a>
  );
}

export function ProfileLinks({ className = "" }: { className?: string }) {
  const links = contactLinks();

  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-1 ${className}`}>
      {links.map((item) => (
        <li key={item.label}>
          <ProfileAnchor item={item} />
        </li>
      ))}
    </ul>
  );
}
