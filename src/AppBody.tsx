import {Routes, Route} from 'react-router-dom';
import UserListPage from './pages/UserListPage';
// import UserPage from './pages/UserPage';

const AppBody = () => (
  <div className="App-body">
    <Routes>
      <Route path="/" Component={UserListPage} />
      {/* <Route path="/" Component={UserListPage} /> */}
      {/* <Route path="/user/:id" component={UserPage} /> */}
    </Routes>
  </div>
);

export default AppBody;
