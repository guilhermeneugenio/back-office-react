import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import UserProfile from '../comms/UserHandler';
import User from './User'

const Users = () => {

    // List of Users to be rendered
    const [users, setUsers] = useState([]);
    // Active user to be updated
    const [userID, setUserID] = useState('');
    // Visibility State
    const [visibility, setVisibility] = useState('hidden');
    // Update or Create State
    const [action, setAction] = useState('');
    // React Hook Form 
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const getUsers = async () => {
            let response = await UserProfile.getUsers()
            setUsers(response.data);
        }
        getUsers()

    }, []);

    const onSubmit = async (data) => {
        if (action === 'update') {
            // Insert Server update here
            setUsers(users.map((user) => {
                if (user.id === userID) {
                    if (data['firstName']) user.first_name = data['firstName']
                    if (data['lastName']) user.last_name = data['lastName']
                    if (data['email']) user.email = data['email']
                }
                return user;
            }))
        }
        else if (action === 'create') {
            let response = await UserProfile.createUser(data['firstName'], data['lastName'], data['email'])
            setUsers(current => [...current, response]);
        }
        reset();
        setVisibility('hidden')
    }

    const DeleteUser = (idx) => {
        setUsers(users.filter(function (user) {
            return user.id !== idx;
        }))
    }
    const UpdateUser = (idx) => {
        setUserID(idx)
        setAction('update')
        setVisibility('visible')
    }
    const CreateUser = () => {
        setAction('create')
        setVisibility('visible')
    }

    return (
        <div>
            <div>
                <button onClick={CreateUser} className="bg-slate-900 hover:bg-slate-700 text-white font-semibold h-8 px-4 rounded-lg m-1"> Create User </button>
                <form style={{ visibility: visibility }} onSubmit={handleSubmit(onSubmit)} className={visibility === 'hidden' ? '' : "w-max flex flex-col justify-items-center bg-slate-100 rounded-xl p-8 dark:bg-slate-800 my-12 w-1/3 drop-shadow-md"}>
                    <input className={visibility === 'hidden' ? '' : "focus:ring-blue-700 focus:outline-none appearance-none w-full text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"} type="text" {...register("firstName")} placeholder='First Name' />
                    <input className={visibility === 'hidden' ? '' : "focus:ring-blue-700 focus:outline-none appearance-none w-full text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 my-2 ring-slate-200 shadow-sm"} type="text" {...register("lastName")} placeholder='Last Name' />
                    <input className={visibility === 'hidden' ? '' : "focus:ring-blue-700 focus:outline-none appearance-none w-full text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 mb-6 ring-slate-200 shadow-sm"} type="text" {...register("email")} placeholder='Email' />
                    <button className={visibility === 'hidden' ? '' : "bg-slate-900 hover:bg-slate-700 text-white font-semibold h-8 px-4 rounded-lg m-1"} type="submit">Submit</button>
                </form>
                <div className='grid grid-rows-2 grid-cols-3 justify-items-center'>
                    {
                        users.map((user) => (

                            < div key={user.id} className="w-max  bg-slate-100 rounded-xl p-8 dark:bg-slate-800 m-12 drop-shadow-md">
                                <User
                                    first_name={user.first_name}
                                    last_name={user.last_name}
                                    email={user.email}
                                    avatar={user.avatar}
                                />
                                <button className="bg-slate-900 hover:bg-slate-700 text-white font-semibold h-8 px-4 rounded-lg m-1" onClick={() => { UpdateUser(user.id) }}> Update User </button>
                                <button className="bg-slate-900 hover:bg-slate-700 text-white font-semibold h-8 px-4 rounded-lg m-1" onClick={() => { DeleteUser(user.id) }}> Delete User </button>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div >
    )
};

export default Users;