import { Navigate, Route, Routes } from 'react-router-dom';
import useCurrentUser from './customHooks/getCurrentUser.jsx';
import { useSelector } from 'react-redux';
import Login from './pages/login.jsx';
import SignUp from './pages/SignUp.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';

function App() {
  useCurrentUser();

  const {userData} = useSelector(state => state.user);

  return (
    <Routes>
      <Route path="/login" element={!userData ? <Login /> : <Navigate to="/" />} />
      <Route path="/signup" element={!userData ? <SignUp /> : <Navigate to="/profile" />} />
      <Route path="/" element={userData ? <Home /> : <Navigate to="/login" />} />
      <Route path="/profile" element={userData ? <Profile /> : <Navigate to="/signup" />} />
    </Routes>
  );
}

export default App;
