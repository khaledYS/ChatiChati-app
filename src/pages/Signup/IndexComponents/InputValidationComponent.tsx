import React, { Component, ElementType, useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleDot, FaRegCircleXmark } from "react-icons/fa6";

interface Props {
    text: string;
    isValid: boolean | null;
}

export default function InputValidationComponent(props: Props) {
    const { isValid, text } = props;
    const [ComponentMark, setComponentMark] = useState<JSX.Element>(() => (
        <FaRegCircleDot />
    ));

    useEffect(() => {
        if (isValid === true)
            setComponentMark(() => <FaRegCheckCircle className="text-2xl text-black bg-green-400 rounded-full" />);
        else if (isValid === false)
            setComponentMark(() => <FaRegCircleXmark className="text-2xl text-[#000] bg-red-400 rounded-full" />);
        else if (isValid === null)
            setComponentMark(() => <FaRegCircleDot className="text-2xl bg-[#555] rounded-full text-gray-400" />);
    }, [isValid]);
    return (
        <div className="flex justify-start items-center py-1">
            <div className="mr-3 rounded-full " style={{boxShadow: "0 0 17px -3px #555"}}>{ComponentMark}</div>
            <div className="font-medium">{text}</div>
        </div>
    );
}

