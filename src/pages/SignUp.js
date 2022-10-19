import React, { useEffect } from 'react';
import UserHandler from '../components/comms/UserHandler';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "../styles/DarkMode.tsx";

const SignUp = () => {
    useEffect(() => {

    }, []);
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

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
            <div className='flex flex-row justify-between'>
                <h2 className="text-3xl font-bold" id='title'>Sign Up</h2>
                <DarkMode />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-max flex flex-col justify-items-center bg-slate-100 rounded-xl p-8 dark:bg-slate-800 my-12 w-1/3 drop-shadow-md">
                <input className="focus:ring-blue-700 focus:outline-none appearance-none w-full text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" {...register("username")} placeholder='Email' />
                <input className="focus:ring-blue-700 focus:outline-none appearance-none w-full text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 my-2 ring-slate-200 shadow-sm" type="password" {...register("password")} placeholder='Password' />
                <input className="focus:ring-blue-700 focus:outline-none appearance-none w-full text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 mb-6 ring-slate-200 shadow-sm" type="password"
                    {...register("confirm_password", {
                        required: true,
                        validate: (val) => {
                            if (watch('password') !== val) {
                                return "Your passwords do not match.";
                            }
                        },
                    })}
                />
                <p>{errors.confirm_password?.message}</p>
                <button className="bg-slate-900 hover:bg-slate-700 text-white font-semibold h-8 px-4 rounded-lg m-1" type="submit">Submit</button>
            </form>

        </div>
    )
};

export default SignUp;