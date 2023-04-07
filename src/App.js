import "./App.css";
import React from "react";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./screens/Profile";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.id,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/" element={<Homescreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
