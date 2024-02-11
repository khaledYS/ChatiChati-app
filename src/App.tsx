import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/index";
import { AuthProvider } from "./hooks/useAuth";
import Profile from "./pages/Profile/index";
import Logout from "./pages/Logout/index";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Toaster } from "./shadcn-ui-components/ui/toaster";

interface Props {}

function App(props: Props) {
  return (
    <div className=" theme-bg w-full h-full">
      <AuthProvider userData={null}>
        <Routes>
          <Route path="/login/*" Component={Login} />
          <Route path="/profile/*" Component={Profile} />
          <Route path="/logout" Component={Logout} />
          <Route path="/"  Component={Home} />
          <Route path="/signup" Component={Signup} />
                    {/*
                <Route path="/chat" component={Chat} />
                 */}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
