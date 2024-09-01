import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { timeSince ,extractTime} from "../utility/config";

const Message = ({message}) => {

  const scroll = useRef();

  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"})
  },[message])

  const {authUser,selectedUser} = useSelector((state)=>state.user)
  
  return (
    // <div ref={scroll}>
    //   <div className={`chat ${message.senderId === authUser?._id ? "chat-end" : "chat-start"} `}>
    //     <div className="chat-image avatar">
    //       <div className="w-10 rounded-full">
    //         <img
    //           alt="Tailwind CSS chat bubble component"
    //           src={message.senderId === authUser._id ? authUser?.profilePhoto : selectedUser?.profilePhoto} 
    //         />
    //       </div>
    //     </div>
    //     <div className="chat-header">
          
    //       <time className="text-xs text-fuchsia-50 opacity-50">{extractTime(message.createdAt)}</time>
    //     </div>
    //     <div className={`chat-bubble ${message.senderId === authUser?._id ? "chat-bubble-primary" :"chat-bubble-secondary"} `}>
    //       {/* {message.message} */}
    //       {/* Render the message text if it exists */}
    //       {message.message && <p>{message.message}</p>}

    //       {/* Render the image if it exists */}
    //       {message.img && (
    //         <img
    //           src={message.img}
    //           alt="Sent"
    //           className="max-w-xs max-h-64 object-cover mt-2 rounded-lg"
    //         />
    //       )}
    //     </div>
    //     <div className="chat-footer opacity-50">Delivered</div>
    //   </div>
      
    //   {/* <div className="chat chat-end">
    //     <div className="chat-image avatar">
    //       <div className="w-10 rounded-full">
    //         <img
    //           alt="Tailwind CSS chat bubble component"
    //           src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    //         />
    //       </div>
    //     </div>
    //     <div className="chat-header">
         
    //       <time className="text-xs opacity-50">12:46</time>
    //     </div>
    //     <div className="chat-bubble chat-bubble-secondary">{message.message}</div>
    //     <div className="chat-footer opacity-50">Seen at 12:46</div>
    //   </div> */}
    // </div>
    <div ref={scroll}>
      <div
        className={`chat ${
          message.senderId === authUser?._id ? "chat-end" : "chat-start"
        } p-2 sm:p-4`}
      >
        <div className="chat-image avatar">
          <div className="w-8 sm:w-10 rounded-full">
            <img
              alt="User profile"
              src={
                message.senderId === authUser._id
                  ? authUser?.profilePhoto
                  : selectedUser?.profilePhoto
              }
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs sm:text-sm text-fuchsia-50 opacity-50">
            {extractTime(message.createdAt)}
          </time>
        </div>
        <div
          className={`chat-bubble ${
            message.senderId === authUser?._id
              ? "chat-bubble-primary"
              : "chat-bubble-secondary"
          } max-w-full sm:max-w-md`}
        >
          {/* Render the message text if it exists */}
          {message.message && (
            <p className="text-xs sm:text-sm">{message.message}</p>
          )}

          {/* Render the image if it exists */}
          {message.img && (
            <img
              src={message.img}
              alt="Sent"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md max-h-64 object-cover mt-2 rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
