import axios from 'axios'
import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { setOtherUsers } from '../redux/userSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get('http://localhost:3500/api/users/');
                console.log(res);
                
                dispatch(setOtherUsers(res.data))
            } catch (error) {
                console.log(error);
                navigate("/login")
            }
        }

        fetchOtherUsers();
    },[])

}

export default useGetOtherUsers
