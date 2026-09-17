export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}
export function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 2.6 2.92 5.92 6.53.95-4.73 4.61 1.12 6.5L12 17.51l-5.84 3.07 1.12-6.5-4.73-4.61 6.53-.95L12 2.6Z" />
    </svg>
  );
}
