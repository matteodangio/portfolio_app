import type { SocialLink } from "@/data/navigation";

export default function SocialIconLink({ link }: { link: SocialLink }) {
  const { label, href, icon: Icon } = link;
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className="rounded-sm text-[var(--text-muted)] transition-[color,transform] duration-200 hover:scale-110 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
    >
      <Icon width={16} height={16} aria-hidden="true" />
    </a>
  );
}
