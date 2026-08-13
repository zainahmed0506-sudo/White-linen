export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark${compact ? " wordmark--compact" : ""}`}>
      <span className="wordmark-main">White Linen</span>
      <span className="wordmark-divider" aria-hidden="true" />
      <span className="wordmark-sub">Interiors</span>
    </span>
  );
}
