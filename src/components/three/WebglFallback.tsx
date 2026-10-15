// CSS glass pass: shown while the 3D scene loads, and if WebGL is unavailable.
export function WebglFallback() {
  return (
    <div aria-hidden="true" className="flex h-full w-full items-center justify-center">
      <div className="relative h-44 w-72 -rotate-6 rounded-3xl border border-white/20 bg-white/10 shadow-2xl shadow-black/40 backdrop-blur-md sm:h-56 sm:w-96">
        <div className="absolute left-6 top-6 size-10 rotate-45 rounded-md bg-saffron/90" />
        <div className="absolute inset-x-6 bottom-6 h-8 rounded bg-white/15" />
      </div>
    </div>
  );
}