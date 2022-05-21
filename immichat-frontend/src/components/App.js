import "./App.css";
import FormComponent from "./formStuff";
import Error from "./Error";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
import Messages from "./Messages";
import Mission from "./LandingPage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mission />} />
      <Route path="/auth" element={<FormComponent />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
