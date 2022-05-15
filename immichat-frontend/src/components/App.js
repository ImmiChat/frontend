import "./App.css";
import FormComponent from "./formStuff";
import Home from "./Home";
import Error from "./Error";
import React from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import ProtectedRoute from "./ProtectedRoute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
