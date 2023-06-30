// @ts-ignore
export function FavoriteFoodItem(props) {
  const data = props.favoriteFoodItem;

  return (
    <li>
      I like to eat {data.foodItem.name} on a {data.eatingFrequency.toLowerCase()} basis
    </li>
  );
}
