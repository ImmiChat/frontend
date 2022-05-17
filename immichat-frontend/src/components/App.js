import "./App.css";
import FormComponent from "./formStuff";
import Error from "./Error";
import HomePage from './HomePage';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from './ProfilePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/profile' element={<Profile />}/>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
