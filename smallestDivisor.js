export const smallestDivisor = num => {
  const iter = acc => acc > num / 2 ? num : num % acc === 0 ? acc : iter(acc + 1);
  return iter(2);
};
