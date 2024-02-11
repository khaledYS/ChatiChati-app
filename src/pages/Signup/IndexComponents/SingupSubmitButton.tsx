import React from "react";

interface Props {
    isLoading: boolean;
}

function SingupSubmitButton(props: Props) {
    const {isLoading} = props;

    return (
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
                {isLoading ? "Creating your account..." : "Signup"}
            </button>
        </div>
    );
}

export default SingupSubmitButton;
