import {Link} from 'react-router-dom';
import AddFavoriteFoodToUser from '../components/AddFavoriteFoodToUser';
import User from '../components/User';

const UserPage = ({
  match: {
    params: {id: userId},
  },
}) => (
  <>
    <User userId={userId} />
    <AddFavoriteFoodToUser userId={userId} />
    <Link to="/">&lt;&lt; Back</Link>
  </>
);

export default UserPage;
