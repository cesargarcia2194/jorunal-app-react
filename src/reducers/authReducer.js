import {types} from '../types/types';
/*
    {
        uid:djsahd,
        name: 'Cesar'
    }

*/
export const authReducer = (state={}, action) =>{
    switch (action.type) {
        case types.login:
            return {
                uid : action.payload.uid,
                name: action.payload.name 
            }
            
        case types.logout:
            return {}
        default:
            return state;
    }
}