import React from "react";
import { Route, Routes } from "react-router-dom";
import Pages from "./component/pages";
import Secondary from "./component/secondary";
import Users from "./component/Data";
import Nested from "./component/nested";




const App = () => {

  return (
  <div>
    <Pages />
  
    <Routes>
      <Route path="/" element={<Users/>} >
        <Route path="nested" element={<Nested/>} />
      </Route>
      <Route path="*" element={<Secondary />} />
      
    </Routes>
    </div>
  );
}

export default App;
