
import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registeration from "./pages/Registeration/Registeration";
import Login from "./pages/Login/Login";
import Reset_Password from "./pages/Reset_Password/Reset_Password";
import Reset_Password_Success from "./pages/Reset_Password/Reset_Password_Success";
import Dashboard from "./pages/Dashboard/Dashboard";
import Examination from "./pages/Examination/Examination";
import Page404 from "./pages/Page404/Page404";
import Navbar from "./components/Navbar/Navbar";
import { UserAuthContext } from "./context/UserAuthContext";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import { theUser } from "./context/UserAuthContext";
import { ContextProvider } from "./context/useStateContext";
import { getUser, GetUserContext } from "./context/getUsercontext";
import Result from "./pages/Examination/Result/Result";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// Add loader spinner from link below
// https://mhnpd.github.io/react-loader-spinner/docs/components/ball-traingle
const App = () => {
  const [val, setVal] = useState(theUser)
  const [user, setUser] = useState(getUser)
  return (
    <Router>
      <UserAuthContext.Provider value={{ val, setVal }}>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/registeration" element={<Registeration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset_password" element={<Reset_Password />} />
            <Route path="/reset_password_success" element={<Reset_Password_Success />} />
            <Route path="*" element={<Page404 />} />
          </Route>

          <Route path="/dashboard/:id" element={<GetUserContext.Provider value={{ user, setUser }}>
            <Dashboard />
          </GetUserContext.Provider>
          } >

          
          </Route>

          <Route path="examination/:id" element={<GetUserContext.Provider value={{ user, setUser }}>
            <ContextProvider>
              <Examination />
              </ContextProvider>
            </GetUserContext.Provider>
            } />
               <Route path="result" element={<GetUserContext.Provider value={{ user, setUser }}>
            <ContextProvider>
              <Result />
              </ContextProvider>
            </GetUserContext.Provider>
            } />
        </Routes>
      </UserAuthContext.Provider>

    </Router>

  );
}

export default App;