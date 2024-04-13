import React from 'react'

const OtherUser = () => {
    return (
        <div className='p-3'>
            <div className="user-container cursor-pointer flex justify-start items-center gap-5 bg-emerald-800 text-white hover:bg-emerald-700 p-3 rounded-md">
                <div className="avatar online">
                    <div className="w-10 rounded-full">
                        <img src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
                    </div>
                </div>
                <div className="name-container">
                    <p>Prashant Kalsariya</p>
                </div>
            </div>
        </div>
    )
}

export default OtherUser
