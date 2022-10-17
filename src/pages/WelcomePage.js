import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import UserProfile from '../components/UserHandler';
import Users from '../components/Users'



const WelcomePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const active = UserProfile.getName();
        if (active) setName(active);
        else navigate("/signin");
    }, []);

    const [name, setName] = useState('');
    const [created, setCreated] = useState([]);

    const CreateUser = () => {
        let response = UserProfile.createUser('joao')
        console.log(response)
    }

    return (
        <div>
            <h1> Hello {name}</h1>
            <button onClick={CreateUser}> Create User </button>

            <Users />
            {created}

        </div>
    )
};

export default WelcomePage;