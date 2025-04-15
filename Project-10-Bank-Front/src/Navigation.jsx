import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Home from './app/pages/Home';
import Login from './app/pages/Login';
import Profile from './app/pages/Profile';
import { useEffect } from 'react';
import { getProfile } from './redux/userActions';

function Navigation() {
    const dispatch = useDispatch();
    useEffect(() => {
        const tokenFromStorages = localStorage.getItem('token');
        if (tokenFromStorages) {
             getProfile(tokenFromStorages, dispatch)}
    },
    [dispatch]);
  const { token } = useSelector((state) => state.auth);
  return (
   
      <Router>
        <div className='m-0 flex flex-col min-h-screen'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={!token ? <Login /> : <Navigate replace to ='/profile'/>} />
            <Route path="/profile" element={token ? <Profile /> : <Navigate replace to ='/sign-in'/>} />
          </Routes>
        </div>
      </Router>

  );
}

export default Navigation;
