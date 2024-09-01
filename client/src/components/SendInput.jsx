
import React, { useRef, useState } from 'react';
import { IoSend,IoCloseSharp } from "react-icons/io5";
import { BASE_URL } from '../utility/config';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';
import EmojiPicker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";
import { CiImageOn } from 'react-icons/ci';
import axios from 'axios';

const SendInput = () => {
  const [message, setMessage] = useState("");
  const [img, setImg] = useState(null);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const { selectedUser } = useSelector((state) => state.user);
  const { messages } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const imgRef = useRef(null);


  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setImg(reader.result);
        };
        reader.readAsDataURL(file);
    }
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(`${BASE_URL}/message/send/${selectedUser?._id}`, {message,img}, {
        headers: {
          "Content-Type": "application/json"
        },
      });
      dispatch(setMessages([...messages, res?.data?.newMessage]));
      console.log(messages)
    } catch (err) {
      console.log(err);
    }
    setMessage("");
    setImg(null);
  };

  const handleEmojiClick = (e) => {
    setMessage(prev => prev + e.emoji);
    setOpenEmojiPicker(false);
  };

  return (
   
    <form onSubmit={handleSubmit} className='px-4 py-3'>
      {img && (
        <div className='relative w-full mt-3 mb-2'>
          <IoCloseSharp
            className='absolute top-1 right-1 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer'
            onClick={() => {
              setImg(null);
              imgRef.current.value = null;
            }}
          />
          <img src={img} className='w-full h-auto max-h-48 object-contain rounded' />
        </div>
      )}
      <div className='w-full relative flex items-center'>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className='border p-3 text-sm rounded-lg w-full border-zinc-500 bg-gray-600 text-white pr-16'
          type="text"
          placeholder="Send a Message..."
        />
        <div className='absolute right-3 flex items-center space-x-2'>
          <input 
            type="file" 
            className="hidden" 
            id="file-input"
            accept='image/*'
            onChange={handleImgChange}
            ref={imgRef}
          />
          {/* <label htmlFor="file-input" className="cursor-pointer">
            📎
          </label> */}
          <CiImageOn
                            className='fill-primary w-6 h-6 cursor-pointer'
                            onClick={() => imgRef.current.click()}
          />
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
          >
            <BsEmojiSmile className='text-white' />
          </button>
          <button type='submit' className='cursor-pointer'>
            <IoSend className='text-white' />
          </button>
        </div>
      </div>
      {openEmojiPicker && (
        <div className="absolute z-20 top-[3.5rem] right-0">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </form>
  );
}

export default SendInput;

