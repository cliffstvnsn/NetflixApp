import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //Google Level Security with Firebase
  //This is creating something called "persistance" by which Netflix
  //Keeps the same person logged in, so they dont have to relog in every
  //time they change pages or reload a page
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout);
      }
    });

    return unsubscribe
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        
          {!user ? (
            <Route path='/login' element={<LoginScreen />} />
            
          ) : (
            <Routes>
              <Route path='/profile' element={<ProfileScreen/>}/>
            <Route exact path='/' element={<HomeScreen />} />
            </Routes>
          )}
      </BrowserRouter>
    </div>
  );
}

export default App;
