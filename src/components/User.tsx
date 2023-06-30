import {useEffect, Suspense} from 'react';
import graphql from 'babel-plugin-relay/macro';
import type {PreloadedQuery} from 'react-relay';
import {useQueryLoader, usePreloadedQuery} from 'react-relay';
import UserQuery, {UserQuery as UserQueryType} from './__generated__/UserQuery.graphql';
// import FavoriteFoodList from './FavoriteFoodList';

type Props = {
  userId?: string;
};

export function User({userId}: Props) {
  const [queryReference, loadQuery] = useQueryLoader<UserQueryType>(
    graphql`
      query UserQuery($id: ID!) {
        user(id: $id) {
          id
          name
          # ...FavoriteFoodList_user
        }
      }
    `
  );

  useEffect(() => {
    if (userId) {
      loadQuery({id: userId});
    }
  }, [loadQuery, userId]);

  const Fallback = () => <h2>Grabbing favorite foods for '{userId}'...</h2>;

  return (
    <>
      <Suspense fallback={<Fallback />}>
        {queryReference != null ? <UserDisplay queryReference={queryReference} /> : null}
      </Suspense>
    </>
  );
}

function UserDisplay({queryReference}: {queryReference: PreloadedQuery<UserQueryType>}) {
  const data = usePreloadedQuery<UserQueryType>(UserQuery, queryReference);

  if (!data.user) return <>Something went wrong!!</>; // should be error logging stuff here

  return (
    <>
      <h2>
        {data.user.name}
        &#39;s favorite foods:
      </h2>
      {
        // <FavoriteFoodList user={data.user} />
      }
    </>
  );
}
