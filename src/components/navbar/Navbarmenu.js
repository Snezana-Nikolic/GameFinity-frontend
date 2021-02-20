
import React, { useState } from 'react';
import { FormControl, Button, Input } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom'
function Navbarmenu(props) {

    

    return (
        <>
            <nav className="dark">
                <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo">Logo</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/user">User</NavLink></li>
                        <li><NavLink to={{pathname:"/wishlist"}}>WishList</NavLink></li>
                        <li><NavLink to="chat">Chat</NavLink></li>
                        <li><NavLink to="login" className="sign-out">Sign Out</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Navbarmenu);







