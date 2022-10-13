import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserHandler';


const WelcomePage = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        const active = UserProfile.getName();
        if (active) setName(active);
    }, []);
    return (
        <h1> Hello {name}</h1>
    )
};

export default WelcomePage;