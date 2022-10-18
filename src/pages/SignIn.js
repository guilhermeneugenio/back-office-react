

import React, { useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserHandler from '../components/UserHandler';
import DarkMode from "../styles/DarkMode.tsx";


const SignUp = () => {
    useEffect(() => {

    }, []);

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

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
            <div className='flex flex-row justify-between'>
                <h2 className="text-3xl font-bold" id='title'>Sign In</h2>
                <DarkMode />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="focus:ring-blue-700 focus:outline-none appearance-none w-full text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" {...register("username")} placeholder='Email' />
                <input className="focus:ring-blue-700 focus:outline-none appearance-none w-full text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="password" {...register("password")} placeholder='Password' />
                {/* <input type="password" {...register("Confpassword") placeholder='Confirm Password' /> */}
                <button type="submit">Submit</button>
            </form>

        </div >
    )
};

export default SignUp;