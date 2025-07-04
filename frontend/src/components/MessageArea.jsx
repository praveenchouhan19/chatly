import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import dp from '../assets/dp.webp';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';
import { RiEmojiStickerLine } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa6";
import { MdSend } from "react-icons/md";
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { set } from 'mongoose';
import SenderMessage from './SenderMessage';
import ReceiverMessage from './ReceiverMessage';
import axios from 'axios';
import { serverUrl } from '../main';

function MessageArea() {
    let {selectedUser} = useSelector(state => state.user);
    let dispatch = useDispatch();
    let [showPicker, setShowPicker] = useState(false);
    let [input, setInput] = useState("");
    let [frontendImage, setFrontendImage] = useState(null);
    let [backendImage, setBackendImage] = useState(null);
    let image = React.useRef(null);

    const handleImage = (e) => {
      let file = e.target.files[0];
      setBackendImage(file);
      setFrontendImage(URL.createObjectURL(file));
        
    }

    const handleSendMessage = async (e) => {
      e.preventDefault();
      try {
        let formData = new FormData();
        formData.append("message", input);

        if (backendImage) {
          formData.append("image", backendImage);
        }

        let result = await axios.post(
          `${serverUrl}/api/message/send/${selectedUser._id}`,
          formData,
          { withCredentials: true }
        )
        console.log(result.data);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }

    const onEmojiClick = (emojiData) => {
        setInput(prevInput => prevInput + emojiData.emoji);
        setShowPicker(false);
    }
  return (
    <div className={`lg:w-[70%] relative ${selectedUser?"flex":"hidden"} lg:flex w-full h-full bg-slate-200 border-l-2 border-gray-300`}>
      
      {selectedUser && 
        <div className='w-full h-[100vh] flex flex-col'>
          <div className="w-full h-[100px] bg-[#1797c2] rounded-b-[30px] shadow-gray-400 shadow-lg flex items-center px-[20px] gap-[20px]">
            <div
                className='cursor-pointer'
                onClick={()=>dispatch(setSelectedUser(null))}>
                <IoIosArrowRoundBack className='w-[40px] h-[40px] text-white' />
            </div>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center bg-white shadow-gray-500 shadow-lg cursor-pointer' onClick={() => navigate('/profile')}>
                <img
                src={selectedUser?.image || dp}
                alt=""
                className='h-[100%]'
                />
            </div>
            <h1 className="text-white font-semibold text-[20px]">{selectedUser?.name || "user"}</h1>
          </div>

          <div className='w-full h-[550px] flex flex-col py-[30px] px-[20px] overflow-auto'>
            {showPicker && 
              <div className='absolute bottom-[120px] left-[20px]'>
                  <EmojiPicker width={250} height={350} className='shadow-lg'
                    onEmojiClick={onEmojiClick}/>
              </div>}
            
          </div>
        </div>}
        {!selectedUser && (
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-gray-700 font-bold text-[50px]">
                Welcome to Chatly
                </h1>
                <span className="text-gray-700 font-semibold text-[30px]">
                Chat Friendly!
                </span>
            </div>
        )}
        {selectedUser && (
          <div className='w-full lg:w-[70%] h-[100px] fixed bottom-[20px] flex items-center justify-center'> 
            <img src={frontendImage} alt="" className='w-[80px] absolute bottom-[100px] right-[20%] rounded-lg shadow-gray-400 shadow-lg' />
            <form className='w-[95%] lg:w-[70%] h-[60px] bg-[rgb(23,151,194)] shadow-gray-400 shadow-lg rounded-full flex items-center gap-[20px] px-[20px] relative' onSubmit={handleSendMessage}>
              <div onClick={()=>setShowPicker(prev=>!prev)}>
                <RiEmojiStickerLine className='w-[25px] h-[25px] text-white cursor-pointer' />
              </div>
              <input type="file" accept='image/*' ref={image} hidden onChange={handleImage}/>
              <input type="text" className='w-full h-full px-[10px] bg-transparent outline-none border-0 text-[19px] text-white placeholder-white'
                     placeholder='Message'
                     onChange={(e)=>setInput(e.target.value)} value={input}/>
              <div onClick={() => image.current.click()}>
                <FaRegImage className='w-[25px] h-[25px] text-white cursor-pointer'/>
              </div>
              <button>
                <MdSend className='w-[25px] h-[25px] text-white cursor-pointer'/>
              </button>
              
              
            </form>
          </div>
        )}
        


    </div>
  );
}

export default MessageArea;
