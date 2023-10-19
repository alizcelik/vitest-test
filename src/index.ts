export function deepMerge(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b];
  }

  return Object.assign(a, b);
}
