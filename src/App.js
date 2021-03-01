import React from 'react';

import './App.css';
import { NavBar } from "./components/navbar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Footer from "./components/footer/Footer";
import { Product } from "./components/products/Product";
import Home from './pages/Home'
import User from './pages/User'
import WishList from './pages/WishList'
import Chat from './pages/Chat'
import SignIn from './pages/Login'
import { PrivateRoute } from "./PrivateRoute";
import  Dashboard  from './components/admin/Dashboard'
import { AuthContextProvider } from "./contexts/auth";
function App() {
  return (
    <div className="App">
     <AuthContextProvider>
      <BrowserRouter>
        <div>
        <NavBar />
        
        <Route exact path="/" component={Home}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/wishlist" component={WishList}></Route>
        <Route path="/chat" component={Chat}></Route>
        <Route path="/login" component={SignIn}></Route>
        <Route path="/product/:_id" component={Product}></Route>
        {/* <Route path="/admin" component={Dashboard} ></Route> */}
         <PrivateRoute path="/admin" component={Dashboard} />
        <Footer />
        </div>
      </BrowserRouter>
       </AuthContextProvider>
    </div>
  );
}


export default App;
