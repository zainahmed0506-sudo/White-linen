const socialPlatforms = [
  { label: "Instagram", icon: "instagram" },
  { label: "Pinterest", icon: "pinterest" },
  { label: "LinkedIn", icon: "linkedin" },
] as const;

type SocialIconName = (typeof socialPlatforms)[number]["icon"];

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "instagram") {
    return <svg className="social-icon--outline" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-icon-dot" cx="17.35" cy="6.65" r="0.8" /></svg>;
  }

  if (name === "pinterest") {
    return <svg className="social-icon--filled" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.1a8.9 8.9 0 0 0-3.24 17.2c-.08-1.46-.02-3.21.36-4.84l1.04-4.39s-.26-.52-.26-1.3c0-1.22.71-2.13 1.59-2.13.75 0 1.12.56 1.12 1.24 0 .76-.48 1.88-.73 2.92-.21.88.44 1.6 1.31 1.6 1.57 0 2.63-2.01 2.63-4.39 0-1.81-1.22-3.16-3.43-3.16-2.5 0-4.06 1.86-4.06 3.94 0 .72.21 1.23.54 1.62.15.18.17.25.12.47l-.18.7c-.06.22-.24.3-.44.22-1.62-.66-2.37-2.42-2.37-4.4 0-2.61 2.2-5.74 6.56-5.74 3.5 0 5.81 2.53 5.81 5.24 0 3.59-2 6.27-4.95 6.27-.99 0-1.92-.53-2.24-1.13l-.61 2.36c-.4 1.61-1.18 3.22-1.9 4.37.66.2 1.36.3 2.08.3A8.9 8.9 0 0 0 12 3.1Z" /></svg>;
  }

  return <svg className="social-icon--filled" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.2 8.2H3.4V21h2.8V8.2Zm.2-4.2A1.65 1.65 0 1 0 3.1 4a1.65 1.65 0 0 0 3.3 0ZM21 13.65c0-3.3-1.76-5.45-4.58-5.45a4 4 0 0 0-3.62 2v-2H10v12.8h2.8v-6.34c0-1.67.32-3.28 2.39-3.28 2.04 0 2.07 1.91 2.07 3.39V21H21v-7.35Z" /></svg>;
}

export function SocialLinks({ id }: { id?: string }) {
  return (
    <nav className="social-links" id={id} aria-label="Social media links">
      {socialPlatforms.map((social) => (
        <a className="social-link" href="#footer" key={social.label} aria-label={`${social.label} details coming soon`}>
          <SocialIcon name={social.icon} />
        </a>
      ))}
    </nav>
  );
}
