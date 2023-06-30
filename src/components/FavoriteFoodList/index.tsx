import {FavoriteFoodItem} from './FavoriteFoodItem';

// @ts-ignore
export function FavoriteFoodList(props) {
  const data = props.user;

  if (!data.favoriteFoods?.edges) return null;

  if (data.favoriteFoods.edges.length === 0) return <div>No favorites yet!</div>;

  return (
    <div>
      <ul>
        {data.favoriteFoods.edges.map(
          // @ts-ignore
          (favoriteFoodItem) =>
            favoriteFoodItem?.node && (
              <FavoriteFoodItem
                key={favoriteFoodItem.node.id}
                favoriteFoodItem={favoriteFoodItem.node}
              />
            )
        )}
      </ul>
    </div>
  );
}
