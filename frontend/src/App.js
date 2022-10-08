import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Register from "./pages/Register";

import './app.scss'

const App = ()  => {
  return (
    <BrowserRouter>
      <div className="home">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={ <Register />}/>
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
