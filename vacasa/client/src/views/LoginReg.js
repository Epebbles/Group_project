import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const LoginReg = () => {
    return (
        <div className="container-flex">
            <h1>Welcome to Vacasa</h1>
            <hr/>
            <Login />
            <hr/>
            <Register />
        </div>
    );
};
export default LoginReg;