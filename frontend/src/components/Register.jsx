import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from "react-hot-toast"


const Register = () => {
    const [user, setUser] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            console.log(user);
            const res = await axios.post("http://localhost:3500/api/users/register", user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(res);
            if (res.data.success) {
                navigate("/login")
                toast.success(res.data.message, {
                    position: 'top-right' // Position the toast at the top right corner
                });
            }
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
        }
    }
    return (
        <div className='min-w-96'>
            <div className='p-5 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100s'>
                <h1 className='font-bold text-center text-3xl text-gray-100'>Sign Up</h1>
                <form onSubmit={submitHandler} action="" className='my-3'>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-lg text-white">Full Name</span>
                        </div>
                        <input value={user.fullName} name="fullName" onChange={handleChange} type="text" placeholder="Enter your full name" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-lg text-white">User name</span>
                        </div>
                        <input value={user.username} name="username" onChange={handleChange} type="text" placeholder="Enter user name" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-lg text-white">Password</span>
                        </div>
                        <input value={user.password} name="password" onChange={handleChange} type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-lg text-white">Confirm password</span>
                        </div>
                        <input value={user.confirmPassword} name="confirmPassword" onChange={handleChange} type="password" placeholder="confirm password" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <div className="gender flex justify-start gap-3">

                        <label className="flex items-center">
                            <div className="label cursor-pointer">
                                <span className="label-text text-lg text-white">male</span>
                            </div>
                            <input checked={user.gender == "male"} onChange={(e) => { setUser({ ...user, gender: "male" }) }} type="checkbox" className="checkbox" />
                        </label>
                        <label className="flex items-center">
                            <div className="label cursor-pointer">
                                <span className="label-text text-lg text-white">Female</span>
                            </div>
                            <input onChange={(e) => { setUser({ ...user, gender: "female" }) }} checked={user.gender == "female"} type="checkbox" className="checkbox" />
                        </label>
                    </div>

                    <div className="has-acount flex justify-center items-center">
                        <p className='text-white'>Already have an account ? </p> <Link to="/login"><span className='text-blue-700'>Login here</span></Link>
                    </div>

                    <button type='submit' className="btn btn-block mt-3">Sign Up</button>

                </form>
            </div>
        </div>
    )
}

export default Register
