import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import User from './User'

const baseURL = "https://reqres.in/api/users";

const Users = () => {

    // List of Users to be rendered
    const [users, setUsers] = useState([]);
    // Active user to be updated
    const [userID, setUserID] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setUsers(response.data.data);
        });

    }, []);

    const onSubmit = data => {
        setUsers(users.map((user) => {
            if (user.id === userID) {
                if (data['firstName']) user.first_name = data['firstName']
                if (data['lastName']) user.last_name = data['lastName']
                if (data['email']) user.email = data['email']
            }
            return user;
        }))
    }

    const DeleteUser = (idx) => {
        setUsers(users.filter(function (user) {
            return user.id != idx;
        }))
    }


    const UpdateUser = (idx) => {
        setUserID(idx)
        //aparecer o form
    }



    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register(`firstName`)} />
                    <input {...register(`lastName`)} />
                    <input {...register(`email`)} />
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