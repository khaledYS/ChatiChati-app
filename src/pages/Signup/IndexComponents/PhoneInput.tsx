import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import { validationsContext } from "./SignupInputsContainer";
import isMobilePhone from "validator/lib/isMobilePhone";

interface Props {}

function PhoneInput(props: Props) {
    const [phone, setPhone] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [_, setValidations] = useContext(validationsContext);

    useEffect(() => {
        if(phone.length === 0){
            setIsValid(null);
        }else {
            setIsValid(isMobilePhone(phone, "ar-SA"))
        }
    }, [phone])

    useEffect(() => {
        setValidations(prev =>{
            return {
             ...prev,
                phone: {
                    status: isValid,
                    text: "Phone Number must be valid, and 10 digits."
                }
            }
        })
    }, [isValid])
    return (
        <>
            <div className="w-full h-full flex flex-row flex-wrap justify-center px-5 max-w-full mt-2">
                <div
                    className={
                        `bg-transparent font-semibold appearance-none bg-white w-full rounded-xl border-solid border-b-2 border-2 focus:border-b-4 transition-all duration-75 border-[#5c5c5c] text-xl pl-0 focus:-translate-y-1 mx-auto flex flex-row overflow-hidden` 
                    }
                >
                    <div className="bg-[#555] flex items-center px-2 py-1 text-[#fff] ">+966</div>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        className={
                            `w-full placeholder:text-[#494949] p-2 placeholder:font-semibold font-semibold` 
                        }
                        required={true}
                        autoComplete={"phone"}
                        autoFocus={false}
                        onChange={(e)=>{setPhone(e.target.value)}}
                        id={"phone"}
                        aria-label="Enter Your Phone Number"
                        aria-describedby={phone}
                        aria-required="true"
                        spellCheck={false}
                        minLength={9}
                        maxLength={10}
                    />
                </div>
            </div>
        </>
    );
}

export default PhoneInput;
