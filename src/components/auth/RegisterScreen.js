import React from 'react'
import {Link} from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const [values, handleInputChange] = useForm({
            name:'cesar',
            email:'cesar@cesar.com',
            password: '12345',
            password2:'12345'
        });
    const {name,email,password,password2} = values;

    const handleRegister = (e) =>{
        e.preventDefault();
        if(isFormValid()){
            console.log('formulario correcto')

        }

        console.log(values);
    }
    const isFormValid = ()=>{
        let msg = '';
        let valid = true;
        if(name.trim().length ===0){
            msg = 'Name is required'
            valid = false;
        }else if(!validator.isEmail(email)){
            msg = 'Email is not valid'
            valid = false;
        }else if(password !== password2 || password.length < 5){
            msg = 'Password should be at least 6 characters and match'
            valid = false;
        }
        if(!valid){
            dispatch(setError(msg));
            return valid;
        }
        dispatch(removeError());
        return valid;
    }
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
                <div className="auth__alert-error">
                    Hola mundo
                </div>
                <input 
                    type="text"
                    placeholder="name"
                    name="name"
                    autoComplete="off"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    placeholder="email"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    placeholder="confirm"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Login
                </button>
        
                <Link to="/auth/login"
                    className="link">
                    Already register?
                </Link>
            </form>
        </>
    )
}
