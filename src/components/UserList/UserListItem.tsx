import {Link} from 'react-router-dom';
import graphql from 'babel-plugin-relay/macro';
import {useFragment} from 'react-relay';
import type {UserListItem_user$key} from './__generated__/UserListItem_user.graphql';

type Props = {
  user: UserListItem_user$key;
};

export const UserListItem = ({user}: Props) => {
  const data = useFragment(
    graphql`
      fragment UserListItem_user on User {
        id
        name
      }
    `,
    user
  );

  return (
    <li>
      <Link to={`/user/${data.id}`}>{data.name}</Link>
    </li>
  );
};
