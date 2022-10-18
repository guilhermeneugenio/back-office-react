import React, { useState, useEffect } from 'react';
import UserHandler from '../components/UserHandler';
import Users from '../components/Users'
import DarkMode from "../styles/DarkMode.tsx";
import '../App.css';

const WelcomePage = () => {


    useEffect(() => {

        const tokenValidator = (tkn) => {
            //Validate Token Function
        };

        const token = UserHandler.getToken();
        tokenValidator(token);
    }, []);

    return (
        <div>
            <div>
                <h1> Back Office Manager</h1>
                <DarkMode />
            </div>
            <Users />
        </div>
    )
};

export default WelcomePage;