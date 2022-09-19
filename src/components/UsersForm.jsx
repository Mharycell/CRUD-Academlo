import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers}) => {

    const {register, handleSubmit, reset} = useForm()
    
    const create = (data) => {
        axios.post("https://users-crud1.herokuapp.com/users/ ", data)
            .then(res => getUsers())
            .catch(wrong => console.log(wrong.res))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <div className="input-container">
                    <label htmlFor="email">Email: </label>
                    <input type="email"  id="email" {...register("email")}/>
                </div>

                <div className="input-container">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" {...register("password")} />
                </div>

                <div className="input-container">
                    <label htmlFor="first_name">First Name:</label>
                    <input type="text" id="first_name" {...register("first_name")}/>
                </div>

                <div className="input-container">
                    <label htmlFor="last_name">Last Name: </label>
                    <input type="text" id="last_name" {...register("last_name")} />
                </div>

                <div className="input-container">
                    <label htmlFor="birthday">Birthday: </label>
                    <input type="date" id="birthday" {...register("birthday")}  />
                </div>

                <button className="submit">Create</button>
                <button type="text">Delete</button>
            </form>
        </div>
    );
};

export default UsersForm;


