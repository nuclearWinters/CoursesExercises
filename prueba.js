let used = [3, 2, 3, 1, 1];
const total = [5, 3, 5, 5, 5].sort((a, b) => b - a);
let totalPartitions = 0;

console.log("total", total);

for (const idxTotal in total) {
  if (used.length === 0) return;
  const tot = total[idxTotal];
  const listIndexesToRemove = [];
  const usedCopy = [...used];
  usedCopy.reduce((prev, curr, index) => {
    if (prev === tot) return curr;
    if (curr + prev <= tot) {
      listIndexesToRemove.push(index);
      return curr + prev;
    }
    return curr;
  }, 0);
  used = usedCopy.filter((_, i) => !listIndexesToRemove.includes(i));
  totalPartitions += 1;
  console.log(totalPartitions);
}
