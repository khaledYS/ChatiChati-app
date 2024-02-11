import React from "react";
import { Link } from "react-router-dom";

interface Props {}

function SignupLinks(props: Props) {
    const {} = props;

    return (
        <div className="flex justify-between px-8 mt-1">
            <div>
                <Link
                    to="/login/forgot-password"
                    className="flex items-center font-semibold underline text-[#555] hover:text-[#111] "
                >
                    Forgot Password?
                </Link>
            </div>
            <div className="flex flex-col">
                <Link
                    to="/login/"
                    className="flex items-center font-semibold underline text-[#555] hover:text-[#111] "
                >
                    Already has an account?
                </Link>
            </div>
        </div>
    );
}

export default SignupLinks;
