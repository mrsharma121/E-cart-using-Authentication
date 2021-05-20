import React from 'react';
import firebase from './firebase';

export default function Header(props) {
  // const handleLogout = () => firebase.auth().signOut();
  return (
    <header className="block row center">
      <div>
        
          <h1>E-Cart</h1>
        
      </div>
      <div style = {{width: "12vw"}}>
        <span>
          Cart
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </span>
            <button className = "logout-btn" onClick = {props.handleLogout} >Logout</button>
      </div>
    </header>
  );
}
