import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import UserProfile from '../components/UserHandler';
import User from './User'

const baseURL = "https://reqres.in/api/users";

const Users = () => {

    // List of Users to be rendered
    const [users, setUsers] = useState([]);
    // Active user to be updated
    const [userID, setUserID] = useState('');
    // Visibility State
    const [visibility, setVisibility] = useState('hidden');
    // Update or Create State
    const [action, setAction] = useState('');

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setUsers(response.data.data);
        });

    }, []);



    const onSubmit = async (data) => {
        if (action == 'update') {
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
        else if (action == 'create') {
            console.log(users)
            let response = await UserProfile.createUser(data['firstName'], data['lastName'], data['email'])
            setUsers(current => [...current, response]);


        }
        reset();
        setVisibility('hidden')
    }

    const DeleteUser = (idx) => {
        setUsers(users.filter(function (user) {
            return user.id != idx;
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

                <button onClick={CreateUser}> Create User </button>
                <form style={{ visibility: visibility }} onSubmit={handleSubmit(onSubmit)}>
                    <input {...register(`firstName`)} placeholder='' />
                    <input {...register(`lastName`)} placeholder='' />
                    <input {...register(`email`)} placeholder='' />
                    <button type="submit">Submit</button>
                </form>
                {
                    users.map((user) => (
                        < div key={user.id} >
                            <User
                                first_name={user.first_name}
                                last_name={user.last_name}
                                email={user.email}
                                avatar={user.avatar}
                            />
                            <button onClick={() => { DeleteUser(user.id) }}> Delete User </button>
                            <button onClick={() => { UpdateUser(user.id) }}> Update User </button>
                        </div>
                    ))
                }
            </div>

        </div >
    )


};

export default Users;