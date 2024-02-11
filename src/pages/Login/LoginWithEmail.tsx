import { ChangeEventHandler, useState } from "react";
import Input from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import { useError } from "../../hooks/useError";

interface Props {}

function LoginWithEmail(props: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { loginWithEmail } = useAuth();
  const [setError, ErrorComponent] = useError({});


  const {} = props;

  return (
    <div className="w-full h-full grid place-items-center ">
      <div className=" min-w-[20rem] max-w-[26rem] min-h-6 w-full h-full max-h-[34rem] bg-[#ebebeb] rounded-xl">
        <h1 className="text-center mt-3 text-2xl font-medium text-[#444]">
          ChatiChati
        </h1>
        <h1 className="text-center text-xl font-medium text-[#555] ">
          Login, to Connect the world!
        </h1>

        <form
          className="flex flex-col justify-center items-stretch "
          onSubmit={async (e) => {
            e.preventDefault();
            if (isLoading) return;
            setIsLoading(true);
            const email = (e.target as HTMLFormElement).email.value;
            const password = (e.target as HTMLFormElement).password.value;
            try {
              const result = await loginWithEmail({ email, password });
            } catch (error) {
                const status:number|undefined = error?.response?.status
                if(status === 401 || status === 404){
                  setError("invalidcredentials", "Invalid email or password. Please check your credentials.");
                }else if( status === 500){  
                  setError("internalerror");
                }else{
                  setError("networkerror");
                }
            } finally {
              setIsLoading(false);
            }
          }}
        >
          <h1 className="mt-8 text-center text-xl font-semibold text-[#555] ">
            Login with Email
          </h1>
          <Input
            options={{
              inputName: "email",
              inputPlaceholder: "Email",
              inputType: "email",
              containerClassName: "mt-1",
              inputAutofocus: true,
            }}
          />
          <Input
            options={{
              inputName: "password",
              inputPlaceholder: "Password",
              inputType: "password",
              containerClassName: "mt-2",
            }}
          />
          <div className="flex justify-between px-8 mt-1">
            <Link
              to="/login/username"
              className="flex items-center font-semibold underline text-[#555] hover:text-[#111] "
            >
              Login using username
            </Link>
            <Link
              to="/login/forgot-password"
              className="flex items-center font-semibold underline text-[#555] hover:text-[#111] "
            >
              Forgot Password? 
            </Link>
          </div>
          <div className="flex justify-center items-center mt-8 px-6 ">
            <button
              type="submit"
              className={
                "min-w-24 w-full text-lg text-[#444] font-bold py-2 px-4 rounded-2xl border-[#5c5c5c] border-solid border-b-2 border-2 " +
                (isLoading
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-gray-100 hover:bg-gray-300 focus:border-b-4 transition-all hover:border-b-4 focus:-translate-y-1 hover:-translate-y-1 ")
              }
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        {ErrorComponent}
      </div>
    </div>
  );
}

export default LoginWithEmail;
