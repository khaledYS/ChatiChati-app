import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import PasswordValidationComponent from "./InputValidationComponent";
import { Validations, validationsContext } from "./SignupInputsContainer";

interface Props {
}

function PasswordInput(props: Props) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(null);
    const [passwordValid, setPasswordValid] = useState(null);
    const [validations, setValidations] = useContext(validationsContext);

    const passwordUnMatchText = "Make sure your password matches the confirmation password!"
    const passwordUnvalidText = "Make sure your password contains at least 8 characters long, one uppercase letter, one lowercase letter, one digit, one symbol and no SPACES. at least!"

    useEffect(()=>{
        // check the matching of the password
        if(password.length > 0 && confirmPassword.length > 0){
            if(password === confirmPassword){
                setPasswordMatch(true);
            }else {
                setPasswordMatch(false);   
            }
        }else {
            setPasswordMatch(null)
            setPasswordValid(null)
        }
        if(password.length > 0){
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?!.*\s)[A-Za-z\d@$!%*?&]{8,}$/;
            if(regex.test(password)){
                setPasswordValid(true);
            }else {
                setPasswordValid(false);
            }
        }else {
            setPasswordValid(null)
        }
    }, [password, confirmPassword]);

    useEffect(()=>{
        setValidations(prev => {
            return {
                ...prev, 
                password: {
                    status: passwordValid,
                    text: passwordUnvalidText
                },
                password_confirmation: {
                    status: passwordMatch,
                    text: passwordUnMatchText
                }
            }
        })
    }, [passwordValid, passwordMatch])
    return (
        <>
            <div className="w-full h-full flex flex-row flex-wrap max-w-full justify-center px-3">
                <Input
                    options={{
                        inputName: "password",
                        inputPlaceholder: "Enter your password",
                        inputType: "password",
                        inputAutofocus: true,
                        inputTypeOnChange: (e) => {setPassword(e.target.value)}
                    }}
                    />
                <Input
                    options={{
                        inputName: "password_confirmation",
                        inputPlaceholder: "Confirm Password",
                        inputType: "password",
                        inputTypeOnChange: (e) => {setConfirmPassword(e.target.value)}
                    }}
                />
            </div>

        </>
    );
}

export default PasswordInput;
