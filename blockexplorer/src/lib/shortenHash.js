export default function ShortHash(hash) {
  if (!hash) return "";

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640; // sm breakpoint Tailwind
  const length = isMobile ? 20 : 50; // mobile pendek, desktop panjang

  return `${hash.slice(0, length)}...`;
}
