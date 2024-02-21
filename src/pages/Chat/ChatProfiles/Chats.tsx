import React from "react";
import { ChatsFromRequest } from "./index";
import { useAuth } from "@/hooks/useAuth";
import Chat from "./Chat";

interface Props {
    chats: ChatsFromRequest;
}

function Chats(props: Props) {
    const { chats } = props;
    const { user } = useAuth();
    console.log(chats)
    return (
        <div className="w-full px-2 py-2">
            {chats &&
                chats.map((chat, ind) => {
                    const chater = chat.messagers.filter((val) => val.username !== user.username);
                    return <Chat key={ind} messager={{...chater[0]}} chatId={chat.chatId} />;
                })}
        </div>
    );
}

export default Chats;
