import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login/index";
import { AuthProvider } from "./hooks/useAuth";
import { useEffect, useState } from "react";
import Profile from "./pages/Profile/index";
import Logout from "./pages/Logout/index";
import Home from "./pages/Home";

interface Props {}

function App(props: Props) {
  return (
    <div className="bg-[#4bc5a7] w-full h-full">
      <AuthProvider userData={null}>
        <Routes>
          <Route path="/login/*" Component={Login} />
          <Route path="/profile/*" Component={Profile} />
          <Route path="/logout" Component={Logout} />
          <Route path="/"  Component={Home} />
          {/* <Route path="/signup" component={Signup} />
                <Route path="/chat" component={Chat} />
                 */}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
