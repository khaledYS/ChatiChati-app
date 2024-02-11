import React, { Context, createContext, useContext, useEffect, useState } from "react";
import NameInputs from "./NameInputs";
import EmailUsernameInput from "./EmailUsernameInput";
import PasswordInput from "./PasswordInput";
import InputValidationComponent from "./InputValidationComponent";
import PhoneInput from "./PhoneInput";

interface Props {
    setIsInputsValid: React.Dispatch<React.SetStateAction<boolean>>;
}
interface validationInterface {
    status: boolean | null;
    text: string;
}
interface ValidationsInterface {
    username: validationInterface;
    email: validationInterface;
    password: validationInterface;
    password_confirmation: validationInterface;
    name: validationInterface;
    phone: validationInterface;
}
export type Validations = ValidationsInterface | null;


export const validationsContext = createContext<[Validations, React.Dispatch<React.SetStateAction<Validations>>]>(null);
function SignupInputsContainer(props: Props) {
    const { setIsInputsValid } = props;
    const [validations, setValidations] = useState<Validations>(null);

    // iterate through the object validations, if are all true in the object, set to true, if not set to false
    useEffect(() => {
        let isValid = true;
        if (validations) {
            Object.keys(validations).forEach((key) => {
                if (!validations[key].status) {
                    isValid = false;
                }
            });
        } else {
            isValid = false;
        }
        setIsInputsValid(isValid);
    }, [validations]);
    return (
        <validationsContext.Provider value={[validations, setValidations]}>
            <NameInputs/>
            <EmailUsernameInput/>
            <PasswordInput/>
            <PhoneInput />
            <div className="px-6 mt-2 mb-2">
                {validations &&
                    Object.keys(validations).map((key, index) => {
                        return (
                            <InputValidationComponent
                                key={index}
                                isValid={validations[key].status}
                                text={validations[key].text}
                            />
                        );
                    })}
            </div>
        </ validationsContext.Provider>
    );
}

export default SignupInputsContainer;
