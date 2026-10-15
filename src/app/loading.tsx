export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="size-10 rounded-full border-2 border-white/20 border-t-white motion-safe:animate-spin" />
      <span className="sr-only">Loading</span>
    </div>
  );
}