export default function ShortHash(hash) {
  if (!hash) return "";

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640; // sm breakpoint Tailwind
  const length = isMobile ? 20 : 40; 

  return `${hash.slice(0, length)}...`;
}
