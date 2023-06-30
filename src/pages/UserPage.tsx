import {Link} from 'react-router-dom';
import {AddFavoriteFoodToUser} from '../components/AddFavoriteFoodToUser';
import {User} from '../components/User';
import {useParams} from 'react-router-dom';

export function UserPage() {
  const {id: userId} = useParams();

  return (
    <>
      <User userId={userId} />
      <AddFavoriteFoodToUser userId={userId} />
      <Link to="/">&lt;&lt; Back</Link>
    </>
  );
}
