import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import { validationsContext } from "./SignupInputsContainer";

interface Props {}

export default function NameInputs(props: Props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [validations, setValidations] = useContext(validationsContext);

    useEffect(() => {
        const refrence = {
            ...validations,

        };
        setValidations(
            prev=> {
                return {
                    ...prev, 
                    name: {
                        status: isValid,
                        text: "First name with last name should be between 25 and 6 characters.",
                    }
                };
            }
        );
    }, [isValid]);

    useEffect(() => {
        let name = firstName.toString() + lastName.toString();
        if (name.length > 25) setIsValid(false);
        else if (name.length < 6 && name.length > 0) setIsValid(false);
        else if (name.length === 0) setIsValid(null);
        else setIsValid(true);
        if (firstName === "" || lastName === "") setIsValid(null);
    }, [firstName, lastName]);

    return (
        <div className="w-full h-full flex flex-row flex-wrap max-w-full justify-center px-3">
            <Input
                options={{
                    inputName: "first_name",
                    inputPlaceholder: "First Name",
                    inputType: "text",
                    inputAutofocus: true,
                    inputTypeOnChange: (e) => {
                        setFirstName(e.target.value);
                    },
                }}
            />
            <Input
                options={{
                    inputName: "last_name",
                    inputPlaceholder: "Last Name",
                    inputType: "text",
                    inputTypeOnChange: (e) => {
                        setLastName(e.target.value);
                    },
                }}
            />
        </div>
    );
}
