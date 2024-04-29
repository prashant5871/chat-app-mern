import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const useGetMessages = () => {
    const { selectedUser } = useSelector(state => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:3500/api/message/${selectedUser._id}`);
                console.log(res);
                dispatch(setMessages(res.data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessages();
    }, [selectedUser])

}

export default useGetMessages
