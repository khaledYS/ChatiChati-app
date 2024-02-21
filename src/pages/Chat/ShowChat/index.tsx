import React, { FormEvent, useEffect, useState } from "react";
import pusherJs from "pusher-js";
import { Textarea } from "@/shadcn-ui-components/ui/textarea";
import { Button } from "@/shadcn-ui-components/ui/button";
import axios from "axios";
import { ScrollArea } from "@/shadcn-ui-components/ui/scroll-area";
import { Input } from "@/shadcn-ui-components/ui/input";

interface Props {}

function ShowChat(props: Props) {
    const apiBaseUrl = import.meta.env.VITE_API_URL;
    const {} = props;
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        pusherJs.logToConsole = true;

        var pusher = new pusherJs("14aaa8a8dc4e553e31ab", {
            cluster: "ap2",
        });

        var channel = pusher.subscribe("messages");
        channel.bind("message", function (data) {
            console.log(data)
            setMessages(prev => [...prev, data.message])
        });

        return () => {
            channel.unsubscribe();
        };
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const message = target.message.value;
        const result = await axios.post(apiBaseUrl + "chat/", {
            message,
        })
        console.log(result);
    };
    return (
        <div className="flex flex-col h-full p-2">
            <ScrollArea color="blue" className="h-full messages overflow-y-auto">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/60219362?v=4"
                                alt="avatar"
                                className=" rournded-full"
                                width={50}
                            />
                            <div className="ml-2">
                                <p className="text-xs text-gray-500">
                                    {message}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </ScrollArea>
            <form className="w-full gap-2 flex items-stretch" onSubmit={handleSubmit}>
                <Input id="message" placeholder="Type your message here." className="!border-2 !border-gray-900 border-solid appearance-none text-lg font-semibold font-sans" style={{"boxShadow": "rgb(51, 51, 51) 0px 0px 3px -1px inset, rgb(51, 51, 51) 0px 0px 17px -6px"}} />
                <Button className="h-full">Send message</Button>
            </form>
        </div>
    );
}

export default ShowChat;
