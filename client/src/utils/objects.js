export function categoriesToQueryParams(obj) {
  const values = Object.values(obj);
  if (values.length) {
    return `categories=${values.join(",")}`;
  }
  return "";
}
