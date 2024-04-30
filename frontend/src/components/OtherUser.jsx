import React from 'react'
import { useDispatch } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {

    const dispatch = useDispatch();

    const selectedUserHandler = () => {
        console.log("user clicked");
        dispatch(setSelectedUser(user))
        console.log(user);
    }

    return (
        <div onClick={selectedUserHandler} className='p-3'>
            <div className="user-container cursor-pointer flex justify-start items-center gap-5 bg-emerald-800 text-white hover:bg-emerald-700 p-3 rounded-md">
                <div className="avatar online">
                    <div className="w-10 rounded-full">
                        <img src={user.profilePhoto} />
                        {/* <img src="#" alt="image" /> */}
                    </div>
                </div>
                <div className="name-container">
                    <p>{user.fullName}</p>
                </div>
            </div>
        </div>
    )
}

export default OtherUser
