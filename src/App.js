import React from 'react';

import './App.css';
import Navbarmenu from './components/navbar/Navbarmenu'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Footer from "./components/footer/Footer";
import { Product } from "./components/products/Product";
import Home from './pages/Home'
import User from './pages/User'
import WishList from './pages/WishList'
import Chat from './pages/Chat'
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbarmenu />
        
        <Route exact path="/" component={Home}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/wishlist" component={WishList}></Route>
        <Route path="/chat" component={Chat}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/product" component={Product}></Route>
        
        <Footer />

      </BrowserRouter>
    </div>
  );
}


export default App;
