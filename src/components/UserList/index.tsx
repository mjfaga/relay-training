import {useEffect, Suspense} from 'react';
import graphql from 'babel-plugin-relay/macro';
import type {PreloadedQuery} from 'react-relay';
import {useQueryLoader, usePreloadedQuery} from 'react-relay';
import UserListQuery, {
  UserListQuery as UserListQueryType,
} from './__generated__/UserListQuery.graphql';
import {UserListItem} from './UserListItem';

export function UserList() {
  const [queryReference, loadQuery] = useQueryLoader<UserListQueryType>(
    graphql`
      query UserListQuery {
        users {
          id
          ...UserListItem_user
        }
      }
    `
  );

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  return (
    <>
      <Suspense fallback="Loading...">
        {queryReference != null ? <UserListDisplay queryReference={queryReference} /> : null}
      </Suspense>
    </>
  );
}

function UserListDisplay({queryReference}: {queryReference: PreloadedQuery<UserListQueryType>}) {
  const data = usePreloadedQuery<UserListQueryType>(UserListQuery, queryReference);

  if (!data.users) return <>'Something went wrong!!'</>; // should be error logging stuff here
  if (data.users.length === 0) return <div>You don&#39;t have any users yet!</div>;

  return (
    <ul className="user-list">
      {data.users.map((user, index) => user && <UserListItem user={user} key={user.id} />)}
    </ul>
  );
}
