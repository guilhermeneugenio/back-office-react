

import React, { useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserHandler from '../components/UserHandler';


const SignUp = () => {
    useEffect(() => {

    }, []);

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const login = async () => {
            let response = await UserHandler.login(data.username, data.password)
            UserHandler.setToken(response.token)
            if (response.token) navigate('/')
        }
        login()

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