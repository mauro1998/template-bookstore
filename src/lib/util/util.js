export default function uid() {
  const rnd = () => Math.floor(Math.random() * 10);
  return Number(new Array(10).fill(null).map(rnd).join('')).toString(36);
}
