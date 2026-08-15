export function Wordmark({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <span className="wordmark wordmark--compact">
        <span className="wordmark-main">White</span>
        <span className="wordmark-main">Linen</span>
        <span className="wordmark-sub">Interiors</span>
      </span>
    );
  }

  return (
    <span className="wordmark">
      <span className="wordmark-main">White Linen</span>
      <span className="wordmark-divider" aria-hidden="true" />
      <span className="wordmark-sub">Interiors</span>
    </span>
  );
}
