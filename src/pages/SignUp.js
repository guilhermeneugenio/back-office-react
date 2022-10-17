import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


const SignUp = () => {
    useEffect(() => {

    }, []);
    return (
        <div>
            <nav>
                <Link to="/signin">Sign In</Link>
            </nav>
            <h1>This is a Sign Up Page</h1>

        </div>
    )
};

export default SignUp;