import "./App.css";
import FormComponent from "./formStuff";
import Home from "./Home";
import ProfilePage from "./ProfilePage";
import Error from "./Error";
import HomePage from './HomePage';
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default App;
