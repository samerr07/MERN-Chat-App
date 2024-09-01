import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useSelector } from 'react-redux'

const MessageContainer = () => {

  const {authUser, selectedUser, onlineUsers} = useSelector((state)=>state.user)
  const onlineUser = onlineUsers?.includes(selectedUser?._id)


  

  return (

    <>
      {
        selectedUser !== null ? (
          <div className='w-full md:w-[550px] flex flex-col'>
      <div className="flex items-center bg-zinc-800 px-4 py-2 mb-2 text-white  gap-2  cursor-pointer">
        <div className={`avatar ${onlineUser ? 'online' : ''}`}>
          <div className="w-10 md:w-12 rounded-full">
            <img
              src={selectedUser?.profilePhoto}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div>
            <p className="text-base md:text-lg">{selectedUser?.fullName}</p>
          </div>
        </div>
      </div>
      {/* <Messages/>
      <SendInput/> */}
      <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>
          <div className="mt-auto">
            <SendInput />
          </div>
    </div>
        ) : (
          <div className='w-full h-screen md:w-[550px] flex flex-col justify-center items-center'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Hi,{authUser?.fullName}! </h1>
            <h1 className='text-lg md:text-2xl text-white'>Let's start conversation !!</h1>
          </div>
        )
      }
    </>
    
  )
}

export default MessageContainer

