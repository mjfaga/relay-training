import {FormEvent, useState} from 'react';
import graphql from 'babel-plugin-relay/macro';
import {useMutation} from 'react-relay';
import type {
  AddFavoriteFoodToUserMutation,
  EatingFrequency,
} from './__generated__/AddFavoriteFoodToUserMutation.graphql';

type Props = {
  userId?: string;
};

export function AddFavoriteFoodToUser({userId}: Props) {
  const [input, setInput] = useState<string | null>(null);
  const [select, setSelect] = useState<EatingFrequency | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [commit, isInFlight] = useMutation<AddFavoriteFoodToUserMutation>(graphql`
    mutation AddFavoriteFoodToUserMutation(
      $userId: ID!
      $name: String!
      $eatingFrequency: EatingFrequency!
    ) {
      addFavoriteFood(userId: $userId, name: $name, eatingFrequency: $eatingFrequency) {
        favoriteFoodEdge {
          node {
            id
            foodItem {
              id
              name
            }
            eatingFrequency
          }
        }
      }
    }
  `);

  if (isInFlight) {
    return <>Submitting...</>;
  }

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!userId || !input || !select) {
          setError('Food Name and Eating Frequency are required!');
          setSubmitted(false);
          return;
        }

        commit({
          variables: {
            userId,
            name: input,
            eatingFrequency: select,
          },
        });

        const target = e.target as HTMLFormElement;
        target.reset();
        setError(null);
        setInput(null);
        setSelect(null);
        setSubmitted(true);
      }}
    >
      <input id="name" placeholder="Food Name" onChange={(e) => setInput(e.target.value)} />

      <select
        id="eatingFrequency"
        defaultValue=""
        onChange={(e) => setSelect(e.target.value as EatingFrequency)}
      >
        <option value="" disabled hidden>
          Select Eating Frequency...
        </option>
        <option value="DAILY">Daily</option>
        <option value="WEEKLY">Weekly</option>
        <option value="MONTHLY">Monthly</option>
      </select>
      <button type="submit">Add Favorite Food</button>
      {error ? <div className="error-message ">{error}</div> : null}
      {submitted ? <div className="success-message">You did it!</div> : null}
    </form>
  );
}
