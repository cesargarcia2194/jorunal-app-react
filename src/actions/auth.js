import { types } from '../types/types'
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { uiFinishLoading, uiStartLoading } from './ui'
import Swal from 'sweetalert2'

export const startLoginEmailPassword = (email, password)=>{
    return (dispatch)=>{
        dispatch(uiStartLoading())
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(({user}) =>{
                const {uid, displayName} = user;
                dispatch(login(uid,displayName));
                dispatch(uiFinishLoading());

            })
            .catch(e =>{
                Swal.fire('Error', e.message, 'error');
                dispatch(uiFinishLoading());
            })
    }
}

export const startRegisterEmailPassword = (email, password, name) =>{
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({user}) => {
                await user.updateProfile({displayName: name})
                const {uid, displayName} = user;
                dispatch(login(uid,displayName));
            }).catch(e =>{
                Swal.fire('Error', e.message, 'error');
                dispatch(uiFinishLoading());
            });
    }
}

export const startGoogleLogin = () =>{
    return dispatch =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) =>{
                const {uid, displayName} = user;
                dispatch(login(uid,displayName));
            }).catch(e =>{
                Swal.fire('Error', e.message, 'error');
                dispatch(uiFinishLoading());
            })
    }
}

export const login = (uid, displayName) =>({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () =>{
    return async (dispatch) =>{
        await firebase.auth().signOut();
        dispatch(logout());       
    }
}

export const logout = () =>({
    type: types.logout
})