import "./App.css";
import FormComponent from "./formStuff";
import Error from "./Error";
import HomePage from "./HomePage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import EditProfile from "./ProfilePage";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<FormComponent />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profile/:id/edit" element={<EditProfile />}></Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
