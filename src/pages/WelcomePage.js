import React, { useEffect } from 'react';
import UserHandler from '../components/comms/UserHandler';
import Users from '../components/elements/Users'
import DarkMode from "../styles/DarkMode.tsx";
import '../App.css';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {

    let navigate = useNavigate();

    useEffect(() => {
        const tokenValidator = (tkn) => {
            //If there is not a token redirect to sign in page
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