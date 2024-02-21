import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Chats from "./Chats"
import NavbarProfile from './NavbarProfile';

interface Props {}

export type ChatsFromRequest = {
    "chatId": string;
    "_id": string;
    "theme": string;
    "messagers": {
        "_id": string;
        "username": string;
        "email": string;
        "name": string;
    }[]
}[]
function ChatProfiles(props: Props) {
    const apiBaseUrl = import.meta.env.VITE_API_URL;;
    const {user} = useAuth();
    // const [chats, setChats] = useState([]);
    const [chats, setChats] = useState([
        {
            "chatId": "chat-e8365d87-1b7e-49a7-b5c3-1de6c256d1f3",
            "_id": "index",
            "theme": "white",
            "messagers": [
                {
                    "_id": "65b41232696a58a64148b306",
                    "username": "moh",
                    "email": "moh@gmail.com",
                    "name": "ammar"
                },
                {
                    "_id": "65b55b3c381c3fc7fd5eef45",
                    "username": "gkcl",
                    "email": "ammarkhaled@gmail.com",
                    "name": "ammar"
                }
            ]
        },
        {
            "chatId": "chat-b8eed018-4bf5-4c7e-8164-d6712beee599",
            "_id": "index",
            "theme": "white",
            "messagers": [
                {
                    "_id": "65b41232696a58a64148b306",
                    "username": "moh",
                    "email": "moh@gmail.com",
                    "name": "ammar"
                },
                {
                    "_id": "65b577cf533f37b10af3cc75",
                    "username": "amori",
                    "email": "ammaryasser7654@gmail.com",
                    "name": "ammar"
                }
            ]
        }
    ]);

    const updateChats = async () => {
        try {
            const result = await axios.get(apiBaseUrl + "chats/", {
                withCredentials: true
            });
            setChats(result.data.chats as ChatsFromRequest);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        setChats(prev=>[...prev]);
        (async ()=>{
            // await updateChats();
        })();
    }, [])



    return (
        <div className=' overflow-auto h-full '>
            <NavbarProfile />
            <Chats chats={chats}/>
        </div>
    )
}

export default ChatProfiles
