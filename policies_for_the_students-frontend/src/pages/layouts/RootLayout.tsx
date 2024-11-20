import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import Navbar from '../../components/nav/Navbar';

const RootLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);

//   useEffect(() => {
//     if (localStorage.getItem('accessToken')) {
//       fetchProfile();
//     }
//   }, [isAuthenticated]);

  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
