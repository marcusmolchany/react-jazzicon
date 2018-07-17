export default function jsNumberForAddress (address) {
  const addr = address.slice(2, 10);
  const seed = parseInt(addr, 16);

  return seed;
}
