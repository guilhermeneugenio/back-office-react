import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import UserProfile from '../components/UserHandler';
import Users from '../components/Users'
import '../App.css';



const WelcomePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const active = UserProfile.getName();
        if (active) setName(active);
        else navigate("/signin");
    }, []);

    const [name, setName] = useState('');
    const [created, setCreated] = useState([]);


    return (
        <div>
            <h1> Hello {name}</h1>

            <Users />
            {created}

        </div>
    )
};

export default WelcomePage;