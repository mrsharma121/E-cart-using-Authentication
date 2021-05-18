import React, {useState} from 'react'
import Auth, { FacebookAuth, GoogleAuth } from './Auth';

export const LoginPage = () => {
    const [isSignedIn, setisSignedIn] = useState(true)
    const handleClick = async (provider) =>{
        const res = await Auth(provider)
        setisSignedIn(!isSignedIn)
        console.log(res)
    }
    return (
        <>
            {isSignedIn?
                <div>
            <button onClick = {() => handleClick(GoogleAuth)} > Login With Google </button>
            <button onClick = {() => handleClick(FacebookAuth)} > Login With Facebook </button>
            </div>
            :<h1>Home</h1>    
        }
        </>
        
    )
}

export default LoginPage
