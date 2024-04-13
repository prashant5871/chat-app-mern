import React from 'react'
import { IoSend } from "react-icons/io5";

const InputMessage = () => {
    return (
        <div>
            <form action="">
                <div className='relative m-2'>
                    <input type="text" placeholder="Type here" className="text-black input input-bordered input-success w-full" />
                    <button className='absolute end-0 inset-y-0 mr-5'><div
                        style={{
                            backgroundColor: "#ffffff",
                        }}
                    >
                        <IoSend
                            style={{
                                color: "#006106",
                            }}
                        />
                    </div></button>

                </div>
            </form>
        </div>
    )
}

export default InputMessage
