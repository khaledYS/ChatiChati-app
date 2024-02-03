import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginWithUsername from "./LoginWithUsername";
import LoginWithEmail from "./LoginWithEmail";
import { useAuth } from "../../hooks/useAuth";

interface Props {}

const Login: React.FC<Props> = ({}) => {
  const {user} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(user){
      navigate("/profile", {replace: true});
    }
  }, [user])
  return (
        <Routes>
            <Route index Component={LoginWithUsername} />
            <Route Component={LoginWithUsername} path="/username" />
            <Route Component={LoginWithEmail} path="/email" />
        </Routes>
  );
};

export default Login;