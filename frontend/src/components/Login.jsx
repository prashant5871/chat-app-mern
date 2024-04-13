import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const res = await axios.post("http://localhost:3500/api/users/login", user, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true

            })

            navigate("/")
            console.log(res);
            dispatch(setAuthUser(res.data))
            toast.success("Login succesfully")
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
        }
    }
    return (
        <div className='min-w-96'>
            <div className='p-5 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100s'>
                <h1 className='font-bold text-center text-3xl text-gray-100'>Login</h1>
                <form onSubmit={submitHandler} action="" className='my-3'>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-lg text-white">User name</span>
                        </div>
                        <input value={user.username} name='username' onChange={handleChange} type="text" placeholder="Enter user name" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-lg text-white">Password</span>
                        </div>
                        <input value={user.password} onChange={handleChange} name='password' type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
                    </label>

                    <div className="mt-2 has-acount flex justify-center items-center">
                        <p className='text-white'>Don't have an account ? </p> <Link to="/register"><span className='text-blue-700'>Register here</span></Link>
                    </div>

                    <button type='submit' className="btn btn-block mt-3">Login now</button>

                </form>
            </div>
        </div>
    )
}

export default Login
