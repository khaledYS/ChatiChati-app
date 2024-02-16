import React from "react";
import PrivateRoute from "../PrivateRoute";
import { Route, Routes } from "react-router-dom";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/shadcn-ui-components/ui/resizable";
import ChatProfiles from "./ChatProfiles";
import ShowChat from "./ShowChat";

interface Props {}

function Index(props: Props) {
    const {} = props;

    return (
        <PrivateRoute>
            <div className="flex flex-col h-full max-w-[1000px] max-h-[700px] mx-auto w-full bg-[#f0f0f0] px-2 rounded-2xl">
                <ResizablePanelGroup direction="horizontal" >
                    <ResizablePanel defaultSize={30}>
                        <ChatProfiles />
                    </ResizablePanel>
                    <ResizableHandle withHandle className="bg-slate-600 w-1 h-full" />
                    <ResizablePanel>
                        <Routes>
                            <Route path="/:id" Component={ShowChat} />
                        </Routes>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </PrivateRoute>
    );
}

export default Index;
