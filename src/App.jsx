import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./component/Home";
import New from "./component/New";
import Main from "./component/Main";
import Anti from "./component/Anti";
import Newpage from "./component/Newpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home/>} />  */}
          {/*  <Route path="/" element={<New/>} /> */}
          {/* <Route path="/" element={<Anti/>} /> */}
          {/*    <Route path="/" element={<Main/>} />  */}
          {/*    <Route path="/" element={<Antivirus />} />  */}
          <Route path="/" element={<Newpage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
