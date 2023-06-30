import graphql from 'babel-plugin-relay/macro';
import {useFragment} from 'react-relay';
import type {FavoriteFoodItem_favoriteFoodItem$key} from './__generated__/FavoriteFoodItem_favoriteFoodItem.graphql';

type Props = {
  favoriteFoodItem: FavoriteFoodItem_favoriteFoodItem$key;
};

export function FavoriteFoodItem({favoriteFoodItem}: Props) {
  const data = useFragment(
    graphql`
      fragment FavoriteFoodItem_favoriteFoodItem on FavoriteFoodItem {
        id
        foodItem {
          id
          name
        }
        eatingFrequency
      }
    `,
    favoriteFoodItem
  );

  return (
    <li>
      I like to eat {data.foodItem.name} on a {data.eatingFrequency.toLowerCase()} basis
    </li>
  );
}
