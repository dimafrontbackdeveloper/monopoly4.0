import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Layout2 from './components/Layout2';
import { useAppSelector } from './hooks/hooks';
import Home from './pages/Home';
import InviteFriends from './pages/InviteFriends';
import Leaderboard from './pages/Leaderboard';
import Lobby from './pages/Lobby';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);

  return (
    <Routes>
      {isAuth ? (
        <Route path="main" element={<Layout />}>
          <Route path="" element={<Layout2 />}>
            <Route path="" element={<Home />} />
            <Route path="lobby" element={<Lobby />} />
            <Route path="invite-friends" element={<InviteFriends />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      ) : (
        <Route path="*" element={<Register />} />
      )}
    </Routes>
  );
}

export default App;
