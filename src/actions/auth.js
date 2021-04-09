import { types } from '../types/types'
import {firebase, googleAuthProvider} from '../firebase/firebase-config'

export const startLogin = (email, password)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(login(123,'pedro'))
        }, 3500);
    }
}
export const login = (uid, displayName) =>({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
export const startGoogleLogin = () =>{
    return dispatch =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) =>{
                const {uid, displayName} = user;
                dispatch(login(uid,displayName));
            })
    }
}