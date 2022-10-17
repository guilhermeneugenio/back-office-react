

import React, { useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserProfile from '../components/UserHandler';


const SignUp = () => {
    useEffect(() => {

    }, []);

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data))
        let validation = true
        if (validation) {
            UserProfile.setName('Francisco')
            navigate("/");
        }
    }
    return (
        <div>
            <nav>
                <Link to="/signup">Sign Up</Link>
            </nav>
            <h1>This is a Sign In Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("username")} placeholder='Email' />
                <input type="password" {...register("password")} placeholder='Password' />
                {/* <input type="password" {...register("Confpassword") placeholder='Confirm Password' /> */}
                <button type="submit">Submit</button>
            </form>

        </div>
    )
};

export default SignUp;