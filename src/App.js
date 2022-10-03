
import React from "react";


import LandingPage from "./pages/LandingPage";

// const App = () => {
//   return ( 
//     <>
//     <LandingPage />
  
//   </>
//    );
// }
 

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Registeration from "./pages/Registeration/Registeration";

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
          </Routes>
     
      </>
    </Router>

  );
}

export default App;