import { FormEvent, useEffect, useState } from "react";
import SignupInputsContainer from "./IndexComponents/SignupInputsContainer";
import SignupLinks from "./IndexComponents/SignupLinks";
import SingupSubmitButton from "./IndexComponents/SingupSubmitButton";
import { useAuth } from "../../hooks/useAuth";
import { useToast } from "@/shadcn-ui-components/ui/use-toast";
import { useNavigate } from "react-router-dom";

interface Props {}

function Signup(props: Props) {
    const { signup, user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [isInputsValid, setIsInputsValid] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    useEffect(()=>{
        if(user){
          navigate("/profile", {replace: true});
        }
      }, [user])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const email = target.email.value;
        const username = target.username.value;
        const password = target.password.value;
        const first_name = target.first_name.value;
        const last_name = target.last_name.value;
        const password_confirmation = target.password_confirmation.value;
        const phone = target.phone.value;
        try {
            setIsLoading(true);
            if (!isInputsValid) {
                return;
            }
            const result = await signup({
                name: first_name + " " + last_name,
                username,
                email,
                phone,
                password,
            });
        } catch (error) {
            let errorString = error?.response?.data?.message;
            if (errorString) {
                console.log(errorString);
                toast({
                    variant: "destructive",
                    title: "invalid credentials",
                    description: errorString,
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Weak Internet Connection",
                    description:
                        "Please check your internet connection and try again.",
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full h-full grid place-items-center ">
            <div className="min-w-[20rem] max-w-[40rem] min-h-6 w-full h-full max-h-[75%] bg-[#ebebeb] rounded-xl overflow-hidden shadow-custom">
                <div className="min-w-[20rem] max-w-[40rem] min-h-6 w-full h-full  bg-[#ebebeb] rounded-xl overflow-auto py-2">
                    <h1 className="text-center mt-3 text-2xl font-medium text-[#444]">
                        ChatiChati
                    </h1>
                    <h1 className="text-center text-xl font-medium text-[#555] ">
                        Signup A new Account!
                    </h1>

                    <form
                        className="flex flex-col justify-center items-stretch pt-3"
                        onSubmit={handleSubmit}
                    >
                        <SignupInputsContainer
                            setIsInputsValid={setIsInputsValid}
                        />
                        <SignupLinks />
                        <SingupSubmitButton isLoading={isLoading} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
