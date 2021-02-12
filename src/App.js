import React from 'react';

import './App.css';
import Navbarmenu from './components/navbar/Navbarmenu'
import Home from './pages/Home'
import User from './pages/User'
import WishList from './pages/WishList'
import Chat from './pages/Chat'
import SignOut from './pages/Sign-out'
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbarmenu></Navbarmenu>
        <Route exact path="/" component={Home}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/wishlist" component={WishList}></Route>
        <Route path="/chat" component={Chat}></Route>
        <Route path="/sign-out" component={SignOut}></Route>

      </BrowserRouter>
    </div>
  );
}


export default App;
