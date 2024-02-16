import { useState, useRef } from "react";
import { BsEmojiSmileFill, BsSend } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import useSendMessage from "../../hooks/useSendMessage";




const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  
  

  const handleEmojiPickerToggle = () => {
    setShowEmojiPicker(!showEmojiPicker);
	// console.log(showEmojiPicker)
  };
 
  

  const handleEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="flex flex-col p-4 bg-gray-600 rounded-lg shadow-md relative">
      {showEmojiPicker ? (
        <div
          ref={emojiPickerRef}
          
          className="absolute bottom-full left-0 z-10 bg-white border border-gray-200 p-2 rounded-lg shadow-md"
        >
         
          <EmojiPicker height={330} width={250} onEmojiClick={handleEmojiClick} />
        </div>
      ): null}
      <div className="relative flex items-center">
        <BsEmojiSmileFill
		  
		 
          className="text-yellow-400 w-10 h-10 cursor-pointer p-2"
          onClick={handleEmojiPickerToggle}
        />
        <input
          type="text"
          className="flex-grow bg-white text-gray-800 placeholder-gray-400 py-2 pl-4 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 text-white bg-blue-500 rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSubmit}
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white border-solid rounded-full animate-spin"></div>
          ) : (
            <BsSend className="w-6 h-6" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;



