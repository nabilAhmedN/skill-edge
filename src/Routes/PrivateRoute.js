import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/Context/AuthProvider';
import load from '../assets/images/mona-loading-dark.gif'

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <img className="mx-auto d-block" src={load} alt="" />;
    }

    console.log("provider location",location)
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;