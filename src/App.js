
import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registeration from "./pages/Registeration/Registeration";
import Login from "./pages/Login/Login";
import Reset_Password from "./pages/Reset_Password/Reset_Password";
import Reset_Password_Success from "./pages/Reset_Password/Reset_Password_Success";
import Dashboard from "./pages/Dashboard/Dashboard";
import Examination from "./pages/Examination/Examination";
const App = () => {

  return (
    // <div>
    //   <Home />
    // </div>

    <Router>

      <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/registeration" element={<Registeration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset_password" element={<Reset_Password />} />
            <Route path="/reset_password_success" element={<Reset_Password_Success />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/examination" element={<Examination />} />
          </Routes>
     
      </>
    </Router>

  );
}

export default App;