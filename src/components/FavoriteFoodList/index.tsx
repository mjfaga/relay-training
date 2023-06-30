import graphql from 'babel-plugin-relay/macro';
import {useFragment} from 'react-relay';
import type {FavoriteFoodList_user$key} from './__generated__/FavoriteFoodList_user.graphql';
import {FavoriteFoodItem} from './FavoriteFoodItem';

type Props = {
  user: FavoriteFoodList_user$key;
};

export function FavoriteFoodList({user}: Props) {
  const data = useFragment(
    graphql`
      fragment FavoriteFoodList_user on User {
        favoriteFoods(first: 10) @connection(key: "User_favoriteFoods") {
          edges {
            node {
              id
              ...FavoriteFoodItem_favoriteFoodItem
            }
          }
        }
      }
    `,
    user
  );

  if (!data.favoriteFoods?.edges) return null;

  if (data.favoriteFoods.edges.length === 0) return <div>No favorites yet!</div>;

  return (
    <div>
      <ul>
        {data.favoriteFoods.edges.map(
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
