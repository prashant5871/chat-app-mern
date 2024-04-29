import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.user);
  // const { selectedUser } = useSelector(state => state.user)
  useEffect(() => {
    console.log("auth user is : ", authUser);
  }, [authUser]);


  const handleLogout = async (e) => {
    try {
      const res = await axios.get("http://localhost:3500/api/users/logout");
      console.log(res);
      dispatch(setSelectedUser(null));
      navigate("/login")
      toast.success(res.data.message)

    } catch (error) {
      console.log(error);
    }
  }

  // const { authUser } = useSelector(state => state.user)
  // useEffect(() => {
  //   console.log("Authenticated user is : ",authUser);
  // })

  return (
    <div className='md:min-w-[300px] md:h-[80vh] text-white border-r flex flex-col'>
      <div className="search">
        <form action="">
          <div className="input_container flex gap-3 justify-center items-center p-3">

            <input type="text" placeholder="Search here..." className=" text-black input input-bordered input-primary input-sm w-full max-w-xs" />

            <button className="btn btn-sm btn-active btn-neutral"><FaSearch /></button>
          </div>
        </form>
      </div>
      <div className="other-users h-full overflow-auto">
        <OtherUsers />
      </div>

      <div className='bg-teal-900'>
        <div className="logout m-3 flex gap-3 justify-center items-center">
          <div className="left">
            <div className="avatar online">
              <div className="w-10 rounded-full">
                {!authUser && <img src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
                }
              </div>
            </div>
          </div>
          <div className="right w-full">
            {/* <form action=""> */}
            <button onClick={handleLogout} className="btn btn-sm btn-block bg-red-800 text-white hover:bg-red-700">
              Log out
            </button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
