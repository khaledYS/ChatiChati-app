import React from "react";
import { Link } from "react-router-dom";

interface Props {}

function Home(props: Props) {
  const {} = props;
  const buttonClass =
    "text-[#333] text w-full text-center font-bold py-2 px-4 rounded border-[#5c5c5c] border-solid border-b-2 border-2 bg-gray-100 hover:bg-gray-300 focus:border-b-4 transition-all hover:border-b-4 focus:-translate-y-1 hover:-translate-y-1 mb-1 ";
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="max-w-52 w-full">
        <h1 className="text-3xl font-bold text-[#333] mb-4">Chati Chati...</h1>
        <div className="flex justify-stretch items-center flex-col ">
          <Link to="/login" className={buttonClass}>
            Login
          </Link>
          <Link to="/signup" className={buttonClass}>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
