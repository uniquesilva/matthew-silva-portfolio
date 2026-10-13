import { containerClass } from "@/components/container";
import { ProfileLinks } from "@/components/profile-links";
import { LOCATION, ROLE_LINE, SITE_NAME } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className={`${containerClass} flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between`}>
        <div>
          <p className="font-serif text-2xl text-ink">{SITE_NAME}</p>
          <p className="mt-1 text-sm text-muted">{ROLE_LINE}</p>
          <p className="mt-1 text-sm text-muted">{LOCATION}</p>
        </div>
        <ProfileLinks />
      </div>
    </footer>
  );
}
