export function mapCategoryToColor(category) {
  switch (category) {
    case "diverse":
      return "blue";
    case "ciudate":
      return "purple";
    case "perverse":
      return "red";
    case "oricare":
      return "orange";
    default:
      return category;
  }
}
