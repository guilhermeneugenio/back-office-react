import React, { useEffect } from 'react';
import UserHandler from '../components/UserHandler';
import Users from '../components/Users'
import DarkMode from "../styles/DarkMode.tsx";
import '../App.css';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const tokenValidator = (tkn) => {
            if (!tkn) navigate('/signin')
        };
        const token = UserHandler.getToken();
        tokenValidator(token);
    }, []);

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <h2 className="text-3xl font-bold" id='title'> Back Office Manager</h2>
                <DarkMode />
            </div>
            <Users />
        </div>
    )
};

export default WelcomePage;