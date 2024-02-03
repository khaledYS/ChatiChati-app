import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { BiLogOutCircle } from "react-icons/bi";
import PrivateRoute from "../PrivateRoute";
import Me from "./Me";

interface Props {}

const Profile: React.FC<Props> = ({}) => {
  const {user} = useAuth();
  const navigate = useNavigate();

  return (
    <PrivateRoute>
      <Routes>
        <Route index Component={Me} />
        <Route path="/me" Component={Me} />
      </Routes>
    </PrivateRoute>
  )
};

export default Profile;