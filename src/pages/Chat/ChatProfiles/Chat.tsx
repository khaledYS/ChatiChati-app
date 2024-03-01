import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Link } from 'react-router-dom';

interface Props {
    messager: {
        _id: string;
        name: string;
        username: string;
        email: string;
    };
    chatId: string;
    currentChat: string;
    setCurrentChat: Dispatch<SetStateAction<string>>
}

function Chat(props: Props) {
    const { messager, chatId } = props;
    return (
        <Link to={chatId} onClick={()=>{
            props.setCurrentChat(chatId);
        }} style={{ "boxShadow": "rgb(42, 42, 42) 0px 0px 7px -7px inset, rgb(42, 42, 42) 0px 0px 3px -1px"}} className={'w-full px-2 py-2 w bg-[#e3e3e3] hover:bg-[#c3c3c3] transition-all hover:cursor-pointer rounded-md mt-2 flex overflow-hidden ' + (props.currentChat === chatId ? 'bg-[#c3c3c3]' : '')}>
            <img width={50} src={`https://api.dicebear.com/7.x/initials/png?seed=${messager.username}`} alt={`user @${messager.username} avatar`}  className='block rounded-full mr-2  '/>
            <div >
                <h1 className='text-lg font-medium'> {messager.name} | @{messager.username} </h1>
                <h2 className='-mt-1 font-medium text-[#565656] ml-1'>{messager.email}</h2>
            </div>
        </Link>
    )
}

export default Chat
