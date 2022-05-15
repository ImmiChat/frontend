import "./App.css";
import FormComponent from "./formStuff";
import Home from "./Home";
import Error from "./Error";
import React from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const context = React.useContext(AuthenticationContext);
  return (
    <Routes>
      <Route path="/" element={<FormComponent />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
