import "./App.css";
import FormComponent from "./formStuff";
import Error from "./Error";
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
import Messages from "./Messages";
import Mission from "./LandingPage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import CardProfile from "./CardProfile";
import Notifications from "./Notifications";
import {ThemeProvider} from "styled-components"
import { lightTheme,darkTheme} from "./themes.js";

const StyledApp = styled.div;
function App() {
  const [theme,setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");

  }
  return (
    <ThemeProvider theme = {theme === light ? lightTheme : darkTheme}>
      <StyledApp> Hello World</StyledApp>
    <Routes>
      <Route path="/" element={<Mission />} />
      <Route path="/auth" element={<FormComponent />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profile/:id/edit" element={<ProfilePage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
