import React, { useContext, useEffect, useState } from 'react'
import Input from './Input';
import { Validations, validationsContext } from "./SignupInputsContainer";
import isEmail from "validator/lib/isEmail";
import matches from "validator/lib/matches";


interface Props {

}

function EmailUsernameInput(props: Props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [validations, setValidations] = useContext(validationsContext);

    useEffect(() => {
        // check from the username
        if (username.length >= 3 && username.length <= 10 && matches(username, "^[a-zA-Z0-9_.]*$")) {
            setIsUsernameValid(true);
        }else if(username.length === 0){
            setIsUsernameValid(null)
        } else {
            setIsUsernameValid(false);
        }

        // check from the email
        if (isEmail(email) && email.length > 0) {
            setIsEmailValid(true);
        }else if(email.length === 0){
            setIsEmailValid(null)
        } else {
            setIsEmailValid(false);
        }
    }, [username, email])

    useEffect(() => {
        setValidations(prev =>{
            return {
                ...prev,
                username: {
                    status: isUsernameValid,
                    text: "Username should have a length between 3 and 10 characters, and contain only letters, numbers, dots, and underscores."
                }, 
                email: {
                    status: isEmailValid,
                    text: "Email should be a valid email address."
                }
            }
        })
    }, [isUsernameValid, isEmailValid])

    return (
        <div className="w-full h-full flex flex-row flex-wrap max-w-full justify-center px-3 ">
            <Input
                options={{
                    inputName: "username",
                    inputPlaceholder: "Username",
                    inputType: "text",
                    inputAutofocus: true,
                    inputTypeOnChange: (e) => {setUsername(e.target.value)},
                    inputSettings: {
                        "maxLength": 10,
                        "minLength": 3,
                        "pattern": "^[a-zA-Z0-9_.]*$"
                    }
                }}
            />
            <Input
                options={{
                    inputName: "email",
                    inputPlaceholder: "Email",
                    inputType: "email",
                    inputTypeOnChange: (e) => {setEmail(e.target.value)},
                }}
            />
        </div>
    );
}

export default EmailUsernameInput
