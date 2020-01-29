export function randomizeList(list) {
  const length = list.length;
  for (let i = 0; i < length; i++) {
    const j = Math.floor(Math.random() * length);
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}
