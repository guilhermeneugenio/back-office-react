import React, { useEffect } from 'react';
import UserHandler from '../components/UserHandler';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    useEffect(() => {

    }, []);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const register = async () => {
            let response = await UserHandler.register(data.username, data.password)
            if (response.token) navigate('/signin')
        }
        register()
    }
    return (
        <div>
            <nav>
                <Link to="/signin">Sign In</Link>
            </nav>
            <h1>This is a Sign Up Page</h1>
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