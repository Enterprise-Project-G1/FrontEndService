import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const { userInfo } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo) {
            navigate('/admin');
        }
    }, [userInfo, navigate]);

    if (!userInfo) {
        // Optionally render null or a loading spinner while redirecting
        return null;
    }

    return children;
};

export default ProtectedRoute;
