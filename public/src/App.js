import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Chat from "./pages/Chat"
import Home from "./pages/Home";
export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/register" element ={<Register/>} />
    <Route path="/login" element ={<Login/>} />
    <Route path="/chat" element ={<Chat/>} />
  </Routes>
    </BrowserRouter>;
}
