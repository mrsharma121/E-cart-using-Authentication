import firebase from '../firebase';

const Auth = (provider) => {


    return (
            firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => res.user)
            .catch((error) => error)
    )
}
export const FacebookAuth = new firebase.auth.FacebookAuthProvider();
export const GoogleAuth =  new firebase.auth.GoogleAuthProvider();
export default Auth



