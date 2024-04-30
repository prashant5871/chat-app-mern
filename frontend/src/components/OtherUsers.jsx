import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const OtherUsers = () => {
    const navigate = useNavigate();
    useGetOtherUsers();


    let { otherUsers,searchedUsers } = useSelector(state => state.user);
    // if (!otherUsers) return;
    if(searchedUsers) otherUsers = searchedUsers;
    // console.log("searched users are : ",searchedUsers);

    return (
        <div className='overflow-auto'>
            {
                otherUsers?.map(user => {
                    return <OtherUser key={user._id} user={user} />
                })
            }
        </div>
    )
    // <div className='overflow-auto'>
    //     <OtherUser />
    //     <OtherUser />
    //     <OtherUser />
    //     <OtherUser />
    //     <OtherUser />
    //     <OtherUser />
    //     <OtherUser />
    //     <OtherUser />
    //     <OtherUser />
    //     <OtherUser />
    //     <OtherUser />
    // </div>

}

export default OtherUsers
