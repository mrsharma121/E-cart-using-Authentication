import React, {useState} from 'react'
import Auth, { FacebookAuth, GoogleAuth } from './Auth';
import firebase from '../firebase';
import App from '../App';
import '../index.css'

export const LoginPage = () => {
    const [isSignedIn, setisSignedIn] = useState(true)
    const handleClick = async (provider) =>{
        const res = await Auth(provider)
        setisSignedIn(!isSignedIn)
        console.log(res)
    }
    const handleLogout = () =>{
        // console.log("click")
     firebase.auth().signOut().then(()=>{
        console.log("clicked")
        setisSignedIn(true)

     }).catch((error)=>{
         console.log(error)
     })
    
    
}
    return (
        <>
            {isSignedIn?
                <div className = "login-container" >
                        <span className = "login-heading" >Welcome to E-kart</span>
            <button className = "google-login" onClick = {() => handleClick(GoogleAuth)} > Login With Google </button>
            <button className = "fb-login"  onClick = {() => handleClick(FacebookAuth)} > Login With Facebook </button>
            </div>
            :<App handleLogout = {handleLogout} />
        }
        </>
        
    )
}

export default LoginPage
