function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function argument(x: number, midpoint: number, rate: number): number {
  finite(x, -1e100, 1e100);
  finite(midpoint, -1e100, 1e100);
  finite(rate, -1e100, 1e100);
  return rate * (x - midpoint);
}
export function logistic(x: number, midpoint = 0, rate = 1): number {
  const z = argument(x, midpoint, rate);
  if (z >= 0) return 1 / (1 + Math.exp(-z));
  const e = Math.exp(z);
  return e / (1 + e);
}
export function logisticDerivative(x: number, midpoint = 0, rate = 1): number {
  const z = argument(x, midpoint, rate),
    e = Math.exp(-Math.abs(z));
  return (rate * e) / (1 + e) ** 2;
}
