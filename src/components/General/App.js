import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "../Home/Home";
import Popular from "../Popular/Popular";
import Battle from "../Battle/Battle";
import Results from "../Battle/Results"
import NotFound from "./NotFound";


const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='popular' element={<Popular />}/>
          <Route path='battle' element={<Battle />}/>
          <Route path='battle/results' element={<Results />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
